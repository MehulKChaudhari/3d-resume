import { resumeData } from '../data/resume'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { AvatarWaveAnimation } from './AvatarWaveAnimation'

export function Hero() {
  const socialLinks = {
    github: resumeData.contact.github,
    x: resumeData.contact.x,
    linkedin: resumeData.contact.linkedin,
  }

  return (
    <section className="min-h-[85vh] flex items-center py-16" aria-label="Hero section">
      <div className="w-full grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="relative inline-flex h-20 w-20 sm:h-24 sm:w-24 avatar-shell">
              <div className="relative h-full w-full rounded-full overflow-hidden bg-[#12333a] shadow-md z-10">
                <img
                  src="/assets/portfolio-site-image.jpeg"
                  alt={`${resumeData.name} - Software Engineer`}
                  className="h-full w-full object-cover rounded-full"
                />
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -left-1 -right-1 h-[130%] bg-white/10 rotate-[18deg]" />
                </div>
              </div>
              <AvatarWaveAnimation gradientIdPrefix="hero-wave" />
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
          <div className="w-full rounded-2xl border border-border bg-surface shadow-sm p-8 lg:p-10 flex flex-col gap-8 lg:gap-10 min-h-[460px] lg:min-h-[520px]">
            <div className="space-y-4">
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
                <p className="text-sm text-text-subtle mb-2">SDE · YUDEK</p>
                <p className="text-base lg:text-lg text-text-muted leading-relaxed">
                  Owning parts of a browser-first knowledge system — from Ember frontends to
                  TypeScript services and Firestore data models.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-subtle">
                I care about
              </p>
              <ul className="space-y-3 text-sm lg:text-base text-text-muted leading-relaxed">
                <li>• Interfaces that feel obvious on first use, not just demo-ready.</li>
                <li>• Systems that can be debugged at 3am without guessing.</li>
                <li>• Shipping work that moves business metrics, not just tickets.</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-border text-xs text-text-subtle mt-auto">
              <span className="rounded-full border border-border px-3 py-1.5">
                Full‑stack JS/TS
              </span>
              <span className="rounded-full border border-border px-3 py-1.5">
                System design
              </span>
              <span className="rounded-full border border-border px-3 py-1.5">
                DX & docs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

