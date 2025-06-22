import { SectionHeading } from './SectionHeading'
import { resumeData } from '../data/resume'

export function WorkExperience() {
  const { work_experience } = resumeData

  return (
    <section>
      <SectionHeading title="Experience" />
      
      <div className="space-y-24 px-12">
        {work_experience.map((job, index) => (
          <div key={index} className="max-w-3xl">
            <h3 className="text-3xl font-bold mb-3 text-white">{job.company || job.title}</h3>
            {job.company && (
              <p className="text-xl text-gray-400 mb-3 font-light">{job.title}</p>
            )}
            {job.duration && (
              <p className="text-sm text-gray-500 mb-8 tracking-wider uppercase">{job.duration}</p>
            )}
            <ul className="text-gray-300 space-y-4 font-light text-lg list-none">
              {job.points.map((point, i) => (
                <li key={i} className="leading-relaxed flex items-start">
                  <span className="text-emerald-400 mr-4 mt-2.5">
                    <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
} 