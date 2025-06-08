import Link from "next/link";
import Image from "next/image";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-[#1C1F2E] px-4 py-2 lg:px-10">
      {/* LOGO ------------------------------------------------ */}
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="Daryab logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          دریاب
        </p>
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
