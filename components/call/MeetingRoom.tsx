"use client";
import { useState } from "react";
import {
  CallParticipantsList,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
  ToggleAudioPublishingButton,
  ToggleVideoPublishingButton,
  ReactionsButton,
  ScreenShareButton,
  RecordCallConfirmationButton,
  CancelCallConfirmButton,
} from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { LayoutList } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Loader from "../ui/Loader";
// import EndCallButton from "./EndCallButton";
import ScreenRecorder from "./ScreenRecorder";
import { cn } from "@/lib/utils";

type CallLayoutType = "grid" | "bottom";

const MeetingRoom = () => {
  // const searchParams = useSearchParams();
  // const isPersonalRoom = !!searchParams.get("personal");
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>("bottom");
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();

  // for more detail about types of CallingState see: https://getstream.io/video/docs/react/ui-cookbook/ringing-call/#incoming-call-panel
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "bottom":
        return <SpeakerLayout participantsBarPosition="bottom" />;
      default:
        return <SpeakerLayout participantsBarPosition="bottom" />;
    }
  };

  return (
    <section
      dir="ltr"
      className="relative h-screen w-full overflow-hidden pt-4 text-white"
    >
      <div className="relative flex size-full items-start justify-center pt-0 pb-5 px-4">
        <div className="relative w-full h-full max-w-[1000px] aspect-video">
          <div className="absolute inset-0 w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
            <CallLayout />
          </div>
        </div>
        <div
          className={cn(
            "h-[calc(100vh-86px)] hidden ml-2 max-md:ml-0 max-md:mt-2 max-md:w-full",
            {
              "show-block": showParticipants,
            }
          )}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      {/* video layout and call controls */}
      <div className="fixed bottom-0 flex max-md:flex-col pb-2 max-md:pb-3 w-full items-center justify-center gap-3 max-md:gap-2 p-4 bg-gradient-to-t from-gray-900/90 via-gray-900/80 to-transparent">
        <div className="flex items-center justify-center gap-3 max-sm:flex-wrap">
          {/* <CallControls onLeave={() => router.push(`/`)} /> */}
          <ToggleAudioPublishingButton />
          <ToggleVideoPublishingButton />
          <ReactionsButton />
          <ScreenShareButton />
        </div>

        <div className="flex gap-3 items-center">
          <RecordCallConfirmationButton />
          <CancelCallConfirmButton onLeave={() => router.push(`/`)} />
          <ScreenRecorder className="" />
          <DropdownMenu>
            <div className="flex items-center">
              <DropdownMenuTrigger className="cursor-pointer rounded-2xl dark:bg-[#19232d] px-4 py-2 dark:hover:bg-[#4c535b]  ">
                <LayoutList size={20} className="text-white" />
              </DropdownMenuTrigger>
            </div>
            <DropdownMenuContent className="dark:border-[#1C1F2E] dark:bg-[#1C1F2E] dark:text-white ">
              {["Grid", "bottom"].map((item, index) => (
                <div key={index}>
                  <DropdownMenuItem
                    onClick={() =>
                      setLayout(item.toLowerCase() as CallLayoutType)
                    }
                    className="flex flex-row justify-center items-center"
                  >
                    {item === "Grid"
                      ? "گرید"
                      : item === "bottom"
                        ? "گوینده بالا"
                        : undefined}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="border-[#1C1F2E]" />
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <CallStatsButton /> */}
          {/* <button onClick={() => setShowParticipants((prev) => !prev)}> */}
          {/* <div className=" cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
              <Users size={20} className="text-white" />
            </div> */}
          {/* </button> */}
        </div>
      </div>
    </section>
  );
};

export default MeetingRoom;
