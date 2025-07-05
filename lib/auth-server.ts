import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export interface User {
  id: string;
  email: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  createdAt: Date;
  password: string;
}

export interface AuthSession {
  user: User;
  token: string;
}

// Secret key for JWT (in production, use environment variable)
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-here"
);

// Verify JWT token
export const verifyToken = async (
  token: string
): Promise<{ userId: string } | null> => {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as { userId: string };
  } catch (error) {
    return null;
  }
};

// Get current session from cookies (server-side)
export const getCurrentSessionFromCookies =
  async (): Promise<AuthSession | null> => {
    try {
      const cookieStore = await cookies();
      const sessionCookie = cookieStore.get("auth_session");
      if (!sessionCookie?.value) return null;

      return JSON.parse(sessionCookie.value);
    } catch (error) {
      return null;
    }
  };

// Get current user from cookies (server-side)
export const getCurrentUserFromCookies = async (): Promise<User | null> => {
  const session = await getCurrentSessionFromCookies();
  if (!session) return null;

  const verified = await verifyToken(session.token);
  if (!verified) {
    return null;
  }

  // For server-side, we'll just return the user from the session
  // since we can't access localStorage on the server
  return session.user || null;
};
