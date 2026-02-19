'use client';
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const router = useRouter()

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Title */}
        <motion.h1
          className="text-7xl md:text-8xl font-bold text-white glow-neon mb-4"
          style={{
            textShadow:
              '0 0 10px rgba(0, 191, 255, 0.5), 0 0 20px rgba(255, 0, 0, 0.3)',
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          SarX LABS
        </motion.h1>

        {/* Animated Tagline */}
        <motion.div className="mb-8">
          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-light text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We Build Web Applications
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl text-[#00bfff] font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            → Mobile Apps → Intelligent Systems → Anything Tech Can Imagine
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors glow-red"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 0, 0.8)' }}
            whileTap={{ scale: 0.95 }}
             onClick={() => (router.push('/projects'))}
          >
            View Our Work
          </motion.button>
          <motion.button
            className="px-8 py-3 border-2 border-[#00bfff] text-[#00bfff] font-bold rounded-lg hover:bg-[#00bfff] hover:text-black transition-all glow-blue"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 191, 255, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (router.push('/contact'))}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#00bfff] rounded-full flex items-center justify-center">
          <motion.div
            className="w-1 h-2 bg-[#00bfff] rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
