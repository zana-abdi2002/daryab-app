"use server";

import { getCurrentUserFromCookies } from "@/lib/auth-server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  try {
    const user = await getCurrentUserFromCookies();

    if (!user) {
      console.error("No user found in cookies for Stream token generation");
      throw new Error("User is not logged in!");
    }

    if (!apiKey) {
      console.error("Stream API key missing");
      throw new Error("Stream API key missing");
    }

    if (!apiSecret) {
      console.error("Stream API secret missing");
      throw new Error("Stream API secret missing");
    }

    // Ensure user ID is properly formatted for Stream
    const userId = user.id || `user_${Date.now()}`;

    console.log("Generating Stream token for user:", {
      id: userId,
      email: user.email,
    });

    const client = new StreamClient(apiKey, apiSecret);

    const validity = 60 * 60; // 1 hour

    const token = client.generateUserToken({
      user_id: userId,
      validity_in_seconds: validity,
    });

    console.log("Stream token generated successfully for user:", userId);
    return token;
  } catch (error) {
    console.error("Error generating Stream token:", error);
    throw error;
  }
};
