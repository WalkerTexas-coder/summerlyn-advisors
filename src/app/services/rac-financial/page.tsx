import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, CreditCard, Clock, DollarSign, Headphones, Terminal } from "lucide-react"

export default function RacFinancialPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Experience the Results
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              RAC Financial has the integration of partner solutions that every business owner needs to be successful. 
              We help make payment processing simple, secure, and reliable by using state-of-the-art tokenization standards 
              that are required on all businesses. We care about you and your business, and we will do our very best to serve you. 
              Your success is our success.
            </p>
            <div>
              <Link
                href="/services/rac-financial/connect"
                className="inline-flex rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Unparalleled Service",
                description: "Our dedicated associates are at your fingertips to help you with your processing needs with no additional charge!",
                icon: Headphones,
              },
              {
                title: "Equipment Solutions",
                description: "We offer most terminals and point-of-sale systems available on the market, and can also reprogram your existing equipment!",
                icon: Terminal,
              },
              {
                title: "Low-Rate Guarantee",
                description: "We provide competitive credit card processing rates and will never arbitrarily raise your prices. There are no hidden numbers.",
                icon: DollarSign,
              },
              {
                title: "Committed to Security",
                description: "Protect your transactions with Point-to-Point Encryption, PCI Scope reduction, complete EMV protection, and more.",
                icon: Shield,
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-lg border bg-white p-6 shadow-sm">
                <feature.icon className="mb-4 h-8 w-8 text-blue-600" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Card Processing Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Credit Card Merchant Processing</h2>
            <p className="mb-8 text-lg text-gray-600">
              Daily transactions are the life force of your business. We understand how crucial it is 
              for your processing to be working seamlessly every day.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">Efficient. Reliable. Trusted.</h3>
              <p className="mb-6 text-gray-600">
                From authorization to batching, clearing and funding, your transactions all need to be 
                scanned properly to ensure the validity of each purchase. Our team at RAC Financial is 
                constantly on the lookout for more ways to strengthen our processing services.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg border bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">State of The Art Security For Your Business</h3>
              <p className="mb-6 text-gray-600">
                Creating a secure environment for your customers' data is an essential component of a 
                reputable business. We have spent years building a solid system of processing, storing 
                and transmitting information across various payment terminals.
              </p>
              <p className="mb-6 text-gray-600">
                RAC Financial is committed to ensuring the credible transfer of all your sales. We have 
                right the tools and years of experience to support your business with every swipe.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
