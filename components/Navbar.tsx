import Link from "next/link";
import Image from "next/image";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-[#1C1F2E] px-4 py-3 lg:px-10">
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

      <div className="justify-between gap-5">
        {/* User management */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
