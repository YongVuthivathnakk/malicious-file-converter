"use client"

import { CheckCircle2, FileText, Download } from "lucide-react"

interface ConversionStatusProps {
  status: "converting" | "completed"
  fileName: string
  onReset?: () => void
}

export function ConversionStatus({ status, fileName, onReset }: ConversionStatusProps) {
  if (status === "converting") {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <FileText className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Converting...</h3>
        <p className="text-muted-foreground">{fileName}</p>
        <div className="flex gap-1 justify-center mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle2 className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">Conversion Complete!</h3>
      <p className="text-muted-foreground mb-6">{fileName}</p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onReset}
          className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition"
        >
          Convert Another File
        </button>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2">
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>
    </div>
  )
}
