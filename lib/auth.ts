import { jwtVerify, SignJWT } from "jose";

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

// In-memory user store (in production, use a database)
let users: User[] = [];

// Load users from localStorage on client side
if (typeof window !== "undefined") {
  try {
    const storedUsers = localStorage.getItem("auth_users");
    if (storedUsers) {
      users = JSON.parse(storedUsers);
      console.log("Loaded users from localStorage:", users.length);
    }
  } catch (error) {
    console.error("Error loading users from localStorage:", error);
  }
}

// Save users to localStorage
const saveUsers = () => {
  if (typeof window !== "undefined") {
    localStorage.setItem("auth_users", JSON.stringify(users));
    console.log("Saved users to localStorage:", users.length);
  }
};

// Generate JWT token
export const generateToken = async (user: User): Promise<string> => {
  return await new SignJWT({ userId: user.id })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET);
};

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

// Get user by ID
export const getUserById = (id: string): User | undefined => {
  return users.find((user) => user.id === id);
};

// Get user by email
export const getUserByEmail = (email: string): User | undefined => {
  return users.find((user) => user.email === email);
};

// Create new user
export const createUser = async (
  userData: Omit<User, "id" | "createdAt"> & { password: string }
): Promise<User> => {
  const existingUser = getUserByEmail(userData.email);
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const newUser: User = {
    ...userData,
    id: crypto.randomUUID(),
    createdAt: new Date(),
    password: userData.password,
  };

  users.push(newUser);
  saveUsers();

  console.log("Created new user:", { email: newUser.email, id: newUser.id });

  return newUser;
};

// Authenticate user
export const authenticateUser = async (
  email: string,
  password: string
): Promise<User | null> => {
  console.log("Attempting to authenticate user:", email);
  console.log(
    "Available users:",
    users.map((u) => ({ email: u.email, id: u.id }))
  );

  const user = getUserByEmail(email);
  if (!user) {
    console.log("User not found:", email);
    return null;
  }

  console.log("User found, checking password...");

  // Check if password matches
  if (password === user.password) {
    console.log("Password matches, authentication successful");
    return user;
  }

  console.log("Password does not match");
  return null;
};

// Get current session from localStorage (client-side)
export const getCurrentSession = (): AuthSession | null => {
  if (typeof window === "undefined") return null;

  try {
    const session = localStorage.getItem("auth_session");
    return session ? JSON.parse(session) : null;
  } catch (error) {
    return null;
  }
};

// Set session in localStorage and cookies
export const setSession = (session: AuthSession) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("auth_session", JSON.stringify(session));
    // Also set a cookie for server-side access
    document.cookie = `auth_session=${JSON.stringify(session)}; path=/; max-age=${24 * 60 * 60}; SameSite=Lax`;
  }
};

// Clear session
export const clearSession = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth_session");
    document.cookie =
      "auth_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};

// Debug function to clear all users (for testing)
export const clearAllUsers = () => {
  if (typeof window !== "undefined") {
    users = [];
    localStorage.removeItem("auth_users");
    console.log("Cleared all users");
  }
};

// Debug function to get all users (for testing)
export const getAllUsers = () => {
  return users;
};

// Get current user (client-side)
export const getCurrentUser = async (): Promise<User | null> => {
  const session = getCurrentSession();
  if (!session) return null;

  const verified = await verifyToken(session.token);
  if (!verified) {
    clearSession();
    return null;
  }

  const user = getUserById(verified.userId);
  return user || null;
};
