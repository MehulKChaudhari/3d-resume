import { talks } from '../data/talks'

export function TalksSection() {
  const featured = talks[0]

  return (
    <section>
      <div className="mb-12 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-text mb-1">
            <span className="font-calligraphic font-black bg-gradient-to-r from-sky-600 via-teal-500 to-indigo-600 dark:from-sky-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent">
              Talks
            </span>
          </h2>
          <p className="text-sm text-text-subtle">Speaking engagements and presentations</p>
        </div>
        <a href="/talks" className="link text-xs sm:text-sm hover:text-accent-hover whitespace-nowrap">
          View all talks →
        </a>
      </div>

      {!featured ? (
        <p className="text-text-subtle text-sm">No talks yet. Check back later.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 space-y-4">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-subtle">
              EmberFest Europe 2025 — Brussels
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-text">
              {featured.title}
            </h3>
            {featured.description && (
              <p className="text-sm text-text-subtle leading-relaxed">
                {featured.description}
              </p>
            )}
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="https://emberfest.mehul.wiki/"
                target="_blank"
                rel="noopener noreferrer"
                className="link hover:text-accent-hover"
              >
                Slides
              </a>
              {featured.link && (
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link hover:text-accent-hover"
                >
                  YouTube
                </a>
              )}
            </div>
          </div>

          {featured.link && (
            <div className="flex-1 w-full rounded-2xl border border-border bg-surface/95 overflow-hidden shadow-sm">
              <div className="relative pt-[56.25%]">
                <iframe
                  src="https://www.youtube.com/embed/_gr7HbcZiSs"
                  title={featured.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
