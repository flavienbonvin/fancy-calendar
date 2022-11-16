"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  href: string
  children: string
}

const MenuButton = ({ href, children }: Props) => {
  const path = usePathname()

  return (
    <Link
      href={href}
      className={clsx(
        "rounded-md border px-4 py-2",
        path === href && "bg-blue-500 text-white"
      )}>
      {children}
    </Link>
  )
}

export default MenuButton
