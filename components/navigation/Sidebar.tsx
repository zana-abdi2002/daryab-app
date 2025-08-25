"use client";

import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <section className="sticky right-0 top-0 flex h-screen w-fit flex-col justify-between bg-[#09a6f3] border-l-2 dark:bg-[#1C1F2E] dark:border-none pr-1 pl-2 pt-28 text-white max-sm:hidden lg:w-[220px] lg:pr-4">
        <div className="flex flex-1 flex-col gap-6">
          {sidebarLinks.map((link) => {
            const isActive = // if user is in current sidebar logo page
              pathname === link.route || pathname.startsWith(`${link.route}/`);

            return (
              <Tooltip key={link.label}>
                <TooltipTrigger asChild>
                  <a
                    href={link.route}
                    className={cn(
                      "flex gap-4 items-center p-4 rounded-lg justify-start group",
                      {
                        "bg-[#0E78F9]": isActive,
                      }
                    )}
                  >
                    <div className="relative group-hover:scale-110 transition-transform duration-300 ease-in-out">
                      <Image
                        src={link.imgUrl}
                        alt={link.label}
                        width={26}
                        height={26}
                        className="group-hover:scale-125 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                    <p className="text-lg font-semibold max-lg:hidden group-hover:scale-105 group-hover:font-bold transition-all duration-300 ease-in-out">
                      {link.label}
                    </p>
                  </a>
                </TooltipTrigger>
                <TooltipContent 
                  side="right" 
                  sideOffset={15}
                  className="lg:hidden bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-base font-medium px-3 py-2 shadow-lg"
                >
                  <p className="font-medium">{link.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Sidebar;
