"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import MobileNav from "./MobileNav";
import { useAuth } from "@/providers/AuthProvider";
import GradientText from "./ui/GradientText";
import { Button } from "./ui/button";
import { LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UserProfilePhoto from "./UserProfilePhoto";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    toast.success("Successfully signed out!");
    router.push('/sign-in');
  };

  return (
    <nav className="flex justify-between fixed z-50 w-full bg-[#1C1F2E] px-4 py-1 lg:px-10">

      {/* LOGO ------------------------------------------------ */}
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="Daryab logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <GradientText
          colors={["#40ffaa", "#4079ff", "#00FFF2FF", "#40FF7CFF", "#9CFF40FF"]}
          animationSpeed={20}
          showBorder={false}
          className="text-[30px] font-extrabold max-sm:hidden"
        >
          دریاب
        </GradientText>
      </Link>
      {/* ------------------------------------------------------- */}

      {/* User Icon & Hamburger sheet --------------------------- */}
      <div className="flex flex-row justify-between gap-5">
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <UserProfilePhoto />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{user.firstName} {user.lastName}</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-2 text-red-600"
                onClick={handleSignOut}
              >
                <LogOut className="h-4 w-4" />
                <span>خروج</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        <MobileNav /> {/* sheet for small devices */}
      </div>
      {/* ------------------------------------------------------- */}

    </nav>
  );
};

export default Navbar;
