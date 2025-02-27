import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertTriangle,
  FileText,
  Calendar,
  CreditCard,
  ShieldCheck,
  Scale,
  XCircle,
  FileSignature,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
  const phoneNumber = "+(208) 215-7662" // Replace with actual phone number

export default function TermsAndConditions() {
  return (
    <div className=" min-h-screen">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-block p-3 bg-yellow-400 rounded-full mb-6">
              <FileText className="h-12 w-12 text-yellow-800" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-yellow-800 mb-4">Terms and Conditions</h1>
            <div className="h-2 w-24 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-yellow-700">Please read these terms carefully before using our services</p>
            <p className="mt-2 text-yellow-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Important Alert */}
          <Alert className="mb-10 border-4 border-yellow-400 bg-yellow-100 shadow-lg">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
            <AlertTitle className="text-xl font-bold text-yellow-800">Important Notice</AlertTitle>
            <AlertDescription className="text-yellow-700 text-lg">
              By using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any
              part of these terms, please do not use our services.
            </AlertDescription>
          </Alert>

          {/* Agreement Card */}
          <Card className="mb-10 border-4 border-yellow-400 shadow-[0_10px_40px_-15px_rgba(250,204,21,0.3)] bg-white">
            <CardHeader className="bg-yellow-400 border-b-4 border-yellow-500 pb-6">
              <CardTitle className="text-2xl font-bold text-yellow-900 flex items-center">
                <FileSignature className="mr-2 h-6 w-6" /> Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 px-8 pb-8">
              <p className="text-lg mb-6 leading-relaxed text-gray-800">
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally
                or on behalf of an entity (&qout;you&qout;) and{" "}
                <span className="font-bold text-yellow-600">Your HVAC Company</span> (&qout;we,&qout; &qout;us&qout; or &qout;our&qout;), concerning
                your access to and use of our website as well as any other media form, media channel, mobile website or
                mobile application related, linked, or otherwise connected thereto (collectively, the &qout;Site&qout).
              </p>
              <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                <p className="text-lg leading-relaxed text-gray-800">
                  You agree that by accessing the Site and/or using our services, you have read, understood, and agree
                  to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and
                  Conditions, then you are expressly prohibited from using the Site and must discontinue use
                  immediately.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-6 mb-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="bg-white border-4 border-yellow-300 rounded-xl mb-6 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-xl font-bold text-yellow-800 hover:text-yellow-900 hover:bg-yellow-100 data-[state=open]:bg-yellow-200 data-[state=open]:text-yellow-900">
                  <div className="flex items-center">
                    <BookOpen className="mr-3 h-6 w-6 text-yellow-600" />
                    Services
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white text-lg">
                  <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 mb-4">
                    <p className="mb-4 text-gray-800">
                      <span className="font-bold text-yellow-600">Your HVAC Company</span> provides heating,
                      ventilation, and air conditioning services, including but not limited to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      {[
                        "Installation of HVAC systems",
                        "Repair and maintenance of HVAC systems",
                        "Air quality assessment and improvement",
                        "Energy efficiency consultations",
                        "Emergency HVAC services",
                      ].map((service, index) => (
                        <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-yellow-400 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-800">{service}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-yellow-200">
                      <p className="text-gray-800">
                        We reserve the right to refuse service to anyone for any reason at any time. We may, without
                        prior notice, change the services; stop providing the services or any features of the services;
                        or create limits for the services.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white border-4 border-yellow-300 rounded-xl mb-6 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-xl font-bold text-yellow-800 hover:text-yellow-900 hover:bg-yellow-100 data-[state=open]:bg-yellow-200 data-[state=open]:text-yellow-900">
                  <div className="flex items-center">
                    <Calendar className="mr-3 h-6 w-6 text-yellow-600" />
                    Appointments and Scheduling
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white text-lg">
                  <div className="space-y-4">
                    <p className="text-gray-800">When scheduling an appointment for our services, you agree to:</p>
                    <div className="bg-yellow-50 p-5 rounded-xl">
                      <ul className="space-y-3">
                        {[
                          "Provide accurate and complete information about your HVAC needs",
                          "Be present at the scheduled appointment time or provide access to the property",
                          "Notify us at least 24 hours in advance if you need to cancel or reschedule",
                          "Ensure a safe working environment for our technicians",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block h-6 w-6 rounded-full bg-yellow-400 text-yellow-800 flex-shrink-0 mr-3 flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </span>
                            <span className="text-gray-800">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white border-l-4 border-yellow-500 p-4 rounded-r-lg shadow-md">
                      <p className="text-yellow-800 font-medium">
                        If you fail to provide 24-hour notice for cancellation or rescheduling, we reserve the right to
                        charge a cancellation fee of up to $75.
                      </p>
                    </div>

                    <p className="text-gray-800">
                      While we strive to be punctual, appointment times are approximate. We will make every effort to
                      notify you if we are running significantly behind schedule.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white border-4 border-yellow-300 rounded-xl mb-6 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-xl font-bold text-yellow-800 hover:text-yellow-900 hover:bg-yellow-100 data-[state=open]:bg-yellow-200 data-[state=open]:text-yellow-900">
                  <div className="flex items-center">
                    <CreditCard className="mr-3 h-6 w-6 text-yellow-600" />
                    Pricing and Payment
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white text-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                      <h4 className="font-bold text-yellow-800 mb-3">Pricing</h4>
                      <p className="text-gray-800 mb-4">
                        Our pricing is based on the specific services provided, parts required, and labor involved. We
                        will provide you with an estimate before beginning work, but the final price may vary based on
                        unforeseen circumstances or additional work required.
                      </p>
                      <div className="bg-white p-3 rounded-lg border border-yellow-200">
                        <p className="text-sm text-yellow-700 font-medium">
                          All estimates are valid for 30 days from the date issued.
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                      <h4 className="font-bold text-yellow-800 mb-3">Payment</h4>
                      <p className="text-gray-800 mb-4">
                        Payment is due upon completion of services unless other arrangements have been made in advance.
                        We accept cash, checks, and major credit cards.
                      </p>
                      <div className="bg-white p-3 rounded-lg border border-yellow-200">
                        <p className="text-sm text-yellow-700 font-medium">
                          For larger projects, we may require a deposit of 30-50% before beginning work.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
                    <p className="font-medium text-yellow-800">
                      Past due accounts may be subject to a late fee of 1.5% per month on the unpaid balance. You will
                      be responsible for all costs of collection, including attorney fees.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white border-4 border-yellow-300 rounded-xl mb-6 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-xl font-bold text-yellow-800 hover:text-yellow-900 hover:bg-yellow-100 data-[state=open]:bg-yellow-200 data-[state=open]:text-yellow-900">
                  <div className="flex items-center">
                    <ShieldCheck className="mr-3 h-6 w-6 text-yellow-600" />
                    Warranties and Guarantees
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white text-lg">
                  <div className="bg-gradient-to-r from-yellow-50 to-white p-6 rounded-xl border-l-4 border-yellow-400">
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-yellow-200 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-yellow-100 p-2 rounded-full">
                          <ShieldCheck className="h-6 w-6 text-yellow-600" />
                        </div>
                        <h4 className="font-bold text-xl text-yellow-800">Our Warranty</h4>
                      </div>
                      <p className="text-gray-800">
                        We provide a <span className="font-bold text-yellow-600">90-day warranty</span> on all labor
                        performed by our technicians. Manufacturer warranties apply to all equipment and parts installed
                        by us.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-yellow-800 mb-3">Our warranty does not cover:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          "Damage caused by misuse, abuse, or neglect",
                          "Issues resulting from improper maintenance",
                          "Problems caused by unauthorized repairs",
                          "Damage from power surges or natural disasters",
                          "Normal wear and tear",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200"
                          >
                            <XCircle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                            <span className="text-gray-800 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-yellow-100 p-4 rounded-lg">
                      <p className="text-yellow-800">
                        To make a warranty claim, contact our office within the warranty period. We will schedule a
                        technician to assess the issue and make necessary repairs covered under the warranty.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white border-4 border-yellow-300 rounded-xl mb-6 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-xl font-bold text-yellow-800 hover:text-yellow-900 hover:bg-yellow-100 data-[state=open]:bg-yellow-200 data-[state=open]:text-yellow-900">
                  <div className="flex items-center">
                    <Scale className="mr-3 h-6 w-6 text-yellow-600" />
                    Limitation of Liability
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white text-lg">
                  <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 mb-4">
                    <p className="mb-4 text-gray-800">
                      In no event shall <span className="font-bold text-yellow-600">Your HVAC Company</span>, its
                      officers, directors, employees, or agents, be liable to you for any indirect, incidental, special,
                      punitive, or consequential damages whatsoever resulting from any:
                    </p>

                    <div className="space-y-3 mb-4">
                      {[
                        "Errors, mistakes, or inaccuracies in our service",
                        "Personal injury or property damage resulting from your access to or use of our services",
                        "Unauthorized access to or use of our secure servers and/or any personal information stored therein",
                        "Interruption or cessation of transmission to or from our services",
                        "Any defects, viruses, or other harmful components that may be transmitted through our service",
                      ].map((item, index) => (
                        <div key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                          <div className="h-6 w-6 rounded-full bg-yellow-400 text-yellow-800 flex-shrink-0 mr-3 flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-gray-800">
                        Our liability is limited to the maximum extent permitted by law. In jurisdictions where the
                        exclusion or limitation of liability for consequential or incidental damages is not permitted,
                        our liability is limited to the greatest extent permitted by law.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact Section */}
          <div className="bg-yellow-400 rounded-2xl p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-300 rounded-full -mr-20 -mt-20 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-500 rounded-full -ml-20 -mb-20 opacity-30"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-yellow-900 mb-6">Contact Us About These Terms</h2>
              <p className="mb-6 text-yellow-800 max-w-2xl">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-600">
                <div className="font-medium space-y-2 text-gray-800">
                  <p className="text-xl font-bold text-yellow-700 mb-3">Your HVAC Company</p>
                  <p className="flex items-center">
                    <span className="font-bold text-yellow-600 w-20">Email:</span> legal@reliablehvacexperts.com
                  </p>
                  <p className="flex items-center">
                      <Link href={phoneNumber}>
                    <span className="font-bold text-yellow-600 w-20">Phone:</span> (555) 123-4567
                      </Link>
                  </p>
                  <p className="flex items-center">
                    <span className="font-bold text-yellow-600 w-20">Address:</span> 5843 Fm 1374 Rd
                    <br/>
New Waverly, Texas(TX), 77358
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-yellow-700">
            <p>© {new Date().getFullYear()} Your HVAC Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

