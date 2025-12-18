"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  {
    name: "Product",
    items: [
      { name: "Backup Monitoring", href: "/backup-monitoring", description: "Centralized monitoring dashboard" },
      { name: "Backup Verification", href: "/backup-verification", description: "Automated recovery testing" },
      { name: "All Features", href: "/features", description: "Complete feature overview" },
    ],
  },
  {
    name: "Solutions",
    items: [
      { name: "For SMEs", href: "/solutions/smb-backup-monitoring", description: "Simple, affordable protection" },
      { name: "For Enterprise", href: "/solutions/enterprise-backup-monitoring", description: "Scale with compliance" },
      {
        name: "For System Integrators",
        href: "/solutions/system-integrator-backup-monitoring",
        description: "Multi-tenant MSP platform",
      },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Integrations", href: "/integrations" },
]

const secondaryNav = [
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Backup-Monitoring.ai" width={44} height={44} className="h-11 w-11" />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-base text-foreground">Backup</span>
            <span className="font-bold text-base text-foreground">Monitoring</span>
          </div>
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) =>
            item.items ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors">
                  {item.name}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === item.name && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="bg-card rounded-xl border border-border shadow-xl min-w-[280px] p-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 rounded-lg text-sm hover:bg-muted transition-colors group"
                        >
                          <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {subItem.name}
                          </div>
                          {subItem.description && (
                            <div className="text-xs text-muted-foreground mt-0.5">{subItem.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-muted transition-colors"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-2">
          <Link href="/contact">
            <Button variant="ghost" size="sm" className="text-sm font-medium">
              Book Demo
            </Button>
          </Link>
          <Link href="/pricing">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="p-4 space-y-4">
            {/* Primary Nav */}
            <div className="space-y-1">
              {navigation.map((item) =>
                item.items ? (
                  <div key={item.name} className="space-y-1">
                    <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.name}
                    </div>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>

            {/* Secondary Nav */}
            <div className="border-t border-border pt-4">
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">More</div>
              <div className="grid grid-cols-2 gap-1">
                {secondaryNav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full text-sm bg-transparent">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground text-sm">Start Free Trial</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
