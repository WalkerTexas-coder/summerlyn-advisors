import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Bridging Technology and{" "}
              <span className="text-blue-600">Human Understanding</span>
            </h1>
            <p className="mb-12 text-lg leading-relaxed text-gray-600">
              We transform complex enterprise technology into accessible, human-centric solutions. 
              Our expertise bridges the gap between powerful systems and the people who use them.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-2 rounded-lg border px-8 py-3 hover:bg-gray-50"
              >
                Our Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
                Enterprise Technology Made Human
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                We believe that enterprise technology should empower, not overwhelm. Our approach combines technical expertise with a deep understanding of human needs, creating solutions that work for your team.
              </p>
              <ul className="space-y-4">
                {[
                  "Tailored solutions that fit your workflow",
                  "Clear communication and transparent processes",
                  "Ongoing support and training",
                  "Future-proof implementations",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg bg-blue-100 flex items-center justify-center">
                <div className="text-blue-600 text-lg font-medium">
                  Team Collaboration Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="border-y bg-gray-50 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-sm font-semibold uppercase tracking-wider text-gray-600">
            Trusted Technology Partners
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {[
              { 
                name: "Odoo", 
                logo: "/images/odoo_ready_partners_rgb.svg",
                url: "https://www.odoo.com/"
              },
              { 
                name: "RAC Financial", 
                logo: "/images/RAC-Financial-Logo.svg",
                url: "/services/rac-financial"
              },
              { 
                name: "axacraft.com", 
                logo: "/partners/axacraft.svg",
                url: "https://www.axacraft.com/"
              },
            ].map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center"
              >
                {partner.url ? (
                  <Link
                    href={partner.url}
                    className="block relative h-24 w-64 hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className={`object-contain ${
                        partner.name === "RAC Financial" ? "invert" : ""
                      }`}
                    />
                  </Link>
                ) : (
                  <div className="relative h-24 w-64">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className={`object-contain ${
                        partner.name === "RAC Financial" ? "invert" : ""
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Success Stories</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              See how we&apos;ve helped organizations transform their operations with
              enterprise technology solutions.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Healthcare Provider Transformation",
                description:
                  "Complete HIPAA compliance and telehealth implementation for a multi-location healthcare provider.",
                metric: "40% reduction in administrative overhead",
              },
              {
                title: "Manufacturing ERP Success",
                description:
                  "Streamlined operations with Odoo ERP implementation for a growing manufacturer.",
                metric: "60% improvement in inventory accuracy",
              },
              {
                title: "Payment Processing Integration",
                description:
                  "Seamless integration of RAC Financial payment processing for a retail chain.",
                metric: "99.9% payment processing uptime",
              },
            ].map((study) => (
              <div
                key={study.title}
                className="rounded-lg border bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 text-xl font-semibold">{study.title}</h3>
                <p className="mb-4 text-gray-600">{study.description}</p>
                <p className="font-medium text-blue-600">{study.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
