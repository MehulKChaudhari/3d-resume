import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { HomePage } from './components/HomePage'
import { ProjectsPage } from './components/ProjectsPage'
import { OpenSourcePage } from './components/OpenSourcePage'
import { GithubProvider } from './context/GithubContext'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

function App() {
  return (
    <Router>
      <ThemeProvider>
        <GithubProvider>
          <div className="min-h-screen bg-bg text-text transition-colors">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/open-source" element={<OpenSourcePage />} />
            </Routes>
          </div>
        </GithubProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App
