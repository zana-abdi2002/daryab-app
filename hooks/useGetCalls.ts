import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useGetCalls = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const client = useStreamVideoClient(); // gets current stream client
  const { user } = useUser(); // gets current user

  const loadCalls = async () => {
    if (!client || !user?.id) return;

    setIsLoading(true);

    try {
      // get calls we want
      const { calls } = await client.queryCalls({
        sort: [{ field: "starts_at", direction: -1 }],
        filter_conditions: {
          // Only include calls that have a starts_at field (scheduled calls).
          starts_at: { $exists: true },

          // Include calls that match either of the following conditions:
          $or: [
            { created_by_user_id: user.id }, // Calls created by the current user
            { members: { $in: [user.id] } }, // Calls that the current user is a member of
          ],
        },
      });

      setCalls(calls);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCalls();
  }, [client, user?.id]);
  
  // Function to manually refetch calls
  const refetchCalls = async () => {
    await loadCalls();
  };

  const now = new Date(); // to determine endedCalls or upcoming ones

  const endedCalls = calls.filter(({ state: { startsAt, endedAt } }: Call) => {
    return (startsAt && new Date(startsAt) < now) || !!endedAt;
  });

  const upcomingCalls = calls.filter(({ state: { startsAt } }: Call) => {
    // returns true if the call's startsAt time is in the future
    return startsAt && new Date(startsAt) > now;
  });

  return {
    endedCalls,
    upcomingCalls,
    callRecordings: calls,
    isLoading,
    refetchCalls,
  };
};
