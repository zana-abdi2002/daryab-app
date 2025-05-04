import React, { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  buttonText?: string;
  handleClick?: () => void;
  image?: string;
  buttonIcon?: string;
  children?: ReactNode;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  buttonText,
  handleClick,
  image,
  buttonIcon,
  children,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-[#1C1F2E] px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          <DialogHeader>
            <DialogTitle>
              {image && (
                <div className="flex justify-center">
                  <Image src={image} alt="image" width={72} height={72} />
                </div>
              )}
              <p className={cn("text-3xl font-bold leading-[42px]", className)}>
                {title}
              </p>
            </DialogTitle>
          </DialogHeader>
          {children}

          <Button
            className="bg-[#0E78F9] focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-[#0e78f997] "
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={13}
                height={13}
              />
            )}
            &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
