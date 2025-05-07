"use client";

import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import { console } from "inspector";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(true);

  const call = useCall();

  if (!call) {
    throw new Error("no call");
  }

  const askPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setIsMicCamToggledOn(true);
    } catch (error) {
      toast.error("لطفا اجازه دسترسی به دوربین و میکروفون را تایید کنید.");
      // setIsMicCamToggledOn(false);
    }
  };

  useEffect(() => {
    if (isMicCamToggledOn) {
      (async () => {
        try {
          await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          });
          toast.success("دوربین و میکروفون آماده هستند");
          // setIsMicCamToggledOn(true)
        } catch (error) {
          toast.error(
            "لطفا اجازه دسترسی به دوربین و میکروفون را تایید کنید. راهنما"
          );
          // setIsMicCamToggledOn(false);
        }
      })();
      call?.camera.enable();
      call?.microphone.enable();
    } else {
      call?.camera.disable();
      call?.microphone.disable();
      // toast.error("لطفا اجازه دسترسی به میکروفون و دوربین را فعال کنید.");
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">ساخت جلسه</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            // checked={isMicCamToggledOn}
            defaultChecked={false}
            // onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
            onChange={(e) => setIsMicCamToggledOn(!e.target.checked)}
          />
          پیوستن بدون میکروفون و دوربین
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => {
          call.join();

          setIsSetupComplete(true);
        }}
      >
        پیوستن
      </Button>
    </div>
  );
};

export default MeetingSetup;
