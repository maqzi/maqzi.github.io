import Link from 'next/link'
import { getFeaturedPosts } from '@/lib/posts'

const expertise = [
  { label: 'ML Systems', detail: 'MLOps platforms, model deployment, observability' },
  { label: 'AI Products', detail: 'GenAI applications, LLM pipelines, decision engines' },
  { label: 'Engineering Leadership', detail: 'Teams of 10+, roadmaps, cross-functional delivery' },
  { label: 'Cloud Infrastructure', detail: 'Kubernetes, Terraform, Azure, IaC at scale' },
]

const selectedWork = [
  {
    title: 'alitheia Rules Studio',
    role: 'Creator & Tech Lead',
    company: 'Munich Re',
    description:
      'Risk assessment platform processing 100M+ decisions per year. Led end-to-end delivery — architecture, backend, frontend, and Kubernetes deployment.',
    tags: ['Product', 'Python', 'React', 'Kubernetes'],
    metric: '100M+ assessments/year',
  },
  {
    title: 'IAMD MLOps Platform',
    role: 'Staff ML Engineer',
    company: 'Munich Re',
    description:
      'Designed and built the Integrated Analytics ML deployment platform from scratch. Reduced model deployment times by 95% and elevated team to MLOps maturity level 2.',
    tags: ['MLOps', 'GitOps', 'MLflow', 'Terraform'],
    metric: '95% faster deployments',
  },
  {
    title: 'openclean',
    role: 'Research Scientist',
    company: 'NYU VIDA',
    description:
      'Open-source Python data cleaning library. Researched data profiling, provenance, and anomaly detection. Published at VLDB 2021.',
    tags: ['Open Source', 'Python', 'Research', 'PyPI'],
    metric: 'VLDB 2021',
  },
]

export default async function Home() {
  const posts = await getFeaturedPosts(2)

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-40 pb-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent dark:text-accent-light tracking-wide uppercase mb-6">
            Director of ML Engineering · Munich Re · New York
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-neutral-900 dark:text-neutral-100 mb-8">
            Building AI systems
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">from model to product.</span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10 max-w-xl">
            I architect ML infrastructure, ship enterprise AI products, and lead the engineering
            teams that make both possible. Twelve years spanning research, data systems, and
            production AI at scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
            >
              View work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="mailto:munaf@nyu.edu"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm font-medium hover:border-neutral-500 dark:hover:border-neutral-500 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800" />

      {/* Expertise */}
      <section className="py-20">
        <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-10">
          Areas of depth
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          {expertise.map(({ label, detail }) => (
            <div
              key={label}
              className="bg-white dark:bg-neutral-950 p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors group"
            >
              <p className="font-medium text-neutral-900 dark:text-neutral-100 mb-1.5 group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                {label}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="pb-20">
        <div className="flex items-center justify-between mb-10">
          <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
            Selected work
          </p>
          <Link
            href="/work"
            className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            All experience →
          </Link>
        </div>
        <div className="space-y-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          {selectedWork.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-neutral-950 p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-100">{item.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {item.role} · {item.company}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-semibold text-accent dark:text-accent-light bg-accent/8 dark:bg-accent-light/10 px-2.5 py-1 rounded-full">
                  {item.metric}
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent writing */}
      {posts.length > 0 && (
        <section className="pb-20">
          <div className="flex items-center justify-between mb-10">
            <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
              Recent writing
            </p>
            <Link
              href="/writing"
              className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              All posts →
            </Link>
          </div>
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/writing/${post.slug}`} className="block group">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                    {post.title}
                  </h3>
                  <span className="shrink-0 text-sm text-neutral-400 dark:text-neutral-500">
                    {post.date}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="pb-24">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-10 text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
            Building something interesting?
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-md mx-auto">
            I&apos;m always open to conversations about AI products, ML infrastructure, and ambitious technical problems.
          </p>
          <a
            href="mailto:munaf@nyu.edu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
          >
            munaf@nyu.edu
          </a>
        </div>
      </section>
    </div>
  )
}
