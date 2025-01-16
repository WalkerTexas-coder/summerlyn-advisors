import Link from "next/link"
import { Monitor, Shield, Phone, CreditCard, Workflow, Bot } from "lucide-react"

const services = [
  {
    title: "Digital Transformation",
    href: "/services/digital-transformation",
    description: "Enterprise digital transformation strategy and execution with Axacraft",
    icon: Monitor,
  },
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

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-lg border p-6 transition-colors hover:border-blue-600 hover:bg-gray-50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mb-2 text-xl font-semibold">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
