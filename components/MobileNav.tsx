"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full flex items-center">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="side panel navbar"
            className="cursor-pointer sm:hidden hover:opacity-80 transition-opacity duration-200"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="border-none bg-[#1C1F2E] max-w-[250px] overflow-y-auto"
        >
          <SheetHeader className="flex flex-row-reverse items-center px-2">
            <SheetTitle>
              <Link href="/" className="flex items-center gap-1">
                <Image
                  src="/icons/logo.png"
                  alt="Daryab logo"
                  width={32}
                  height={32}
                  className="max-sm:size-10"
                />
              </Link>
            </SheetTitle>
            <SheetDescription className="text-[18px] font-extrabold text-white ">
              <Link href="/">ارتباط آنلاین</Link>
            </SheetDescription>
          </SheetHeader>

          {/* Sheet Links ----------------------------------------------- */}
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-5 px-2 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    (pathname.startsWith(link.route) && link.route !== "/");

                  // console.log("pathname:" + pathname);
                  // console.log("link route:" + link.route);

                  return (
                    <a
                      href={link.route}
                      key={link.label}
                      className={cn(
                        "flex flex-row-reverse gap-4 items-center p-4 rounded-lg justify-between w-full group hover:bg-[#2a2f45] transition-colors duration-300",
                        {
                          "bg-[#0E78F9]": isActive,
                        }
                      )}
                    >
                      <div className="relative group-hover:scale-110 transition-transform duration-300 ease-in-out">
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={22}
                          height={22}
                          className="group-hover:scale-125 transition-transform duration-300 ease-in-out"
                        />
                      </div>
                      <p className="font-semibold group-hover:scale-105 group-hover:font-bold transition-all duration-300 ease-in-out">
                        {link.label}
                      </p>
                    </a>
                  );
                })}
              </section>
            </SheetClose>
          </div>
          {/* ------------------------------------------------------------ */}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
