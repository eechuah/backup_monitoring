"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertCircle, Mail } from "lucide-react"
import Link from "next/link"

export function BetaAnnouncement() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const betaDismissed = sessionStorage.getItem("beta-modal-dismissed")
    if (!betaDismissed) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setShowModal(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    sessionStorage.setItem("beta-modal-dismissed", "true")
    setShowModal(false)
  }

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <DialogTitle className="text-xl">Testing Phase</DialogTitle>
              <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-destructive/20 text-destructive rounded">
                DO NOT MAKE PAYMENTS
              </span>
            </div>
          </div>
          <DialogDescription className="text-base pt-2">
            Backup-Monitoring.ai is currently in testing phase. Please do not make any payments at this time.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
            <p className="text-sm font-semibold text-destructive mb-2">Important Notice:</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>The payment system is currently being tested</li>
              <li>Do not enter real payment information</li>
              <li>All features are available for testing only</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">Have questions or need more information?</p>
            <Link href="/contact">
              <Button className="w-full bg-transparent" variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </Link>
          </div>

          <Button onClick={handleClose} className="w-full">
            I Understand, Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
