import { Phone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function ContactSection() {
  const phoneNumber = "+(208) 215-7662" // Replace with actual phone number

  return (
    <section id="contact" className="bg-muted py-12 md:py-16 lg:py-24">
      <div className="container  px-4 md:px-6 mx-auto">
        <div className="mx-auto max-w-[600px] space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p className="text-muted-foreground md:text-xl">Need HVAC service? We need just a phone call away.</p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row min-[400px]:justify-center">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
            <Button variant="outline" className="border-input text-primary hover:bg-accent" asChild>
              <Link href="#services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

