import { BrutalistCard } from "@/components/ui/brutalist-card"
import type { LucideIcon } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon?: LucideIcon
}

interface FeatureGridProps {
  title?: string
  description?: string
  features: Feature[]
  columns?: 2 | 3 | 4
}

export function FeatureGrid({ title, description, features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {(title || description) && (
          <div className="max-w-2xl mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>}
            {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
          </div>
        )}
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
          {features.map((feature, index) => (
            <BrutalistCard key={index}>
              {feature.icon && (
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </BrutalistCard>
          ))}
        </div>
      </div>
    </section>
  )
}
