import { Environment, Float, Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export function Experience() {
  const groupRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.1
  })

  return (
    <>
      <color attach="background" args={['#18181b']} />
      <Environment preset="city" />
      <Stars 
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      <group ref={groupRef}>
        <Float rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position-z={-2}>
            <torusKnotGeometry args={[8, 0.2, 256, 32]} />
            <meshStandardMaterial 
              color="#14b8a6"
              emissive="#14b8a6"
              emissiveIntensity={0.5}
              roughness={0.5}
              metalness={0.8}
            />
          </mesh>
        </Float>
      </group>

      <directionalLight position={[0, 5, 5]} intensity={0.5} />
      <ambientLight intensity={0.5} />
    </>
  )
} 