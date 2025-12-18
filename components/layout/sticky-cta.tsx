"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Zap } from "lucide-react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary border-t border-primary-foreground/20 shadow-lg transform transition-transform duration-300">
      <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-primary-foreground">
          <div className="hidden sm:flex items-center justify-center w-8 h-8 bg-primary-foreground/20 rounded-full">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold">Limited Time:</span>{" "}
            <span className="text-primary-foreground/90">Extended 30-day free trial (usually 14 days)</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/pricing">
            <Button
              size="sm"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shadow-sm"
            >
              Claim Your Free Trial
            </Button>
          </Link>
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
