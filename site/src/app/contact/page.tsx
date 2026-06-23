import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Munaf Qazi — Director of ML Engineering, based in New York.',
}

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-lg">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
          Get in touch
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-12">
          Open to conversations about AI systems, ML infrastructure, technical leadership, and
          ambitious engineering problems. I read everything.
        </p>

        <div className="space-y-6">
          <a
            href="mailto:munaf@nyu.edu"
            className="flex items-center gap-4 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:border-accent dark:hover:border-accent-light transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent-light/10 flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B5BDB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                munaf@nyu.edu
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Primary — best way to reach me</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/maqzi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-600 dark:text-neutral-400">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                linkedin.com/in/maqzi
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">For professional connection requests</p>
            </div>
          </a>

          <a
            href="https://github.com/maqzi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-600 dark:text-neutral-400">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                github.com/maqzi
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Code and open source projects</p>
            </div>
          </a>
        </div>

        <div className="mt-12 pt-10 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Based in New York City. Generally responsive within 48 hours.
          </p>
        </div>
      </div>
    </div>
  )
}
