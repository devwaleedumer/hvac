"use client"

import { Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Logo from './../../public/logo.svg'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = "+(208) 215-7662" // Replace with actual phone number

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between lg:h-20">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} alt="Logo" className="size-36" />
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            >
              <svg
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M3 5H11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 12H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 19H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="font-bold text-2xl mb-6">
             <SheetTitle>
              HVAC
             </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 ">
              <Link
                href="#services"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/#why-us" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                Why Choose Us
              </Link>
               <Link href="#how-we-work" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                How We Work
              </Link>
              <Link href="#contact" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/" className="text-md font-medium hover:text-primary">
                Home
              </Link>
            </li>
             <li>
              <Link href="#services" className="text-md font-medium hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-md font-medium hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#why-us" className="text-md font-medium hover:text-primary">
                Work
              </Link>
            </li>
           <li>
             <Link href="/about-us" className="text-md font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
               About Us
              </Link>
           </li>
             <li>
             <Link href="/privacy-policy" className="text-md font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
               Privacy Policy
              </Link>
           </li>
           <li>
             <Link href="/terms-condition" className="text-md font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
               Terms & Conditions
              </Link>
           </li>
               
          </ul>
        </nav>
        <div className="hidden lg:block">
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  )
}

