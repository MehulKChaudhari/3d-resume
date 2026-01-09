export const getMermaidConfig = (theme) => ({
  startOnLoad: true,
  theme: theme === 'dark' ? 'dark' : 'default',
  securityLevel: 'loose'
})

export const READING_TIME_WPM = 200

export const SCROLL_BEHAVIOR = {
  behavior: 'smooth',
  block: 'start'
}

