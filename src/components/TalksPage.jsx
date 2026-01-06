import { talks } from '../data/talks'
import { FaExternalLinkAlt } from 'react-icons/fa'

export function TalksPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-black text-text mb-2">
            <span className="font-calligraphic font-black bg-gradient-to-r from-sky-600 via-teal-500 to-indigo-600 dark:from-sky-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent">
              Talks
            </span>
          </h1>
          <p className="text-sm text-text-subtle">
            Speaking about systems, data layers, and the trade-offs behind real products.
          </p>
        </div>

        {talks.length === 0 ? (
          <p className="text-text-subtle text-sm">No talks yet. Check back later.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {talks.map((talk) => (
              <article
                key={talk.id}
                className="bg-surface/95 border border-border/80 rounded-2xl p-6 lg:p-8 hover:border-accent/60 hover:shadow-lg transition-all duration-200 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold tracking-[0.18em] uppercase text-text-subtle">
                    {talk.year}
                  </div>
                </div>

                <h2 className="text-xl lg:text-2xl font-semibold text-text">
                  {talk.title}
                </h2>

                <p className="text-sm text-text-muted">{talk.event}</p>

                {talk.description && (
                  <p className="text-sm text-text-subtle leading-relaxed">
                    {talk.description}
                  </p>
                )}

                <div className="mt-2 flex flex-wrap gap-4 text-sm">
                  <a
                    href="https://emberfest.mehul.wiki/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link hover:text-accent-hover inline-flex items-center gap-1.5"
                  >
                    Slides
                    <FaExternalLinkAlt className="w-3 h-3 text-orange-500 dark:text-orange-400" />
                  </a>
                  {talk.link && (
                    <a
                      href={talk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link hover:text-accent-hover inline-flex items-center gap-1.5"
                    >
                      YouTube
                      <FaExternalLinkAlt className="w-3 h-3 text-orange-500 dark:text-orange-400" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}


