import { ContactSection } from "@/components/contact"
import { HeroSection } from "@/components/hero-section"
import { HowWeWorkSection } from "@/components/how-we-work"
import { ServicesSection } from "@/components/service"
import { WhyChooseSection } from "@/components/ui/why-choose-us"

export default function Home() {
  return (
    // <div className="flex min-h-screen flex-col">
      // <main className="flex-1">
        <>
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <HowWeWorkSection />
        <ContactSection />
        
        </>
      // </main>
    
    // </div>
  )
}

