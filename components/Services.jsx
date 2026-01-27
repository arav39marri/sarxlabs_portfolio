'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const services = [
  {
    icon: '💻',
    title: 'Web Applications',
    description: 'Scalable, high-performance web apps built with modern technologies.',
  },
  {
    icon: '📱',
    title: 'Mobile Applications',
    description: 'Cross-platform mobile solutions for iOS and Android.',
  },
  {
    icon: '🤖',
    title: 'AI / ML Solutions',
    description: 'Intelligent systems and machine learning implementations.',
  },
  {
    icon: '⚙️',
    title: 'Automation Tools',
    description: 'Custom automation and workflow optimization solutions.',
  },
  {
    icon: '☁️',
    title: 'Cloud & APIs',
    description: 'Robust cloud infrastructure and API development.',
  },
  {
    icon: '🛠️',
    title: 'Custom Software',
    description: 'Tailored software solutions for unique business needs.',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="glassmorphism rounded-2xl p-6 backdrop-blur-xl border border-gray-700 hover:border-[#00bfff] transition-all duration-300 h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{
        y: -10,
        boxShadow: '0 20px 40px rgba(0, 191, 255, 0.3)',
        borderColor: '#ff0000',
      }}
    >
      <motion.div
        className="text-5xl mb-4"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        {service.icon}
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {service.description}
      </p>
      <motion.div
        className="mt-4 h-1 bg-gradient-to-r from-[#ff0000] to-[#00bfff] rounded-full"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default function Services() {
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
            Our <span className="text-[#ff0000]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive solutions for every aspect of your digital transformation
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Background Glow */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600 rounded-full blur-3xl opacity-5 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-5 pointer-events-none" />
      </div>
    </section>
  )
}
