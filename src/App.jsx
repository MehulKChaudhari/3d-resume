import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Header } from './components/Header'
import { WorkExperience } from './components/WorkExperience'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Stars } from '@react-three/drei'
import './App.css'

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

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 text-white relative">
      <div className="fixed inset-0 -z-10">
        <StarBackground />
      </div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-8">
          <div className="min-h-screen flex items-center">
            <Header />
          </div>
          <div className="max-w-4xl mx-auto space-y-40 pb-40">
            <WorkExperience />
            <Skills />
            <Education />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
