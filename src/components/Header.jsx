import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Scene } from './Scene'
import { resumeData } from '../data/resume'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export function Header() {
  const socialLinks = {
    github: resumeData.contact.github,
    x: resumeData.contact.x,
    linkedin: resumeData.contact.linkedin
  }

  return (
    <div className="w-full grid grid-cols-2 gap-12">
      <div className="pl-12 flex flex-col justify-center">
        <div className="h-40 mb-12">
          <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 45 }}>
            <Suspense fallback={null}>
              <Scene text={resumeData.name} />
            </Suspense>
          </Canvas>
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
      <div className="h-[500px] bg-zinc-800/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-zinc-800/50">
        <p className="text-gray-400 font-light">3D Model Coming Soon</p>
      </div>
    </div>
  )
} 