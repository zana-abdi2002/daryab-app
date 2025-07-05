"use client";

import React from 'react'
import { useAuth } from "@/providers/AuthProvider";

const UserProfilePhoto = () => {
  const { user, isLoaded } = useAuth();

  if (!isLoaded || !user) return null;

  return (
    <img
      src={user.imageUrl || `/images/avatar-1.jpeg`}
      alt={user.firstName || user.username || "User"}
      width={40}
      height={40}
      className="rounded-full"
    />
  );
}

export default UserProfilePhoto