import { SectionHeading } from './SectionHeading'
import { resumeData } from '../data/resume'

export function Education() {
  const { education } = resumeData

  return (
    <section>
      <SectionHeading title="Education" />
      
      <div className="px-12 max-w-3xl">
        <h3 className="text-3xl font-bold mb-3 text-white">{education.institution}</h3>
        <p className="text-xl text-gray-400 mb-3 font-light">{education.degree}</p>
        <p className="text-sm text-gray-500 mb-8 tracking-wider uppercase">{education.location}</p>
        <div className="text-gray-300 font-light text-lg space-x-8">
          <span>GPA: {education.gpa}</span>
          <span className="text-zinc-600">|</span>
          <span>CGPA: {education.cgpa}</span>
        </div>
      </div>
    </section>
  )
} 