import { HeroSection } from "@/components/sections/hero-section"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { DashboardMockup } from "@/components/ui/dashboard-mockup"
import {
  RotateCcw,
  FileCheck,
  Scale,
  ClipboardCheck,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Calendar,
  Building,
  Shield,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Backup Verification | BACKUP-MONITORING.ai",
  description: "Don't just backup — verify it works. Automated test restores and integrity checks.",
}

const howItWorks = [
  {
    title: "Automated test restores",
    description:
      "Where supported, we automatically perform test restores to verify your backups can actually be recovered.",
    icon: RotateCcw,
  },
  {
    title: "Integrity checks on backup files",
    description: "Validate that backup files are complete and uncorrupted with automated integrity verification.",
    icon: FileCheck,
  },
  {
    title: "Validation of size, duration, and content",
    description: "Compare backup metrics against expected values to catch anomalies and incomplete backups.",
    icon: Scale,
  },
  {
    title: "Logs and proof of successful verification",
    description: "Detailed logs document every verification test, providing audit-ready proof of backup integrity.",
    icon: ClipboardCheck,
  },
]

const benefits = [
  {
    title: "Confidence you can restore when disaster strikes",
    description: "Know your backups will work when you need them most. No more hoping — only certainty.",
    icon: ShieldCheck,
  },
  {
    title: "Evidence for internal audits and compliance",
    description: "Generate the documentation auditors need to verify your backup and recovery processes.",
    icon: FileText,
  },
  {
    title: "Early detection of corrupt or unusable backups",
    description: "Catch problems while you still have time to fix them, not during a disaster recovery scenario.",
    icon: AlertTriangle,
  },
]

const useCases = [
  {
    title: "Monthly proof-of-recovery reports",
    description:
      "Automatically generate and deliver monthly reports showing management that your backups are verified and recoverable.",
    icon: Calendar,
  },
  {
    title: "Compliance frameworks (ISO, SOC, etc.)",
    description:
      "Meet the documentation requirements of ISO 27001, SOC 2, and other compliance frameworks with automated verification records.",
    icon: Shield,
  },
  {
    title: "DR (Disaster Recovery) readiness",
    description: "Ensure your disaster recovery plan actually works by continuously validating backup recoverability.",
    icon: Building,
  },
]

export default function BackupVerificationPage() {
  return (
    <>
      <HeroSection
        title="Don't Just Backup — Verify It Works"
        description="A backup is useless if you can't restore it. Our backup verification engine automatically checks if your backups are complete, consistent, and recoverable."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "Learn More", href: "/features" }}
        image={<DashboardMockup variant="verification" />}
      />

      <section className="py-16 lg:py-24 bg-section-alt-2 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">How Verification Works</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our automated verification process ensures your backups are ready when you need them.
            </p>
          </div>

          {/* Process Flow - updated with modern minimal style */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            {[
              { step: "1", label: "Backup Completes" },
              { step: "2", label: "Verification Scheduled" },
              { step: "3", label: "Integrity Checked" },
              { step: "4", label: "Results Logged" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary rounded-xl border border-border flex items-center justify-center font-bold text-2xl text-primary-foreground shadow-md">
                    {item.step}
                  </div>
                  <span className="mt-2 font-semibold text-center">{item.label}</span>
                </div>
                {index < 3 && <div className="hidden md:block w-12 h-1 bg-border"></div>}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {howItWorks.map((item, index) => (
              <Card
                key={index}
                className="p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow bg-card"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Benefits</h2>
            <p className="mt-4 text-lg text-muted-foreground">Stop assuming your backups work. Know they do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt-2">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Use Cases</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real-world scenarios where backup verification makes the difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow bg-card"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Verify your backups are ready for recovery."
        description="Don't wait for a disaster to find out your backups don't work."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "Book a Demo", href: "/contact" }}
      />
    </>
  )
}
