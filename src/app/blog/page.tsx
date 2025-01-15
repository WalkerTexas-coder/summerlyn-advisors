export default function BlogPage() {
  const posts = [
    {
      title: "The Future of ERP Systems with Odoo",
      date: "January 15, 2024",
      excerpt:
        "Explore how modern ERP systems are evolving and why Odoo stands out in the enterprise software landscape.",
      category: "Enterprise Solutions",
    },
    {
      title: "HIPAA Compliance in the Digital Age",
      date: "January 10, 2024",
      excerpt:
        "Understanding the challenges and solutions for maintaining HIPAA compliance in modern healthcare technology.",
      category: "Healthcare",
    },
    {
      title: "Automating Workflows with Make.com",
      date: "January 5, 2024",
      excerpt:
        "Learn how to leverage Make.com to create powerful automation workflows for your business processes.",
      category: "Automation",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-2 text-sm text-blue-600">{post.category}</div>
            <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
            <p className="mb-4 text-gray-600">{post.excerpt}</p>
            <div className="text-sm text-gray-500">{post.date}</div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">More articles coming soon!</p>
      </div>
    </div>
  )
}
