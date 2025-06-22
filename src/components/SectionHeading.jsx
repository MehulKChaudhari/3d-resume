import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Scene } from './Scene'
import { OrbitControls } from '@react-three/drei'

export function SectionHeading({ title }) {
  return (
    <div className="h-32 mb-16">
      <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 50 }}>
        <Suspense fallback={null}>
          <Scene text={title} />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 2} 
          maxPolarAngle={Math.PI / 2} 
        />
      </Canvas>
    </div>
  )
}