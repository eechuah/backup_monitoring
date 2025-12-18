import { BrutalistButton } from "@/components/ui/brutalist-button"
import { TrustBadges } from "@/components/sections/trust-badges"
import { CheckCircle, ArrowRight } from "lucide-react"

interface CTASectionProps {
  title: string
  description?: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  showTrustBadges?: boolean
  urgencyText?: string
}

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  showTrustBadges = true,
  urgencyText,
}: CTASectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-center shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-foreground rounded-full translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative">
            {urgencyText && (
              <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
                </span>
                {urgencyText}
              </div>
            )}

            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">{title}</h2>
            {description && <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">{description}</p>}

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <BrutalistButton
                href={primaryCta.href}
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 group"
              >
                {primaryCta.text}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </BrutalistButton>
              {secondaryCta && (
                <BrutalistButton
                  href={secondaryCta.href}
                  variant="ghost"
                  size="lg"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  {secondaryCta.text}
                </BrutalistButton>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/80">
              {["No credit card required", "14-day free trial", "Cancel anytime"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {showTrustBadges && (
              <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                <TrustBadges className="[&_*]:text-primary-foreground/60" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
