import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { HomePage } from './components/HomePage'
import { ProjectsPage } from './components/ProjectsPage'
import { ProjectDetailPage } from './components/ProjectDetailPage'
import { TalksPage } from './components/TalksPage'
import { OpenSourcePage } from './components/OpenSourcePage'
import { ArticlesListPage } from './components/BlogsListPage'
import { ArticlePage } from './components/BlogPage'
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
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/open-source" element={<OpenSourcePage />} />
              <Route path="/talks" element={<TalksPage />} />
              <Route path="/articles" element={<ArticlesListPage />} />
              <Route path="/articles/:slug" element={<ArticlePage />} />
              </Routes>
        </div>
      </GithubProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App
