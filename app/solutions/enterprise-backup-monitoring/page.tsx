import { HeroSection } from "@/components/sections/hero-section"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Globe, CheckCircle, Users, FileText, Code, Shield, Building, Briefcase } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Enterprise Backup Monitoring | BACKUP-MONITORING.ai",
  description:
    "Enterprise-grade backup monitoring with proof of recoverability, audit trails, and multi-team access control.",
}

const capabilities = [
  {
    title: "Multi-site, multi-environment monitoring",
    description:
      "Monitor backups across data centers, branch offices, cloud environments, and hybrid infrastructures from a single platform.",
    icon: Globe,
  },
  {
    title: "Automated verification and test restores",
    description:
      "Go beyond 'backup completed' with automated integrity checks and test restores that prove recoverability.",
    icon: CheckCircle,
  },
  {
    title: "Role-based access and multi-team collaboration",
    description:
      "Define access permissions by team, department, or location. Give each group visibility into their relevant systems.",
    icon: Users,
  },
  {
    title: "Detailed, exportable logs for audits",
    description:
      "Comprehensive audit trails with timestamps, user actions, and verification results ready for compliance reviews.",
    icon: FileText,
  },
  {
    title: "API & integration options",
    description:
      "Connect with your existing ITSM, ticketing, and monitoring tools through our REST API and pre-built integrations.",
    icon: Code,
  },
  {
    title: "Enterprise-grade security",
    description: "SOC 2 compliance, encrypted connections, SSO support, and strict data handling policies.",
    icon: Shield,
  },
]

const useCases = [
  {
    title: "Compliance and governance requirements",
    description:
      "Meet ISO 27001, SOC 2, GDPR, and other regulatory requirements with automated documentation and proof of backup integrity.",
    icon: Shield,
  },
  {
    title: "Central IT monitoring for regional branches",
    description:
      "Maintain visibility across distributed infrastructure. HQ teams can monitor all locations while regional admins see their own systems.",
    icon: Building,
  },
  {
    title: "Managed service provider (MSP) scenarios",
    description:
      "White-label options and multi-tenant architecture for MSPs managing backup monitoring across multiple client environments.",
    icon: Briefcase,
  },
]

export default function EnterpriseBackupMonitoringPage() {
  return (
    <>
      <HeroSection
        title="Enterprise-Grade Backup Monitoring & Verification"
        description="Enterprises need more than 'backup completed' messages. They need proof of recoverability, audit trails, and multi-team access control."
        primaryCta={{ text: "Contact Sales", href: "/contact" }}
        secondaryCta={{ text: "See All Features", href: "/features" }}
      />

      <section className="py-16 lg:py-24 bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="bg-primary text-primary-foreground p-8 rounded-2xl border-none">
              <h3 className="text-2xl font-bold mb-4">Enterprise Requirements</h3>
              <ul className="space-y-4">
                {[
                  "Compliance documentation that satisfies auditors",
                  "Proof of recoverability, not just backup completion",
                  "Multi-team visibility with granular permissions",
                  "Integration with existing enterprise tools",
                  "SLA guarantees and dedicated support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-primary-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Enterprise Scale</h2>
              <p className="text-lg text-muted-foreground mb-4">
                When you're managing hundreds or thousands of backup sources across multiple locations and teams, you
                need a platform that scales with you.
              </p>
              <p className="text-lg text-muted-foreground">
                BACKUP-MONITORING.ai provides the visibility, control, and documentation that enterprise IT teams and
                compliance officers demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="Enterprise Capabilities"
        description="Advanced features designed for complex, regulated environments."
        features={capabilities}
        columns={3}
      />

      <section className="py-16 lg:py-24 bg-muted/50 border-t border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Use Cases</h2>
            <p className="mt-4 text-lg text-muted-foreground">How enterprise organizations use BACKUP-MONITORING.ai.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className={`p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow ${
                  index === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                    index === 0 ? "bg-primary-foreground/20" : "bg-primary/10"
                  }`}
                >
                  <useCase.icon className={`w-7 h-7 ${index === 0 ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                <p className={index === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  {useCase.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Enterprises Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: "99.9%", label: "Uptime SLA" },
              { stat: "24/7", label: "Support Available" },
              { stat: "SOC 2", label: "Compliant" },
              { stat: "API", label: "First Architecture" },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-primary text-primary-foreground p-6 text-center rounded-xl border-none shadow-md"
              >
                <div className="text-3xl font-bold">{item.stat}</div>
                <div className="text-sm font-semibold mt-1 text-primary-foreground/70">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss your environment with our team."
        description="Enterprise deployments require careful planning. Let's talk about your specific needs."
        primaryCta={{ text: "Contact Sales", href: "/contact" }}
        secondaryCta={{ text: "Book a Demo", href: "/contact" }}
      />
    </>
  )
}
