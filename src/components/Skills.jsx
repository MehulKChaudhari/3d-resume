import { SectionHeading } from './SectionHeading'
import { resumeData } from '../data/resume'

export function Skills() {
  const { skills } = resumeData

  return (
    <section>
      <SectionHeading title="Skills" />
      
      <div className="flex flex-wrap gap-4 px-12 max-w-4xl">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-6 py-3 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30 rounded-full text-gray-300 font-light hover:bg-zinc-700/50 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
} 