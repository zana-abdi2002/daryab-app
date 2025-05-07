import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useGetCallByID = (id: string | string[]) => {
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(true);

  //  gets current client instance created in providers\StreamClientProvider.tsx
  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) return;

    const loadCall = async () => {
      // returns an object containing an array of calls
      const { calls } = await client.queryCalls({
        filter_conditions: {
          // return objects with specified conditions
          id,
        },
      });

      if (calls.length > 0) setCall(calls[0]);

      setIsCallLoading(false);
    };

    // because in use effect, async functions must be decleared first and then get called
    loadCall();
  }, [client, id]);

  return { call, isCallLoading };
};
