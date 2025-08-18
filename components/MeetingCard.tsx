"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { toast } from "sonner";
import UserProfilePhoto from "./UserProfilePhoto";
import { deleteCall } from "@/actions/stream.actions";
import { useRouter } from "next/navigation";

interface MeetingState {
  startsAt?: Date | string;
  custom?: {
    description?: string;
  };
}

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
  meeting: {
    id?: string;
    state?: MeetingState;
    start_time?: Date | string;
    url?: string;
    [key: string]: unknown;
  };
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
  meeting,
}: MeetingCardProps) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!('id' in meeting) || !meeting.id) return;
    
    try {
      setIsDeleting(true);
      const { success } = await deleteCall(meeting.id as string);
      if (success) {
        toast.success("جلسه با موفقیت حذف شد");
        router.refresh();
      }
    } catch (error) {
      console.error("Error deleting call:", error);
      toast.error("حذف جلسه با خطا مواجه شد");
    } finally {
      setIsDeleting(false);
    }
  };

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
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
            <div className="flex gap-2">
              <Button 
                onClick={handleClick} 
                className="rounded bg-[#0E78F9] px-6 min-w-[120px]"
                disabled={isDeleting}
              >
                {buttonIcon1 && (
                  <Image src={buttonIcon1} alt="feature" width={20} height={20} />
                )}
                &nbsp; {buttonText}
              </Button>
              <Button
                variant="destructive"
                onClick={handleDelete}
                disabled={isDeleting}
                className="min-w-[120px]"
              >
                {isDeleting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                    در حال حذف...
                  </div>
                ) : (
                  <>
                    <Image 
                      src="/icons/trash.svg" 
                      alt="delete" 
                      width={16} 
                      height={16} 
                      className="ml-1"
                    />
                    حذف
                  </>
                )}
              </Button>
            </div>
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
