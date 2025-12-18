import { HeroSection } from "@/components/sections/hero-section"
import { CTASection } from "@/components/sections/cta-section"
import { Button } from "@/components/ui/button"
import { Server, Cloud, Bell, MessageSquare } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Integrations | BACKUP-MONITORING.ai",
  description: "Works with your existing backup tools. Integrations for Veeam, Acronis, AWS, Azure, and more.",
}

const integrationCategories = [
  {
    title: "Backup Platforms",
    icon: Server,
    items: [
      { name: "Veeam Backup & Replication", status: "available" },
      { name: "Acronis Cyber Protect", status: "available" },
      { name: "Commvault", status: "available" },
      { name: "Veritas NetBackup", status: "available" },
      { name: "Nakivo", status: "available" },
      { name: "Altaro VM Backup", status: "coming" },
      { name: "Datto SIRIS", status: "coming" },
    ],
  },
  {
    title: "Cloud Providers",
    icon: Cloud,
    items: [
      { name: "Amazon Web Services (AWS)", status: "available" },
      { name: "Microsoft Azure", status: "available" },
      { name: "Google Cloud Platform", status: "available" },
      { name: "Wasabi", status: "available" },
      { name: "Backblaze B2", status: "coming" },
    ],
  },
  {
    title: "Notification Channels",
    icon: Bell,
    items: [
      { name: "Email (SMTP)", status: "available" },
      { name: "SMS (via Twilio)", status: "available" },
      { name: "Microsoft Teams", status: "available" },
      { name: "Slack", status: "available" },
      { name: "PagerDuty", status: "available" },
      { name: "Webhooks", status: "available" },
    ],
  },
]

export default function IntegrationsPage() {
  return (
    <>
      <HeroSection
        title="Works with Your Existing Backup Tools"
        description="BACKUP-MONITORING.ai doesn't replace your backup software — it makes it smarter and more visible."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "Request Integration", href: "/contact" }}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-12">
            {integrationCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`rounded-lg border p-4 flex items-center justify-between transition-colors ${
                        item.status === "available"
                          ? "bg-card border-border hover:border-primary/50"
                          : "bg-muted/50 border-border"
                      }`}
                    >
                      <span className={`font-medium ${item.status === "coming" ? "text-muted-foreground" : ""}`}>
                        {item.name}
                      </span>
                      {item.status === "available" ? (
                        <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold px-2 py-1 rounded-full">
                          LIVE
                        </span>
                      ) : (
                        <span className="bg-muted text-muted-foreground text-xs font-semibold px-2 py-1 rounded-full">
                          SOON
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <MessageSquare className="w-16 h-16 mx-auto mb-6 text-primary-foreground" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Don't See Your Tool?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              We're constantly adding new integrations. Reach out and tell us what you're using — we prioritize based on
              customer demand.
            </p>
            <Button asChild variant="secondary" size="lg" className="rounded-lg">
              <Link href="/contact">Request an Integration</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to connect your backup systems?"
        description="Start your free trial and see all your backups in one dashboard."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "Book a Demo", href: "/contact" }}
      />
    </>
  )
}
