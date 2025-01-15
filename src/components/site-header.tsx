"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Monitor, Shield, Phone, CreditCard, Workflow, Bot } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const services = [
  {
    title: "Odoo Implementation",
    href: "/services/odoo-implementation",
    description: "Enterprise-grade ERP solutions tailored to your business needs",
    icon: Monitor,
  },
  {
    title: "HIPAA Compliance",
    href: "/services/hipaa-compliance",
    description: "Comprehensive healthcare compliance and security solutions",
    icon: Shield,
  },
  {
    title: "Telehealth Solutions",
    href: "/services/telehealth-solutions",
    description: "Secure and reliable telehealth infrastructure development",
    icon: Phone,
  },
  {
    title: "Payment Processing",
    href: "/services/payment-processing",
    description: "Integrated payment solutions with RAC Financial",
    icon: CreditCard,
  },
  {
    title: "Make.com Automation",
    href: "/services/make-automation",
    description: "Streamline workflows with powerful automation tools",
    icon: Workflow,
  },
  {
    title: "Claude AI Agents",
    href: "/services/claude-ai-agents",
    description: "AI-powered solutions for business automation",
    icon: Bot,
  },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="bg-blue-600 py-2">
        <div className="container flex items-center justify-center text-sm text-white">
          <p>
            Transform your business with enterprise technology.{" "}
            <Link href="/contact" className="underline hover:text-blue-100">
              Contact us today
            </Link>
          </p>
        </div>
      </div>
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <span className="text-xl font-bold">Summerlyn Advisors</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                    >
                      <div className="flex items-center space-x-2">
                        <service.icon className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">
                          {service.title}
                        </div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink
                  className={
                    pathname === "/blog"
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }
                >
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={
                    pathname === "/contact"
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
