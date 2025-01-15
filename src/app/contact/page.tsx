"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const services = [
  { id: "odoo-implementation", name: "Odoo Implementation" },
  { id: "hipaa-compliance", name: "HIPAA Compliance" },
  { id: "telehealth-solutions", name: "Telehealth Solutions" },
  { id: "payment-processing", name: "Payment Processing" },
  { id: "make-automation", name: "Make.com Automation" },
  { id: "claude-ai-agents", name: "Claude AI Agents" },
]

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Here you would typically send the data to your backend
      console.log("Form data:", data)
      setSubmitSuccess(true)
      reset()
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>
      <div className="mx-auto max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="service"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Service
            </label>
            <select
              {...register("service")}
              id="service"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              {...register("message")}
              id="message"
              rows={4}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {submitSuccess && (
          <div className="mt-4 rounded-lg bg-green-100 p-4 text-green-700">
            Thank you for your message! We&apos;ll get back to you soon.
          </div>
        )}
      </div>
    </div>
  )
}
