import CallList from "@/components/CallList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "تماسهای تمام شده",
};

const Previous = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold ">جلسه‌های پایان یافته</h1>

      <CallList type='ended' />
    </section>
  );
};

export default Previous;
