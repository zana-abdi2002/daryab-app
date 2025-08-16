"use client";

import { useState, useRef, useEffect } from "react";

// Extend the MediaTrackConstraints to include the properties we need
declare global {
  interface MediaTrackConstraintSet {
    displaySurface?: ConstrainDOMString;
    logicalSurface?: ConstrainBoolean;
    cursor?: ConstrainDOMString;
  }

  interface DisplayMediaStreamConstraints extends MediaStreamConstraints {
    video?:
      | boolean
      | (MediaTrackConstraints & {
          displaySurface?: ConstrainDOMString;
          logicalSurface?: ConstrainBoolean;
          cursor?: ConstrainDOMString;
        });
    audio?: boolean | MediaTrackConstraints;
    systemAudio?: "include" | "exclude" | "mute";
    surfaceSwitching?: "include" | "exclude";
    selfBrowserSurface?: "include" | "exclude";
    preferCurrentTab?: boolean;
  }
}
import { Circle, CircleStop, Save, Video } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface ScreenRecorderProps {
  className?: string;
  onRecordingComplete?: (blob: Blob) => void;
}

export default function ScreenRecorder({
  className,
  onRecordingComplete,
}: ScreenRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Handle recording timer
  useEffect(() => {
    if (isRecording) {
      startTimeRef.current = Date.now() - recordingTime * 1000;
      timerRef.current = setInterval(() => {
        setRecordingTime(
          Math.floor((Date.now() - startTimeRef.current) / 1000)
        );
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRecording]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [stream]);

  const startRecording = async () => {
    try {
      // Request screen capture with specific settings
      const displayStream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: "browser", // This will include browser chrome
          logicalSurface: true,
          cursor: "always",
        },
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100,
          suppressLocalAudioPlayback: false,
        },
        systemAudio: "include", // Try to include system audio
        surfaceSwitching: "include", // Allow switching between tabs/windows
        selfBrowserSurface: "include", // Allow capturing the current tab
        preferCurrentTab: true, // Pre-select the current tab
      } as DisplayMediaStreamConstraints);

      // Request microphone for system audio (if supported)
      let audioStream: MediaStream | null = null;
      try {
        audioStream = await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          },
        });
      } catch (err) {
        console.warn("Could not get microphone access:", err);
      }

      // Combine streams if we have both
      const combinedStream = new MediaStream([
        ...displayStream.getVideoTracks(),
        ...(audioStream ? audioStream.getAudioTracks() : []),
      ]);

      const recorder = new MediaRecorder(combinedStream, {
        mimeType: "video/webm;codecs=vp9,opus",
      });

      const chunks: Blob[] = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        setRecordedChunks([blob]);
        if (onRecordingComplete) {
          onRecordingComplete(blob);
        }

        // Stop all tracks
        combinedStream.getTracks().forEach((track) => track.stop());
        setStream(null);
      };

      recorder.start(1000); // Collect data every second
      setMediaRecorder(recorder);
      setStream(combinedStream);
      setIsRecording(true);
      setRecordingTime(0);
    } catch (err) {
      console.error("Error starting recording:", err);
      alert("نتوانستیم ضبط محلی را شروع کنیم. لطفا دوباره امتحان کنید.");
    }
  };

  const stopRecording = () => {
    // Stop the media recorder if it's active
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      setIsRecording(false);
    }

    // Stop all tracks in the stream
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
        track.enabled = false;
      });

      // Remove all tracks from the stream
      stream.getTracks().forEach((track) => stream.removeTrack(track));

      // Clear the stream reference
      setStream(null);
    }

    // Clear the media recorder reference
    setMediaRecorder(null);
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleSave = async () => {
    if (recordedChunks.length === 0) return;

    try {
      const blob = recordedChunks[0];
      const url = URL.createObjectURL(blob);

      // Create a temporary anchor element to trigger download
      const a = document.createElement("a");
      a.href = url;
      a.download = `meeting-recording-${new Date().toISOString().slice(0, 10)}.webm`;
      document.body.appendChild(a);
      a.click();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);

      setRecordedChunks([]);
    } catch (err) {
      console.error("Error saving recording:", err);
      alert("Failed to save recording.");
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        onClick={toggleRecording}
        variant={isRecording ? "destructive" : "outline"}
        className={cn(
          "flex items-center gap-2",
          isRecording ? "bg-red-600 hover:bg-red-700" : ""
        )}
      >
        {isRecording ? (
          <>
            <CircleStop className="h-4 w-4" />
            <span dir="rtl">قطع ضبط {formatTime(recordingTime)}</span>
          </>
        ) : (
          <>
            <Circle className="h-4 w-4" />
            <span>ضبط آفلاین</span>
          </>
        )}
      </Button>

      {recordedChunks.length > 0 && (
        <Button
          onClick={handleSave}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Save className="h-4 w-4" />
          <span>Save Recording</span>
        </Button>
      )}
    </div>
  );
}
