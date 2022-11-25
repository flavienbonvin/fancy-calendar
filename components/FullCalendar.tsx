"use client"

import clsx from "clsx"
import {
  add,
  addDays,
  differenceInDays,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  lastDayOfWeek,
  parseISO,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns"
import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import Event from "../types/Event"

interface Props {
  selectedDay: Date
  setSelectedDay: (newDay: Date) => void
  events?: Event[]
}

const FullCalendar = ({ events, selectedDay, setSelectedDay }: Props) => {
  let tempEvents = events

  const today = startOfToday()
  const [selectedMonth, setSelectedMonth] = useState<Date>(startOfMonth(today))

  const addMonth = () => {
    const next = add(selectedMonth, { months: 1 })
    setSelectedMonth(next)
  }

  const removeMonth = () => {
    const previous = add(selectedMonth, { months: -1 })
    setSelectedMonth(previous)
  }

  const firstDay = startOfMonth(selectedMonth)
  const days: Date[] = eachDayOfInterval({
    start: startOfWeek(firstDay),
    end: endOfWeek(endOfMonth(selectedMonth)),
  })

  return (
    <div>
      <div className="border-b-400 flex justify-between border-b pb-2 text-gray-800">
        <p className="font-bold">{format(selectedMonth, "MMMM yyyy")}</p>
        <div className="flex gap-4">
          <button onClick={removeMonth}>
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button onClick={addMonth}>
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-7 pl-2 text-xs leading-6 text-gray-600">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wen</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
      <div className="gray mt-2 grid grid-cols-7 text-sm">
        {days.map((day, index) => (
          <div
            key={day.toISOString()}
            className={clsx(
              "relative mt-[-1px] ml-[-1px] min-h-[80px] border p-2",
              !isSameMonth(day, selectedMonth) &&
                "border-gray-100 text-gray-400"
            )}>
            <time
              dateTime={format(day, "yyyy-MM-dd")}
              className={clsx(
                "rounded-full",
                isToday(day) && "font-bold text-orange-400"
              )}>
              {format(day, "d")}
            </time>
            {tempEvents &&
              tempEvents.map((item) => {
                if (isSameDay(parseISO(item.startTime), day)) {
                  const start = parseISO(item.startTime)
                  const end = parseISO(item.endTime)
                  let diff = differenceInDays(end, start)

                  // new events needs to be created start of next week of overflow
                  const remainingDaysInWeek = differenceInDays(
                    endOfWeek(day),
                    day
                  )
                  if (diff > remainingDaysInWeek) {
                    const newStartTime = addDays(lastDayOfWeek(day), 1)
                    const event = Object.assign({}, item)
                    event.startTime = newStartTime.toISOString()
                    if (
                      !tempEvents?.some(
                        (item) => JSON.stringify(item) === JSON.stringify(event)
                      )
                    ) {
                      tempEvents?.push(event)
                    }
                    diff = diff - remainingDaysInWeek
                  }

                  return (
                    <div
                      className={clsx(
                        colWidthClasses[diff],
                        "absolute z-10 mb-1 truncate rounded bg-blue-500 px-2 text-white",
                        !isSameMonth(start, selectedMonth) && "bg-blue-200"
                      )}>
                      {item.title}
                    </div>
                  )
                }
              })}
          </div>
        ))}
      </div>
    </div>
  )
}

let colWidthClasses = [
  "w-[14%]",
  "w-[28%]",
  "w-[42%]",
  "w-[56%]",
  "w-[70%]",
  "w-[84%]",
  "w-[100%]",
]

export default FullCalendar
