import { ThermometerSun, Wind, Fan } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: ThermometerSun,
      title: "AC Installation & Repair",
      description: "Expert installation and repair services for all AC brands and models.",
    },
    {
      icon: Wind,
      title: "Heating Services",
      description: "Complete heating system installation, maintenance, and repair.",
    },
    {
      icon: Fan,
      title: "Ventilation",
      description: "Improve your indoor air quality with our ventilation solutions.",
    },
  ]

  return (
    <section id="services" className="py-12 md:py-16 lg:py-24">
      <div className="container space-y-8 text-center  px-4 md:px-6 mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Comprehensive HVAC solutions for all your heating and cooling needs.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-input">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <service.icon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

