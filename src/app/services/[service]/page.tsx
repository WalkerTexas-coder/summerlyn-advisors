import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Monitor, Shield, Phone, CreditCard, Workflow, Bot } from "lucide-react"

const services = {
  "odoo-implementation": {
    title: "Odoo Implementation",
    description: "Enterprise-grade ERP solutions tailored to your business needs",
    icon: Monitor,
    longDescription: `Our Odoo implementation services help businesses streamline their operations with a powerful, integrated ERP solution. We handle everything from initial setup to custom development and training.`,
    features: [
      "Business process analysis and optimization",
      "Custom module development",
      "Data migration and integration",
      "User training and support",
      "Ongoing maintenance and updates"
    ],
    benefits: [
      "Streamlined operations across all departments",
      "Real-time business insights",
      "Improved productivity and efficiency",
      "Scalable solution that grows with your business",
      "Reduced operational costs"
    ]
  },
  "hipaa-compliance": {
    title: "HIPAA Compliance",
    description: "Comprehensive healthcare compliance and security solutions",
    icon: Shield,
    longDescription: `Ensure your healthcare technology meets HIPAA requirements with our comprehensive compliance solutions. We help you implement secure systems while maintaining efficiency.`,
    features: [
      "Security risk assessment",
      "Policy and procedure development",
      "Staff training programs",
      "Technical safeguards implementation",
      "Ongoing compliance monitoring"
    ],
    benefits: [
      "Full HIPAA compliance assurance",
      "Protected patient information",
      "Reduced risk of breaches",
      "Streamlined compliance processes",
      "Peace of mind for your organization"
    ]
  },
  "telehealth-solutions": {
    title: "Telehealth Solutions",
    description: "Secure and reliable telehealth infrastructure development",
    icon: Phone,
    longDescription: `Build a robust telehealth platform that connects providers and patients securely. Our solutions prioritize user experience while maintaining strict security standards.`,
    features: [
      "HIPAA-compliant video consultations",
      "Electronic health records integration",
      "Secure messaging systems",
      "Patient portal development",
      "Mobile app solutions"
    ],
    benefits: [
      "Increased patient accessibility",
      "Reduced operational costs",
      "Improved patient engagement",
      "Streamlined healthcare delivery",
      "Enhanced care coordination"
    ]
  },
  "payment-processing": {
    title: "Payment Processing",
    description: "Integrated payment solutions with RAC Financial",
    icon: CreditCard,
    longDescription: `Implement secure, efficient payment processing solutions that integrate seamlessly with your existing systems. Partner with RAC Financial for reliable transaction handling.`,
    features: [
      "Multiple payment method support",
      "Automated reconciliation",
      "Fraud prevention measures",
      "Real-time transaction reporting",
      "PCI compliance"
    ],
    benefits: [
      "Faster payment processing",
      "Reduced processing costs",
      "Improved cash flow",
      "Enhanced security",
      "Better customer experience"
    ]
  },
  "make-automation": {
    title: "Make.com Automation",
    description: "Streamline workflows with powerful automation tools",
    icon: Workflow,
    longDescription: `Transform your business processes with Make.com automation solutions. We help you identify, implement, and optimize automation opportunities across your organization.`,
    features: [
      "Workflow analysis and optimization",
      "Custom automation scenario development",
      "System integration",
      "Error handling and monitoring",
      "Performance optimization"
    ],
    benefits: [
      "Increased productivity",
      "Reduced manual errors",
      "Time and cost savings",
      "Improved data accuracy",
      "Scalable processes"
    ]
  },
  "claude-ai-agents": {
    title: "Claude AI Agents",
    description: "AI-powered solutions for business automation",
    icon: Bot,
    longDescription: `Leverage the power of Claude AI to automate complex tasks and enhance decision-making processes. Our solutions help you implement AI in practical, business-focused ways.`,
    features: [
      "Custom AI agent development",
      "Natural language processing",
      "Process automation",
      "Data analysis and insights",
      "Integration with existing systems"
    ],
    benefits: [
      "Enhanced decision making",
      "Automated customer support",
      "Improved efficiency",
      "Data-driven insights",
      "Competitive advantage"
    ]
  }
}

type ServiceParams = {
  params: {
    service: string
  }
}

export async function generateMetadata({ params }: ServiceParams): Promise<Metadata> {
  const service = services[params.service as keyof typeof services]
  
  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} | Summerlyn Advisors`,
    description: service.description,
  }
}

export default function ServicePage({ params }: ServiceParams) {
  const service = services[params.service as keyof typeof services]
  
  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <Icon className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600">{service.description}</p>
        </div>

        <div className="prose prose-lg mx-auto mb-12">
          <p>{service.longDescription}</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Key Features</h2>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold">Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
