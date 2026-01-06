import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { HiMoon, HiSun } from 'react-icons/hi'

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/open-source', label: 'Open Source' },
  { path: '/talks', label: 'Talks' },
]

export function Navbar() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

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
  }, [location.pathname])

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-18 flex items-center justify-between gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-text hover:text-accent transition-colors"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-sky-600 via-teal-500 to-indigo-600 text-[0.7rem] font-semibold text-white">
            MC
          </span>
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
    </nav>
  )
}
