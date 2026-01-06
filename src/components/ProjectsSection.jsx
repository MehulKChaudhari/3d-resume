import { Link } from 'react-router-dom'
import { curatedProjects } from '../data/projects'

const typeLabels = {
  'full-stack': 'Full-stack',
  'frontend': 'Frontend',
  'backend': 'Backend'
}

const typeColors = {
  'full-stack': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  'frontend': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  'backend': 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20'
}

export function ProjectsSection() {
  return (
    <section>
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-display font-light text-text mb-2">
            <span className="font-calligraphic font-bold bg-gradient-to-r from-sky-500 via-teal-400 to-indigo-500 dark:from-sky-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-sm text-text-subtle">Selected work</p>
        </div>
        <Link 
          to="/projects"
          className="link text-sm hover:text-accent-hover transition-colors flex items-center gap-1 font-medium"
        >
          View all
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {curatedProjects.map((project) => (
          <div
            key={project.id}
            className="bg-surface/95 border border-border/80 rounded-2xl p-8 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-lg"
          >
            <div className="h-1 w-full rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-500 dark:from-sky-500 dark:via-indigo-500 dark:to-sky-500 mb-4" />
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-text">
                {project.title}
              </h3>
              <span className={`text-xs px-2.5 py-1 rounded-md border font-medium ${typeColors[project.type]}`}>
                {typeLabels[project.type]}
              </span>
            </div>

            <p className="text-text-muted mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-3 mb-6">
              <div>
                <span className="text-xs font-semibold text-text-subtle uppercase tracking-wide">Problem</span>
                <p className="text-sm text-text-muted mt-1">{project.problem}</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-text-subtle uppercase tracking-wide">Solution</span>
                <p className="text-sm text-text-muted mt-1">{project.solution}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 bg-surface border border-border text-text-subtle rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
