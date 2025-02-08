import { Phone, ArrowRight, ThermometerSun, Fan, Gauge } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeroImage from './../../public/images/h4.jpg'
export function HeroSection() {
  const phoneNumber = "+1234567890" // Replace with actual phone number

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background pb-16 md:pb-0  pt-6 ">
      <div className="container relative  px-4 md:px-6 mx-auto">
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 blur-3xl" />
          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-gradient-to-l from-primary/20 to-primary/5 blur-2xl" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                <span className="ml-2">24/7 Emergency Service Available</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Expert HVAC <br />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
                Professional heating, cooling, and ventilation services for your ultimate comfort. Trusted by thousands
                of homeowners.
              </p>
            </div>

            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
              <Link
                href="#services"
                className="inline-flex items-center text-primary  justify-center rounded-md border bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

          </div>

          {/* Right Column - Image */}
          <div className="relative lg:mt-0">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-xl lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5" />
              <Image
                src={HeroImage}
                alt="HVAC Service"
                width={600}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/10" />
            </div>
          </div>
        </div>
           <div className="grid grid-cols-3 gap-4  mt-20">
              {[
                { icon: ThermometerSun, label: "Temperature Control" },
                { icon: Fan, label: "Air Quality" },
                { icon: Gauge, label: "Energy Efficient" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-sm font-medium">{item.label}</div>
                </div>
              ))}
            </div>
      </div>
    </section>
  )
}

