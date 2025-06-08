"use client";

// import Image from "next/image";
import HomeCard from "./HomeCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { toast } from "sonner";
import { Textarea } from "./ui/textarea";
import ReactDatePicker from "react-datepicker";
import { Input } from "./ui/input";

const MeetingTypeList = () => {
  const router = useRouter();

  const [meetingState, setmeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  const { user } = useUser(); // get user info from clerk
  const client = useStreamVideoClient(); // get stream video client instance
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();

  const createMeeting = async () => {
    if (!client || !user) return; // Checks if a client and user are present

    try {
      if (!values.dateTime) {
        toast.error("لطفا یک تاریخ انتخاب کنید.");
        return;
      }

      const id = crypto.randomUUID(); // creates random ID

      // creates a call using stream video client instance and unique user id
      const call = client.call("default", id);
      if (!call) throw new Error("Failed to create call"); // raises error if client fails

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();

      const description = values.description || "instant meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }

      toast.success("تماس ساخته شد");
    } catch (error) {
      console.log(error);
    }
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`

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
        color="bg-[#830EF9]"
      />
      <HomeCard
        imgSrc="/icons/add-meeting.svg"
        title="پیوستن به جلسه"
        description="با لینک دعوت"
        handleClick={() => setmeetingState("isJoiningMeeting")}
        color="bg-[#F9A90E]"
      />

      {!callDetails ? (<MeetingModal
        isOpen={meetingState === "isScheduleMeeting"}
        onClose={() => setmeetingState(undefined)}
        title="برنامه ریزی یک جلسه"
        buttonText="ساخت جلسه"
        className="text-center"
        handleClick={createMeeting}
      >
        <div className="flex flex-col gap-2.5">
          <label className="text-base text-normal leading-[22px] text-sky-100 ">
            توضیحات
          </label>
          <Textarea className="border-non bg-[#161925] focus-visible:ring-0 focus-visible:ring-offset-0" onChange={(e) => {
            setValues({ ...values, description: e.target.value })
          }} />
        </div>
        <div className="flex w-full flex-col gap-2.5">
          <label className="text-base text-normal leading-[22px] text-sky-100 ">
            یک تاریخ انتخاب کنید
          </label>
          <ReactDatePicker
            selected={values.dateTime}
            onChange={(date) => setValues({ ...values, dateTime: date! })}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat={"yyyy MMMM d h:mm aa"}
            className="w-full rounded bg-[#161925] p-2 focus:outline-none"
          />
        </div>
      </MeetingModal>) : (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          onClose={() => setmeetingState(undefined)}
          title="برنامه ریزی یک جلسه"
          className="text-center"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast.success('لینک کپی شد')
          }}
          image="/icons/checked.svg"
          buttonIcon="/icons/copy.svg"
          buttonText="لینک جلسه را کپی کن"
        />
      )}

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setmeetingState(undefined)}
        title="یک جلسه فوری بسازید"
        className="text-center"
        buttonText="ساخت جلسه"
        handleClick={createMeeting}
      />

      <MeetingModal
        isOpen={meetingState === "isJoiningMeeting"}
        onClose={() => setmeetingState(undefined)}
        title="لینک را قرار دهید"
        className="text-center"
        buttonText="پیوستن به جلسه"
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder="لینک جلسه"
          className="border-none bg-[#252A41] focus-visible:ring-0 focus-visible:ring-offset-0"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
        />

      </MeetingModal>
    </section>
  );
};

export default MeetingTypeList;
