import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

export function WorkExperience() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-white mb-8">Work Experience</h2>
      <div className="space-y-12">
        {resumeData.work_experience.map((job, index) => (
          <div key={index} className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white">{job.title}</h3>
              {job.company && (
                <p className="text-gray-400">{job.company}</p>
              )}
              {job.duration && (
                <p className="text-gray-500 text-sm">{job.duration}</p>
              )}
            </div>
            <ul className="space-y-2">
              {job.points.map((point, pointIndex) => (
                <li key={pointIndex} className="text-gray-400 leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
} 