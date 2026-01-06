import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { HiMoon, HiSun } from 'react-icons/hi'

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/open-source', label: 'Open Source' },
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text hover:text-accent transition-colors"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-sky-600 via-teal-500 to-indigo-600 text-[0.7rem] font-semibold text-white">
            MC
          </span>
          <span className="hidden sm:inline">Mehul Chaudhari</span>
        </Link>

        <div className="flex-1 flex justify-center">
          <div
            ref={containerRef}
            className="relative inline-flex items-center gap-2 rounded-full border border-border bg-bg px-2 py-1 text-sm shadow-sm"
          >
            {indicator.visible && (
              <div
                className="absolute top-0 bottom-0 my-auto h-7 rounded-full bg-white/50 dark:bg-white/10 border border-white/70 dark:border-white/20 shadow-sm transition-all duration-200 ease-out"
                style={{
                  transform: `translateX(${indicator.left}px)`,
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
                  className="relative z-10 px-3 py-1 rounded-full transition-colors duration-200 ease-out"
                >
                  <span
                    className={[
                      'transition-colors duration-200 ease-out',
                      active
                        ? 'bg-gradient-to-r from-sky-600 via-teal-500 to-indigo-600 bg-clip-text text-transparent'
                        : 'text-text-subtle hover:bg-gradient-to-r hover:from-sky-600 hover:via-teal-500 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent',
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
