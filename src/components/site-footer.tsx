import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Summerlyn Advisors</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Bridging technology and human understanding through innovative enterprise solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: "ERP Implementation", href: "/services/erp" },
                { name: "Payment Processing", href: "/services/rac-financial" },
                { name: "System Integration", href: "/services/integration" },
                { name: "Digital Transformation", href: "/services/transformation" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-sm">
                  123 Business Avenue
                  <br />
                  Suite 100
                  <br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-400" />
                <Link href="tel:+1234567890" className="text-sm hover:text-white transition-colors">
                  (123) 456-7890
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-400" />
                <Link href="mailto:info@summerlyadvisors.com" className="text-sm hover:text-white transition-colors">
                  info@summerlyadvisors.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Summerlyn Advisors. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 space-x-4">
              <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
