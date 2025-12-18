import { HeroSection } from "@/components/sections/hero-section"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Eye, ClipboardCheck, Shield, Server, Users, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | BACKUP-MONITORING.ai",
  description: "We built BACKUP-MONITORING.ai to help IT teams sleep better at night with reliable backup monitoring.",
}

const values = [
  {
    title: "Clarity",
    description:
      "No vague statuses. Clear pass/fail and root cause analysis so you always know exactly what's happening with your backups.",
    icon: Eye,
  },
  {
    title: "Accountability",
    description:
      "Provide the reports you need to prove you did your job. Documentation that satisfies auditors and management.",
    icon: ClipboardCheck,
  },
  {
    title: "Security",
    description:
      "Treat your backup data with the highest care and protection. Encrypted connections and strict access controls.",
    icon: Shield,
  },
]

const stats = [
  { value: "500+", label: "Servers Monitored" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Monitoring" },
  { value: "5 min", label: "Average Setup Time" },
]

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About BACKUP-MONITORING.ai"
        description="We built BACKUP-MONITORING.ai because we kept seeing the same problem: companies assumed their backups were working — until they tried to restore."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "Contact Us", href: "/contact" }}
      />

      <section className="py-16 lg:py-24 bg-section-alt border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To help IT teams sleep better at night by making backup monitoring and verification simple, visible, and
                reliable.
              </p>
              <p className="text-lg text-muted-foreground">
                Too many organizations discover their backups aren't working during a crisis — exactly when they need
                them most. We're changing that by providing continuous monitoring, automated verification, and clear
                reporting that proves your backups are ready.
              </p>
            </div>
            <Card className="bg-primary text-primary-foreground p-8 rounded-2xl border-0 shadow-xl">
              <blockquote className="text-2xl font-bold leading-relaxed">
                "The best time to discover a backup problem is not during a disaster recovery."
              </blockquote>
              <p className="mt-4 font-semibold text-primary-foreground/80">— The BACKUP-MONITORING.ai Team</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-section-alt-2">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="mt-2 text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">What We Stand For</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our core values guide everything we build and how we support our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow ${
                  index === 1 ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    index === 1 ? "bg-primary-foreground/20" : "bg-primary/10"
                  }`}
                >
                  <value.icon className={`w-7 h-7 ${index === 1 ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                <p className={index === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt-2">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Who We Are</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team comes from backgrounds in system administration, managed services, and cybersecurity. We've
              managed hundreds of servers and know exactly how painful backup failures can be.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Server,
                title: "System Admins",
                subtitle: "10+ years experience",
                description:
                  "We've managed enterprise infrastructure and know the challenges of keeping systems running.",
              },
              {
                icon: Users,
                title: "MSP Veterans",
                subtitle: "Managed 100s of clients",
                description:
                  "Experience managing backups across hundreds of different client environments and systems.",
              },
              {
                icon: Award,
                title: "Security Focused",
                subtitle: "Certified professionals",
                description: "Cybersecurity expertise ensures your backup data and monitoring remain protected.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 rounded-xl border border-border shadow-sm bg-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.subtitle}</div>
                  </div>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to work with a team that understands backups?"
        description="Let's make sure your backups are actually working."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "Contact Us", href: "/contact" }}
      />
    </>
  )
}
