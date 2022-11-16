import "./globals.css"

import { IBM_Plex_Sans } from "@next/font/google"

const font = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.variable}>
      <head />
      <body>
        <div className="flex h-10 items-center justify-center px-10 font-bold shadow-sm">
          Fancy calendars
        </div>
        <main className="container mx-auto pt-4">{children}</main>
      </body>
    </html>
  )
}
