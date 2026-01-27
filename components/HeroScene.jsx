'use client';

import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

function Particles() {
  const points = useRef()
  const [particleCount] = useState(3000)

  useEffect(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2000
      positions[i + 1] = (Math.random() - 0.5) * 2000
      positions[i + 2] = (Math.random() - 0.5) * 2000
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    if (points.current) {
      points.current.geometry.dispose()
      points.current.geometry = geometry
    }
  }, [particleCount])

  return (
    <points ref={points}>
      <bufferGeometry />
      <pointsMaterial size={2} color="#00bfff" />
    </points>
  )
}

function AnimatedText() {
  return (
    <Text position={[0, 0, 0]} fontSize={1.5} color="#ff0000" anchorX="center">
      {/* SARX LABS */}
      <meshStandardMaterial emissive="#ff0000" emissiveIntensity={0.5} />
    </Text>
  )
}

export default function HeroScene() {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ff0000" />
      <pointLight position={[-10, -10, 10]} intensity={0.6} color="#00bfff" />
      <Particles />
      <AnimatedText />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  )
}
