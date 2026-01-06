import { Hero } from './Hero'
import { OpenSourceSection } from './OpenSourceSection'
import { WorkExperience } from './WorkExperience'
import { ProjectsSection } from './ProjectsSection'
import { TalksSection } from './TalksSection'
import { StatsBar } from './StatsBar'

export function HomePage() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Hero />
        
        <div className="space-y-32 lg:space-y-40 py-24 lg:py-32">
          <OpenSourceSection />
          <WorkExperience />
          <ProjectsSection />
          <TalksSection />
          <StatsBar />
        </div>
      </div>
    </main>
  )
}

