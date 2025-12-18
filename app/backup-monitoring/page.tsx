import { HeroSection } from "@/components/sections/hero-section"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { DashboardMockup } from "@/components/ui/dashboard-mockup"
import {
  Activity,
  AlertCircle,
  CheckCircle,
  XCircle,
  Filter,
  TrendingUp,
  Bell,
  Settings,
  Mail,
  MessageSquare,
  Smartphone,
  FileText,
  Download,
  BarChart,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Backup Monitoring | BACKUP-MONITORING.ai",
  description:
    "Centralized backup monitoring for all your systems. Live status, alerts, and reporting in one dashboard.",
}

const keyPoints = [
  {
    title: "Live status of all backup jobs",
    description: "Real-time visibility into every backup job across your entire infrastructure, updated continuously.",
    icon: Activity,
  },
  {
    title: "Failed / warning / successful breakdown",
    description: "Instantly see which backups succeeded, which have warnings, and which failed at a glance.",
    icon: CheckCircle,
  },
  {
    title: "Filters by server, location, system, or time",
    description: "Drill down into specific servers, locations, or time periods to find exactly what you need.",
    icon: Filter,
  },
  {
    title: "Historical trends to spot recurring issues",
    description: "Identify patterns and recurring problems before they become critical with trend analysis.",
    icon: TrendingUp,
  },
]

const alertingFeatures = [
  {
    title: "Instant alerts for failed or missed backups",
    description: "Get notified immediately when a backup fails or misses its scheduled window.",
    icon: AlertCircle,
  },
  {
    title: "Configurable thresholds",
    description: "Set custom rules like 'alert if failed 3 days in a row' or 'warn on low backup volume'.",
    icon: Settings,
  },
  {
    title: "Multiple notification channels",
    description: "Receive alerts via email, SMS, Teams, Slack, or other collaboration tools your team uses.",
    icon: Bell,
  },
]

const reportingFeatures = [
  {
    title: "Daily / weekly backup status summaries",
    description: "Automated reports delivered to your inbox showing overall backup health and issues.",
    icon: FileText,
  },
  {
    title: "Export to PDF/Excel for audits",
    description: "Generate professional reports in formats auditors and management expect.",
    icon: Download,
  },
  {
    title: "Clear visuals for management presentations",
    description: "Charts and dashboards that communicate backup status without technical jargon.",
    icon: BarChart,
  },
]

export default function BackupMonitoringPage() {
  return (
    <>
      <HeroSection
        title="Centralized Backup Monitoring for All Your Systems"
        description="Stop logging into multiple consoles. BACKUP-MONITORING.ai pulls backup status from all your environments into one simple dashboard."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "See All Features", href: "/features" }}
        image={<DashboardMockup variant="full" />}
      />

      <section className="py-16 lg:py-24 bg-section-alt-2">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Your Backup Dashboard</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about your backups in one place.
            </p>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
              <div className="w-3 h-3 bg-muted-foreground/30 rounded-full"></div>
              <div className="w-3 h-3 bg-muted-foreground/50 rounded-full"></div>
              <div className="w-3 h-3 bg-muted-foreground/70 rounded-full"></div>
              <span className="font-mono text-sm text-muted-foreground">backup-monitoring.ai/dashboard</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-800 p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-bold text-2xl">47</span>
                </div>
                <p className="font-semibold mt-1 text-green-700 dark:text-green-400">Successful</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950/30 rounded-xl border border-yellow-200 dark:border-yellow-800 p-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                  <span className="font-bold text-2xl">3</span>
                </div>
                <p className="font-semibold mt-1 text-yellow-700 dark:text-yellow-400">Warnings</p>
              </div>
              <div className="bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-800 p-4">
                <div className="flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <span className="font-bold text-2xl">2</span>
                </div>
                <p className="font-semibold mt-1 text-red-700 dark:text-red-400">Failed</p>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { name: "DB-PROD-01", status: "success", time: "02:34:12" },
                { name: "FILE-SVR-MAIN", status: "success", time: "01:45:33" },
                { name: "WEB-APP-01", status: "warning", time: "03:12:45" },
                { name: "MAIL-SERVER", status: "failed", time: "Failed at 45%" },
              ].map((job, i) => (
                <div key={i} className="bg-card rounded-lg border border-border p-3 flex items-center justify-between">
                  <span className="font-mono font-semibold">{job.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{job.time}</span>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        job.status === "success"
                          ? "bg-green-500"
                          : job.status === "warning"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="Key Monitoring Features"
        description="Everything you need to keep track of your backup jobs in one place."
        features={keyPoints}
        columns={2}
      />

      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Alerting That Actually Helps</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get notified the moment something goes wrong, through the channels you already use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alertingFeatures.map((feature, index) => (
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
                  <feature.icon className={`w-6 h-6 ${index === 1 ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={index === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {[
              { icon: Mail, label: "Email" },
              { icon: Smartphone, label: "SMS" },
              { icon: MessageSquare, label: "Teams" },
              { icon: MessageSquare, label: "Slack" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                <item.icon className="w-4 h-4 text-muted-foreground" />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt-2">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Reporting for IT & Management</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Generate the reports you need for internal reviews, management updates, and compliance audits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reportingFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow bg-card"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See all your backups in one dashboard."
        description="Start your 14-day free trial and connect your first backup system in minutes."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "Book a Demo", href: "/contact" }}
      />
    </>
  )
}
