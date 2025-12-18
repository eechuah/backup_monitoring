import type React from "react"
import { BrutalistButton } from "@/components/ui/brutalist-button"
import { TrustBadges } from "@/components/sections/trust-badges"
import { CheckCircle } from "lucide-react"

interface HeroSectionProps {
  title: string
  description: string
  primaryCta?: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  children?: React.ReactNode
  image?: React.ReactNode
  showTrustBadges?: boolean
  showBenefits?: boolean
}

const quickBenefits = ["No credit card required", "Setup in under 5 minutes", "Cancel anytime"]

export function HeroSection({
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
  image,
  showTrustBadges = false,
  showBenefits = false,
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24 lg:px-8">
        <div className={image ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" : ""}>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              {title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">{description}</p>

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {primaryCta && (
                  <BrutalistButton href={primaryCta.href} variant="primary" size="lg">
                    {primaryCta.text}
                  </BrutalistButton>
                )}
                {secondaryCta && (
                  <BrutalistButton href={secondaryCta.href} variant="secondary" size="lg">
                    {secondaryCta.text}
                  </BrutalistButton>
                )}
              </div>
            )}

            {showBenefits && (
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {quickBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            )}

            {showTrustBadges && <TrustBadges className="mt-8 justify-start" />}

            {children}
          </div>
          {image && <div className="hidden lg:block">{image}</div>}
        </div>
      </div>
    </section>
  )
}
