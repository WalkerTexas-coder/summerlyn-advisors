import Link from "next/link"
import { Monitor, Shield, Phone, CreditCard, Workflow, Bot } from "lucide-react"

const services = [
  {
    title: "Odoo Implementation",
    href: "/services/odoo-implementation",
    icon: Monitor,
  },
  {
    title: "HIPAA Compliance",
    href: "/services/hipaa-compliance",
    icon: Shield,
  },
  {
    title: "Telehealth Solutions",
    href: "/services/telehealth-solutions",
    icon: Phone,
  },
  {
    title: "Payment Processing",
    href: "/services/payment-processing",
    icon: CreditCard,
  },
  {
    title: "Make.com Automation",
    href: "/services/make-automation",
    icon: Workflow,
  },
  {
    title: "Claude AI Agents",
    href: "/services/claude-ai-agents",
    icon: Bot,
  },
]

export default function ServiceNotFound() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Service Not Found</h1>
        <p className="mb-8 text-lg text-gray-600">
          We couldn&apos;t find the service you&apos;re looking for. Please check out our
          available services below.
        </p>
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:border-blue-600/20 hover:bg-blue-600/5"
              >
                <Icon className="h-5 w-5 text-blue-600" />
                <span className="font-medium">{service.title}</span>
              </Link>
            )
          })}
        </div>
        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
