import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/header";
import { MobileFooter } from "@/components/mobile-footer";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "MURQ HVAC Services",
  description: "Expert HVAC services for residential and commercial properties. Reliable, efficient, and affordable solutions.",
  keywords: ["HVAC services", "heating and cooling", "air conditioning", "furnace repair", "MURQ"],
  twitter: {
    card: "summary_large_image",
    title: "MURQ HVAC Services",
    description: "Expert HVAC services for residential and commercial properties. Reliable, efficient, and affordable solutions.",
    creator: "@MURQ",
    images: ["https://www.reliablehvacexperts.com/image/h1.jpg"]
  },
 
  openGraph: {
    url: "https://www.reliablehvacexperts.com",
    type: "website",
    title: "MURQ HVAC Services",
    description: "Expert HVAC services for residential and commercial properties. Reliable, efficient, and affordable solutions.",
    images: ["https://www.reliablehvacexperts.com/image/h1.jpg"]
  },
 
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
            <div className="flex min-h-screen flex-col">

              <SiteHeader />

      <main className="flex-1">
          {children}
      </main>
        <Footer />
      <MobileFooter />
        </div>
      </body>
    </html>
  );
}
