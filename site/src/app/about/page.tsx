import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Munaf Qazi — Director of ML Engineering at Munich Re. NYU CS graduate. Research scientist turned technical leader.',
}

const timeline = [
  {
    year: '2024 – Now',
    title: 'Director of ML Engineering',
    org: 'Munich Re, New York',
    highlights: [
      'Creator and tech lead of alitheia Rules Studio — a risk decisioning platform processing 100M+ assessments per year',
      'Pioneered alitheia Labs, reducing AI prototype validation time by 50%',
      'Built RuleAI — GenAI-powered underwriting impairment automation for 45+ impairments',
      'Selected for Oxygen, Munich Re\'s global accelerated leadership cohort (top 20 leaders globally)',
    ],
  },
  {
    year: '2023 – 2024',
    title: 'Staff ML Engineer',
    org: 'Munich Re, New York',
    highlights: [
      'Tech lead for the ML infrastructure team of 10 engineers',
      'Designed IAMD — the Integrated Analytics MLOps platform; 95% reduction in model deployment times',
      'Engineered IAMClan batch scoring on Azure Batch: 8 hours → 4 minutes',
      'Led intercompany platform adoption — 80% increase in utilization in 6 months',
    ],
  },
  {
    year: '2022 – 2023',
    title: 'ML Engineer',
    org: 'Munich Re, New York',
    highlights: [
      'Implemented XGBoost mortality risk models on APS/EHR/LexisNexis data',
      'Integrated BERT-based NLP to extract impairments from free text — improved STP rates by 3%',
      'Presented ML achievements at Pydata, NYU, and UPenn',
    ],
  },
  {
    year: '2020 – 2021',
    title: 'Research Scientist',
    org: 'NYU VIDA Lab',
    highlights: [
      'Built openclean — an open-source Python data cleaning library, published at VLDB 2021',
      'Developed openclean-pattern for lexical pattern classification, released on PyPI',
      'Upgraded Vizier — NYU\'s reproducible notebook platform — with multithreading and A/B-tested UX',
    ],
  },
  {
    year: '2018 – 2019',
    title: 'Data Scientist (Systems Design)',
    org: 'Surgo Group, New York',
    highlights: [
      'Built Fundamentals Forecaster — a SaaS market prediction service within 1σ of US consensus estimates',
      'Engineered data pipelines tracking ~2M Shopify stores weekly via reverse ASN IP lookups',
      'Led Surgo Labs, a cross-functional data incubator delivering 10+ data products',
      'Product manager for 12 offshore developers, improving delivery turnaround by 50%',
    ],
  },
  {
    year: '2015 – 2015',
    title: 'Research & Teaching Fellow',
    org: 'LUMS, Lahore',
    highlights: [
      'Trained AdaBoost ad-blocking classifiers with 80% accuracy using skin tone, faces, and text features',
      'Led academic responsibilities for 250 students; managed 20 teaching assistants',
    ],
  },
]

const education = [
  {
    degree: 'MS in Computer Science',
    school: 'New York University, School of Engineering',
    year: '2016 – 2017',
    note: 'CGPA 3.94 · NYU Academic Achievement Award (top 1%)',
  },
  {
    degree: 'Certificate in Innovation & Technology',
    school: 'MIT Professional Education',
    year: '2023 – 2025',
    note: '',
  },
  {
    degree: 'BS in Electrical Engineering',
    school: 'LUMS, SBA School of Science & Engineering',
    year: '2010 – 2014',
    note: 'Pakistan National Scholarship (twice)',
  },
]

const publications = [
  {
    title: 'From Papers to Practice: The openclean Open-Source Data Cleaning Library',
    venue: 'VLDB 2021',
  },
  {
    title: 'Benchmarking Supervised Learning Frameworks for Engineering Highly Scalable Intelligent Systems',
    venue: 'CAS 2018',
  },
  {
    title: 'Low-Carb: Reducing Energy Consumption in Operational Cellular Networks',
    venue: 'IEEE GlobeCom 2013',
  },
]

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6">
          About
        </h1>
        <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <p>
            I&apos;m Munaf Qazi — a machine learning engineer and technical leader based in New York City.
            Currently serving as Director of ML Engineering at Munich Re&apos;s Integrated Analytics team,
            where I lead a team building AI systems that process risk decisions at enterprise scale.
          </p>
          <p>
            My career has followed an unusual path: from electrical engineering research in Pakistan,
            to a CS graduate degree at NYU, to data science in a startup, to research at NYU&apos;s VIDA lab,
            and finally to building and leading ML platforms and products at a global reinsurer.
            The throughline is a persistent interest in making machine learning actually work in production —
            the infrastructure, the tooling, the teams, and the products.
          </p>
          <p>
            I&apos;ve published at VLDB, spoken at Pydata, NYU, and UPenn, and been selected
            for Munich Re&apos;s Oxygen leadership cohort — representing the top 20 high-potential
            leaders across the global organization.
          </p>
          <p>
            Outside of work: plant dad (hence the tagline), community builder as President of
            IC Professionals in NYC, and adjunct faculty at Cordoba House mentoring young adults.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <section className="mb-20">
        <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-10">
          Experience
        </p>
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-8 pb-12 relative">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-accent dark:bg-accent-light mt-1.5 shrink-0" />
                {i < timeline.length - 1 && (
                  <div className="w-px flex-1 bg-neutral-200 dark:bg-neutral-800 mt-2" />
                )}
              </div>
              <div className="flex-1 min-w-0 pb-2">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-100">{item.title}</h3>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">· {item.org}</span>
                </div>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-3">{item.year}</p>
                <ul className="space-y-1.5">
                  {item.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-neutral-600 dark:text-neutral-400 flex gap-2">
                      <span className="shrink-0 text-neutral-300 dark:text-neutral-600 mt-1">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-20">
        <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-8">
          Education
        </p>
        <div className="space-y-6">
          {education.map((e, i) => (
            <div key={i}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">{e.degree}</h3>
                <span className="shrink-0 text-sm text-neutral-400 dark:text-neutral-500">{e.year}</span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">{e.school}</p>
              {e.note && (
                <p className="text-xs text-accent dark:text-accent-light mt-1">{e.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="mb-20">
        <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-8">
          Publications
        </p>
        <div className="space-y-5">
          {publications.map((pub, i) => (
            <div key={i} className="flex items-baseline gap-4">
              <span className="shrink-0 text-xs font-semibold text-accent dark:text-accent-light bg-accent/8 dark:bg-accent-light/10 px-2 py-0.5 rounded">
                {pub.venue}
              </span>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">{pub.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section>
        <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-8">
          Recognition
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { award: 'Oxygen Leadership Cohort', detail: "Munich Re's accelerated leadership program, top 20 globally" },
            { award: 'NYU Academic Achievement Award', detail: 'Awarded to top 1% of the graduating class' },
            { award: 'Best Assistive Tech — HackNYU', detail: 'Chillpill: VR relaxation suite for PTSD patients on Oculus Rift' },
            { award: 'Pakistan National Scholarship', detail: 'Twice — awarded to top 10 percentile nationally' },
            { award: 'Blockchain Developer Nanodegree', detail: 'Solidity, Truffle, Ganache, Infura, Web3.js' },
          ].map(({ award, detail }) => (
            <div key={award} className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{award}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
