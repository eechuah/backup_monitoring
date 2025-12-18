import { HeroSection } from "@/components/sections/hero-section"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Zap, LayoutDashboard, DollarSign, FileText, Building, Server, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SME Backup Monitoring | BACKUP-MONITORING.ai",
  description: "Enterprise-grade backup visibility without the complexity. Perfect for small and medium businesses.",
}

const benefits = [
  {
    title: "Easy setup, even without in-house IT experts",
    description: "Get started in minutes with our intuitive setup wizard. No specialized training required.",
    icon: Zap,
  },
  {
    title: "Clear dashboards and alerts — no technical jargon",
    description:
      "Understand your backup status at a glance. Plain language alerts tell you exactly what's wrong and what to do.",
    icon: LayoutDashboard,
  },
  {
    title: "Affordable pricing that scales as you grow",
    description: "Start small and add more backup sources as your business expands. No surprise costs.",
    icon: DollarSign,
  },
  {
    title: "Reports you can share with your boss or auditor",
    description: "Professional, easy-to-understand reports that prove your data is protected.",
    icon: FileText,
  },
]

const scenarios = [
  {
    title: "Single or multi-branch office servers",
    description: "Monitor backups across your main office and all branch locations from one central dashboard.",
    icon: Building,
  },
  {
    title: "File servers and basic applications",
    description: "Keep track of your essential file server, email, and business application backups.",
    icon: Server,
  },
  {
    title: "Managed by one IT person or external IT vendor",
    description:
      "Whether you have a single IT admin or use an outsourced provider, stay informed about your backup status.",
    icon: Users,
  },
]

export default function SMBBackupMonitoringPage() {
  return (
    <>
      <HeroSection
        title="Backup Monitoring for SMEs"
        description="Small and medium businesses rarely have a dedicated backup specialist. BACKUP-MONITORING.ai gives you enterprise-grade visibility without the complexity."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "See Pricing", href: "/pricing" }}
      />

      <section className="py-16 lg:py-24 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sound Familiar?</h2>
              <ul className="space-y-4">
                {[
                  "You're not sure if last night's backup actually ran",
                  "You find out about backup failures days or weeks later",
                  "Your IT vendor says backups are fine, but you have no proof",
                  "You worry about ransomware but can't verify your recovery options",
                  "Management asks about data protection and you struggle to answer",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-sm text-primary-foreground">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="bg-primary text-primary-foreground p-8 rounded-2xl border-none">
              <h3 className="text-2xl font-bold mb-4">The SME Challenge</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Large enterprises have dedicated backup teams and expensive monitoring tools. SMEs don't. But your data
                is just as critical to your business.
              </p>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                BACKUP-MONITORING.ai bridges this gap — giving you enterprise-level visibility at a price that makes
                sense for your business.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="Key Benefits for SMEs"
        description="Everything you need to protect your business data, nothing you don't."
        features={benefits}
        columns={2}
      />

      <section className="py-16 lg:py-24 bg-primary/5 border-t border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Typical Scenarios</h2>
            <p className="mt-4 text-lg text-muted-foreground">Common environments we help SMEs monitor and protect.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <Card
                key={index}
                className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <scenario.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{scenario.title}</h3>
                <p className="text-muted-foreground">{scenario.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Keep your business data safe with minimal effort."
        description="Start your 14-day free trial and see your backup status in minutes."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "Book a Demo", href: "/contact" }}
      />
    </>
  )
}
