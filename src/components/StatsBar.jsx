import { useGithub } from '../context/GithubContext'
import { FaSpotify } from 'react-icons/fa'

function formatYearsSince(startYear) {
  const now = new Date()
  return (now.getFullYear() - startYear).toString()
}

export function StatsBar() {
  const { contributions, isLoading } = useGithub()

  const totalPRs = contributions.length
  const mergedPRs = contributions.filter((pr) => pr.status === 'merged').length

  const items = [
    {
      label: 'Years in production',
      value: formatYearsSince(2021),
      hint: 'Shipping software used by real users',
    },
    {
      label: 'Open source PRs',
      value: isLoading ? '—' : totalPRs,
      hint: isLoading ? 'Fetching GitHub data' : `${mergedPRs} merged`,
    },
    {
      label: 'Systems owned',
      value: '3+',
      hint: 'Feature areas & services I was responsible for',
    },
    {
      label: 'Talks & sessions',
      value: '1',
      hint: 'Starting to share more in public',
    },
  ]

  return (
    <section>
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-text-subtle">
          Stats for engineers
        </p>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Live
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface/95 px-4 py-3 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-sky-500 via-teal-400 to-indigo-500 dark:from-sky-400 dark:via-teal-300 dark:to-indigo-400" />
            <p className="text-xs text-text-subtle mb-1">{item.label}</p>
            <p className="text-xl font-semibold text-text mb-1">{item.value}</p>
            <p className="text-xs text-text-subtle">{item.hint}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1DB954] text-white">
            <FaSpotify className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-subtle">Now Playing</p>
            <p className="text-sm text-text-muted">Not playing — Spotify</p>
          </div>
        </div>
        <div className="text-xs text-text-subtle">
          Built to plug into a private now-playing endpoint when needed.
        </div>
      </div>
    </section>
  )
}

