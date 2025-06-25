import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a24]/80 backdrop-blur-md border-b border-[#fce7fa]/10">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="group relative">
          <span className="font-pacifico text-2xl bg-gradient-to-r from-[#fce7fa] via-[#c8b6e2] to-[#fce7fa] bg-clip-text text-transparent">
            {`{{MehulkC}}`}
          </span>
          <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#fce7fa]/0 via-[#fce7fa]/50 to-[#fce7fa]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </Link>

        <div className="flex items-center gap-8">
          <Link 
            to="/open-source"
            className="text-[#fce7fa]/70 hover:text-[#fce7fa] transition-colors relative group"
          >
            <span className="text-sm font-medium">Open Source</span>
            <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#fce7fa]/0 via-[#fce7fa]/50 to-[#fce7fa]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </nav>
  )
} 