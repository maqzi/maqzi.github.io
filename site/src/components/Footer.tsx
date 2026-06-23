import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} Munaf Arshad Qazi
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:munaf@nyu.edu"
            className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/maqzi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/maqzi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
