import { resumeData } from '../data/resume'
import { FaGithub, FaTwitter, FaLinkedin, FaGithubAlt } from 'react-icons/fa'
import { useGithub } from '../context/GithubContext'

export function Hero() {
  const socialLinks = {
    github: resumeData.contact.github,
    x: resumeData.contact.x,
    linkedin: resumeData.contact.linkedin,
  }

  const { contributions, isLoading } = useGithub()
  const topContributions = contributions.slice(0, 3)

  return (
    <section className="min-h-[85vh] flex items-center py-16">
      <div className="w-full grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="relative h-16 w-16 rounded-full bg-[#12333a] shadow-md flex items-center justify-center overflow-hidden">
              <div className="absolute inset-[3px] rounded-full overflow-hidden">
                <img
                  src="/avatar.jpg"
                  alt={resumeData.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-1 -right-1 h-[130%] bg-white/10 rotate-[18deg]" />
              </div>
            </div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-text-subtle">
              Software engineer • Full stack • Open source • Business-aware
            </p>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-light tracking-tight text-text mb-4 leading-tight">
              <span className="block">Building systems</span>
              <span className="block">
                that{' '}
                <span className="font-calligraphic text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-sky-600 via-teal-500 to-indigo-600 dark:from-sky-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                  age well
                </span>
                .
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-text-muted font-light leading-relaxed max-w-xl">
              I work at the intersection of frontend, backend, and product — designing APIs,
              shaping UX, and making trade-offs that keep systems stable, maintainable, and aligned
              with how the business actually makes money.
            </p>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-subtle hover:text-text transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-subtle hover:text-text transition-colors"
              aria-label="X (Twitter)"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-subtle hover:text-text transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Recent open source moved to dedicated section below hero */}
        </div>

        <div className="w-full">
          <div className="w-full rounded-2xl border border-border bg-surface shadow-sm p-6 flex flex-col gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 dark:bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                </span>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-subtle">
                  Currently
                </p>
              </div>
              <div>
                <p className="text-sm text-text-subtle mb-1">SDE · YUDEK</p>
                <p className="text-base text-text-muted">
                  Owning parts of a browser-first knowledge system — from Ember frontends to
                  TypeScript services and Firestore data models.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-subtle">
                I care about
              </p>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>• Interfaces that feel obvious on first use, not just demo-ready.</li>
                <li>• Systems that can be debugged at 3am without guessing.</li>
                <li>• Shipping work that moves business metrics, not just tickets.</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-border text-xs text-text-subtle">
              <span className="rounded-full border border-border px-3 py-1">
                Full‑stack JS/TS
              </span>
              <span className="rounded-full border border-border px-3 py-1">
                System design
              </span>
              <span className="rounded-full border border-border px-3 py-1">
                DX & docs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

