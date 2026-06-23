import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected projects demonstrating technical depth, product thinking, and breadth across ML, systems, and product engineering.',
}

const featured = [
  {
    title: 'openclean',
    description:
      'Open-source Python library for data profiling, cleaning, and anomaly detection. Developed at NYU VIDA Lab and published at VLDB 2021. Available on PyPI.',
    link: 'https://github.com/VIDA-NYU/openclean',
    tags: ['Python', 'Open Source', 'Research', 'Data Engineering'],
    highlight: 'VLDB 2021 Publication',
    type: 'Research',
  },
  {
    title: 'RuleAI',
    description:
      'GenAI-powered tool that reads underwriting documentation and automatically generates structured impairment rules for Munich Re\'s alitheia platform. Automated 45+ impairments.',
    link: null,
    tags: ['GenAI', 'LLMs', 'Python', 'Enterprise AI'],
    highlight: '45+ impairments automated',
    type: 'AI Product',
  },
  {
    title: 'IAMClan — Batch Scoring Engine',
    description:
      'High-throughput batch scoring system using Azure Batch for large-scale ML model inference. Reduced scoring times from 8 hours to 4 minutes for big data use cases.',
    link: null,
    tags: ['Azure Batch', 'Python', 'MLOps', 'Systems'],
    highlight: '8h → 4min',
    type: 'ML Infrastructure',
  },
  {
    title: 'Twitter Bot Detection',
    description:
      'Machine learning classifier to distinguish bots, cyborgs, and humans on Twitter. Jupyter Notebook-based research with feature engineering on behavioral and network signals.',
    link: 'https://github.com/maqzi/Twitter-Bot-Detection',
    tags: ['Python', 'ML', 'NLP', 'Classification'],
    highlight: 'Most starred project',
    type: 'ML Research',
  },
  {
    title: 'Fundamentals Forecaster',
    description:
      'Python-Flask market intelligence service using DBSCAN clustering and regression models to project SaaS company fundamentals within 1σ of US National Consensus estimates.',
    link: null,
    tags: ['Python', 'Flask', 'DBSCAN', 'Forecasting'],
    highlight: '±1σ accuracy',
    type: 'Data Product',
  },
  {
    title: 'Chillpill',
    description:
      'VR relaxation suite on Oculus Rift for PTSD patients. Built at HackNYU\'17. Won Best Assistive Technology Award. Early demonstration of AI + human-centered design instinct.',
    link: null,
    tags: ['VR', 'Unity', 'Oculus', 'Healthcare'],
    highlight: 'Best Assistive Tech — HackNYU',
    type: 'Hackathon',
  },
  {
    title: 'Eyes',
    description:
      'HackNY project using Clarifai\'s API to identify objects in the environment and read them aloud. Designed for people with visual impairments.',
    link: 'https://github.com/maqzi/Eyes',
    tags: ['Java', 'Computer Vision', 'Accessibility', 'API'],
    highlight: 'HackNY',
    type: 'Hackathon',
  },
]

const additional = [
  {
    title: 'Zanjir',
    description: 'Blockchain-powered supply chain solution built on Ethereum.',
    link: 'https://github.com/maqzi/Zanjir',
    tags: ['JavaScript', 'Solidity', 'Blockchain'],
  },
  {
    title: 'EarthX',
    description: 'Property title management system on the Ethereum blockchain.',
    link: 'https://github.com/maqzi/EarthX',
    tags: ['Solidity', 'Ethereum'],
  },
  {
    title: 'DeMON',
    description: 'Deception Miner for Opinions & Notions — NLP-based opinion analysis.',
    link: 'https://github.com/maqzi/DeMON',
    tags: ['NLP', 'Sentiment Analysis'],
  },
  {
    title: 'openclean-pattern',
    description: 'Companion library to openclean for lexical pattern classification in addresses and dates.',
    link: null,
    tags: ['Python', 'NLP', 'PyPI'],
  },
  {
    title: 'Twitter Sentiment Analysis',
    description: 'Polarity analysis in R using the Twitter Streaming API.',
    link: 'https://github.com/maqzi/Twitter-Sentiment-Analysis',
    tags: ['R', 'NLP', 'Streaming API'],
  },
  {
    title: 'Engro Technical Testing',
    description: 'Recruitment and testing software with centralized knowledge base for a powerplant.',
    link: null,
    tags: ['Systems', 'Enterprise'],
  },
]

const typeColors: Record<string, string> = {
  'Research': 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950',
  'AI Product': 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950',
  'ML Infrastructure': 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950',
  'ML Research': 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950',
  'Data Product': 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950',
  'Hackathon': 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950',
}

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-2xl mb-20">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
          Projects
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
          Selected work demonstrating technical depth, product thinking, and range across ML research,
          AI products, and systems engineering. Curated for signal, not volume.
        </p>
      </div>

      {/* Featured */}
      <section className="mb-20">
        <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-8">
          Featured
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featured.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColors[p.type] || ''}`}>
                    {p.type}
                  </span>
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                )}
              </div>

              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{p.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1 mb-4">
                {p.description}
              </p>

              <div className="flex items-center justify-between gap-4 mt-auto">
                <div className="flex flex-wrap gap-1">
                  {p.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="shrink-0 text-xs text-accent dark:text-accent-light font-medium">
                  {p.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional */}
      <section>
        <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-8">
          Additional work
        </p>
        <div className="space-y-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          {additional.map((p) => (
            <div
              key={p.title}
              className="bg-white dark:bg-neutral-950 px-6 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                      {p.title}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate hidden sm:block">
                      {p.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="hidden md:flex gap-1">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://github.com/maqzi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View all repositories on GitHub
          </a>
        </div>
      </section>
    </div>
  )
}
