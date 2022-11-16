import "./globals.css"

import { IBM_Plex_Sans } from "@next/font/google"
import MenuButton from "../components/layout/MenuButton"
import {
  ROUTE_ADD_EVENT,
  ROUTE_FULL,
  ROUTE_SMALL_OVERFLOW,
  ROUTE_SMALL_STANDARD,
} from "../lib/routes"

const font = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <head />
      <body>
        <h1 className="flex h-14 items-center justify-center px-10 text-3xl font-bold shadow-sm">
          Fancy calendars
        </h1>
        <main className="container mx-auto pt-4">
          <div className="mb-10 flex justify-between">
            <nav className="flex gap-4">
              <MenuButton href={ROUTE_SMALL_STANDARD}>
                Small standard calendar
              </MenuButton>
              <MenuButton href={ROUTE_SMALL_OVERFLOW}>
                Small overflow calendar
              </MenuButton>
              <MenuButton href={ROUTE_FULL}>Full calendar</MenuButton>
            </nav>
            <MenuButton href={ROUTE_ADD_EVENT}>Add event</MenuButton>
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
