import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { WorkExperience } from './components/WorkExperience'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { OpenSource } from './components/OpenSource'
import { Navbar } from './components/Navbar'
import { Stars } from '@react-three/drei'
import './App.css'
import { GithubProvider } from './context/GithubContext'

function StarBackground() {
  return (
    <Canvas>
      <color attach="background" args={['#0a0a0f']} />
      <Suspense fallback={null}>
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1}
        />
      </Suspense>
    </Canvas>
  )
}

function MainContent() {
  return (
    <>
      <div className="min-h-[90vh] flex items-center">
        <Header />
      </div>
      <div className="max-w-5xl mx-auto space-y-32 lg:space-y-48 pb-32 lg:pb-48">
        <WorkExperience />
        <Skills />
        <Education />
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <GithubProvider>
        <div className="min-h-screen bg-gradient-to-b from-zinc-900/80 via-[#1a1a24]/75 to-black/70 text-white relative">
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(252,231,250,0.03),transparent_75%)] backdrop-blur-[1px]">
            <div className="absolute inset-0 bg-black/20" />
            <StarBackground />
          </div>
          <div className="relative z-10">
            <Navbar />
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-16">
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/open-source" element={<OpenSource />} />
              </Routes>
            </div>
          </div>
        </div>
      </GithubProvider>
    </Router>
  )
}

export default App
