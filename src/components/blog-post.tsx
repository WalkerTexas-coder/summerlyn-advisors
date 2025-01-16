interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  author: string
  content: string
  tags: string[]
}

interface BlogPostProps {
  post: BlogPost
  isPreview?: boolean
}

export function BlogPost({ post, isPreview = false }: BlogPostProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="space-y-4 p-6 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-2">
        {isPreview ? (
          <a
            href={`/blog/${post.id}`}
            className="group block space-y-2 no-underline"
          >
            <h2 className="text-2xl font-bold tracking-tight group-hover:text-blue-600">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.description}</p>
          </a>
        ) : (
          <>
            <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
            <p className="text-gray-600">{post.description}</p>
          </>
        )}
        <div className="flex items-center gap-x-4 text-sm text-gray-600">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>•</span>
          <span>{post.author}</span>
        </div>
      </div>
      {!isPreview && (
        <div className="prose prose-blue max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
