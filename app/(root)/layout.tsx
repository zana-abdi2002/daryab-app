import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Daryab",
  description: "video call easily",
  icons: {
    icon: "/icons/logo.png",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
