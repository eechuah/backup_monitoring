import { HeroSection } from "@/components/sections/hero-section"
import { CTASection } from "@/components/sections/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, CheckSquare, BookOpen, Video, Download } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources | BACKUP-MONITORING.ai",
  description: "Backup monitoring guides, checklists, and best practices for IT teams.",
}

const resources = [
  {
    title: "SME Backup Health Checklist",
    description: "A comprehensive checklist to evaluate your current backup strategy and identify gaps.",
    type: "PDF Checklist",
    icon: CheckSquare,
    featured: true,
  },
  {
    title: "How to Prove to Management That Your Backups Work",
    description:
      "A guide to creating reports and documentation that demonstrate backup reliability to non-technical stakeholders.",
    type: "Guide",
    icon: FileText,
    featured: true,
  },
  {
    title: "5 Common Backup Mistakes & How to Avoid Them",
    description: "Learn from the most frequent backup errors we see and how to prevent them in your environment.",
    type: "Guide",
    icon: BookOpen,
    featured: false,
  },
  {
    title: "Disaster Recovery Planning Template",
    description: "A ready-to-use template for documenting your DR plan and recovery procedures.",
    type: "Template",
    icon: FileText,
    featured: false,
  },
  {
    title: "Backup Verification Best Practices",
    description: "How to implement a backup verification strategy that proves recoverability.",
    type: "Guide",
    icon: BookOpen,
    featured: false,
  },
  {
    title: "Getting Started with BACKUP-MONITORING.ai",
    description: "A step-by-step video walkthrough of setting up your first backup monitoring dashboard.",
    type: "Video",
    icon: Video,
    featured: false,
  },
  {
    title: "Compliance Documentation Guide",
    description: "How to use backup monitoring reports for ISO 27001, SOC 2, and other compliance frameworks.",
    type: "Guide",
    icon: FileText,
    featured: false,
  },
  {
    title: "Sample Backup Policy Document",
    description: "A template backup policy document you can customize for your organization.",
    type: "Template",
    icon: FileText,
    featured: false,
  },
]

export default function ResourcesPage() {
  return (
    <>
      <HeroSection
        title="Backup Monitoring Guides & Resources"
        description="Learn best practices for backup strategy, monitoring, and verification. Free resources for IT teams who want fewer surprises."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources
                .filter((r) => r.featured)
                .map((resource, index) => (
                  <Card key={index} className="bg-primary/5 border-primary/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <resource.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                            {resource.type}
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-foreground">{resource.title}</h3>
                          <p className="text-muted-foreground mb-4">{resource.description}</p>
                          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                            <Download className="w-4 h-4" />
                            Download Free
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 text-foreground">All Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources
                .filter((r) => !r.featured)
                .map((resource, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                          <resource.icon className="w-5 h-5 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                            {resource.type}
                          </div>
                          <h3 className="text-lg font-semibold mb-2 text-foreground">{resource.title}</h3>
                          <p className="text-muted-foreground text-sm mb-3">{resource.description}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-2 p-0 h-auto hover:bg-transparent hover:text-primary"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to see these best practices in action?"
        description="Start your free trial and experience proper backup monitoring firsthand."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "Book a Demo", href: "/contact" }}
      />
    </>
  )
}
