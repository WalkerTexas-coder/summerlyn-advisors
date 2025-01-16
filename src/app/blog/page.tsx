import { BlogPost } from "@/components/blog-post"
import blogData from "@/data/blog-posts.json"

export default function BlogPage() {
  return (
    <main className="container py-12">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.posts.map((post) => (
          <BlogPost key={post.id} post={post} isPreview />
        ))}
      </div>
    </main>
  )
}
