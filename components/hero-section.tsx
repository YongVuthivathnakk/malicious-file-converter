"use client"

import { Download, ArrowRight } from "lucide-react"
import { handleDownload } from "./downloader"

export function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Convert DOCX to PDF Instantly
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Professional-grade document conversion software. Lightning-fast performance, batch processing, and advanced
            formatting preservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={handleDownload} className="px-8 cursor-pointer py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 group">
              <Download className="w-5 h-5" />
              Download Now
            </button>
            
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Windows 10+ • Free for personal use • 30-day professional trial
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border h-80 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-muted-foreground font-medium">Batch convert hundreds of files</p>
          </div>
        </div>
      </div>
    </section>
  )
}
