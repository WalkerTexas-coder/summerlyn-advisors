import { notFound } from "next/navigation"

const services = {
  "odoo-implementation": {
    title: "Odoo Implementation",
    description:
      "Enterprise-grade ERP solutions tailored to your business needs. Our Odoo implementation services help streamline your operations and boost productivity.",
    features: [
      "Business process analysis and optimization",
      "Custom module development",
      "Data migration and integration",
      "User training and support",
      "Ongoing maintenance and updates",
    ],
  },
  "hipaa-compliance": {
    title: "HIPAA Compliance",
    description:
      "Comprehensive healthcare compliance and security solutions. We ensure your systems meet HIPAA requirements while maintaining efficiency.",
    features: [
      "Security risk assessment",
      "Policy and procedure development",
      "Staff training programs",
      "Technical safeguards implementation",
      "Ongoing compliance monitoring",
    ],
  },
  "telehealth-solutions": {
    title: "Telehealth Solutions",
    description:
      "Secure and reliable telehealth infrastructure development. Build a robust platform for remote healthcare delivery.",
    features: [
      "HIPAA-compliant video conferencing",
      "Electronic health records integration",
      "Secure messaging systems",
      "Patient portal development",
      "Mobile app solutions",
    ],
  },
  "payment-processing": {
    title: "Payment Processing",
    description:
      "Integrated payment solutions with RAC Financial. Streamline your payment processing while ensuring security and compliance.",
    features: [
      "PCI compliance",
      "Multiple payment method support",
      "Automated reconciliation",
      "Fraud prevention",
      "Real-time reporting",
    ],
  },
  "make-automation": {
    title: "Make.com Automation",
    description:
      "Streamline workflows with powerful automation tools. Optimize your business processes with Make.com integration.",
    features: [
      "Custom workflow design",
      "System integration",
      "Process automation",
      "Error handling and monitoring",
      "Performance optimization",
    ],
  },
  "claude-ai-agents": {
    title: "Claude AI Agents",
    description:
      "AI-powered solutions for business automation. Leverage Claude's capabilities to enhance your operations.",
    features: [
      "Custom AI agent development",
      "Natural language processing",
      "Task automation",
      "Integration with existing systems",
      "Continuous learning and improvement",
    ],
  },
}

export default function ServicePage({
  params,
}: {
  params: { service: string }
}) {
  const service = services[params.service as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-4xl font-bold">{service.title}</h1>
      <p className="mb-8 text-xl text-gray-600">{service.description}</p>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
        <ul className="list-inside list-disc space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="text-gray-700">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <a
          href="/contact"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>
    </div>
  )
}
