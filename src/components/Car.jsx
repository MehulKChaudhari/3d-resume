import { Suspense } from 'react'
import { useGLTF, Environment } from '@react-three/drei'

export function Car() {
  const { scene } = useGLTF('/911-transformed.glb')

  return (
    <Suspense fallback={null}>
      <primitive 
        object={scene} 
        scale={1.6}
        position={[-0.5, -0.18, 0]} 
        rotation={[0, Math.PI / 5, 0]} 
      />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[0, 15, 0]} 
        angle={0.3} 
        penumbra={1} 
        castShadow 
        intensity={2} 
      />
    </Suspense>
  )
} 