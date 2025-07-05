"use client";

import { tokenProvider } from "@/actions/stream.actions";
import Loader from "@/components/Loader";
import { useAuth } from "@/providers/AuthProvider";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

// const userId = "user-id";
// const token = "authentication-token";
// const user: User = { id: userId };

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setvideoClient] = useState<StreamVideoClient>();
  const [error, setError] = useState<string | null>(null);
  const { user, isLoaded } = useAuth();
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!apiKey) {
      setError("Stream API key missing");
      return;
    }

    try {
      // Ensure user ID is properly formatted for Stream
      const userId = user.id || `user_${Date.now()}`;
      const userName = user.username || user.firstName || user.lastName || `User_${userId.slice(0, 8)}`;

      console.log("Creating Stream client with user:", {
        id: userId,
        name: userName,
        email: user.email
      });

      const client = new StreamVideoClient({
        apiKey,
        user: {
          id: userId,
          name: userName,
          image: user.imageUrl || undefined,
        },
        tokenProvider,
      });

      setvideoClient(client);
      setError(null);
    } catch (err) {
      console.error("Error creating Stream client:", err);
      setError(err instanceof Error ? err.message : "Failed to create Stream client");
    }
  }, [user, isLoaded, apiKey]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-xl font-bold text-red-500 mb-2">Stream Error</h2>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!videoClient) return <Loader />;

  return (
    <StreamVideo client={videoClient}>
      {children}
    </StreamVideo>
  );
};

export default StreamVideoProvider;
