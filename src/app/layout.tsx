import type { Metadata } from "next";
import "./globals.css";



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
        {children}
      </body>
    </html>
  );
}
