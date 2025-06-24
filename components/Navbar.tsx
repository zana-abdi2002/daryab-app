import Link from "next/link";
import Image from "next/image";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";
import GradientText from "./ui/GradientText";

const Navbar = () => {
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

      <div className="flex flex-row justify-between gap-5">
        <SignedIn>
          <UserButton
            appearance={{
              layout: { unsafe_disableDevelopmentModeWarnings: true },
            }}
          />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
