import type { Metadata } from "next"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy | Backup-Monitoring.ai",
  description: "Learn how Backup-Monitoring.ai collects, uses, and protects your data.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground mb-2">Backup-Monitoring.ai</p>
            <p className="text-sm text-muted-foreground">Operated by iWoWSoft Sdn. Bhd.</p>
            <p className="text-sm text-muted-foreground mt-4">
              Effective Date:{" "}
              {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="prose prose-slate max-w-none">
            {/* Introduction */}
            <Card className="p-8 mb-8 bg-primary/5 border-primary/20">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                iWoWSoft Sdn. Bhd. ("iwowsoft", "we", "us", or "our") respects your privacy and is committed to
                protecting personal data. This Privacy Policy explains how we collect, use, disclose, store, and protect
                information when you use Backup-Monitoring.ai (the "Service"), including our website, applications,
                APIs, and related services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This policy is prepared in accordance with applicable data protection laws, including the Personal Data
                Protection Act 2010 (PDPA) of Malaysia.
              </p>
            </Card>

            {/* Scope */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Scope of This Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">This Privacy Policy applies to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Visitors to our website</li>
                <li>Users and customers of Backup-Monitoring.ai</li>
                <li>Business partners and representatives</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By accessing or using the Service, you agree to the terms of this Privacy Policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Information We Collect</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">We may collect:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Company name</li>
                    <li>Contact number</li>
                    <li>Billing and payment information</li>
                    <li>Account login details (stored securely and encrypted)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Technical and Usage Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Automatically collected information may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>IP address</li>
                    <li>Browser type and device information</li>
                    <li>Operating system</li>
                    <li>Log files and access timestamps</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Backup and System Metadata</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    To deliver monitoring services, we may process:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Backup job status and schedules</li>
                    <li>Server or system identifiers</li>
                    <li>Error logs and performance metrics</li>
                  </ul>
                  <Card className="p-4 mt-4 bg-primary/5 border-primary/20">
                    <p className="text-sm text-muted-foreground font-medium">
                      We do not access or view the actual backup content unless explicitly authorized by the customer.
                    </p>
                  </Card>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">How We Use Information</h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">Information is used to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and operate Backup-Monitoring.ai</li>
                  <li>Monitor backup health and system performance</li>
                  <li>Send alerts, notifications, and service communications</li>
                  <li>Manage subscriptions and billing</li>
                  <li>Improve security, reliability, and features</li>
                  <li>Meet legal and regulatory requirements</li>
                </ul>
              </div>
            </div>

            {/* Legal Basis */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Legal Basis for Processing</h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">We process data based on:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contractual necessity</li>
                  <li>Legitimate business interests</li>
                  <li>Compliance with applicable laws</li>
                </ul>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Data Sharing and Disclosure</h2>

              <Card className="p-6 mb-4 bg-primary/5 border-primary/20">
                <p className="text-muted-foreground font-medium">We do not sell or trade personal data.</p>
              </Card>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">Information may be shared with:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Third-party service providers (e.g. hosting, payment gateways)</li>
                  <li>Professional advisors (legal, audit, accounting)</li>
                  <li>Authorities where required by law</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  All third parties are required to maintain appropriate confidentiality and security measures.
                </p>
              </div>
            </div>

            {/* Payment Processing (Paddle) */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Payment Processing (Paddle)</h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Payments for Backup-Monitoring.ai are processed by Paddle.com, our authorized third-party payment
                  processor and merchant of record.
                </p>
                <p className="leading-relaxed">When you make a purchase or subscribe to a paid plan:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Necessary personal and billing information (such as name, email address, country, IP address, and
                    payment details) is securely collected and processed by Paddle
                  </li>
                  <li>
                    Paddle handles payment processing, invoicing, tax calculation, fraud prevention, and compliance
                    obligations
                  </li>
                  <li>
                    Payment information is processed in accordance with Paddle's Privacy Policy and data protection
                    standards
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Data Storage and Security</h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  We apply reasonable administrative, technical, and physical safeguards, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption in transit and at rest</li>
                  <li>Restricted access controls</li>
                  <li>Ongoing monitoring and system hardening</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Data may be stored on servers located inside or outside Malaysia. Where cross-border transfers occur,
                  reasonable safeguards are applied.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Data Retention</h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">We retain data only for as long as necessary to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide the Service</li>
                  <li>Fulfill contractual and legal obligations</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Data may be deleted or anonymized after service termination unless retention is required by law.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Cookies and Tracking Technologies</h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">We may use cookies or similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintain secure sessions</li>
                  <li>Improve platform performance</li>
                  <li>Analyze system usage</li>
                </ul>
                <p className="leading-relaxed mt-4">Disabling cookies may affect certain features of the Service.</p>
              </div>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Third-Party Links</h2>

              <p className="text-muted-foreground leading-relaxed">
                The Service may contain links to third-party websites. iWoWSoft Sdn. Bhd. is not responsible for the
                privacy practices or content of those websites.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Children's Privacy</h2>

              <p className="text-muted-foreground leading-relaxed">
                Backup-Monitoring.ai is not intended for individuals under the age of 18. We do not knowingly collect
                personal data from minors.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Changes to This Privacy Policy</h2>

              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Updates will be posted with a revised effective
                date. Continued use of the Service indicates acceptance of the updated policy.
              </p>
            </div>

            {/* Contact */}
            <Card className="p-8 bg-slate-50 border-border">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions related to this Privacy Policy, please contact:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@backup-monitoring.ai" className="text-primary hover:underline">
                    support@backup-monitoring.ai
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
