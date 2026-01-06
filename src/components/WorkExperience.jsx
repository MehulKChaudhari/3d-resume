import { resumeData } from '../data/resume'

export function WorkExperience() {
  const { work_experience } = resumeData

  return (
    <section>
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-text-subtle">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 via-teal-400 to-indigo-500 dark:from-indigo-500 dark:via-sky-500 dark:to-emerald-400 text-[0.65rem] font-semibold text-white">
            MC
          </span>
          <span>Day-to-day work that shaped my judgment</span>
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl font-display font-light text-text mb-2">
          <span className="font-calligraphic font-bold bg-gradient-to-r from-sky-500 via-teal-400 to-indigo-500 dark:from-sky-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-sm text-text-subtle">Professional journey</p>
      </div>

      <div className="relative space-y-10 lg:space-y-14 before:absolute before:left-2 before:top-0 before:bottom-0 before:w-px before:bg-border/60 lg:before:left-3">
        {work_experience.map((job, index) => (
          <article
            key={index}
            className="relative max-w-3xl pl-8 lg:pl-10 transition-transform duration-200 ease-out hover:-translate-y-0.5"
          >
            <div className="absolute left-0 top-4 h-3 w-3 -translate-x-1 rounded-full bg-gradient-to-tr from-sky-500 via-teal-400 to-indigo-500 dark:from-indigo-500 dark:via-sky-500 dark:to-emerald-400 shadow-[0_0_0_4px_rgba(14,165,233,0.15)] dark:shadow-[0_0_0_4px_rgba(79,70,229,0.15)]" />

            <div className="bg-surface border border-border rounded-2xl px-6 py-6 lg:px-8 lg:py-7 shadow-sm">
              <div className="mb-6 pb-6 border-b border-border flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-text">
                    {job.company || job.title}
                  </h3>
                  {job.company && (
                    <p className="text-lg text-text-muted">{job.title}</p>
                  )}
                </div>
                {job.duration && (
                  <p className="text-sm text-text-subtle uppercase tracking-wide font-medium whitespace-nowrap">
                    {job.duration}
                  </p>
                )}
              </div>

              <ul className="space-y-4 text-text-muted leading-relaxed">
                {job.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 flex-shrink-0 text-accent">
                      <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

