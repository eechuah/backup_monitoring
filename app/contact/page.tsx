"use client"

import type React from "react"
import { HeroSection } from "@/components/sections/hero-section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Clock, MessageSquare } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <HeroSection
        title="Talk to Our Team"
        description="Have questions about backup monitoring or verification? Reach out — we're happy to help."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Get in Touch</h2>

              <Card className="p-4 rounded-xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:support@backup-monitoring.ai"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      support@backup-monitoring.ai
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 rounded-xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
                    <a href="tel:+60123456789" className="text-muted-foreground hover:text-primary transition-colors">
                      +60 12-345 6789
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 rounded-xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Mon–Fri, 9:00am – 6:00pm
                      <br />
                      (GMT+8)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-primary text-primary-foreground p-6 rounded-xl border-0">
                <h3 className="font-bold mb-2">Quick Response</h3>
                <p className="text-primary-foreground/80 text-sm">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 rounded-2xl border border-border shadow-lg">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <MessageSquare className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thanks for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Work Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          Phone <span className="text-muted-foreground">(optional)</span>
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+60 12-345 6789"
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        How can we help? <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your backup monitoring needs, questions, or how we can help..."
                        className="rounded-lg resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <p className="text-sm text-muted-foreground">We'll get back to you as soon as possible.</p>
                      <Button type="submit" disabled={isSubmitting} className="rounded-lg">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 rounded-xl bg-background border-0 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Want to See a Demo?</h3>
              <p className="text-muted-foreground mb-4">
                Schedule a personalized walkthrough of BACKUP-MONITORING.ai with our team.
              </p>
              <Button asChild>
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </Card>
            <Card className="p-6 rounded-xl bg-background border-0 shadow-lg">
              <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-4">
                Start your 14-day free trial and see your backup status in minutes.
              </p>
              <Button asChild variant="outline">
                <Link href="/pricing">Start Free Trial</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
