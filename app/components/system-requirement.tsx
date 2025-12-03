"use client";

import { Check } from "lucide-react"
import { handleDownload } from "./downloader";

export function SystemRequirements() {

  return (
    <section className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">System Requirements</h2>
        <p className="text-lg text-muted-foreground">Works seamlessly on your computer</p>
      </div>

      <div className="w-100">
        <div className="bg-card rounded-xl border border-border p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Windows</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Windows 10 or later</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">100 MB free disk space</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">2 GB RAM minimum</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Processor: 1.5 GHz or faster</span>
            </li>
            <button onClick={handleDownload} className="mt-8 w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition">
              Download for Windows
            </button>
          </ul>
        </div>

      </div>
    </section>
  )
}
