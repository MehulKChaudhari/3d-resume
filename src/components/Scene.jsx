import { Text3D, Center } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function Scene({ text = "3D Text" }) {
  const { width } = useThree((state) => state.viewport)
  
  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <spotLight 
        position={[-10, 10, -10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={1.2}
      />
      
      <Center rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={1.8}
          height={0.1}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshStandardMaterial 
            color="#22c55e"
            metalness={0.2}
            roughness={0.1}
            emissive="#22c55e"
            emissiveIntensity={0.6}
          />
        </Text3D>
      </Center>
    </>
  )
} 