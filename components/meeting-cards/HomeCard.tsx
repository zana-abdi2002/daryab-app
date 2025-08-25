import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
  color: string;
  imgSrc: string;
  title: string;
  description: string;
  handleClick: () => void;
}

const HomeCard = ({
  color,
  imgSrc,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={cn(
        "px-4 py-6 max-md:py-3 flex flex-col justify-between w-full xl:max-w-[270px] md:min-h-[200px] rounded-[14px] cursor-pointer max-md:gap-4",
        "transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg",
        color
      )}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center glassmorphism size-12 max-lg:size-10 max-md:size-9 sm rounded-[10px]">
        <Image
          src={`${imgSrc}`}
          alt={`${title} icon`}
          width={20}
          height={20}
          className="max-md:w-4 max-lg:h-4"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <h1 className="text-3xl max-lg:text-2xl font-bold">{title}</h1>
        <p className="text-base max-lg:text-sm font-normal text-[#ffffffc9]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
