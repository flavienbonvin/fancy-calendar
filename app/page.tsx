import { ArrowUpCircleIcon } from "@heroicons/react/24/outline"
import AddEvent from "../components/AddEvent"
import Calendar from "../components/Calendar"
import CalendarOverflow from "../components/CalendarOverflow"
import FullCalendar from "../components/FullCalendar"
import {
  ROUTE_ADD_EVENT,
  ROUTE_FULL,
  ROUTE_SMALL_OVERFLOW,
  ROUTE_SMALL_STANDARD,
} from "../lib/routes"

export default function Home(props: any) {
  const { type } = props.searchParams

  const renderItem = () => {
    switch (type) {
      case ROUTE_SMALL_STANDARD:
        return <Calendar />
      case ROUTE_SMALL_OVERFLOW:
        return <CalendarOverflow />
      case ROUTE_FULL:
        return <FullCalendar />
      case ROUTE_ADD_EVENT:
        return <AddEvent />
      default:
        return <p>Type not found!</p>
    }
  }

  return (
    <div className="flex w-full gap-20">
      <div className="flex items-center gap-2 text-xl text-gray-600">
        {type ? (
          renderItem()
        ) : (
          <>
            <span>Select one of the calendar type above</span>
            <ArrowUpCircleIcon className="h-6 w-6" />
          </>
        )}
      </div>
    </div>
  )
}
