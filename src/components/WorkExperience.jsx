import { SectionHeading } from './SectionHeading'
import { resumeData } from '../data/resume'

export function WorkExperience() {
  const { work_experience } = resumeData

  return (
    <section>
      <SectionHeading title="Experience" />
      
      <div className="space-y-24 lg:space-y-32 px-4 sm:px-8 lg:px-16">
        {work_experience.map((job, index) => (
          <div key={index} className="max-w-4xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 bg-gradient-to-r from-[#fce7fa] via-[#c8b6e2] to-[#fce7fa] bg-clip-text text-transparent tracking-wide">{job.company || job.title}</h3>
            {job.company && (
              <p className="text-xl sm:text-xl lg:text-2xl text-[#e4e4e7] mb-3 font-light tracking-wide">{job.title}</p>
            )}
            {job.duration && (
              <p className="text-sm text-[#a1a1aa] mb-8 lg:mb-10 tracking-wider uppercase">{job.duration}</p>
            )}
            <ul className="text-[#e4e4e7] space-y-4 lg:space-y-5 font-light text-base sm:text-lg list-none">
              {job.points.map((point, i) => (
                <li key={i} className="leading-relaxed flex items-start group">
                  <span className="text-[#fce7fa] mr-3 lg:mr-4 mt-2.5 transition-transform duration-300 group-hover:scale-125">
                    <svg className="w-2 sm:w-2.5 h-2 sm:h-2.5" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                  </span>
                  <span className="group-hover:text-[#fce7fa]/90 transition-colors duration-300 tracking-wide">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
} 