"use client"

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import { startOfToday } from "date-fns"
import { useState, useEffect } from "react"
import FullCalendar from "../../components/FullCalendar"
import { generateFakeEventsArray } from "../../lib/FakeEvent"
import Event from "../../types/Event"

export default function FullCal() {
  const today = startOfToday()

  const [selectedDay, setSelectedDay] = useState(today)
  const [events, setEvents] = useState<Event[] | undefined>(undefined)

  useEffect(() => {
    const newEvents = generateFakeEventsArray(10)
    setEvents(newEvents)
  }, [])

  return (
    <div className="flex w-full gap-20">
      <div className="w-full">
        <div className="mb-4 flex items-center gap-2 text-xl text-red-600">
          <ExclamationTriangleIcon className="h-6 w-6" />
          <span>This is not wokring at all, needs more work</span>
          <ExclamationTriangleIcon className="h-6 w-6" />
        </div>
        <FullCalendar
          events={events}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </div>
    </div>
  )
}
