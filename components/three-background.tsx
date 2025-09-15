"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars, Environment } from "@react-three/drei"
import { useTheme } from "next-themes"

function AnimatedStars() {
  const starsRef = useRef<any>(null)

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.x = clock.getElapsedTime() * 0.05
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })

  return <Stars ref={starsRef} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
}

function Grid() {
  const gridRef = useRef<any>(null)

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.position.z = (clock.getElapsedTime() * 0.15) % 1
    }
  })

  return (
    <group ref={gridRef}>
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[0, 0, -i]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[40, 40, 20, 20]} />
          <meshStandardMaterial color="#6366f1" wireframe opacity={0.1} transparent />
        </mesh>
      ))}
    </group>
  )
}

export default function ThreeBackground() {
  const { theme } = useTheme()

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <AnimatedStars />
        <Grid />
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
