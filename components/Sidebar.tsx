"use client";

import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky right-0 top-0 flex h-screen w-fit flex-col justify-between bg-[#1C1F2E] pr-1 pl-2 pt-28 text-white max-sm:hidden lg:w-[220px] lg:pr-4">
      <div className="flex flex- flex-col gap-6">
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
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  "bg-[#0E78F9]": isActive,
                }
              )}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
