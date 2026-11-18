import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Secret of Creative for Plastic Industries",
  description: "SCP Industries - Leading industrial solutions and manufacturing excellence.",
  keywords: "SCP Industries, industrial, manufacturing, solutions",
  authors: [{ name: "SCP Industries" }],
  openGraph: {
    title: "Secret of Creative for Plastic Industries",
    description: "Industrial Solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
