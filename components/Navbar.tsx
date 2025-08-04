"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";
import GradientText from "./ui/GradientText";
import { ModeToggle } from "./ui/ModeToggle";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav className="flex justify-between fixed z-50 w-full bg-[#09a6f3] border-b-2  dark:bg-[#1C1F2E] dark:border-none px-4 py-1 lg:px-10">
      {/* LOGO ------------------------------------------------ */}
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.png"
          alt="Daryab logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <GradientText
          colors={
            theme === "dark"
              ? ["#40ffaa", "#4079ff", "#00FFF2FF", "#40FF7CFF", "#9CFF40FF"]
              : ["#0000ff", "#001cff", "#0039ff", "#0055ff", "#0055ff"]
          }
          animationSpeed={20}
          showBorder={false}
          className="text-[30px] font-extrabold max-sm:hidden"
        >
          دریاب
        </GradientText>
      </Link>
      {/* ------------------------------------------------------- */}

      {/* User Icon & Hamburger sheet --------------------------- */}
      <div className="flex flex-row justify-between items-center gap-5">
        <ModeToggle />
        <SignedIn>
          <UserButton
            appearance={{
              layout: { unsafe_disableDevelopmentModeWarnings: true },
            }}
          />
        </SignedIn>
        <MobileNav /> {/* sheet for small devices */}
      </div>
      {/* ------------------------------------------------------- */}
    </nav>
  );
};

export default Navbar;
