"use client"

import { startOfToday } from "date-fns"
import { useEffect, useState } from "react"
import Calendar from "../../components/Calendar"
import { generateFakeEventsArray } from "../../lib/FakeEvent"
import Event from "../../types/Event"

export default function SmallCal() {
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
        <Calendar
          events={events}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </div>
    </div>
  )
}
