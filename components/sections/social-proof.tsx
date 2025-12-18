import { Star } from "lucide-react"

const logos = [
  { name: "TechCorp", initial: "T" },
  { name: "DataSafe", initial: "D" },
  { name: "CloudFirst", initial: "C" },
  { name: "SecureIT", initial: "S" },
  { name: "NetGuard", initial: "N" },
  { name: "ByteWise", initial: "B" },
]

const testimonials = [
  {
    quote:
      "We caught a failing backup that had been silently broken for 2 weeks. This tool paid for itself on day one.",
    author: "Ahmad Rahman",
    role: "IT Manager",
    company: "TechCorp Solutions",
  },
  {
    quote:
      "Finally, I can prove to management that our backups are working. The reports are exactly what auditors want to see.",
    author: "Sarah Chen",
    role: "Systems Administrator",
    company: "DataSafe Industries",
  },
  {
    quote: "Setup took 15 minutes. Now I monitor 50+ servers from one dashboard instead of checking each one manually.",
    author: "Michael Tan",
    role: "IT Director",
    company: "CloudFirst Enterprises",
  },
]

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "500+", label: "Companies Trust Us" },
  { value: "50K+", label: "Backups Monitored Daily" },
  { value: "<2min", label: "Average Alert Time" },
]

export function SocialProof() {
  return (
    <section className="py-12 lg:py-16 bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Trusted By Logos */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
            Trusted by IT teams at companies like
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center font-bold text-sm">
                  {logo.initial}
                </div>
                <span className="font-semibold">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
