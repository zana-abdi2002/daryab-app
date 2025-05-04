"use client";

import Image from "next/image";
import HomeCard from "./HomeCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
// import { useUser } from "@clerk/nextjs";
// import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
// import { toast } from "sonner";

const MeetingTypeList = () => {
  const router = useRouter();

  const [meetingState, setmeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  const createMeeting = () => {};

  // const { user } = useUser(); // get user info from clerk
  // const client = useStreamVideoClient(); // get stream video client instance
  // const [values, setValues] = useState({
  //   dateTime: new Date(),
  //   description: "",
  //   link: "",
  // });
  // const [callDetails, setCallDetails] = useState<Call>();

  // const createMeeting = async () => {
  //   if (!client || !user) return; // Checks if a client and user are present

  //   try {
  //     if (!values.dateTime) {
  //       toast.error("لطفا یک تاریخ انتخاب کنید.");
  //       return;
  //     }

  //     const id = crypto.randomUUID(); // creates random ID

  //     // creates a call using stream video client instance and unique user id
  //     const call = client.call("default", id);
  //     if (!call) throw new Error("Failed to create call"); // raises error if client fails

  //     const startsAt =
  //       values.dateTime.toISOString() || new Date(Date.now()).toISOString();

  //     const description = values.description || "instant meeting";

  //     await call.getOrCreate({
  //       data: {
  //         starts_at: startsAt,
  //         custom: {
  //           description,
  //         },
  //       },
  //     });

  //     setCallDetails(call);

  //     if (!values.description) {
  //       router.push(`/meeting/${call.id}`);
  //     }

  //     toast.success("تماس ساخته شد");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-5 md:gap-4">
      <HomeCard
        imgSrc="/icons/add-meeting.svg"
        title="جلسه جدید"
        description="یک جلسه جدید بساز"
        handleClick={() => setmeetingState("isInstantMeeting")}
        color="bg-[#FF742E]"
      />
      <HomeCard
        imgSrc="/icons/Schedule.svg"
        title="برنامه جدید"
        description="جلسه خود را برنامه ریزی کنید"
        handleClick={() => setmeetingState("isScheduleMeeting")}
        color="bg-[#0E78F9]"
      />
      <HomeCard
        imgSrc="/icons/recordings.svg"
        title="ضبط شده‌ها"
        description="ویدیوها را مشاهده کنید"
        handleClick={() => router.push("/recordings")}
        color="bg-[#830EF9;
]"
      />
      <HomeCard
        imgSrc="/icons/add-meeting.svg"
        title="پیوستن به جلسه"
        description="با لینک دعوت"
        handleClick={() => setmeetingState("isJoiningMeeting")}
        color="bg-[#F9A90E]"
      />
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setmeetingState(undefined)}
        title="یک جلسه فوری بسازید"
        className="text-center"
        buttonText="ساخت جلسه"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
