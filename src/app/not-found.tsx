import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container flex min-h-[40vh] flex-col items-center justify-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Page Not Found</h1>
        <p className="mb-8 text-lg text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. Please check the URL
          or navigate back to our homepage.
        </p>
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
