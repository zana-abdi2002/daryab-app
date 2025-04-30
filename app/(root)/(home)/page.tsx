import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const date = new Intl.DateTimeFormat("fa-IR", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-7 text-white">
      <div
        className="h-[240px] max-md:h-[200px] w-full rounded-[20px] bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-background.png')" }}
      >
        <div className="flex h-full flex-col justify-between max-md:px-2 max-md:py-4 lg:p-5">
          <h2 className="glassmorphism max-w-fit rounded-[2px] px-2 py-1 mr-9 mt-2 text-center text-base font-normal">
            جلسه پیش رو در: 22:10
          </h2>
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
