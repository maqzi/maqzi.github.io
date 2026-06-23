import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Detailed case studies of AI systems, MLOps platforms, and enterprise products built at Munich Re and beyond.',
}

const cases = [
  {
    id: 'rules-studio',
    title: 'alitheia Rules Studio',
    period: '2024 – Present',
    role: 'Creator & Tech Lead',
    company: 'Munich Re Integrated Analytics',
    tagline: 'Risk assessment program design and decisioning platform at enterprise scale.',
    metrics: [
      { label: 'Assessments/year', value: '100M+' },
      { label: 'Clients self-managing rules', value: '20+' },
      { label: 'Impairments automated', value: '45+' },
    ],
    story: [
      {
        heading: 'The problem',
        body: 'Munich Re\'s underwriting clients needed to design, test, and manage complex risk assessment rules — but the existing tooling required engineering involvement at every step, slowing client onboarding and limiting scale.',
      },
      {
        heading: 'What I built',
        body: 'I created alitheia Rules Studio from the ground up: a self-service platform that lets clients design risk assessment programs and manage decisioning logic independently. I served as both creator and tech lead — driving architecture, contributing Python backend and React frontend, and leading a secure Kubernetes deployment with InfoSec and DevOps.',
      },
      {
        heading: 'The AI layer: RuleAI',
        body: 'Within Rules Studio, I built RuleAI — a GenAI-powered tool that reads underwriting documentation and automatically generates impairment rules. This compressed what previously took weeks of manual rule authoring into an automated pipeline, enabling client onboarding for 45+ impairments.',
      },
      {
        heading: 'Leadership context',
        body: 'This work led to my selection for Oxygen — Munich Re\'s accelerated leadership development program representing the top 20 high-potential leaders globally.',
      },
    ],
    stack: ['Python', 'React', 'Kubernetes', 'GenAI / LLMs', 'Azure', 'BPMN'],
  },
  {
    id: 'iamd',
    title: 'IAMD — Integrated Analytics ML Platform',
    period: '2023 – 2024',
    role: 'Staff ML Engineer & Tech Lead',
    company: 'Munich Re Integrated Analytics',
    tagline: 'Enterprise MLOps platform enabling ML teams to deploy models in minutes, not weeks.',
    metrics: [
      { label: 'Deployment time reduction', value: '95%' },
      { label: 'Platform utilization increase (6mo)', value: '80%' },
      { label: 'Use cases onboarded', value: '100%' },
      { label: 'MLOps maturity level reached', value: 'L2' },
    ],
    story: [
      {
        heading: 'The problem',
        body: 'The ML team had no standardized path from model development to production. Deployment was manual, error-prone, and could take weeks. There was no observability, no governance, and no shared infrastructure for model management.',
      },
      {
        heading: 'The platform',
        body: 'I designed and built IAMD — a one-stop MLOps platform using GitOps pipelines, MLflow for experiment tracking, Postgres for metadata, Docker containers on Kubernetes for serving, and Azure as the cloud substrate. The entire system was deployed with Infrastructure as Code via Terraform, maintaining US/CA parity across SDLC stages.',
      },
      {
        heading: 'Operational innovations',
        body: 'I implemented Blue-Green deployment and shadow release strategies, eliminating deployment-related downtime. For big data scoring, I engineered IAMClan — a batch scoring product on Azure Batch that cut scoring times from 8 hours to 4 minutes. I also procured and integrated Aporia for model observability, monitoring, and drift detection.',
      },
      {
        heading: 'Team and adoption',
        body: 'I led a team of 10 engineers and managed the platform vision and roadmap for intercompany adoption. Within 6 months: 80% increase in platform utilization. Within a year: 100% of use cases onboarded. Stakeholder satisfaction (our "zen-ness" score): 8.5/10.',
      },
    ],
    stack: ['Python', 'MLflow', 'Docker', 'Kubernetes', 'Terraform', 'Azure', 'GitOps', 'Postgres', 'Argo'],
  },
  {
    id: 'openclean',
    title: 'openclean',
    period: '2020 – 2021',
    role: 'Research Scientist',
    company: 'NYU VIDA Lab',
    tagline: 'Open-source Python library for data profiling, cleaning, and anomaly detection. Published at VLDB 2021.',
    metrics: [
      { label: 'Venue', value: 'VLDB 2021' },
      { label: 'Release', value: 'PyPI' },
      { label: 'Companion package', value: 'openclean-pattern' },
    ],
    story: [
      {
        heading: 'Research context',
        body: 'At NYU\'s VIDA lab, I worked on foundational data management problems: how do you reliably profile, track provenance, and detect anomalies in real-world datasets — the unglamorous work that determines whether downstream ML models are trustworthy.',
      },
      {
        heading: 'The library',
        body: 'I developed openclean — a Python library providing a composable set of data cleaning and profiling operators. The work was grounded in research on data provenance and anomaly detection techniques, and culminated in a publication at the International Conference on Very Large Databases (VLDB 2021).',
      },
      {
        heading: 'openclean-pattern',
        body: 'As a companion, I built openclean-pattern: a library for lexical pattern classification and multiple sequence alignment for non-standard data types like addresses and dates. Released independently on PyPI.',
      },
      {
        heading: 'Vizier',
        body: 'I also upgraded NYU VIDA\'s Vizier — a reproducible, versioned, shareable notebook implementation. My contributions included multithreading, a suite of cleaning operators, and A/B-tested UX improvements to the React-based interface.',
      },
    ],
    stack: ['Python', 'PyPI', 'Research', 'Data Profiling', 'Anomaly Detection', 'React'],
  },
  {
    id: 'fundamentals-forecaster',
    title: 'Fundamentals Forecaster',
    period: '2018 – 2019',
    role: 'Data Scientist',
    company: 'Surgo Group',
    tagline: 'SaaS market intelligence platform projecting company fundamentals within one standard deviation of US consensus.',
    metrics: [
      { label: 'Forecast accuracy', value: '±1σ of consensus' },
      { label: 'Shopify stores tracked', value: '~2M weekly' },
      { label: 'Team delivery improvement', value: '50%' },
    ],
    story: [
      {
        heading: 'The problem',
        body: 'Fundamental data about private SaaS companies is sparse and lagging. Surgo needed a way to generate timely, reliable projections of web traffic and financial performance from publicly available signals.',
      },
      {
        heading: 'The system',
        body: 'I designed and built Fundamentals Forecaster — a Python-Flask service that spatially clusters SaaS domains using density-based algorithms (DBSCAN), then runs regressions on quarterly web traffic and historical company data to generate forward projections. The system achieved accuracy within 1 standard deviation of US National Consensus estimates.',
      },
      {
        heading: 'Data pipeline at scale',
        body: 'I also built a weekly churn-rate tracker covering ~2M Shopify web stores, procured via reverse ASN IP lookups in DNS zone files, followed by parsing membership tier landing pages on EC2. A MongoDB cluster backed Tableau dashboards tracking product availability across 15+ labels at Amazon, Walmart, and others.',
      },
      {
        heading: 'Surgo Labs',
        body: 'I led Surgo Labs — a cross-functional data incubator — while also product managing 12 developers in a different timezone using JIRA. I improved average delivery turnaround by 50% through workflow optimization.',
      },
    ],
    stack: ['Python', 'Flask', 'DBSCAN', 'MongoDB', 'AWS EC2', 'Tableau', 'ARIMA', 'Random Forests'],
  },
]

export default function Work() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-2xl mb-20">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
          Work
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
          Case studies of systems built, platforms shipped, and teams led. Each entry covers the
          problem, the architecture, and the outcome — not just the job description.
        </p>
      </div>

      <div className="space-y-24">
        {cases.map((c) => (
          <article key={c.id} id={c.id}>
            {/* Header */}
            <div className="mb-8 pb-8 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  {c.period}
                </span>
                <span className="text-xs text-neutral-300 dark:text-neutral-600">·</span>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">{c.company}</span>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                {c.title}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6">{c.tagline}</p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-4">
                {c.metrics.map(({ label, value }) => (
                  <div key={label} className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-3">
                    <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 leading-none mb-1">
                      {value}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Story */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {c.story.map(({ heading, body }) => (
                <div key={heading} className="md:first:col-span-1">
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {heading}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5">
              {c.stack.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
