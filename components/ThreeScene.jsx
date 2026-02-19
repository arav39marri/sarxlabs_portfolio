'use client';

import { useEffect, useRef, useState } from 'react'

export default function ThreeScene() {
  const containerRef = useRef()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !containerRef.current) return

    const loadThree = async () => {
      try {
        // Dynamic imports to avoid SSR issues
        const [{ Canvas }, { OrbitControls, Text }, THREE] = await Promise.all([
          import('@react-three/fiber'),
          import('@react-three/drei'),
          import('three')
        ])

        // Create the React Three Fiber scene
        const { createRoot } = await import('react-dom/client')
        
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
              SarX LABS
              <meshStandardMaterial emissive="#ff0000" emissiveIntensity={0.5} />
            </Text>
          )
        }

        function Scene() {
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

        const root = createRoot(containerRef.current)
        root.render(<Scene />)

      } catch (error) {
        console.error('Failed to load Three.js:', error)
        // Fallback to simple canvas animation
        const canvas = document.createElement('canvas')
        canvas.className = 'w-full h-full bg-black'
        canvas.style.width = '100%'
        canvas.style.height = '100%'
        containerRef.current.appendChild(canvas)
        
        const ctx = canvas.getContext('2d')
        canvas.width = containerRef.current.clientWidth
        canvas.height = containerRef.current.clientHeight
        
        // Simple fallback animation
        let rotation = 0
        const animate = () => {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          
          ctx.save()
          ctx.translate(canvas.width / 2, canvas.height / 2)
          ctx.rotate(rotation)
          
          // Draw some particles
          for (let i = 0; i < 100; i++) {
            const angle = (i / 100) * Math.PI * 2
            const radius = 100 + Math.sin(rotation * 2 + i) * 50
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            
            ctx.beginPath()
            ctx.arc(x, y, 2, 0, Math.PI * 2)
            ctx.fillStyle = '#00bfff'
            ctx.fill()
          }
          
          ctx.restore()
          
          // Draw text
          ctx.font = 'bold 60px Arial'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillStyle = '#ff0000'
          ctx.fillText('SarX LABS', canvas.width / 2, canvas.height / 2)
          
          rotation += 0.01
          requestAnimationFrame(animate)
        }
        animate()
      }
    }

    loadThree()
  }, [isClient])

  return <div ref={containerRef} className="w-full h-full" />
}
