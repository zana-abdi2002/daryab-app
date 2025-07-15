'use client'

import Loader from "@/components/Loader";
import MeetingTypeList from "@/components/MeetingTypeList";
import { useGetCalls } from "@/hooks/useGetCalls";
import { Call } from "@stream-io/video-react-sdk";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Silk from "@/components/ui/Silk";
import { useTheme } from "next-themes";

const Home = () => {
  const [now, setNow] = useState(new Date());
  const { upcomingCalls, isLoading } = useGetCalls();
  const { theme } = useTheme()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 5000); // update every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const date = new Intl.DateTimeFormat("fa-IR", { dateStyle: "full" }).format(now);

  const closeUpcomingCall = (upcomingCalls: Call[]) => {
    try {
      console.log(upcomingCalls[0]);
      const upcomingDate = upcomingCalls[0].state.startsAt;
      let type: string = '';
      if (upcomingDate === now) type = 'today';

      const formattedUpcomingDate = new Intl.DateTimeFormat("fa-IR", {
        day: type === 'today' ? undefined : "numeric",
        month: type === 'today' ? undefined : "long",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(upcomingDate);

      return formattedUpcomingDate;
    } catch {
      return null;
    }
  };

  if (isLoading) return <Loader />;

  return (
    <section className="flex size-full flex-col gap-7 text-white">
      <div
        className="relative h-[240px] max-md:h-[200px] w-full rounded-[20px] bg-cover bg-no-repeat overflow-hidden"
      >
        {/* Background wrapper */}
        <div
          style={{
            position: 'absolute',
            inset: 0, // shorthand for top:0; right:0; bottom:0; left:0;
            zIndex: 0,
            pointerEvents: 'none', // so it doesn't block clicks
          }}
        >
          <Silk
            speed={4}
            scale={0.8}
            color={"#56A8FFFF"}
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        {/* Content above background */}
        <div className="relative z-10 flex h-full flex-col justify-between max-md:px-2 max-md:py-4 lg:p-5">
          {upcomingCalls?.length > 0 ? (
            <h2 className="glassmorphism max-w-fit rounded-[2px] px-2 py-1 mr-9 mt-2 text-center text-base font-normal">
              <Link href={'/upcoming'}>
                جلسه پیش رو در: {closeUpcomingCall(upcomingCalls)}
              </Link>
            </h2>
          ) : (
            <h2 className="glassmorphism max-w-fit rounded-[2px] px-2 py-1 mr-9 mt-2 text-center text-base font-normal">
              جلسه ای برنامه ریزی نشده
            </h2>
          )}
          <div className="flex flex-col gap-2 pr-4 pb-2 ">
            <h1 className="text-4xl font-extrabold lg:text-7xl text-shadow-lg">
              {time}
            </h1>
            <p className="text-lg font-medium text-[#C9DDFF] text-shadow-lg lg:text-2xl">
              {date.split(" ").reverse().join(" ").replace(",", "")}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
