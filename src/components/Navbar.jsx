import { useRef, useState, useMemo, useLayoutEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { HiMoon, HiSun, HiMenu, HiX } from 'react-icons/hi'
import { resumeData } from '../data/resume'
import { AvatarWaveAnimation } from './AvatarWaveAnimation'

const routePrefetchMap = {
  '/projects': () => import('../components/ProjectsPage'),
  '/open-source': () => import('../components/OpenSourcePage'),
  '/talks': () => import('../components/TalksPage'),
  '/articles': () => import('../components/BlogsListPage'),
}

const prefetchRoute = (path) => {
  const prefetchFn = routePrefetchMap[path]
  if (prefetchFn && typeof window !== 'undefined') {
    const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1))
    idleCallback(() => {
      prefetchFn().catch(() => {})
    })
  }
}

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/open-source', label: 'Open Source' },
  { path: '/talks', label: 'Talks' },
  { path: '/articles', label: 'Articles' },
]

export function Navbar() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredPath, setHoveredPath] = useState(null)

  const activePath = useMemo(() => {
    for (const { path } of NAV_LINKS) {
      if (path === '/') {
        if (location.pathname === '/') return path
      } else if (location.pathname.startsWith(path)) {
        return path
      }
    }
    return '/'
  }, [location.pathname])

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const containerRef = useRef(null)
  const linkRefs = useRef({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false })

  const targetPath = hoveredPath ?? activePath

  useLayoutEffect(() => {
    const container = containerRef.current
    const linkEl = linkRefs.current[targetPath]
    if (!container || !linkEl) return

    const containerRect = container.getBoundingClientRect()
    const linkRect = linkEl.getBoundingClientRect()

    setIndicator({
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
      visible: true,
    })
  }, [targetPath])

  useLayoutEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-18">
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
        </Link>

          <div className="flex-1 flex justify-center">
            <div
              ref={containerRef}
              className="relative inline-flex items-center gap-1 sm:gap-2 rounded-full border border-border bg-bg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm shadow-sm max-w-full overflow-visible"
            >
              {indicator.visible && (
                <div
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-9 sm:h-10 rounded-full transition-all duration-500 ease-out"
                  style={{
                    left: indicator.left,
                    width: indicator.width,
                    background: theme === 'dark' 
                      ? 'radial-gradient(circle at center, rgba(148, 163, 184, 0.18) 0%, rgba(100, 116, 139, 0.12) 50%, rgba(71, 85, 105, 0.08) 100%)'
                      : 'radial-gradient(circle at center, rgba(241, 245, 249, 0.95) 0%, rgba(226, 232, 240, 0.85) 50%, rgba(203, 213, 225, 0.75) 100%)',
                    boxShadow: theme === 'dark'
                      ? '0 0 0 1px rgba(148, 163, 184, 0.15), 0 2px 8px rgba(71, 85, 105, 0.2), 0 4px 16px rgba(51, 65, 85, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.15), inset 0 -1px 2px rgba(0, 0, 0, 0.05)'
                      : '0 0 0 1px rgba(203, 213, 225, 0.4), 0 2px 8px rgba(100, 116, 139, 0.15), 0 4px 16px rgba(71, 85, 105, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.8), inset 0 -1px 3px rgba(148, 163, 184, 0.1)',
                    border: theme === 'dark'
                      ? '1px solid rgba(148, 163, 184, 0.2)'
                      : '1px solid rgba(226, 232, 240, 0.8)',
                    backdropFilter: 'blur(16px) saturate(1.3)',
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
                    onMouseEnter={() => {
                      setHoveredPath(path)
                      prefetchRoute(path)
                    }}
                    onMouseLeave={() => setHoveredPath(null)}
                    className="group relative z-10 px-3 py-1 rounded-full flex items-center justify-center whitespace-nowrap transition-all duration-300 ease-out"
                  >
                    <span
                      className={[
                        'transition-all duration-300 ease-out',
                        active
                          ? 'bg-gradient-to-r from-sky-700 via-teal-600 to-indigo-700 bg-clip-text text-transparent font-semibold'
                          : 'text-text-subtle group-hover:bg-gradient-to-r group-hover:from-sky-700 group-hover:via-teal-600 group-hover:to-indigo-700 group-hover:bg-clip-text group-hover:text-transparent group-hover:font-medium group-hover:scale-[1.05]',
                      ].join(' ')}
                      style={{
                        transform: active ? 'scale(1.05)' : undefined,
                      }}
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
            className="relative p-2.5 rounded-xl transition-all duration-300 ease-out group overflow-hidden cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Toggle theme"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(135deg, rgba(51, 65, 85, 0.3) 0%, rgba(30, 41, 59, 0.2) 100%)'
                : 'linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(241, 245, 249, 0.6) 100%)',
              boxShadow: theme === 'dark'
                ? '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.05)'
                : '0 2px 8px rgba(148, 163, 184, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
              border: theme === 'dark'
                ? '1px solid rgba(71, 85, 105, 0.3)'
                : '1px solid rgba(226, 232, 240, 0.6)',
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: theme === 'dark'
                  ? 'radial-gradient(circle at center, rgba(251, 191, 36, 0.1) 0%, transparent 70%)'
                  : 'radial-gradient(circle at center, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
              }}
            />
            {theme === 'dark' ? (
              <HiSun className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 text-amber-400 group-hover:text-amber-300" />
            ) : (
              <HiMoon className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12 text-indigo-400 group-hover:text-indigo-500" />
            )}
          </button>
        </div>

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
                  width="32"
                  height="32"
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
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-text-subtle hover:text-text hover:bg-surface transition-colors cursor-pointer"
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