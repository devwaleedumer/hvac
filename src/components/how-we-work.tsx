import { Lightbulb, ClipboardCheck, WrenchIcon, SmileIcon } from "lucide-react"

export function HowWeWorkSection() {
  const steps = [
    {
      icon: Lightbulb,
      title: "1. Initial Consultation",
      description: "We discuss your needs and assess your HVAC requirements.",
    },
    {
      icon: ClipboardCheck,
      title: "2. Detailed Inspection",
      description: "Our experts thoroughly inspect your system and provide recommendations.",
    },
    {
      icon: WrenchIcon,
      title: "3. Expert Service",
      description: "We complete the work with attention to detail and precision.",
    },
    {
      icon: SmileIcon,
      title: "4. Quality Assurance",
      description: "We ensure everything works perfectly and you're completely satisfied.",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container space-y-8 text-center  px-4 md:px-6 mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">How We Work</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Our proven process ensures quality results every time.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center space-y-4 rounded-lg border border-input bg-white p-6 shadow-lg"
            >
              <div className="rounded-full bg-muted p-3">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-1 w-full -translate-y-1/2 transform bg-muted lg:block">
                  <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 transform rounded-full bg-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

