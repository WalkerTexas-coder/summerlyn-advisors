import Link from "next/link"
import { Monitor, Shield, Phone, CreditCard, Workflow, Bot } from "lucide-react"

const services = [
  {
    title: "Odoo Implementation",
    description: "Enterprise-grade ERP solutions tailored to your business needs",
    href: "/services/odoo-implementation",
    icon: Monitor,
  },
  {
    title: "HIPAA Compliance",
    description: "Comprehensive healthcare compliance and security solutions",
    href: "/services/hipaa-compliance",
    icon: Shield,
  },
  {
    title: "Telehealth Solutions",
    description: "Secure and reliable telehealth infrastructure development",
    href: "/services/telehealth-solutions",
    icon: Phone,
  },
  {
    title: "Payment Processing",
    description: "Integrated payment solutions with RAC Financial",
    href: "/services/payment-processing",
    icon: CreditCard,
  },
  {
    title: "Make.com Automation",
    description: "Streamline workflows with powerful automation tools",
    href: "/services/make-automation",
    icon: Workflow,
  },
  {
    title: "Claude AI Agents",
    description: "AI-powered solutions for business automation",
    href: "/services/claude-ai-agents",
    icon: Bot,
  },
]

export const metadata = {
  title: "Services | Summerlyn Advisors",
  description:
    "Enterprise technology solutions including Odoo Implementation, HIPAA Compliance, Telehealth Solutions, and more.",
}

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive enterprise technology solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-lg border p-6 transition-colors hover:border-blue-600/20 hover:bg-blue-600/5"
              >
                <div className="mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="mb-2 text-xl font-semibold">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
