"use client"

import { FileText, Zap, Shield } from "lucide-react"

export function ConverterSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
          Why Choose DocxToPDF Software?
        </h2>
        <p className="text-lg text-muted-foreground text-balance">
          Trusted by over 500,000 users worldwide for fast and reliable document conversion
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition">
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">Lightning Fast</h3>
          <p className="text-muted-foreground">
            Convert thousands of files in minutes. Optimized engine handles batches effortlessly.
          </p>
          <p className="text-primary font-semibold mt-4">Up to 50 files/sec</p>
        </div>

        <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition">
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">100% Secure</h3>
          <p className="text-muted-foreground">
            All processing happens locally on your computer. No data sent to cloud servers ever.
          </p>
          <p className="text-primary font-semibold mt-4">Works offline</p>
        </div>

        <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition">
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <FileText className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">Perfect Quality</h3>
          <p className="text-muted-foreground">
            Preserve all formatting, fonts, images, and layout exactly as intended in original files.
          </p>
          <p className="text-primary font-semibold mt-4">100% formatting preserved</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-border p-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-primary mb-2">500K+</p>
            <p className="text-muted-foreground">Active Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary mb-2">50M+</p>
            <p className="text-muted-foreground">Files Converted</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary mb-2">99.9%</p>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary mb-2">24/7</p>
            <p className="text-muted-foreground">Email Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
