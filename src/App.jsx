import { Header } from './components/Header'
import { WorkExperience } from './components/WorkExperience'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <Header />
        <WorkExperience />
        <Skills />
        <Education />
      </div>
    </div>
  )
}

export default App
