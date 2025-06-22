import { resumeData } from '../data/resume'

export function Skills() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {resumeData.skills.map((skill, index) => (
          <span
            key={index}
            className="text-gray-400 text-sm"
          >
            {skill}{index !== resumeData.skills.length - 1 && " •"}
          </span>
        ))}
      </div>
    </section>
  )
} 