import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Thoughts on ML systems, AI products, engineering leadership, and building at scale.',
}

export default function Writing() {
  const posts = getAllPosts()

  const byYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = new Date(post.date).getFullYear().toString()
    if (!acc[year]) acc[year] = []
    acc[year].push(post)
    return acc
  }, {})

  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a))

  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-2xl mb-20">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
          Writing
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
          Thoughts on ML systems, building AI products at enterprise scale, engineering leadership,
          and the craft of technical decision-making.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-neutral-400 dark:text-neutral-500 text-sm">Posts coming soon.</p>
        </div>
      ) : (
        <div className="space-y-16">
          {years.map((year) => (
            <section key={year}>
              <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-8">
                {year}
              </p>
              <div className="space-y-8">
                {byYear[year].map((post) => (
                  <Link key={post.slug} href={`/writing/${post.slug}`} className="block group">
                    <div className="flex items-baseline justify-between gap-6 mb-1">
                      <h2 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                        {post.title}
                      </h2>
                      <div className="shrink-0 flex items-center gap-3 text-neutral-400 dark:text-neutral-500 text-sm">
                        <span>{post.readingTime}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{post.excerpt}</p>
                    {post.tags.length > 0 && (
                      <div className="flex gap-1.5">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
