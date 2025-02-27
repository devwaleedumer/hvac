import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Lock, Cookie, Database, UserCheck } from "lucide-react"
import Link from "next/link"
  const phoneNumber = "+(208) 215-7662" // Replace with actual phone number

export default function PrivacyPolicy() {
  return (
    <div className="bg-yellow-50 min-h-screen">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-block p-3 bg-yellow-400 rounded-full mb-6">
              <Shield className="h-12 w-12 text-yellow-800" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-yellow-800 mb-4">Privacy Policy</h1>
            <div className="h-2 w-24 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-yellow-700">
              Your privacy is our priority. Learn how we protect your information.
            </p>
            <p className="mt-2 text-yellow-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Introduction Card */}
          <Card className="mb-10 border-4 border-yellow-400 shadow-[0_10px_40px_-15px_rgba(250,204,21,0.3)] bg-white">
            <CardHeader className="bg-yellow-400 border-b-4 border-yellow-500 pb-6">
              <CardTitle className="text-2xl font-bold text-yellow-900 flex items-center">
                <Lock className="mr-2 h-6 w-6" /> Our Commitment to Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 px-8 pb-8">
              <p className="text-lg mb-6 leading-relaxed text-gray-800">
                At <span className="font-bold text-yellow-600">MURQ HVAC </span>, we are committed to protecting
                your privacy and ensuring the security of your personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-lg leading-relaxed text-gray-800">
                We take your privacy seriously and have implemented measures to ensure that your personal information is
                handled with care and in accordance with applicable privacy laws.
              </p>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
          <div className="space-y-6 mb-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="bg-white border-4 border-yellow-300 rounded-xl mb-6 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-xl font-bold text-yellow-800 hover:text-yellow-900 hover:bg-yellow-100 data-[state=open]:bg-yellow-200 data-[state=open]:text-yellow-900">
                  <div className="flex items-center">
                    <Database className="mr-3 h-6 w-6 text-yellow-600" />
                    Information We Collect
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white text-lg">
                  <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 mb-4">
                    <p className="mb-4 text-gray-800">
                      We may collect several types of information from and about users of our website, including:
                    </p>
                    <ul className="space-y-3 pl-5">
                      <li className="flex items-start">
                        <span className="inline-block h-6 w-6 rounded-full bg-yellow-400 text-yellow-800 flex-shrink-0 mr-3 flex items-center justify-center text-sm font-bold">
                          1
                        </span>
                        <span>Personal information such as name, email address, mailing address, phone number</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block h-6 w-6 rounded-full bg-yellow-400 text-yellow-800 flex-shrink-0 mr-3 flex items-center justify-center text-sm font-bold">
                          2
                        </span>
                        <span>Information about your property for service estimates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block h-6 w-6 rounded-full bg-yellow-400 text-yellow-800 flex-shrink-0 mr-3 flex items-center justify-center text-sm font-bold">
                          3
                        </span>
                        <span>Service history and preferences</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block h-6 w-6 rounded-full bg-yellow-400 text-yellow-800 flex-shrink-0 mr-3 flex items-center justify-center text-sm font-bold">
                          4
                        </span>
                        <span>Payment information</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block h-6 w-6 rounded-full bg-yellow-400 text-yellow-800 flex-shrink-0 mr-3 flex items-center justify-center text-sm font-bold">
                          5
                        </span>
                        <span>
                          Information about your internet connection, the equipment you use to access our website, and
                          usage details
                        </span>
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white border-4 border-yellow-300 rounded-xl mb-6 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-xl font-bold text-yellow-800 hover:text-yellow-900 hover:bg-yellow-100 data-[state=open]:bg-yellow-200 data-[state=open]:text-yellow-900">
                  <div className="flex items-center">
                    <UserCheck className="mr-3 h-6 w-6 text-yellow-600" />
                    How We Use Your Information
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white text-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                      <h4 className="font-bold text-yellow-800 mb-3">Primary Uses</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                          <span>Providing and improving our services</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                          <span>Processing and completing transactions</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                          <span>Sending service reminders</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                          <span>Responding to your requests</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                      <h4 className="font-bold text-yellow-800 mb-3">Secondary Uses</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                          <span>Sending technical notices and updates</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                          <span>Personalizing your experience</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                          <span>Monitoring trends and usage</span>
                        </li>
                        <li className="flex items-center">
                          <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                          <span>Marketing and promotional purposes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white border-4 border-yellow-300 rounded-xl mb-6 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-xl font-bold text-yellow-800 hover:text-yellow-900 hover:bg-yellow-100 data-[state=open]:bg-yellow-200 data-[state=open]:text-yellow-900">
                  <div className="flex items-center">
                    <Cookie className="mr-3 h-6 w-6 text-yellow-600" />
                    Cookies and Tracking Technologies
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 bg-white text-lg">
                  <div className="bg-gradient-to-r from-yellow-50 to-white p-6 rounded-xl border-l-4 border-yellow-400">
                    <p className="mb-4 text-gray-800">
                      We use cookies and similar tracking technologies to track activity on our website and store
                      certain information. Cookies are files with a small amount of data which may include an anonymous
                      unique identifier.
                    </p>

                    <div className="bg-white p-5 rounded-lg shadow-sm border border-yellow-200 mb-4">
                      <h4 className="font-bold text-yellow-800 mb-2">Cookie Types We Use:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                          <div className="h-4 w-4 rounded-full bg-yellow-400 mr-2"></div>
                          <span className="font-medium">Essential Cookies</span>
                        </div>
                        <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                          <div className="h-4 w-4 rounded-full bg-yellow-400 mr-2"></div>
                          <span className="font-medium">Preference Cookies</span>
                        </div>
                        <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                          <div className="h-4 w-4 rounded-full bg-yellow-400 mr-2"></div>
                          <span className="font-medium">Analytics Cookies</span>
                        </div>
                        <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                          <div className="h-4 w-4 rounded-full bg-yellow-400 mr-2"></div>
                          <span className="font-medium">Marketing Cookies</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-800">
                      You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                      However, if you do not accept cookies, you may not be able to use some portions of our website.
                    </p>
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
              <h2 className="text-2xl font-bold text-yellow-900 mb-6">Contact Us About Privacy</h2>
              <p className="mb-6 text-yellow-800 max-w-2xl">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-600">
                <div className="font-medium space-y-2 text-gray-800">
                  <p className="text-xl font-bold text-yellow-700 mb-3">MURQ HVAC Company</p>
                  <p className="flex items-center">
                    <span className="font-bold text-yellow-600 w-20">Email:</span> contact@reliablehvacexperts.com
                  </p>
                  <Link className="flex items-center" href={`tel:${phoneNumber}`}>
                    <span className="font-bold text-yellow-600 w-20">Phone:</span> {phoneNumber}
                  </Link>
                  <p className="flex items-center">
                    <span className="font-bold text-yellow-600 w-20">Address:</span>5843 Fm 1374 Rd
New Waverly, Texas(TX), 77358
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

