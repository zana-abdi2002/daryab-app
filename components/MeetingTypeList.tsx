"use client";

import Image from "next/image";
import HomeCard from "./HomeCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const router = useRouter();

  const [meetingState, setmeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  // const createMeeting = () => {};

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
      {/* <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setmeetingState(undefined)}
        title="یک جلسه فوری بسازید"
        className="text-center"
        buttonText="ساخت جلسه"
        handleClick={createMeeting}
      /> */}
    </section>
  );
};

export default MeetingTypeList;
