import { resumeData } from '../data/resume'

export function Education() {
  const { education } = resumeData

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{education.degree}</h3>
        <p className="text-gray-400">{education.institution}</p>
        <p className="text-gray-500">{education.location}</p>
        <div className="mt-2 text-sm text-gray-400">
          <span>GPA: {education.gpa}</span>
          <span className="mx-2">•</span>
          <span>CGPA: {education.cgpa}</span>
        </div>
      </div>
    </section>
  )
} 