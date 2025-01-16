import Image from "next/image"
import Link from "next/link"

export default function DigitalTransformationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Digital Transformation Services</h1>
        <p className="mb-4 text-lg text-gray-600">
          Partner with Axacraft to execute your digital transformation initiatives with confidence. Our expert team brings decades of experience in technology implementation and strategic execution.
        </p>
      </div>

      <div className="mb-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Why Choose Axacraft?</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Expert team with Fortune 100 operational experience</li>
            <li>• Proven track record of successful digital transformations</li>
            <li>• Focus on measurable results and execution</li>
            <li>• Customer-centric approach to technology implementation</li>
            <li>• Strategic planning with practical execution</li>
          </ul>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-2xl font-semibold">Our Capabilities</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Digital strategy development and execution</li>
            <li>• Marketing technology stack optimization</li>
            <li>• Customer experience (CX) development</li>
            <li>• Shopify Plus implementation (via Zeitcore)</li>
            <li>• Enterprise systems integration</li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg bg-blue-50 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Ready to Transform?</h2>
        <p className="mb-4 text-gray-600">
          Take the first step towards successful digital transformation. Our team is ready to help you navigate the complexities of modern technology implementation.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
