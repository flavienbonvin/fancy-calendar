import "./globals.css"

import { IBM_Plex_Sans } from "@next/font/google"
import NavigationMenu from "../components/layout/NavigationMenu"

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
        <div className="container mx-auto pt-4">
          <div className="mx-2 md:mx-10">
            <NavigationMenu />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
