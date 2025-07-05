"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, AuthSession, getCurrentSession, getCurrentUser, clearSession } from '@/lib/auth';

interface AuthContextType {
  user: User | null;
  isLoaded: boolean;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (userData: { email: string; password: string; firstName?: string; lastName?: string; username?: string }) => Promise<{ success: boolean; error?: string }>;
  signOut: () => void;
  session: AuthSession | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const currentSession = getCurrentSession();
        if (currentSession) {
          const currentUser = await getCurrentUser();
          if (currentUser) {
            setUser(currentUser);
            setSession(currentSession);
          } else {
            clearSession();
          }
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        clearSession();
      } finally {
        setIsLoaded(true);
      }
    };

    initializeAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { authenticateUser, generateToken, setSession } = await import('@/lib/auth');

      const user = await authenticateUser(email, password);
      if (!user) {
        return { success: false, error: 'Invalid email or password' };
      }

      const token = await generateToken(user);
      const newSession: AuthSession = { user, token };

      setSession(newSession);
      setUser(user);
      setSession(newSession);

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Sign in failed' };
    }
  };

  const signUp = async (userData: { email: string; password: string; firstName?: string; lastName?: string; username?: string }) => {
    try {
      const { createUser, generateToken, setSession } = await import('@/lib/auth');

      const newUser = await createUser({
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        username: userData.username,
        password: userData.password,
      });

      const token = await generateToken(newUser);
      const newSession: AuthSession = { user: newUser, token };

      setSession(newSession);
      setUser(newUser);
      setSession(newSession);

      return { success: true };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : 'Sign up failed' };
    }
  };

  const signOut = () => {
    clearSession();
    setUser(null);
    setSession(null);
  };

  const value: AuthContextType = {
    user,
    isLoaded,
    signIn,
    signUp,
    signOut,
    session,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 