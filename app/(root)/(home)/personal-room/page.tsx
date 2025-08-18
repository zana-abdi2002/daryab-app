"use client";

import { Button } from "@/components/ui/button";
import { useGetCallByID } from "@/hooks/useGetCallByID";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

// ? Anki --------------------------------------------------

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-start gap-2 xl:flex-row">
    <h1 className="text-base font-medium text-[#0000ff] dark:text-[#0E78F9] lg:text-xl xl:min-w-32">
      {title}
    </h1>
    <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
      {description}
    </h1>
  </div>
);

const PersonalRoom = () => {
  const { user } = useUser(); // get user data from clerk
  const meetingId = user?.id; // stream meetingId is clerk user ID
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;
  const client = useStreamVideoClient(); // get current stream client
  const { call } = useGetCallByID(meetingId!); // from all calls of this client, get the personal one
  const router = useRouter();

  const startRoom = async () => {
    if (!client || !user) return;

    if (!call) {
      // create a new call object
      const newCall = client?.call("default", meetingId!);

      // updates the time of the call object to start now
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meeting/${meetingId}?personal=true`);
  };

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold ">صفحه شخصی</h1>

      <div className="flex w-full flex-col gap-8 xl:max-w-[900px] ">
        <Table title="نام کاربری" description={`${user?.username}`} />
        <Table title="آیدی اتاق" description={meetingId!} />
        <Table title="لینک دعوت" description={meetingLink} />
      </div>

      <div className="flex gap-5 ">
        <Button className="bg-[#0E78F9]" onClick={startRoom}>
          شروع جلسه
        </Button>
        <div className="relative group">
          <Button
            className="dark:bg-[#252A41] hover:bg-[#1a1e2d] dark:hover:bg-[#1a1e2d] transition-all duration-300 transform hover:scale-105 active:scale-95"
            onClick={() => {
              navigator.clipboard.writeText(meetingLink);
              toast.success("لینک با موفقیت کپی شد!");
            }}
          >
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-copy"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              کپی لینک
            </span>
          </Button>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            کپی لینک دعوت
          </span>
        </div>
      </div>
    </section>
  );
};

export default PersonalRoom;
