import { CheckCircle2, Award, Clock, Shield, PenToolIcon as Tool, ThumbsUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyChooseSection() {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "We're here when you need us, any time, day or night.",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully certified professionals you can trust.",
    },
    {
      icon: ThumbsUp,
      title: "100% Satisfaction",
      description: "We're not happy until you're completely satisfied.",
    },
    {
      icon: Tool,
      title: "Expert Technicians",
      description: "Skilled professionals with years of experience.",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "We stand behind our work with solid guarantees.",
    },
    {
      icon: CheckCircle2,
      title: "Fair Pricing",
      description: "Transparent pricing with no hidden fees.",
    },
  ]

  return (
    <section id="why-us" className="bg-muted py-12 md:py-16 lg:py-24">
      <div className="container space-y-8 text-center  px-4 md:px-6 mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">Why Choose Us</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Experience the difference with our professional HVAC services.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-input">
              <CardContent className="flex items-start space-x-4 p-6">
                <benefit.icon className="h-6 w-6 shrink-0 text-primary" />
                <div className="space-y-1 text-left">
                  <h3 className="font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

