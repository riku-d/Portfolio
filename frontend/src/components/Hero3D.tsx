import  { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, MeshDistortMaterial, Environment, useTexture } from "@react-three/drei"
import { Mesh, Vector3 } from "three"

// Detect if device is mobile
const isMobile = () => {
  return window.innerWidth < 768
}

const Hero3D = () => {
  const meshRef = useRef<Mesh>(null)
  const [mobile, setMobile] = useState(false)
  
  useEffect(() => {
    // Set initial state
    setMobile(isMobile())
    
    // Add resize listener
    const handleResize = () => setMobile(isMobile())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#7b61ff" />
      <spotLight position={[0, 5, 5]} intensity={0.5} angle={0.3} penumbra={1} />
      <Environment preset="city" />

      {/* Distorted Sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[mobile ? 0.7 : 1, mobile ? 32 : 64, mobile ? 32 : 64]} />
        <MeshDistortMaterial
          color="#4b0082"
          distort={0.25}
          speed={1}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* User Image */}
      <ImageElement position={[0, 0, 1.2]} mobile={mobile} />

      {/* Floating Nodes - Reduced for mobile */}
      <FloatingDataNode position={[2, 1, 0]} color="#4285F4" />
      <FloatingDataNode position={[-2, -1, 1]} color="#DB4437" />
      {!mobile && <FloatingDataNode position={[1, -2, -1]} color="#0F9D58" />}
      {!mobile && <FloatingDataNode position={[-1.5, 1.5, -0.5]} color="#F4B400" />}
      {!mobile && <FloatingDataNode position={[1.5, -1.5, 0.5]} color="#7b61ff" />}

      {/* Particles - Reduced for mobile */}
      <ParticleSystem count={mobile ? 60 : 120} />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  )
}

const ImageElement = ({  position, mobile }: { position: [number, number, number];mobile: boolean }) => {
  const meshRef = useRef<Mesh>(null)
  // Using a placeholder URL - replace with your actual image path
  const texture = useTexture('ro_img.jpeg')

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.lookAt(state.camera.position)
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <circleGeometry args={[mobile ? 0.4 : 0.6, 32]} />
      <meshBasicMaterial map={texture} transparent opacity={1} />
    </mesh>
  )
}

// const TextElement = ({ position, text }: { position: [number, number, number]; text: string }) => {
//   const textRef = useRef<Mesh>(null)

//   useFrame((state) => {
//     if (textRef.current) {
//       textRef.current.lookAt(state.camera.position)
//       textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1
//     }
//   })

//   return (
//     <Text
//       ref={textRef}
//       position={position}
//       fontSize={0.5}
//       color="#ffffff"
//       font="/fonts/Inter-Bold.woff" // Place in public/fonts, else fallback
//       anchorX="center"
//       anchorY="middle"
//     >
//       {text}
//     </Text>
//   )
// }

const FloatingDataNode = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.2, 0]} />
      <meshPhysicalMaterial
        color={color}
        transparent
        opacity={0.8}
        roughness={0.2}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  )
}

const ParticleSystem = ({ count = 100 }) => {
  // Optimize particle generation for performance
  const particles = useMemo(() => {
    const temp: { position: [number, number, number]; scale: number; speed: number }[] = []
    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 3
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      temp.push({ position: [x, y, z], scale: Math.random() * 0.2 + 0.05, speed: 0.05 + Math.random() * 0.1 })
    }
    return temp
  }, [count])

  return (
    <>
      {particles.map((particle, i) => (
        <Particle key={i} position={particle.position} scale={particle.scale} speed={particle.speed} />
      ))}
    </>
  )
}

const Particle = ({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) => {
  const meshRef = useRef<Mesh>(null)
  const { viewport } = useThree()
  
  // Optimize animation for mobile
  const isMobileViewport = viewport.width < 5

  useFrame((state) => {
    if (meshRef.current) {
      // Simpler animation for mobile devices
      if (isMobileViewport) {
        const time = state.clock.elapsedTime * speed
        meshRef.current.position.y = position[1] + Math.sin(time) * 0.1
        return
      }
      
      // Full animation for desktop
      const time = state.clock.elapsedTime * speed
      const radius = new Vector3(...position).length()
      const theta = Math.atan2(position[1], position[0]) + time

      meshRef.current.position.x = radius * Math.cos(theta)
      meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.1
      meshRef.current.position.z = radius * Math.sin(theta)
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, isMobileViewport ? 4 : 8, isMobileViewport ? 4 : 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
    </mesh>
  )
}

const HeroSection = () => {
  return (
    <div className="relative w-full max-w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen bg-black pt-16 sm:pt-20 md:pt-24">

      {/* 3D Canvas */}
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        resize={{ scroll: false }}
        style={{ width: '100%', height: '100%' }}
      >

        <Hero3D />
      </Canvas>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Rohit Dutta</h1>
        <p className="mt-1 sm:mt-2 text-base sm:text-lg md:text-xl text-gray-300">Data Scientist & AI Engineer</p>
      </div>


      {/* Resume Button */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2">
        <a
          href="/resume.pdf"
          download
          className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-indigo-600 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg text-white font-bold hover:bg-indigo-800 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default HeroSection
