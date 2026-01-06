import { talks } from '../data/talks'

export function TalksSection() {

  return (
    <section>
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-display font-light text-text mb-2">
          <span className="font-calligraphic font-bold bg-gradient-to-r from-sky-500 via-teal-400 to-indigo-500 dark:from-sky-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent">
            Talks
          </span>
        </h2>
        <p className="text-sm text-text-subtle">Speaking engagements and presentations</p>
      </div>
      
      {talks.length === 0 ? (
        <p className="text-text-subtle text-sm">No talks yet. Check back later.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {talks.map((talk) => (
            <div
              key={talk.id}
              className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-text mb-2">
                {talk.title}
              </h3>
              <div className="text-sm text-text-muted space-y-1">
                <p>{talk.event}</p>
                <p>{talk.year}</p>
                {talk.link && (
                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    View talk →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
