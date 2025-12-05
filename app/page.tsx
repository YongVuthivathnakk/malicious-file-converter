import { ConverterSection } from "@/components/converter-section";
import { FeaturesSection } from "@/components/features.-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SystemRequirements } from "@/components/system-requirement";



export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Header />
      <HeroSection />
      <ConverterSection />
      <FeaturesSection />
      <SystemRequirements />
      <Footer />
    </main>
  )
}
