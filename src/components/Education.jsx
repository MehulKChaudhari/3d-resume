import { SectionHeading } from './SectionHeading'
import { resumeData } from '../data/resume'

export function Education() {
  const { education } = resumeData

  return (
    <section>
      <SectionHeading title="Education" />
      
      <div className="px-4 sm:px-8 lg:px-16 max-w-4xl">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 bg-gradient-to-r from-[#fce7fa] via-[#c8b6e2] to-[#fce7fa] bg-clip-text text-transparent tracking-wide">{education.institution}</h3>
        <p className="text-xl sm:text-xl lg:text-2xl text-[#e4e4e7] mb-3 font-light tracking-wide">{education.degree}</p>
        <p className="text-sm text-[#a1a1aa] mb-8 lg:mb-10 tracking-wider uppercase">{education.location}</p>
        <div className="text-[#e4e4e7] font-light text-base sm:text-lg lg:text-xl space-x-6 sm:space-x-8 lg:space-x-10 tracking-wide">
          <span>GPA: {education.gpa}</span>
          <span className="text-[#fce7fa]/30">|</span>
          <span>CGPA: {education.cgpa}</span>
        </div>
      </div>
    </section>
  )
} 