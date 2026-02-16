import type { Metadata } from "next"

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://premiumclinic.com"),
  title: {
    default: "Premium Plastic Surgery Clinic | Expert Cosmetic Procedures",
    template: "%s | Premium Clinic",
  },
  description:
    "Enhancing beauty with precision and care. Expert plastic surgery services including facial surgery, body contouring, and non-surgical treatments.",
  keywords: [
    "plastic surgery",
    "cosmetic surgery",
    "facial surgery",
    "body contouring",
    "non-surgical treatments",
    "rhinoplasty",
    "facelift",
    "liposuction",
    "Botox",
    "dermal fillers",
  ],
  authors: [{ name: "Premium Plastic Surgery Clinic" }],
  creator: "Premium Plastic Surgery Clinic",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://premiumclinic.com",
    siteName: "Premium Plastic Surgery Clinic",
    title: "Premium Plastic Surgery Clinic | Expert Cosmetic Procedures",
    description:
      "Enhancing beauty with precision and care. Expert plastic surgery services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Plastic Surgery Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Plastic Surgery Clinic",
    description: "Enhancing beauty with precision and care",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
