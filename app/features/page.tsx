import { HeroSection } from "@/components/sections/hero-section"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { DashboardMockup } from "@/components/ui/dashboard-mockup"
import { LayoutDashboard, Bell, CheckCircle, FileText, Users, Server, Lock, Zap } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features | BACKUP-MONITORING.ai",
  description: "All the features you need for backup monitoring and verification. None you don't.",
}

const features = [
  {
    title: "Unified Backup Dashboard",
    description:
      "View all backup jobs, systems, and locations in a single pane of glass. No more switching between multiple consoles or interfaces.",
    icon: LayoutDashboard,
    highlight: true,
  },
  {
    title: "Real-Time Monitoring & Alerts",
    description:
      "Instant notifications when backups fail, stall, or behave abnormally. Get alerts via email, SMS, or your favorite collaboration tools.",
    icon: Bell,
    highlight: false,
  },
  {
    title: "Automated Backup Verification",
    description:
      "Scheduled verification jobs to test the integrity and recoverability of backups. Know your backups work before you need them.",
    icon: CheckCircle,
    highlight: true,
  },
  {
    title: "Reports & Audit Trails",
    description:
      "Generate detailed reports for IT, management, or auditors in a few clicks. Export to PDF or Excel for compliance documentation.",
    icon: FileText,
    highlight: false,
  },
  {
    title: "Role-Based Access Control",
    description:
      "Limit who can view or manage backup data by role or team. Perfect for organizations with multiple departments or external partners.",
    icon: Users,
    highlight: false,
  },
  {
    title: "Multi-Environment Support",
    description:
      "Support for on-premise servers, virtual machines, and cloud workloads. Connect everything from one platform.",
    icon: Server,
    highlight: true,
  },
  {
    title: "Secure by Design",
    description:
      "Encrypted connections, strict access controls, and industry best practices baked in. Your backup data is protected.",
    icon: Lock,
    highlight: false,
  },
  {
    title: "Quick Setup",
    description:
      "Get started in minutes, not days. Simple configuration and intuitive interface means you're monitoring backups the same day.",
    icon: Zap,
    highlight: false,
  },
]

export default function FeaturesPage() {
  return (
    <>
      <HeroSection
        title="All the Features You Need. None You Don't."
        description="BACKUP-MONITORING.ai focuses on one job: making sure your backups are running, verified, and documented. Here's what you get."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "See Pricing", href: "/pricing" }}
        image={<DashboardMockup variant="mini" />}
      />

      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow ${
                  feature.highlight ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
                }`}
              >
                <div className="flex gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center ${
                      feature.highlight ? "bg-primary-foreground/20" : "bg-primary/10"
                    }`}
                  >
                    <feature.icon
                      className={`w-7 h-7 ${feature.highlight ? "text-primary-foreground" : "text-primary"}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className={feature.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt-2">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <DashboardMockup variant="full" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">Built for IT Professionals</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We designed every feature with real IT workflows in mind. No fluff, no complexity — just the tools you
                need to keep your backups healthy.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Intuitive interface for quick navigation",
                  "Keyboard shortcuts for power users",
                  "API access for automation",
                  "Customizable dashboards per team",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What Makes Us Different</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We focus on what matters most: knowing your backups actually work.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-border bg-card rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary border-b border-border">
                  <th className="p-4 text-left font-bold border-r border-primary-foreground/20 text-primary-foreground">
                    Feature
                  </th>
                  <th className="p-4 text-center font-bold border-r border-primary-foreground/20 text-primary-foreground">
                    BACKUP-MONITORING.ai
                  </th>
                  <th className="p-4 text-center font-bold text-primary-foreground">Manual Monitoring</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Centralized Dashboard", us: true, them: false },
                  { feature: "Automated Alerts", us: true, them: false },
                  { feature: "Backup Verification", us: true, them: false },
                  { feature: "Audit-Ready Reports", us: true, them: false },
                  { feature: "Multi-Platform Support", us: true, them: "Limited" },
                  { feature: "Setup Time", us: "Minutes", them: "Hours/Days" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="p-4 font-semibold border-r border-border">{row.feature}</td>
                    <td className="p-4 text-center border-r border-border">
                      {row.us === true ? (
                        <span className="inline-block w-6 h-6 bg-green-500 rounded-full"></span>
                      ) : (
                        <span className="font-semibold text-primary">{row.us}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.them === false ? (
                        <span className="inline-block w-6 h-6 bg-red-500 rounded-full"></span>
                      ) : (
                        <span className="font-semibold text-muted-foreground">{row.them}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to see these features in action?"
        description="Start your 14-day free trial. No credit card required."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "Book a Demo", href: "/contact" }}
      />
    </>
  )
}
