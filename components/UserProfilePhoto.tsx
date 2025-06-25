"use client";

import React from 'react'
import { useUser } from "@clerk/nextjs";

const UserProfilePhoto = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) return null;

  return (
    <img
      src={user.imageUrl}
      alt={user.fullName || "User"}
      width={40}
      height={40}
      className="rounded-full"
    />
  );
}

export default UserProfilePhoto