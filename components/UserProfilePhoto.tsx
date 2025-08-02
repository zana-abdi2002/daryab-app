"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const UserProfilePhoto = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) return null;

  return (
    <Image
      src={user.imageUrl}
      alt={user.fullName || "User"}
      className="rounded-full object-cover block size-8"
    />
  );
};

export default UserProfilePhoto;
