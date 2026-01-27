'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const technologies = {
  Frontend: [
    { name: 'React', level: 'Primary', emoji: '⚛️' },
    { name: 'Next.js', level: 'Primary', emoji: '▲' },
    { name: 'TypeScript', level: 'Production-Ready', emoji: '𝕿' },
    { name: 'Tailwind CSS', level: 'Production-Ready', emoji: '🎨' },
    { name: 'Framer Motion', level: 'Actively Used', emoji: '✨' },
  ],
  Backend: [
    { name: 'Node.js', level: 'Primary', emoji: '🟢' },
    { name: 'Python', level: 'Primary', emoji: '🐍' },
    { name: 'Express', level: 'Production-Ready', emoji: '⚡' },
    { name: 'GraphQL', level: 'Actively Used', emoji: '◆' },
    { name: 'REST APIs', level: 'Primary', emoji: '🔗' },
  ],
  Database: [
    { name: 'PostgreSQL', level: 'Primary', emoji: '🐘' },
    { name: 'MongoDB', level: 'Production-Ready', emoji: '🍃' },
    { name: 'Redis', level: 'Actively Used', emoji: '🔴' },
    { name: 'Firebase', level: 'Production-Ready', emoji: '🔥' },
    { name: 'DynamoDB', level: 'Actively Used', emoji: '⚙️' },
  ],
  'AI / ML': [
    { name: 'TensorFlow', level: 'Production-Ready', emoji: '🧠' },
    { name: 'PyTorch', level: 'Production-Ready', emoji: '🔥' },
    { name: 'LangChain', level: 'Actively Used', emoji: '🔗' },
    { name: 'OpenAI', level: 'Primary', emoji: '🤖' },
    { name: 'Scikit-learn', level: 'Actively Used', emoji: '📊' },
  ],
  DevOps: [
    { name: 'Docker', level: 'Primary', emoji: '🐳' },
    { name: 'Kubernetes', level: 'Production-Ready', emoji: '☸️' },
    { name: 'AWS', level: 'Primary', emoji: '☁️' },
    { name: 'CI/CD', level: 'Primary', emoji: '🔄' },
    { name: 'Terraform', level: 'Actively Used', emoji: '🏗️' },
  ],
}

function TechItem({ tech, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const getLevelColor = (level) => {
    switch (level) {
      case 'Primary':
        return '#ff0000'
      case 'Production-Ready':
        return '#00bfff'
      case 'Actively Used':
        return '#4a5568'
      default:
        return '#666'
    }
  }

  return (
    <motion.div
      ref={ref}
      className="p-4 rounded-lg glassmorphism border border-gray-700 hover:border-[#00bfff] transition-all duration-300 text-center group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: '0 20px 40px rgba(0, 191, 255, 0.2)',
        borderColor: '#ff0000',
      }}
    >
      <motion.div
        className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{
          duration: 3 + index * 0.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {tech.emoji}
      </motion.div>
      <h4 className="text-white font-bold text-sm mb-1">{tech.name}</h4>
      <motion.p
        className="text-xs font-semibold"
        style={{ color: getLevelColor(tech.level) }}
      >
        {tech.level}
      </motion.p>
    </motion.div>
  )
}

function TechCategory({ category, technologies: techs }) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={containerRef}
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h3
        className="text-2xl font-bold text-white mb-4 pl-4 border-l-4 border-[#ff0000]"
        initial={{ x: -20 }}
        animate={isInView ? { x: 0 } : { x: -20 }}
        transition={{ duration: 0.5 }}
      >
        {category}
      </motion.h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {techs.map((tech, index) => (
          <TechItem key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-black relative overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-[#00bfff]">Technology Stack</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Cutting-edge tools and frameworks we use to build excellence
          </p>
        </motion.div>

        {/* Technologies by Category */}
        <div className="space-y-12">
          {Object.entries(technologies).map(([category, techs]) => (
            <TechCategory key={category} category={category} technologies={techs} />
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600 rounded-full blur-3xl opacity-5 pointer-events-none" />
    </section>
  )
}
