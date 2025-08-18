"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const UserProfilePhoto = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  if (!user) {
    return (
      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <span className="text-xs text-gray-500">?</span>
      </div>
    );
  }

  return (
    <Image
      src={user.imageUrl}
      alt={user.fullName || "User"}
      width={32}
      height={32}
      className="rounded-full object-cover w-8 h-8"
      unoptimized={user.imageUrl?.startsWith('http')}
    />
  );
};

export default UserProfilePhoto;
