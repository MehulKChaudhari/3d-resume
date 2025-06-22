import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Scene } from './Scene'
import { OrbitControls } from '@react-three/drei'

export function SectionHeading({ title }) {
  return (
    <div className="h-32 mb-16">
      <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 35 }}>
        <Suspense fallback={null}>
          <Scene text={title} />
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
    </div>
  )
}