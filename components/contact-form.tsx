"use client"

import { Button } from "@/components/ui/button"
import type React from "react"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg">
      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition resize-none"
            placeholder="Tell us more about your inquiry..."
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-xl">📧</span>
          </div>
          <h3 className="font-semibold text-foreground mb-1">Email</h3>
          <p className="text-sm text-muted-foreground">support@docxtopdf.com</p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-xl">💬</span>
          </div>
          <h3 className="font-semibold text-foreground mb-1">Live Chat</h3>
          <p className="text-sm text-muted-foreground">Available 9am-5pm UTC</p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-xl">📱</span>
          </div>
          <h3 className="font-semibold text-foreground mb-1">Support</h3>
          <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  )
}
