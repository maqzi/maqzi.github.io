import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const postsDir = path.join(process.cwd(), 'src/content/posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: string
}

export interface Post extends PostMeta {
  content: string
}

function getReadingTime(content: string): string {
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min read`
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return []

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.(md|mdx)$/, '')
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        excerpt: data.excerpt ?? '',
        tags: data.tags ?? [],
        readingTime: getReadingTime(content),
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getFeaturedPosts(count = 3): Promise<PostMeta[]> {
  return getAllPosts().slice(0, count)
}

export async function getPost(slug: string): Promise<Post | null> {
  const mdx = path.join(postsDir, `${slug}.mdx`)
  const md = path.join(postsDir, `${slug}.md`)
  const filepath = fs.existsSync(mdx) ? mdx : fs.existsSync(md) ? md : null
  if (!filepath) return null

  const raw = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(remarkHtml).process(content)
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    tags: data.tags ?? [],
    readingTime: getReadingTime(content),
    content: processed.toString(),
  }
}
