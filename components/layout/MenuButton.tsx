"use client"

import clsx from "clsx"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface Props {
  href: string
  children: string
}

const MenuButton = ({ href, children }: Props) => {
  const searchParams = useSearchParams()
  const type = searchParams.get("type")

  return (
    <Link
      href={href}
      className={clsx(
        "flex h-12 items-center rounded-md border px-4 py-2",
        type && href.includes(type) && "border-blue-600 bg-blue-600 text-white"
      )}>
      {children}
    </Link>
  )
}

export default MenuButton
