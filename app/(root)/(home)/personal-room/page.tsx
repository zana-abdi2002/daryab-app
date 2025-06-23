'use client'

import { Button } from "@/components/ui/button";
import { useGetCallByID } from "@/hooks/useGetCallByID";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

// ? Anki --------------------------------------------------

const Table = ({ title, description }: { title: string; description: string }) => (
  <div className="flex flex-col items-start gap-2 xl:flex-row">
    <h1 className="text-base font-medium text-[#0E78F9] lg:text-xl xl:min-w-32">{title}</h1>
    <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">{description}</h1>
  </div>
)


const PersonalRoom = () => {
  const { user } = useUser() // get user data from clerk
  const meetingId = user?.id // stream meetingId is clerk user ID
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`
  const client = useStreamVideoClient() // get current stream client
  const { call } = useGetCallByID(meetingId!) // from all calls of this client, get the personal one
  const router = useRouter()

  const startRoom = async () => {
    if (!client || !user) return;


    if (!call) {
      // create a new call object
      const newCall = client?.call('default', meetingId!)

      // updates the time of the call object to start now
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meeting/${meetingId}?personal=true`)
  }

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
        <Button className="bg-[#252A41] " onClick={() => {
          navigator.clipboard.writeText(meetingLink);
          toast(
            "Link Copied",
          );
        }}>
          کپی لینک
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoom;
