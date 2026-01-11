import { StatsBar } from './StatsBar'

export function Footer() {
  return (
    <footer className="mt-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <StatsBar />
        
        <div className="mt-8 text-center">
          <p className="text-sm text-text-muted">
            Made by{' '}
            <a 
              href="https://github.com/MehulKChaudhari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text font-medium hover:bg-gradient-to-r hover:from-sky-500 hover:via-teal-400 hover:to-indigo-500 hover:bg-clip-text hover:text-transparent transition-all"
            >
              Mehul K Chaudhari
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

