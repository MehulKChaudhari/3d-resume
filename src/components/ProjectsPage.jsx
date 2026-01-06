import { projectsData } from '../data/projects'

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

export function ProjectsPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-light text-text mb-2">
            <span className="font-calligraphic font-bold bg-gradient-to-r from-sky-600 via-teal-500 to-indigo-600 dark:from-sky-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-sm text-text-subtle">
            Engineering work and systems I've built
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="bg-surface border border-border rounded-xl p-8 lg:p-10 hover:border-accent/50 transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl font-semibold text-text">
                  {project.title}
                </h2>
                <span className={`text-xs px-3 py-1.5 rounded-md border font-medium ${typeColors[project.type]}`}>
                  {typeLabels[project.type]}
                </span>
              </div>

              <p className="text-text-muted mb-6 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-text mb-2">Problem</h3>
                  <p className="text-text-muted leading-relaxed text-sm">{project.problem}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text mb-2">What I Built</h3>
                  <p className="text-text-muted leading-relaxed text-sm">{project.solution}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text mb-2">Complexity</h3>
                  <p className="text-text-muted leading-relaxed text-sm">{project.complexity}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 bg-surface border border-border text-text-subtle rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
