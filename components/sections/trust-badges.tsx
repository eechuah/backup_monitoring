import { Shield, Lock, Clock, Award } from "lucide-react"

const badges = [
  { icon: Shield, label: "SOC 2 Compliant" },
  { icon: Lock, label: "256-bit Encryption" },
  { icon: Clock, label: "99.9% Uptime SLA" },
  { icon: Award, label: "ISO 27001" },
]

export function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 md:gap-6 ${className}`}>
      {badges.map((badge) => (
        <div key={badge.label} className="flex items-center gap-2 text-muted-foreground">
          <badge.icon className="w-4 h-4" />
          <span className="text-xs font-medium">{badge.label}</span>
        </div>
      ))}
    </div>
  )
}
