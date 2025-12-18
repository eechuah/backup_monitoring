import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  product: [
    { name: "Backup Monitoring", href: "/backup-monitoring" },
    { name: "Backup Verification", href: "/backup-verification" },
    { name: "Features", href: "/features" },
    { name: "Integrations", href: "/integrations" },
    { name: "Pricing", href: "/pricing" },
  ],
  solutions: [
    { name: "SME", href: "/solutions/smb-backup-monitoring" },
    { name: "Enterprise", href: "/solutions/enterprise-backup-monitoring" },
  ],
  resources: [
    { name: "Resource Library", href: "/resources" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="Backup-Monitoring.ai" width={32} height={32} className="h-8 w-8" />
              <span className="font-bold text-sm text-foreground">Backup-Monitoring.ai</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Real-time backup monitoring and verification you can trust.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Backup-Monitoring.ai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
