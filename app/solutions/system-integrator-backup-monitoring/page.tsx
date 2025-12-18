import { HeroSection } from "@/components/sections/hero-section"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Shield,
  CheckCircle,
  FileText,
  Layout,
  AlertCircle,
  Users,
  Eye,
  Sparkles,
  Bell,
  Database,
  Award,
  Handshake,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "System Integrator Solutions | BACKUP-MONITORING.ai",
  description:
    "Multi-tenant backup monitoring and verification platform built for MSPs and SIs. White-label reports, SLA tracking, and automated verification.",
}

const painPoints = [
  {
    problem: "Backups look 'green' but fail during restore",
    solution: "We run verification tests and keep evidence logs.",
    icon: AlertCircle,
  },
  {
    problem: "Monthly reporting is manual and inconsistent",
    solution: "We auto-generate client-ready SLA & compliance reports.",
    icon: FileText,
  },
  {
    problem: "You manage too many client consoles",
    solution: "Multi-tenant dashboard across all customers.",
    icon: Layout,
  },
]

const howItWorks = [
  {
    step: "1",
    title: "Onboard a client in minutes",
    description: "Add tenant → connect backup source → pick SLA template",
    icon: Users,
  },
  {
    step: "2",
    title: "Monitor + Verify automatically",
    description: "Failures, anomalies, and restore test results tracked continuously",
    icon: Eye,
  },
  {
    step: "3",
    title: "Prove it every month",
    description: "Auto-report + health score + SLA compliance (PDF/CSV)",
    icon: Award,
  },
]

const resellerFeatures = [
  {
    title: "Multi-tenant management",
    description: "Clients separated, roles & access controlled per tenant.",
    icon: Users,
  },
  {
    title: "White-label portal & reports",
    description: "Your logo, your domain, your brand on all client deliverables.",
    icon: Sparkles,
  },
  {
    title: "SLA templates",
    description: "Basic / Standard / Premium tiers ready to deploy.",
    icon: FileText,
  },
  {
    title: "Smart alerting",
    description: "Reduce noise, escalate properly, focus on what matters.",
    icon: Bell,
  },
  {
    title: "Evidence mode",
    description: "Timeline for incidents, prove due diligence for every client.",
    icon: Database,
  },
  {
    title: "Partner support",
    description: "Dedicated SI onboarding, technical resources, and sales enablement.",
    icon: Handshake,
  },
]

const faqs = [
  {
    question: "We already have Veeam/Acronis/Azure Backup — why do we need this?",
    answer:
      "Those tools report job status; we provide independent verification + proof. Think of us as quality assurance for your backup infrastructure, not a replacement.",
  },
  {
    question: "Will this add operational work?",
    answer:
      "It removes work: alert noise reduction + auto-reporting means less time chasing down backup issues and generating monthly client reports manually.",
  },
  {
    question: "Can clients see it?",
    answer:
      "Optional client portal with role-based access + white-labeling. You control what each client sees and how it's branded.",
  },
]

export default function SystemIntegratorPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Backup Assurance Your Clients Will Pay For"
        description="Monitor backups across all your clients and prove recoverability with automated verification, SLA reporting, and incident evidence — all in one multi-tenant platform."
        primaryCta={{ text: "Book SI Demo", href: "/contact" }}
        secondaryCta={{ text: "Become a Partner", href: "/contact" }}
      />

      {/* Trust Strip */}
      <section className="py-4 bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Multi-tenant</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>White-label reports</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Restore verification</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              <span>SLA-ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why SIs lose time and margin on backups</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((item, index) => (
              <Card
                key={index}
                className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{item.problem}</h3>
                <div className="flex items-start gap-2 mt-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{item.solution}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Use Case: Managed Backup Assurance for Your Clients
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Offer a packaged service where you don't just monitor backup jobs — you verify restores, track SLA
                compliance, and provide audit-ready proof monthly.
              </p>
              <div className="space-y-4">
                <h3 className="font-bold text-foreground">What the SI sells:</h3>
                <ul className="space-y-3">
                  {[
                    "Continuous backup monitoring + risk detection",
                    "Scheduled restore verification (weekly/daily)",
                    "Monthly executive report + incident evidence on demand",
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
            </div>
            <Card className="bg-card p-8 rounded-2xl border border-border shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-16 h-16 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground space-y-2">
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Monthly monitoring</span>
                  <span className="font-semibold text-foreground">✓ Included</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Restore verification</span>
                  <span className="font-semibold text-foreground">✓ Automated</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Client reporting</span>
                  <span className="font-semibold text-foreground">✓ White-labeled</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12 text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How your team delivers it in 3 steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 rounded-xl border border-border bg-card h-full hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </Card>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseller Features */}
      <FeatureGrid
        title="Built for MSP/SI operations"
        description="Everything you need to manage backup assurance across multiple clients."
        features={resellerFeatures}
        columns={3}
      />

      {/* Packaging & Pricing */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12 text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sell it as a service, not a tool</h2>
            <p className="text-muted-foreground">Complete backup assurance platform for system integrators</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 rounded-2xl border-2 border-primary bg-card shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold">
                  ALL-IN-ONE SOLUTION
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-3">Complete Backup Assurance</h3>
                <p className="text-muted-foreground">
                  Everything you need to monitor, verify, and report on backup health across all your clients
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-bold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                    Core Features
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Real-time backup monitoring",
                      "Multi-tenant dashboard",
                      "Smart alerts & escalation",
                      "Basic reporting",
                      "Email & chat support",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                    Advanced Features
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Automated restore verification",
                      "SLA compliance tracking",
                      "White-label portal & reports",
                      "Daily verification tests",
                      "Compliance documentation",
                      "Incident timeline & evidence",
                      "Priority support",
                      "Custom SLA templates",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border-t border-border pt-6 text-center">
                <p className="text-sm text-muted-foreground mb-6">Contact us for volume pricing and partner terms</p>
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground font-medium shadow-md">
                    Get SI Pricing Sheet
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
          {/* </CHANGE> */}
        </div>
      </section>

      {/* FAQ / Objection Killers */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Common Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-lg font-bold mb-3 text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to standardize backup assurance across all your clients?"
        description="Trial includes multi-tenant dashboard + verification + branded reporting."
        primaryCta={{ text: "Book SI Demo", href: "/contact" }}
        secondaryCta={{ text: "Start Partner Trial", href: "/contact" }}
      />
    </>
  )
}
