"use client";

import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);

  const call = useCall();

  if (!call) {
    throw new Error("no call");
  }

  useEffect(() => {
    let cancelled = false;
    const setupMediaDevices = async () => {
      if (isMicCamToggledOn) {
        setIsLoading(true);
        try {
          // Request permissions first
          await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          });
          // Enable camera and microphone after permissions are granted
          await call.camera.enable();
          await call.microphone.enable();
          if (!cancelled) setIsCameraReady(true);
          toast.success("دوربین و میکروفون آماده هستند");
        } catch (error) {
          if (!cancelled) setIsCameraReady(false);
          toast.error("لطفا اجازه دسترسی به دوربین و میکروفون را تایید کنید.");
          setIsMicCamToggledOn(false);
        } finally {
          setIsLoading(false);
        }
      } else {
        // Disable camera and microphone
        try {
          await call.camera.disable();
          await call.microphone.disable();
        } catch (error) { }
        setIsCameraReady(false);
      }
    };
    setupMediaDevices();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMicCamToggledOn, call]);

  const handleJoinMeeting = async () => {
    try {
      setIsLoading(true);
      await call.join();
      setIsSetupComplete(true);
    } catch (error) {
      toast.error("خطا در پیوستن به جلسه");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">ساخت جلسه</h1>

      {/* Only show preview if camera is ready */}
      {isCameraReady && <VideoPreview />}

      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
            disabled={isLoading}
          />
          پیوستن با میکروفون و دوربین
        </label>
        <DeviceSettings />
      </div>

      <Button
        className="rounded-md bg-green-500 hover:bg-green-700 px-4 py-2.5"
        onClick={handleJoinMeeting}
        disabled={isLoading}
      >
        {isLoading ? "در حال پیوستن..." : "پیوستن"}
      </Button>
    </div>
  );
};

export default MeetingSetup;