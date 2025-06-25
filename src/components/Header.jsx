import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Scene } from './Scene'
import { OrbitControls } from '@react-three/drei'
import { resumeData } from '../data/resume'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { ErrorBoundary } from './ErrorBoundary'
import { PorscheCar } from './PorscheCar'

export function Header() {
  const socialLinks = {
    github: resumeData.contact.github,
    x: resumeData.contact.x,
    linkedin: resumeData.contact.linkedin,
    resume: "https://drive.google.com/file/d/1cdlKn7SWOQ_oLAGa_VVqLkUp7uzESa-Y/view?usp=sharing"
  }

  return (
    <>
      <div className="w-full flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-24">
        <div className="pl-4 sm:pl-8 lg:pl-16 flex flex-col justify-center">
          <div className="h-36 sm:h-44 lg:h-52 mb-4 lg:mb-6 -ml-4 sm:ml-0">
            <ErrorBoundary>
              <Canvas orthographic camera={{ position: [0, 0, 100], zoom: window.innerWidth < 640 ? 26 : window.innerWidth < 1024 ? 24 : 40 }}>
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

          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-lg md:text-xl font-light bg-gradient-to-r from-[#fce7fa] via-[#c8b6e2] to-[#fce7fa] bg-clip-text text-transparent tracking-wider">
              Software Engineer · Open Source Contributor · System Design · Framework Agnostic
            </h2>

            <p className="text-base md:text-xl font-light text-[#e4e4e7] leading-relaxed tracking-wide">
              Frontend-focused full stack developer. I work on clean, scalable systems 
              and contribute to open source. I share what I learn on X and LinkedIn.
            </p>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex gap-6 lg:gap-8">
                <a 
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fce7fa]/50 hover:text-[#fce7fa] transition-all duration-300 relative group"
                >
                  <FaGithub className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#fce7fa]/0 via-[#fce7fa]/50 to-[#fce7fa]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
                <a 
                  href={socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fce7fa]/50 hover:text-[#fce7fa] transition-all duration-300 relative group"
                >
                  <FaTwitter className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#fce7fa]/0 via-[#fce7fa]/50 to-[#fce7fa]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
                <a 
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fce7fa]/50 hover:text-[#fce7fa] transition-all duration-300 relative group"
                >
                  <FaLinkedin className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#fce7fa]/0 via-[#fce7fa]/50 to-[#fce7fa]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 h-[300px] sm:h-[400px] lg:h-[500px]">
          <ErrorBoundary>
            <div className="w-full h-full bg-zinc-800/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-zinc-800/50">
              <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}>
                <Suspense fallback={
                  <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#22c55e" />
                  </mesh>
                }>
                  <PorscheCar />
                </Suspense>
              </Canvas>
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
} 