import { CheckCircle, Maximize2, Layers, BarChart3, Bell, Eye } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Powerful Features</h2>
        <p className="text-lg text-muted-foreground">Everything you need for professional document conversion</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">Batch Processing</h3>
            <p className="text-muted-foreground">
              Convert thousands of files at once. Drag and drop entire folders for mass conversion.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Maximize2 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">Advanced Settings</h3>
            <p className="text-muted-foreground">
              Fine-tune page size, margins, compression, and quality levels to your exact needs.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Layers className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">Layer Preservation</h3>
            <p className="text-muted-foreground">
              Complex documents with multiple layers and hidden elements are handled perfectly.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <BarChart3 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">Conversion History</h3>
            <p className="text-muted-foreground">
              Detailed logs and history tracking for all your conversion operations and batches.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Bell className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">Real-time Notifications</h3>
            <p className="text-muted-foreground">
              Get instant notifications when conversions complete. Works even with minimized window.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Eye className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">Preview Before Save</h3>
            <p className="text-muted-foreground">
              Preview converted PDFs before saving to ensure perfect results every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
