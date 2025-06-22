import { SectionHeading } from './SectionHeading'
import { resumeData } from '../data/resume'

export function Skills() {
  const { skills } = resumeData

  return (
    <section>
      <SectionHeading title="Skills" />
      
      <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-5 px-4 sm:px-8 lg:px-16 max-w-5xl">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-4 sm:px-5 lg:px-7 py-2.5 sm:py-3 lg:py-3.5 bg-gradient-to-r from-[#2d2d3d]/40 to-[#1a1a24]/60 backdrop-blur-sm border border-[#fce7fa]/10 rounded-full text-[#e4e4e7] text-sm sm:text-base font-light hover:bg-[#2d2d3d]/50 transition-all duration-300 hover:border-[#fce7fa]/20 hover:scale-105 shadow-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
} 