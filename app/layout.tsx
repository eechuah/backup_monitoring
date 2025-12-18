import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { StickyCTA } from "@/components/layout/sticky-cta"
import { CookieConsent } from "@/components/layout/cookie-consent"
import { BetaAnnouncement } from "@/components/layout/beta-announcement"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
})

import { DM_Sans, Space_Mono, Source_Serif_4, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-serif",
})

export const metadata: Metadata = {
  title: "Backup-Monitoring.ai | Backup Monitoring & Verification You Can Trust",
  description:
    "Real-time backup monitoring, automated verification, and clear reports so you know your data is safe every single day.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable} ${sourceSerif4.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <CookieConsent />
        <BetaAnnouncement />
        <Analytics />
      </body>
    </html>
  )
}
