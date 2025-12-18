import type { Metadata } from "next"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Use | Backup-Monitoring.ai",
  description: "Terms and conditions for using Backup-Monitoring.ai services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
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
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Use ("Terms") govern access to and use of Backup-Monitoring.ai (the "Service"), operated
                by iWoWSoft Sdn. Bhd. ("iwowsoft", "we", "us", or "our"). By accessing or using the Service, you agree
                to be bound by these Terms.
              </p>
            </Card>

            {/* Definitions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">1. Definitions</h2>

              <div className="space-y-3 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong>"Service"</strong> refers to the Backup-Monitoring.ai platform, including backup monitoring,
                  alerting, and reporting features.
                </p>
                <p className="leading-relaxed">
                  <strong>"User"</strong> or <strong>"You"</strong> refers to the individual or entity accessing or
                  using our Service.
                </p>
                <p className="leading-relaxed">
                  <strong>"Account"</strong> refers to the unique account created to access our Service.
                </p>
                <p className="leading-relaxed">
                  <strong>"Content"</strong> refers to backup metadata, logs, reports, and other data processed through
                  our Service.
                </p>
              </div>
            </div>

            {/* Account Registration */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">3. Eligibility and Account Registration</h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">Users must:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Be authorized to use the Service on behalf of themselves or their organization</li>
                  <li>Provide accurate and current registration information</li>
                  <li>Keep account credentials secure</li>
                </ul>
                <p className="leading-relaxed mt-4">You are responsible for all activities under your account.</p>
              </div>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">2. Description of the Service</h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Backup-Monitoring.ai is a software-as-a-service (SaaS) platform that provides:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Backup monitoring and alerting</li>
                  <li>System status reporting</li>
                  <li>Performance and availability insights</li>
                </ul>
                <Card className="p-4 bg-amber-50 border-amber-200 mt-4">
                  <p className="text-amber-900 font-semibold leading-relaxed">
                    Important: The Service provides monitoring only and does not perform backups or recovery operations.
                  </p>
                </Card>
              </div>
            </div>

            {/* Acceptable Use */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">4. Acceptable Use</h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the Service for unlawful purposes</li>
                  <li>Attempt to gain unauthorized access to systems</li>
                  <li>Interfere with system performance or security</li>
                  <li>Upload malicious or harmful code</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  iwowsoft may restrict or suspend access for violations of these Terms.
                </p>
              </div>
            </div>

            {/* Customer Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">5. Customer Responsibilities</h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">You acknowledge that:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Backup configuration and execution remain your responsibility</li>
                  <li>Backup testing and restoration validation should be performed regularly</li>
                  <li>You are responsible for your own data management and compliance</li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">6. Fees, Billing, and Payments (Paddle)</h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Payments for Backup-Monitoring.ai subscriptions are processed by <strong>Paddle.com</strong>, our
                  authorized third-party payment provider and merchant of record.
                </p>
                <p className="leading-relaxed">By subscribing, you acknowledge and agree that:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Paddle handles payment processing, invoicing, taxes, and payment data</li>
                  <li>
                    Necessary billing information (such as name, email, country, and payment details) will be shared
                    with Paddle for transaction processing
                  </li>
                  <li>All payments are subject to Paddle's Terms and Privacy Policy</li>
                  <li>Subscription management, renewals, and billing communications may be handled by Paddle</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Access to paid features may be suspended or terminated if payment is unsuccessful or cancelled.
                </p>
              </div>
            </div>

            {/* Service Availability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">7. Service Availability</h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  We aim to provide reliable access to the Service; however, availability may be affected by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Scheduled maintenance</li>
                  <li>System upgrades</li>
                  <li>Third-party services or integrations</li>
                </ul>
                <p className="leading-relaxed mt-4">Service continuity is not guaranteed.</p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">8. Intellectual Property</h2>

              <p className="text-muted-foreground leading-relaxed">
                All intellectual property rights in the Service, including software, branding, and documentation, are
                owned by iWoWSoft Sdn. Bhd. No ownership rights are transferred to users.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">9. Confidentiality</h2>

              <p className="text-muted-foreground leading-relaxed">
                Both parties agree to keep confidential any non-public information obtained through use of the Service.
              </p>
            </div>

            {/* Data and Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">10. Data and Privacy</h2>

              <p className="text-muted-foreground leading-relaxed">
                Use of the Service is governed by our Privacy Policy, which forms part of these Terms.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">11. Disclaimer</h2>

              <p className="text-muted-foreground leading-relaxed">
                The Service is provided on an "as available" basis. Features, integrations, and functionality may change
                from time to time.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">12. Suspension and Termination</h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">iwowsoft may suspend or terminate access if:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>These Terms are breached</li>
                  <li>Payment obligations are not met</li>
                  <li>Required for security, legal, or operational reasons</li>
                </ul>
                <p className="leading-relaxed mt-4">Upon termination, access to the Service will cease.</p>
              </div>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">13. Modifications to Terms</h2>

              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms from time to time. Updated versions will be posted with a revised effective
                date. Continued use of the Service constitutes acceptance.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">14. Governing Law</h2>

              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and interpreted in accordance with the laws of Malaysia.
              </p>
            </div>

            {/* Contact */}
            <Card className="p-8 bg-slate-50 border-border">
              <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions regarding these Terms, please contact:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>iWoWSoft Sdn. Bhd.</strong>
                </p>
                <p>
                  <strong>Email:</strong> support@backup-monitoring.ai
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
