"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
// import { avatarImages } from "@/constants";
import { toast } from "sonner";
import UserProfilePhoto from "./UserProfilePhoto";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  // const { toast } = useToast();

  return (
    <section className="flex w-full flex-col justify-between rounded-[14px] border-2 dark:bg-[#1C1F2E] dark:border-none px-5 py-8 xl:max-w-[568px]">
      <div className="flex flex-col gap-5">
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </div>
      <div className={cn("flex flex-row justify-between gap-4 pt-3")}>
        {!isPreviousMeeting && (
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 dark:border-[#252A41] bg-white dark:bg-[#1E2757] flex items-center justify-center">
                <UserProfilePhoto />
              </div>
            </div>
          </div>
        )}
        {!isPreviousMeeting && (
          <div className="flex gap-2 items-center justify-center">
            <Button onClick={handleClick} className="rounded bg-[#0E78F9] px-6">
              {buttonIcon1 && (
                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast("لینک کپی شد");
              }}
              className="bg-[#56A8FFFF] border-1 dark:bg-[#1E2757s]    dark:border-none px-6"
            >
              <Image
                src="/icons/copy.svg"
                alt="feature"
                width={20}
                height={20}
              />
              &nbsp; کپی از لینک
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MeetingCard;
