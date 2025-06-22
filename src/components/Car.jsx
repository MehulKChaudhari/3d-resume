import { useLayoutEffect, Suspense } from 'react'
import { useGLTF, AccumulativeShadows, RandomizedLight, Environment, Float } from '@react-three/drei'
import { applyProps } from '@react-three/fiber'

// Pre-load the model
useGLTF.preload('/911-transformed.glb')

export function Car() {
  const { scene, nodes, materials } = useGLTF('/911-transformed.glb', true) // Added true for error logging

  useLayoutEffect(() => {
    if (!nodes || !materials) return

    // Apply materials and shadows
    Object.values(nodes).forEach((node) => {
      if (node?.isMesh) {
        node.receiveShadow = node.castShadow = true
      }
    })

    // Customize materials if they exist
    if (materials.rubber) {
      applyProps(materials.rubber, { 
        color: '#222', 
        roughness: 0.6, 
        roughnessMap: null, 
        normalScale: [4, 4] 
      })
    }
    if (materials.window) {
      applyProps(materials.window, { 
        color: 'black', 
        roughness: 0, 
        clearcoat: 0.1 
      })
    }
    if (materials.coat) {
      applyProps(materials.coat, { 
        envMapIntensity: 4, 
        roughness: 0.5, 
        metalness: 1 
      })
    }
    if (materials.paint) {
      applyProps(materials.paint, { 
        envMapIntensity: 2, 
        roughness: 0.45, 
        metalness: 0.8, 
        color: '#22c55e' // Matching our theme color
      })
    }
  }, [nodes, materials])

  if (!scene) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <spotLight 
        position={[0, 15, 0]} 
        angle={0.3} 
        penumbra={1} 
        castShadow 
        intensity={2} 
        shadow-bias={-0.0001} 
      />
      <ambientLight intensity={0.5} />
      
      <Float 
        speed={1.5} 
        rotationIntensity={0.5} 
        floatIntensity={0.5}
      >
        <primitive 
          object={scene} 
          scale={1.6}
          position={[-0.5, -0.18, 0]} 
          rotation={[0, Math.PI / 5, 0]} 
        />
      </Float>

      <AccumulativeShadows 
        position={[0, -1.16, 0]} 
        frames={100} 
        alphaTest={0.9} 
        scale={10}
      >
        <RandomizedLight 
          amount={8} 
          radius={10} 
          ambient={0.5} 
          position={[1, 5, -1]} 
        />
      </AccumulativeShadows>

      <Environment preset="city" />
    </Suspense>
  )
} 