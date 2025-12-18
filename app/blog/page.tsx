import { HeroSection } from "@/components/sections/hero-section"
import { CTASection } from "@/components/sections/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | BACKUP-MONITORING.ai",
  description: "Insights on backup, disaster recovery, and IT operations for teams who want fewer surprises.",
}

const blogPosts = [
  {
    title: "Why 'Backup Completed' Is Not Enough Anymore",
    excerpt:
      "A backup completion message tells you the job ran, but not whether you can actually restore from it. Here's why verification matters.",
    date: "November 25, 2025",
    category: "Backup Strategy",
    featured: true,
    slug: "backup-completed-not-enough",
  },
  {
    title: "How to Explain Backup Risks to Non-Technical Management",
    excerpt: "Tips for communicating the importance of backup monitoring to executives who don't speak IT.",
    date: "November 18, 2025",
    category: "Communication",
    featured: true,
    slug: "explain-backup-risks-management",
  },
  {
    title: "The True Cost of a Failed Backup Recovery",
    excerpt: "We break down the financial, operational, and reputational costs when backups fail during a crisis.",
    date: "November 11, 2025",
    category: "Business Impact",
    featured: false,
    slug: "cost-failed-backup-recovery",
  },
  {
    title: "Building a Backup Monitoring Routine That Sticks",
    excerpt: "How to create sustainable backup monitoring habits that don't get forgotten when things get busy.",
    date: "November 4, 2025",
    category: "Best Practices",
    featured: false,
    slug: "backup-monitoring-routine",
  },
  {
    title: "Ransomware and Backups: What You Need to Know",
    excerpt: "Modern ransomware targets backups too. Here's how to protect your backup infrastructure.",
    date: "October 28, 2025",
    category: "Security",
    featured: false,
    slug: "ransomware-backup-protection",
  },
  {
    title: "Compliance Reporting for Backups: A Practical Guide",
    excerpt: "How to generate backup reports that satisfy ISO 27001, SOC 2, and other compliance requirements.",
    date: "October 21, 2025",
    category: "Compliance",
    featured: false,
    slug: "compliance-reporting-backups",
  },
]

export default function BlogPage() {
  return (
    <>
      <HeroSection
        title="Insights on Backup, DR & IT Operations"
        description="Practical tips on backup strategies, disaster recovery, monitoring, and real-world lessons from IT teams. We share what we've learned from managing hundreds of backup environments."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.featured)
                .map((post, index) => (
                  <Card
                    key={index}
                    className={`flex flex-col hover:shadow-lg transition-shadow ${index === 0 ? "bg-primary/5 border-primary/20" : ""}`}
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <Badge variant="secondary" className="w-fit mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="text-2xl font-semibold mb-3 text-foreground">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                        <Link href={`/blog/${post.slug}`} className="font-medium text-primary hover:underline">
                          Read More →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 text-foreground">All Articles</h2>
            <div className="space-y-4">
              {blogPosts
                .filter((p) => !p.featured)
                .map((post, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <span className="text-sm text-muted-foreground">{post.date}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-foreground">{post.title}</h3>
                          <p className="text-muted-foreground">{post.excerpt}</p>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="font-medium text-primary hover:underline whitespace-nowrap"
                        >
                          Read More →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Stay informed about backup best practices."
        description="Put these insights into practice with BACKUP-MONITORING.ai."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "Contact Us", href: "/contact" }}
      />
    </>
  )
}
