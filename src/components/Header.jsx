import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Scene } from './Scene'
import { OrbitControls } from '@react-three/drei'
import { resumeData } from '../data/resume'
import { FaGithub, FaTwitter, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import { Car } from './Car'
import { ErrorBoundary } from './ErrorBoundary'

export function Header() {
  const socialLinks = {
    github: resumeData.contact.github,
    x: resumeData.contact.x,
    linkedin: resumeData.contact.linkedin,
    resume: "https://drive.google.com/file/d/1cdlKn7SWOQ_oLAGa_VVqLkUp7uzESa-Y/view?usp=sharing"
  }

  return (
    <>
      <div className="absolute top-8 right-8">
        <a 
          href={socialLinks.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg transition-colors"
        >
          <FaFileAlt className="w-5 h-5" />
          <span>Resume</span>
        </a>
      </div>

      <div className="w-full grid grid-cols-2 gap-12">
        <div className="pl-12 flex flex-col justify-center">
          <div className="h-40 mb-12">
            <ErrorBoundary>
              <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 35 }}>
                <Suspense fallback={null}>
                  <Scene text={resumeData.name} />
                </Suspense>
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  enableRotate={true}
                  minPolarAngle={Math.PI / 3}
                  maxPolarAngle={Math.PI / 1.5}
                  minAzimuthAngle={-Math.PI / 4}
                  maxAzimuthAngle={Math.PI / 4}
                />
              </Canvas>
            </ErrorBoundary>
          </div>

          <h2 className="text-xl font-light text-emerald-400/90 mb-6">
            Software Engineer · Open Source Contributor · System Design · Framework Agnostic
          </h2>

          <p className="text-xl font-light text-gray-300 leading-relaxed mb-8">
            Frontend-focused full stack developer. I work on clean, scalable systems 
            and contribute to open source. I share what I learn on X and LinkedIn.
          </p>

          <div className="flex gap-6">
            <a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaGithub className="w-7 h-7" />
            </a>
            <a 
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaTwitter className="w-7 h-7" />
            </a>
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
          </div>
        </div>

        <div className="h-[500px]">
          <ErrorBoundary>
            <div className="w-full h-full bg-zinc-800/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-zinc-800/50">
              <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}>
                <Suspense fallback={
                  <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#22c55e" />
                  </mesh>
                }>
                  <Car />
                </Suspense>
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={Math.PI / 3}
                  maxPolarAngle={Math.PI / 1.5}
                />
              </Canvas>
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
} 