"use client"

import clsx from "clsx"
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns"
import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const CalendarOverflow = () => {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
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
    <div className="max-w-xs md:max-w-sm">
      <div className="border-b-400 flex justify-between border-b pb-2 text-gray-800">
        <p className="font-bold">{format(selectedMonth, "MMMM yyyy")}</p>
        <div className="flex gap-4">
          <button onClick={removeMonth}>
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button onClick={addMonth}>
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-600">
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-4 text-sm">
        {days.map((day, index) => (
          <button
            key={day.toISOString()}
            className={clsx(
              "mx-auto flex h-8 w-8 items-center justify-center rounded-full",
              isToday(day) && "text-orange-500",
              isSameDay(day, selectedDay) && "bg-sky-600 font-bold text-white",
              !isSameMonth(day, selectedMonth) && "text-gray-400",
              index === 0 && colStartClasses[getDay(day)]
            )}
            onClick={() => {
              setSelectedDay(day)
            }}>
            <time dateTime={format(day, "yyyy-MM-dd")}>{format(day, "d")}</time>
          </button>
        ))}
      </div>
    </div>
  )
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
]

export default CalendarOverflow
