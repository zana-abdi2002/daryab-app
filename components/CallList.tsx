"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import { CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import MeetingCard from "./MeetingCard";
import Loader from "./Loader";
import { toast } from "sonner";

interface MeetingState {
  startsAt?: Date | string;
  custom?: {
    description?: string;
  };
  [key: string]: unknown;
}

type Meeting = { [key: string]: unknown };

const CallList = ({ type }: { type: "ended" | "upcoming" | "recordings" }) => {
  const { endedCalls, upcomingCalls, callRecordings, isLoading, refetchCalls } =
    useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);
  const router = useRouter();

  const getCalls = (): Meeting[] => {
    switch (type) {
      case "ended":
        return endedCalls as unknown as Meeting[];
      case "recordings":
        return recordings as unknown as Meeting[];
      case "upcoming":
        return upcomingCalls as unknown as Meeting[];
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No Previous Calls";
      case "recordings":
        return "جلسه‌ای ضبط نشده";
      case "upcoming":
        return "جلسه‌ای وجود ندارد";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const callData = await Promise.all(
          callRecordings.map((meeting) => meeting.queryRecordings())
        );

        const recordings = callData
          .filter((call) => call.recordings.length > 0)
          .flatMap((call) => call.recordings);

        setRecordings(recordings);
      } catch {
        toast.error("درخواستهای بیش از حد، دوباره امتحان کنید");
      }
    };

    if (type === "recordings") fetchRecordings();
  }, [type, callRecordings]);

  const timeToPersian = (
    date: Date | string | undefined | null,
    type: "short" | "long"
  ): string | null => {
    if (!date) return null;

    try {
      const dateObj = date instanceof Date ? date : new Date(date);
      if (isNaN(dateObj.getTime())) return null;

      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      if (type === "long") {
        options.hour = "numeric";
        options.minute = "numeric";
      }

      return new Intl.DateTimeFormat("fa-IR", options).format(dateObj);
    } catch {
      return null;
    }
  };

  const uniqueId = () => `fallback-${Date.now()}-${Math.random()}`;

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting) => {
          const meetingId = (meeting as { id?: string }).id || "";
          const meetingUrl = (meeting as { url?: string }).url || "";
          const meetingState = (meeting as { state?: MeetingState }).state;
          const startTime = (meeting as { start_time?: Date | string })
            .start_time;

          return (
            <MeetingCard
              key={meetingId || uniqueId()}
              icon={
                type === "ended"
                  ? "/icons/previous.svg"
                  : type === "upcoming"
                    ? "/icons/upcoming.svg"
                    : "/icons/recordings.svg"
              }
              title={(() => {
                if (type === "recordings") {
                  const time = timeToPersian(startTime, "short");
                  return `ضبط شده در: ${time || ""}`;
                } else if (meetingState) {
                  if (type === "ended") {
                    return (
                      (
                        meetingState.custom as { description?: string }
                      )?.description?.substring(0, 26) || "نشست خصوصی"
                    );
                  } else if (type === "upcoming") {
                    const time = timeToPersian(meetingState.startsAt, "long");
                    return (
                      (
                        meetingState.custom as { description?: string }
                      )?.description?.substring(0, 26) ||
                      `نشست آینده در: ${time || ""}`
                    );
                  }
                }
                return "بدون توضیحات";
              })()}
              date={
                timeToPersian(
                  meetingState?.startsAt || startTime || null,
                  "long"
                ) || ""
              }
              isPreviousMeeting={type === "ended"}
              buttonIcon1={
                type === "recordings" ? "/icons/play.svg" : undefined
              }
              buttonText={type === "recordings" ? "پخش" : "شروع"}
              link={
                type === "recordings"
                  ? meetingUrl
                  : `${process.env.NEXT_PUBLIC_BASE_URL || ""}/meeting/${meetingId}`
              }
              handleClick={
                type === "recordings"
                  ? () => meetingUrl && router.push(meetingUrl)
                  : () => meetingId && router.push(`/meeting/${meetingId}`)
              }
              meeting={{
                ...meeting,
                // For recordings, use the recording ID or name as the ID
                id: (meeting as { id?: string }).id || 
                    (meeting as { name?: string }).name || 
                    (meeting as { session_id?: string }).session_id || 
                    "",
                // Add URL for recordings
                url: (meeting as { url?: string }).url || ""
              }}
              onDelete={refetchCalls}
            />
          );
        })
      ) : (
        <h1>{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;
