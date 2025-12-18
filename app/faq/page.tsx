"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { CTASection } from "@/components/sections/cta-section"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "What does BACKUP-MONITORING.ai actually do?",
    answer:
      "We monitor your existing backups and automatically verify that they are working and recoverable. We don't replace your backup software — we sit on top of it to give you visibility, alerts, and proof that your backups are actually working.",
  },
  {
    question: "Do I need to change my current backup solution?",
    answer:
      "No. We integrate with your existing backup tools and centralize the monitoring and verification. You keep using whatever backup software you're comfortable with — we just make it more visible and verifiable.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most customers get basic monitoring running within the same day, depending on the number of systems. Our setup wizard guides you through connecting your first backup sources in minutes. Full enterprise deployments with multiple sites typically take 1-2 weeks.",
  },
  {
    question: "How is pricing calculated?",
    answer:
      "Pricing is based on the number of backup sources (servers, VMs, etc.) you monitor. A backup source is any unique system that has backup jobs you want to track. Check our Pricing page for detailed tier breakdowns.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use encrypted connections (TLS 1.3), strict access controls, and industry best practices to protect your data and backup information. We're SOC 2 compliant and follow security-first principles in everything we build.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, there are no long-term contracts for our Starter and Growth plans. You can upgrade, downgrade, or cancel at any time. Enterprise plans may have custom terms based on your specific requirements.",
  },
  {
    question: "What backup platforms do you support?",
    answer:
      "We support major backup platforms including Veeam, Acronis, Commvault, Veritas, and Nakivo, as well as cloud providers like AWS, Azure, and Google Cloud. Check our Integrations page for the full list, and contact us if you don't see your tool — we're always adding new integrations.",
  },
  {
    question: "How do backup verification tests work?",
    answer:
      "Depending on your backup platform, we perform automated integrity checks, validate backup file sizes and completion times against expected values, and where supported, conduct automated test restores to verify recoverability. All verification results are logged and available in reports.",
  },
  {
    question: "Can multiple team members access the dashboard?",
    answer:
      "Yes. Our Growth and Enterprise plans include role-based access control, so you can give different team members appropriate access levels. You can set permissions by team, department, or location.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! All plans include a 14-day free trial with full functionality. No credit card required to start. Just sign up and connect your first backup sources.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        description="Get answers to common questions about BACKUP-MONITORING.ai, backup monitoring, and verification."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border transition-all overflow-hidden ${
                  openIndex === index
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <div className="border-t border-primary-foreground/20 pt-4">
                      <p className="text-primary-foreground/90 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/50 border-t border-border">
        <div className="mx-auto max-w-3xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is happy to help. Reach out and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resources">Browse Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to get started?"
        description="Start your 14-day free trial. No credit card required."
        primaryCta={{ text: "Start Free Trial", href: "/pricing" }}
        secondaryCta={{ text: "Book a Demo", href: "/contact" }}
      />
    </>
  )
}
