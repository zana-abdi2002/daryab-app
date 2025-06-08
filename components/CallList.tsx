

'use client'

import { useGetCalls } from '@/hooks/useGetCalls'
import { Call, CallRecording } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import MeetingCard from './MeetingCard';
import Loader from './Loader';
import { toast } from 'sonner';
// import shortid from 'shortid';

const CallList = ({ type }: { type: 'ended' | 'upcoming' | 'recordings' }) => {

  const { endedCalls, upcomingCalls, callRecordings, isLoading } = useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([])

  const router = useRouter() // anki

  const getCalls = () => {
    switch (type) {
      case 'ended':
        return endedCalls
      case 'recordings':
        return recordings
      case 'upcoming':
        return upcomingCalls
      default:
        return []
    }
  }

  const getNoCallsMessage = () => {
    switch (type) {
      case 'ended':
        return 'No Previous Calls'
      case 'recordings':
        return 'No Recordings'
      case 'upcoming':
        return 'No Upcoming Calls'
      default:
        return ''
    }
  }

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const callData = await Promise.all(
          // waits for stream database to collect 
          // all recordings of a meeting
          callRecordings.map(
            (meeting) => meeting.queryRecordings()
            // (meeting) => meeting.delete()
          )
        )

        // if length of a meeting recordingS is not 0
        // returns a flattend list of the recordings
        const recordings = callData.filter(call => call.recordings.length > 0)
          .flatMap(call => call.recordings)

        setRecordings(recordings)

      } catch {
        toast.error('درخواستهای بیش از حد، دوباره امتحان کنید')
      }
    }

    if (type === 'recordings') fetchRecordings()

  }, [type, callRecordings])

  // @ts-expect-error: the type checker is not aware of the dynamic type of the 'meeting' variable
  const timeToPersian = (start_time, type: 'short' | 'long') => {

    try {
      const start_time_obj = new Date(start_time)

      const persianDate = new Intl.DateTimeFormat('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: type === 'long' ? 'numeric' : undefined,
        minute: type === 'long' ? 'numeric' : undefined,
      }).format(start_time_obj);

      return persianDate

    } catch {
      return null
    }

  }

  const uniqueId = () => {
    return crypto.randomUUID()
  }

  const calls = getCalls()
  const noCallsMessage = getNoCallsMessage()

  if (isLoading) return <Loader />

  return (
    <div className='grid grid-cols-1 gap-5 xl:grid-cols-2 '>
      {calls && calls.length > 0 ? calls.map((meeting: Call | CallRecording) => (
        < MeetingCard
          key={(meeting as Call).id || uniqueId()} // shortid.generate()
          icon={
            type === 'ended'
              ? '/icons/previous.svg'
              : type === 'upcoming'
                ? '/icons/upcoming.svg'
                : '/icons/recordings.svg'
          }
          title={
            type == 'recordings'
              // meeting?.start_time?.toLocaleString()
              // @ts-expect-error: the type checker is not aware of the dynamic type of the 'meeting' variable
              ? ` ضبط شده در: ${timeToPersian(meeting?.start_time, 'short')}`
              : type === 'ended'
                ? (meeting as Call).state?.custom?.description?.substring(0, 26) || 'نشست خصوصی'
                : type === 'upcoming'
                  // @ts-expect-error: the type checker is not aware of the dynamic type of the 'meeting' variable
                  ? (meeting as Call).state?.custom?.description?.substring(0, 26) || `نشست آینده در: ${meeting?.start_time?.toLocaleString()}`
                  : 'بدون توضیحات'
          }
          // @ts-expect-error: the type checker is not aware of the dynamic type of the 'meeting' variable
          date={timeToPersian(meeting.state?.startsAt, 'long') || timeToPersian(meeting?.start_time, 'long')}
          isPreviousMeeting={type == 'ended'}
          buttonIcon1={type === 'recordings' ? '/icons/play.svg' : undefined}
          buttonText={type === 'recordings' ? 'پخش' : 'شروع'}
          link={
            // @ts-expect-error: the type checker is not aware of the dynamic type of the 'meeting' variable
            type === 'recordings' ? meeting.url : `${process.env.NEXT_PUBLICK_BASE_URL}/meeting/${meeting.id}`
          }
          // @ts-expect-error: the type checker is not aware of the dynamic type of the 'meeting' variable
          handleClick={type === 'recordings' ? () => router.push(`${meeting.url}`) : () => router.push(`/meeting/${meeting.id}`)}
        />
      )) : (
        <h1>{noCallsMessage}</h1>
      )}
    </div>
  )
}

export default CallList