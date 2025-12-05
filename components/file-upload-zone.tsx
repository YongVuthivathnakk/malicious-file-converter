"use client"

import type React from "react"

import { useRef } from "react"
import { Upload } from "lucide-react"

interface FileUploadZoneProps {
  onFileUpload: (file: File) => void
}

export function FileUploadZone({ onFileUpload }: FileUploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.add("ring-2", "ring-primary")
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("ring-2", "ring-primary")
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.remove("ring-2", "ring-primary")

    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        file.name.endsWith(".docx")
      ) {
        onFileUpload(file)
      } else {
        alert("Please upload a valid DOCX file")
      }
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      onFileUpload(e.target.files[0])
    }
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className="border-2 border-dashed border-border rounded-xl p-12 text-center cursor-pointer transition hover:border-primary hover:bg-primary/5"
    >
      <input
        ref={inputRef}
        type="file"
        accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={handleFileSelect}
        className="hidden"
      />

      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Upload className="w-8 h-8 text-primary" />
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-2">Drop your DOCX file here</h3>
      <p className="text-muted-foreground mb-4">or click to browse from your computer</p>
      <p className="text-sm text-muted-foreground">Maximum file size: 50MB</p>
    </div>
  )
}
