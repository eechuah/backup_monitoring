import { HeroSection } from "@/components/sections/hero-section"
import { CTASection } from "@/components/sections/cta-section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pricing | BACKUP-MONITORING.ai",
  description: "Simple pricing based on active backup sources. No hidden fees, no surprise add-ons.",
}

const plans = [
  {
    name: "Starter",
    description: "Ideal for small teams.",
    price: "RM 299",
    period: "/ month",
    highlight: false,
    features: [
      { text: "Up to 10 backup sources", included: true },
      { text: "Core monitoring & alerts", included: true },
      { text: "Standard reports", included: true },
      { text: "Email support", included: true },
      { text: "Backup verification", included: false },
      { text: "Advanced reporting", included: false },
      { text: "Custom integrations", included: false },
    ],
    cta: { text: "Start Free Trial", href: "/contact" },
  },
  {
    name: "Growth",
    description: "For growing IT environments.",
    price: "RM 799",
    period: "/ month",
    highlight: true,
    features: [
      { text: "Up to 50 backup sources", included: true },
      { text: "Core monitoring & alerts", included: true },
      { text: "Backup verification", included: true },
      { text: "Advanced reporting", included: true },
      { text: "Email & chat support", included: true },
      { text: "Role-based access control", included: true },
      { text: "Custom integrations", included: false },
    ],
    cta: { text: "Start Free Trial", href: "/contact" },
  },
  {
    name: "Enterprise",
    description: "For large or regulated organisations.",
    price: "Custom",
    period: "",
    highlight: false,
    features: [
      { text: "50+ backup sources", included: true },
      { text: "Everything in Growth", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Priority support", included: true },
      { text: "SLA guarantees", included: true },
      { text: "On-premise deployment option", included: true },
    ],
    cta: { text: "Contact Sales", href: "/contact" },
  },
]

const faqs = [
  {
    q: "What counts as a backup source?",
    a: "A backup source is any server, VM, or system that you're monitoring backups for. Each unique system counts as one source.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes! All plans include a 14-day free trial. No credit card required to start.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, bank transfers, and can arrange invoicing for Enterprise customers.",
  },
]

export default function PricingPage() {
  return (
    <>
      <HeroSection
        title="Simple Pricing Based on Active Backup Sources"
        description="No hidden fees, no surprise add-ons. Pay only for the backup sources you actually monitor."
      />

      <section className="py-16 lg:py-24 bg-section-alt">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-6 rounded-2xl border shadow-sm hover:shadow-lg transition-all ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground border-primary md:-translate-y-4 shadow-lg"
                    : "bg-card border-border"
                }`}
              >
                {plan.highlight && (
                  <div className="bg-primary-foreground text-primary text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className={`mt-1 ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.highlight ? "bg-primary-foreground/20" : "bg-green-100 dark:bg-green-900"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${plan.highlight ? "text-primary-foreground" : "text-green-600"}`}
                          />
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-muted-foreground" />
                        </div>
                      )}
                      <span className={!feature.included ? "text-muted-foreground" : ""}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant={plan.highlight ? "secondary" : "default"} className="w-full rounded-lg">
                  <Link href={plan.cta.href}>{plan.cta.text}</Link>
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-card rounded-full px-6 py-3 border border-border">
              <p className="font-medium text-muted-foreground">
                All plans include a 14-day free trial. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-section-alt-2">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 rounded-xl border border-border shadow-sm bg-card">
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which plan is right for you?"
        description="Talk to our team and we'll help you find the perfect fit for your environment."
        primaryCta={{ text: "Book a Demo", href: "/contact" }}
        secondaryCta={{ text: "Contact Sales", href: "/contact" }}
      />
    </>
  )
}
