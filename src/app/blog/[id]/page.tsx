import { notFound } from "next/navigation"
import { BlogPost } from "@/components/blog-post"
import blogData from "@/data/blog-posts.json"

export function generateStaticParams() {
  return blogData.posts.map((post) => ({
    id: post.id,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { id: string }
}) {
  const post = blogData.posts.find((post) => post.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <main className="container py-12">
      <BlogPost post={post} />
    </main>
  )
}
