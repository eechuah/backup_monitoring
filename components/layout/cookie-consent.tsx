"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-foreground">
            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By
            clicking "Accept", you consent to our use of cookies.{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={declineCookies} className="text-sm bg-transparent">
            Decline
          </Button>
          <Button size="sm" onClick={acceptCookies} className="text-sm">
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
