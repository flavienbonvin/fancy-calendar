import { ArrowUpCircleIcon } from "@heroicons/react/24/outline"

export default function Home(props: any) {
  return (
    <div className="flex w-full gap-20">
      <div className="flex items-center gap-2 text-xl text-gray-600">
        <span>Select one of the calendar type above</span>
        <ArrowUpCircleIcon className="h-6 w-6" />
      </div>
    </div>
  )
}
