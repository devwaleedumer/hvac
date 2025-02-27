import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  History,
  Award,
  CheckCircle,
  MapPin,
  Phone,
  Clock,
  Star,
  PenToolIcon as Tool,
  ThumbsUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
  const phoneNumber = "+(208) 215-7662" // Replace with actual phone number

export default function AboutUs() {
  return (
    <div className="bg-yellow-50 min-h-screen">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-block p-3 bg-yellow-400 rounded-full mb-6">
              <Users className="h-12 w-12 text-yellow-800" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-yellow-800 mb-4">About Us</h1>
            <div className="h-2 w-24 bg-yellow-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-yellow-700 max-w-2xl mx-auto">
              Providing quality HVAC services to our community for over 25 years
            </p>
          </div>

          {/* Hero Section */}
          <div className="relative mb-24">
            <div className="absolute inset-0 bg-yellow-400 rounded-3xl -rotate-1 transform scale-105 -z-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col justify-center p-8 md:p-12">
                <Badge className="mb-6 w-fit bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-300 text-sm px-4 py-1">
                  Trusted Since 1998
                </Badge>
                <h2 className="text-4xl font-bold mb-6 text-yellow-800">Your Comfort Is Our Priority</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  At <span className="font-bold text-yellow-600">Your HVAC Company</span>, we understand that your
                  home's comfort is essential to your quality of life. That's why we've dedicated ourselves to providing
                  exceptional heating, ventilation, and air conditioning services to homeowners and businesses
                  throughout the region.
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mr-2" />
                    <span className="text-yellow-800 font-medium">Licensed</span>
                  </div>
                  <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mr-2" />
                    <span className="text-yellow-800 font-medium">Insured</span>
                  </div>
                  <div className="flex items-center bg-yellow-100 px-4 py-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mr-2" />
                    <span className="text-yellow-800 font-medium">Certified</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-auto">
                <Image
                  src="/images/h1.jpg"
                  alt="HVAC Technicians"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-800/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-yellow-400 text-yellow-900 font-bold px-6 py-3 rounded-lg shadow-lg">
                  25+ Years of Excellence
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values Tabs */}
          <div className="mb-24">
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="w-full grid grid-cols-3 h-auto p-1 bg-yellow-200 rounded-t-xl">
                <TabsTrigger
                  value="mission"
                  className="py-4 data-[state=active]:bg-yellow-400 data-[state=active]:text-yellow-900 rounded-lg"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Star className="h-6 w-6" />
                    <span className="font-bold">Our Mission</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="values"
                  className="py-4 data-[state=active]:bg-yellow-400 data-[state=active]:text-yellow-900 rounded-lg"
                >
                  <div className="flex flex-col items-center gap-2">
                    <ThumbsUp className="h-6 w-6" />
                    <span className="font-bold">Our Values</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="py-4 data-[state=active]:bg-yellow-400 data-[state=active]:text-yellow-900 rounded-lg"
                >
                  <div className="flex flex-col items-center gap-2">
                    <History className="h-6 w-6" />
                    <span className="font-bold">Our History</span>
                  </div>
                </TabsTrigger>
              </TabsList>

              <div className="border-4 border-yellow-400 rounded-b-xl bg-white">
                <TabsContent value="mission" className="p-8 mt-0">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="bg-yellow-100 p-8 rounded-full">
                      <Star className="h-20 w-20 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-4 text-yellow-800">Our Mission</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Our mission is to provide our customers with the highest quality HVAC services, ensuring optimal
                        indoor comfort, air quality, and energy efficiency. We are committed to exceptional customer
                        service, technical excellence, and environmental responsibility in everything we do.
                      </p>
                      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                        <p className="italic text-yellow-800">
                          "We don't just fix HVAC systems — we create comfortable environments where families thrive and
                          businesses succeed."
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="values" className="p-8 mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Integrity",
                        description: "We conduct our business with honesty, transparency, and ethical practices.",
                        icon: <CheckCircle className="h-8 w-8 text-yellow-600" />,
                      },
                      {
                        title: "Excellence",
                        description: "We strive for the highest standards in technical expertise and service quality.",
                        icon: <Award className="h-8 w-8 text-yellow-600" />,
                      },
                      {
                        title: "Reliability",
                        description: "We are dependable, punctual, and consistent in our service delivery.",
                        icon: <Clock className="h-8 w-8 text-yellow-600" />,
                      },
                      {
                        title: "Innovation",
                        description:
                          "We embrace new technologies and methods to improve efficiency and sustainability.",
                        icon: <Tool className="h-8 w-8 text-yellow-600" />,
                      },
                    ].map((value, index) => (
                      <div key={index} className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 flex gap-4">
                        <div className="bg-white p-3 rounded-lg h-fit">{value.icon}</div>
                        <div>
                          <h4 className="text-xl font-bold text-yellow-800 mb-2">{value.title}</h4>
                          <p className="text-gray-700">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="history" className="p-8 mt-0">
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-1 bg-yellow-300"></div>
                    <div className="space-y-8 relative">
                      {[
                        {
                          year: "1998",
                          title: "Our Beginning",
                          description:
                            "Founded by John Smith with just two service vans and a commitment to quality workmanship.",
                        },
                        {
                          year: "2005",
                          title: "Growing Strong",
                          description: "Expanded to a team of 15 technicians and moved into our current headquarters.",
                        },
                        {
                          year: "2010",
                          title: "Commercial Expansion",
                          description:
                            "Added commercial HVAC services to our offerings, serving businesses throughout the region.",
                        },
                        {
                          year: "2015",
                          title: "Green Initiative",
                          description:
                            "Became one of the first companies in the region to specialize in energy-efficient HVAC solutions.",
                        },
                        {
                          year: "Today",
                          title: "Industry Leader",
                          description:
                            "With over 50 employees and a fleet of 30 service vehicles, we continue to grow while maintaining our commitment to excellence.",
                        },
                      ].map((event, index) => (
                        <div key={index} className="flex gap-6 items-start ml-4">
                          <div className="bg-yellow-400 text-yellow-900 font-bold rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 -ml-[20px] border-4 border-white shadow-md">
                            {index + 1}
                          </div>
                          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-400 flex-grow">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-xl font-bold text-yellow-800">{event.title}</h4>
                              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold">
                                {event.year}
                              </span>
                            </div>
                            <p className="text-gray-700">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Team Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-yellow-800 mb-4">Meet Our Leadership Team</h2>
              <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-lg text-yellow-700 max-w-2xl mx-auto">
                Our experienced team is dedicated to providing you with the best HVAC services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Smith",
                  title: "Founder & CEO",
                  image: "/images/20895.jpg",
                  bio: "With over 30 years of experience in the HVAC industry, John leads our company with expertise and vision.",
                },
                {
                  name: "Sarah Johnson",
                  title: "Operations Manager",
                  image: "/images/14685.jpg",
                  bio: "Sarah ensures that our day-to-day operations run smoothly and that our customers receive prompt service.",
                },
                {
                  name: "Michael Chen",
                  title: "Technical Director",
                  image: "/images/17787.jpg",
                  bio: "Michael oversees our technical team and stays at the forefront of HVAC technology and best practices.",
                },
              ].map((member, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl border-4 border-yellow-300 transform transition-transform group-hover:scale-[1.02]">
                    <div className="relative h-80">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900 to-transparent opacity-70"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-bold text-2xl">{member.name}</h3>
                      <p className="text-yellow-300 font-medium mb-2">{member.title}</p>
                      <p className="text-white/90 text-sm">{member.bio}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 font-bold rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="bg-yellow-400 rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-300 rounded-full -mr-20 -mt-20 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-500 rounded-full -ml-20 -mb-20 opacity-30"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="h-8 w-8 text-yellow-900" />
                  <h3 className="text-2xl font-bold text-yellow-900">Our Team By The Numbers</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "50+", label: "Team Members" },
                    { number: "30+", label: "Service Vehicles" },
                    { number: "25+", label: "Years of Experience" },
                    { number: "1000s", label: "Happy Customers" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                      <div className="text-3xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                      <div className="text-yellow-800 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-4 border-yellow-300">
              <div className="flex items-center gap-4 mb-6">
                <Award className="h-8 w-8 text-yellow-600" />
                <h3 className="text-2xl font-bold text-yellow-800">Certifications & Awards</h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "EPA Section 608 Certification",
                    description: "All technicians certified for refrigerant handling",
                  },
                  { title: "NATE Certification", description: "North American Technician Excellence certified team" },
                  { title: "ENERGY STAR® Partner", description: "Committed to energy-efficient solutions" },
                  { title: "BBB A+ Rating", description: "Highest rating for business practices" },
                  { title: "Local Business Excellence Award", description: "Recognized in 2020 and 2022" },
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400"
                  >
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-800">{cert.title}</h4>
                      <p className="text-gray-700 text-sm">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
              <div className="h-1 w-24 bg-white mx-auto mb-4"></div>
              <p className="text-yellow-100 max-w-2xl mx-auto">Have questions about our services? Contact us today!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-xl text-yellow-800 mb-2">Our Location</h3>
                <p className="text-gray-700">
                5843 Fm 1374 Rd
                <br/>
New Waverly, Texas(TX), 77358
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-xl text-yellow-800 mb-2">Phone</h3>
                <p className="text-gray-700">
                  <Link href={phoneNumber}>
                 {phoneNumber}
                  </Link>
                  <br />
                  Emergency: <Link href={phoneNumber}>
                 {phoneNumber}

                  </Link>
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-xl text-yellow-800 mb-2">Hours</h3>
                <p className="text-gray-700">
                  Monday-Friday: 8am-6pm
                  <br />
                  Saturday: 9am-2pm
                  <br />
                  24/7 Emergency Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

