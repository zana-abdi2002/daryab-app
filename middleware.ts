import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/auth-server";

// Protected routes that require authentication
const protectedRoutes = [
  "/",
  "/upcoming",
  "/previous",
  "/recordings",
  "/personal-room",
  "/meeting",
];

// Auth routes that should redirect to home if already authenticated
const authRoutes = ["/sign-in", "/sign-up"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  // Check if the route is an auth route
  const isAuthRoute = authRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  // Get the session token from cookies
  const sessionCookie = request.cookies.get("auth_session");
  let isAuthenticated = false;

  if (sessionCookie?.value) {
    try {
      const session = JSON.parse(sessionCookie.value);
      const verified = await verifyToken(session.token);
      isAuthenticated = !!verified;
    } catch (error) {
      // Invalid session, treat as not authenticated
      isAuthenticated = false;
    }
  }

  // If accessing a protected route without authentication
  if (isProtectedRoute && !isAuthenticated) {
    const signInUrl = new URL("/sign-in", request.url);
    signInUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(signInUrl);
  }

  // If accessing auth routes while already authenticated
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
