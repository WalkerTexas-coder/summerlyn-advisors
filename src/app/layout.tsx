import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Summerlyn Advisors | Enterprise Technology Solutions",
  description: "Transform your business with enterprise technology solutions. We specialize in Odoo Implementation, HIPAA Compliance, Telehealth Solutions, and more.",
  keywords: [
    "Odoo Implementation",
    "HIPAA Compliance",
    "Telehealth Solutions",
    "Payment Processing",
    "Make.com Automation",
    "Claude AI Agents",
    "Enterprise Technology",
    "Digital Transformation",
    "Business Solutions",
    "Technology Consulting",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex min-h-full flex-col`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
