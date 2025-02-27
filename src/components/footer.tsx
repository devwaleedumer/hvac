import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react"
  const phoneNumber = "+(208) 215-7662" // Replace with actual phone number

export default function Footer() {
  return (
    <footer className="bg-yellow-50 border-t-4 border-yellow-400">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-yellow-800 mb-4">MURQ HVAC Company</h3>
            <p className="text-gray-600 mb-4">
              Providing quality heating, ventilation, and air conditioning services to our community since 1998.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-yellow-100 p-2 rounded-full text-yellow-600 hover:bg-yellow-200 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-yellow-100 p-2 rounded-full text-yellow-600 hover:bg-yellow-200 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-yellow-100 p-2 rounded-full text-yellow-600 hover:bg-yellow-200 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-yellow-100 p-2 rounded-full text-yellow-600 hover:bg-yellow-200 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-yellow-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { title: "Home", href: "/" },
                { title: "About Us", href: "/about-us" },
                { title: "Services", href: "/#services" },
                { title: "Why choose use", href: "/#why-us" },
                { title: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-yellow-600 hover:underline transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="text-xl font-bold text-yellow-800 mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { title: "AC Installation", href: "/services/ac-installation" },
                { title: "AC Repair", href: "/services/ac-repair" },
                { title: "Heating Services", href: "/services/heating" },
                { title: "Maintenance Plans", href: "/services/maintenance" },
                { title: "Air Quality", href: "/services/air-quality" },
                { title: "Commercial HVAC", href: "/services/commercial" },
              ].map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-yellow-600 hover:underline transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-yellow-800 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600">
                  5843 Fm 1374 Rd
                  <br/>
          New Waverly, Texas(TX), 77358
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                <Link href={`tel:${phoneNumber}`} className="text-gray-600 hover:text-yellow-600 hover:underline">
                  {phoneNumber}
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                <Link href="mailto:info@reliablehvacexperts.com" className="text-gray-600 hover:text-yellow-600 hover:underline">
                  info@reliablehvacexperts.com
                </Link>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                <div className="text-gray-600">
                  <p>Mon-Fri: 8am-6pm</p>
                  <p>Sat: 9am-2pm</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-yellow-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Copyright */}
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} MURQ HVAC . All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-600 hover:text-yellow-600 hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-condition" className="text-gray-600 hover:text-yellow-600 hover:underline">
                Terms & Conditions
              </Link>
             
            </div>

            {/* Certifications */}
            <div className="text-right text-sm text-gray-600">
              <p>Licensed & Insured | EPA Certified | NATE Certified</p>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-8 bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4">
          <div className="flex justify-center items-center text-yellow-800">
            <Phone className="h-5 w-5 mr-2" />
            <p>
              <span className="font-bold">24/7 Emergency Service Available:</span>{" "}
              <Link href={`tel:${phoneNumber}`} className="hover:underline">
               {phoneNumber}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

