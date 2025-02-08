import { Phone } from "lucide-react"

export function MobileFooter() {
  const phoneNumber = "+1234567890" // Replace with actual phone number

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium">Need Help?</span>
            <span className="text-xs text-muted-foreground">24/7 Emergency Service</span>
          </div>
        </div>
        <a
          href={`tel:${phoneNumber}`}
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          <Phone className="mr-2 h-4 w-4" />
          Call Now
        </a>
      </div>
    </div>
  )
}

