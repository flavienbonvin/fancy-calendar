"use client"

import clsx from "clsx"
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns"
import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const FullCalendar = () => {
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
            className={clsx(
              "mt-[-1px] ml-[-1px] h-20 border p-2",
              !isSameMonth(day, selectedMonth) &&
                "border-gray-100 text-gray-400"
            )}
            key={index}>
            <time
              dateTime={format(day, "yyyy-MM-dd")}
              className={clsx(
                "rounded-full",
                isToday(day) && "font-bold text-orange-400"
              )}>
              {format(day, "d")}
            </time>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FullCalendar
