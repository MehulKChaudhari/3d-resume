import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { HiMoon, HiSun, HiMenu, HiX } from 'react-icons/hi'
import { resumeData } from '../data/resume'
import { AvatarWaveAnimation } from './AvatarWaveAnimation'

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/open-source', label: 'Open Source' },
  { path: '/talks', label: 'Talks' },
]

export function Navbar() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const containerRef = useRef(null)
  const linkRefs = useRef({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false })

  const updateIndicator = (path) => {
    const container = containerRef.current
    const linkEl = linkRefs.current[path]
    if (!container || !linkEl) return

    const containerRect = container.getBoundingClientRect()
    const linkRect = linkEl.getBoundingClientRect()

    setIndicator({
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
      visible: true,
    })
  }

  useEffect(() => {
    updateIndicator(location.pathname)
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-18">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between gap-3 h-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-text hover:text-accent transition-colors"
          >
            <div className="relative inline-flex h-8 w-8 sm:h-9 sm:w-9 avatar-shell" data-navbar-avatar>
              <div className="relative h-full w-full rounded-full overflow-hidden bg-[#12333a] z-10" style={{ aspectRatio: '1 / 1' }}>
                <img
                  src="/assets/portfolio-site-image.jpeg"
                  alt={`${resumeData.name} - Software Engineer`}
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: '1 / 1', borderRadius: '50%' }}
                />
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -left-1 -right-1 h-[130%] bg-white/10 rotate-[18deg]" />
                </div>
              </div>
              <AvatarWaveAnimation gradientIdPrefix="nav-wave" />
            </div>
            <span className="hidden sm:inline">Mehul Chaudhari</span>
        </Link>

          <div className="flex-1 flex justify-center">
            <div
              ref={containerRef}
              className="relative inline-flex items-center gap-1 sm:gap-2 rounded-full border border-border bg-bg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm shadow-sm max-w-full"
            >
              {indicator.visible && (
                <div
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-9 sm:h-10 rounded-full bg-white/65 dark:bg-white/12 border border-white/80 dark:border-white/20 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.18)] transition-all duration-400 ease-out"
                  style={{
                    left: indicator.left,
                    width: indicator.width,
                  }}
                />
              )}

              {NAV_LINKS.map(({ path, label }) => {
                const active = isActive(path)

                return (
                  <Link
                    key={path}
                    to={path}
                    ref={(el) => {
                      linkRefs.current[path] = el
                    }}
                    onMouseEnter={() => updateIndicator(path)}
                    onMouseLeave={() => updateIndicator(location.pathname)}
                    className="group relative z-10 px-3 py-1 rounded-full flex items-center justify-center whitespace-nowrap transition-colors duration-200 ease-out"
                  >
                    <span
                      className={[
                        'transition-all duration-200 ease-out',
                        active
                          ? 'bg-gradient-to-r from-sky-700 via-teal-600 to-indigo-700 bg-clip-text text-transparent font-semibold scale-105'
                          : 'text-text-subtle group-hover:bg-gradient-to-r group-hover:from-sky-700 group-hover:via-teal-600 group-hover:to-indigo-700 group-hover:bg-clip-text group-hover:text-transparent group-hover:font-semibold group-hover:scale-105',
                      ].join(' ')}
                    >
                      {label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-text-subtle hover:text-text hover:bg-surface transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <HiSun className="w-5 h-5" />
            ) : (
              <HiMoon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between h-full">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-text hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative inline-flex h-8 w-8 avatar-shell" data-navbar-avatar>
              <div className="relative h-full w-full rounded-full overflow-hidden bg-[#12333a] z-10" style={{ aspectRatio: '1 / 1' }}>
                <img
                  src="/assets/portfolio-site-image.jpeg"
                  alt={`${resumeData.name} - Software Engineer`}
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: '1 / 1', borderRadius: '50%' }}
                />
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -left-1 -right-1 h-[130%] bg-white/10 rotate-[18deg]" />
                </div>
              </div>
              <AvatarWaveAnimation gradientIdPrefix="nav-wave" />
            </div>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-text-subtle hover:text-text hover:bg-surface transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-surface/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {NAV_LINKS.map(({ path, label }) => {
              const active = isActive(path)
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    active
                      ? 'bg-gradient-to-r from-sky-700/10 via-teal-600/10 to-indigo-700/10 text-text font-semibold'
                      : 'text-text-subtle hover:text-text hover:bg-surface'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
            <button
              onClick={() => {
                toggleTheme()
                setMobileMenuOpen(false)
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-text-subtle hover:text-text hover:bg-surface transition-colors"
              aria-label="Toggle theme"
            >
              <span>Theme</span>
              {theme === 'dark' ? (
                <HiSun className="w-5 h-5" />
              ) : (
                <HiMoon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
} 
