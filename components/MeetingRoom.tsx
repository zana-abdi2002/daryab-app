import { cn } from "@/lib/utils";
import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutList, Loader, Users } from "lucide-react";
import { useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right"; // define available layout instances

const MeetingRoom = () => {
  // if "personal" parameter is there, it is owner call instance --------------------
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  // ------------------------------------------------------------------------------

  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");

  const [showParticipants, setShowParticipants] = useState(false);

  // to have a <Loader /> when call state is not joined yet -----------------------------
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState(); // retrieves the current calling state
  if (callingState !== CallingState.JOINED) return <Loader />;
  // ------------------------------------------------------------------------------------

  // * This component renders call layout based on current value of `layout` state *****
  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };
  // **********************************************************************************

  return (
    <section className="relative size-full overflow-hidden text-white flex flex-col">
      {/* // Participants ---------------------------------------------------- */}
      <div className="relative flex w-full h-full items-center justify-center max-md:pt-20">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout /> {/* re-renders whenever layout is changed */}
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "show-block": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      {/* // ----------------------------------------------------------------- */}

      {/* // * footer controls ---------------------------------------------------- */}
      <div className=" bottom-0 flex w-full justify-center items-center gap-5 flex-wrap max-md:pb-3">
        <CallControls />

        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              <LayoutList size={20} className="text-white" />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className="border-[#1C1F2E] bg-[#1C1F2E] text-white">
            {["Grid", "Speaker-left", "Speaker-right"].map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => {
                    setLayout(item.toLowerCase() as CallLayoutType);
                  }}
                >
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="border-[#1C1F2E] " />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <CallStatsButton />

        <button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
            <Users size={20} className="text-white" />
          </div>
        </button>

        {!isPersonalRoom && <EndCallButton />}
      </div>
      {/* // * ---------------------------------------------------------------------- */}
    </section>
  );
};

export default MeetingRoom;
