import { Text3D, Center } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function Scene({ text = "3D Text" }) {
  const { width } = useThree((state) => state.viewport)
  
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={2.5} color="#fff" />
      <spotLight 
        position={[-10, 10, -10]} 
        angle={0.3} 
        penumbra={1} 
        intensity={2.5}
        color="#fff"
      />
      
      <Center rotation={[-0.3, -0.15, 0]} position={[0, -0.5, 0]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={1.25}
          height={0.25}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.05}
          bevelOffset={0}
          bevelSegments={5}
        >
          {text}
          <meshStandardMaterial 
            color="#fce7fa"
            metalness={0.9}
            roughness={0.01}
            envMapIntensity={7}
            emissive="#fdcdf9"
            emissiveIntensity={0.4}
            clearcoat={1}
            clearcoatRoughness={0.05}
          />
        </Text3D>
      </Center>
    </>
  )
} 