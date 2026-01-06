import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { GitMergeIcon, GitPullRequestIcon } from '@primer/octicons-react'
import { topOpenSource } from '../data/openSource'

export function OpenSourceSection() {
  if (topOpenSource.length === 0) {
    return null
  }

  return (
    <section>
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-display font-light text-text mb-2">
            Open{' '}
            <span className="font-calligraphic font-bold bg-gradient-to-r from-sky-500 via-teal-400 to-indigo-500 dark:from-sky-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent">
              Source
            </span>
          </h2>
          <p className="text-sm text-text-subtle">Selected contributions (manually curated)</p>
        </div>
        <Link 
          to="/open-source"
          className="text-sm text-accent hover:text-accent-hover transition-colors flex items-center gap-1 font-medium"
        >
          View all
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topOpenSource.map((pr) => (
          <a
            key={pr.id}
            href={pr.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="h-full bg-surface/95 border border-border/80 rounded-2xl p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-lg flex flex-col">
              <div className="h-1 w-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-500 dark:from-purple-500 dark:via-fuchsia-500 dark:to-purple-500 mb-4" />
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <FaGithub className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{pr.repo}</span>
                </div>
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium flex-shrink-0 ${
                  pr.status === 'merged'
                    ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                    : 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20'
                }`}>
                  {pr.status === 'merged' ? (
                    <GitMergeIcon size={12} />
                  ) : (
                    <GitPullRequestIcon size={12} />
                  )}
                  {pr.status}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-text mb-3 group-hover:text-accent transition-colors line-clamp-2 flex-grow">
                {pr.title}
              </h3>
              
              {pr.description && (
                <p className="text-sm text-text-subtle line-clamp-3 mb-4 flex-grow">
                  {pr.description.length > 120
                    ? `${pr.description.substring(0, 120)}...`
                    : pr.description}
                </p>
              )}

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <span className="text-xs text-text-subtle">
                  {new Date(pr.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </span>
                <span className="text-xs text-accent group-hover:text-accent-hover transition-colors flex items-center gap-1 font-medium">
                  View PR
                  <FaExternalLinkAlt className="w-3 h-3" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
