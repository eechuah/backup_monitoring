import { HeroSection } from "@/components/sections/hero-section"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTASection } from "@/components/sections/cta-section"
import { SocialProof } from "@/components/sections/social-proof"
import { Card } from "@/components/ui/card"
import { DashboardMockup } from "@/components/ui/dashboard-mockup"
import {
  AlertTriangle,
  Shield,
  Clock,
  LayoutDashboard,
  Server,
  CheckCircle,
  Bell,
  FileText,
  Users,
  Building,
  Building2,
} from "lucide-react"

const whyItMatters = [
  {
    title: "Detect failed or incomplete backups early",
    description:
      "Get instant alerts when backups fail, stall, or miss their schedule so you can fix issues before they become disasters.",
    icon: AlertTriangle,
  },
  {
    title: "Prove recovery readiness to management & auditors",
    description:
      "Generate detailed reports showing backup status, verification results, and recovery capabilities on demand.",
    icon: Shield,
  },
  {
    title: "Reduce downtime and data loss risk",
    description: "Catch backup problems early and verify recoverability so you're always ready when disaster strikes.",
    icon: Clock,
  },
  {
    title: "Central dashboard for all backup jobs",
    description:
      "View all your backup jobs across multiple systems, locations, and platforms in one unified interface.",
    icon: LayoutDashboard,
  },
]

const whatWeDo = [
  {
    title: "Monitor backup jobs across platforms",
    description:
      "Connect to multiple backup systems and locations. Get a unified view of all your backup operations in real-time.",
    icon: Server,
  },
  {
    title: "Automatically test and verify backup integrity",
    description:
      "Scheduled verification jobs test that your backups are complete, consistent, and actually recoverable.",
    icon: CheckCircle,
  },
  {
    title: "Alert you when something breaks",
    description: "Instant notifications via email, SMS, or chat (Teams/Slack) when backups fail or behave abnormally.",
    icon: Bell,
  },
  {
    title: "Management-ready reports and audit trails",
    description:
      "Generate professional reports and detailed logs for IT reviews, management presentations, and compliance audits.",
    icon: FileText,
  },
]

const whoWeHelp = [
  {
    title: "SMEs without full-time backup specialists",
    description:
      "Get enterprise-grade backup visibility without the complexity. Perfect for businesses with limited IT resources.",
    icon: Users,
  },
  {
    title: "IT teams managing multiple servers or branches",
    description: "Centralize monitoring across all your environments. No more logging into multiple consoles.",
    icon: Building,
  },
  {
    title: "Enterprises needing compliance-ready documentation",
    description:
      "Automated verification and detailed audit trails that satisfy even the strictest compliance requirements.",
    icon: Building2,
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Backup Monitoring & Verification You Can Actually Trust"
        description="Stop guessing whether your backups are working. Backup-Monitoring.ai gives you real-time backup monitoring, automated verification, and clear reports so you know your data is safe every single day."
        primaryCta={{ text: "Start Free Trial — No Card Required", href: "/pricing" }}
        secondaryCta={{ text: "Book a Demo", href: "/contact" }}
        image={<DashboardMockup variant="full" />}
        showBenefits={true}
        showTrustBadges={true}
      />

      <div className="bg-section-alt">
        <SocialProof />
      </div>

      <FeatureGrid
        title="Why It Matters"
        description="Backups are your last line of defense. But how do you know they're actually working?"
        features={whyItMatters}
        columns={2}
      />

      <section className="py-16 lg:py-24 bg-section-alt-2">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-balance">See Everything at a Glance</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                No more digging through logs or checking multiple systems. Get a complete overview of your backup health
                in seconds.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Real-time status updates",
                  "Color-coded job health indicators",
                  "Historical trend analysis",
                  "One-click drill-down to details",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <DashboardMockup variant="full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">What We Do</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We make backup monitoring and verification simple, visible, and reliable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDo.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Who We Help</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From small businesses to large enterprises, we help IT teams sleep better at night.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whoWeHelp.map((item, index) => (
              <Card
                key={index}
                className={`p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow ${
                  index === 1 ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    index === 1 ? "bg-primary-foreground/20" : "bg-primary/10"
                  }`}
                >
                  <item.icon className={`w-6 h-6 ${index === 1 ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className={index === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start monitoring your backups in minutes."
        description="Join 500+ IT teams who trust Backup-Monitoring.ai to protect their data."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "Book a Demo", href: "/contact" }}
        urgencyText="Limited Time: Extended 30-day trial"
        showTrustBadges={true}
      />
    </>
  )
}
