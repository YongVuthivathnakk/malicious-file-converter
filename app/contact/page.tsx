import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Header />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as
            soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}
