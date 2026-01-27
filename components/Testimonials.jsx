'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'CTO, TechVenture',
    feedback:
      'SARX Labs transformed our vision into reality. Their expertise in AI and cloud architecture is unmatched.',
    rating: 5,
    metric: 'Improved performance by 300%',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Manager, InnovateCo',
    feedback:
      'Working with SARX Labs was a game-changer. They delivered on time, within budget, and exceeded expectations.',
    rating: 5,
    metric: 'Reduced time-to-market by 50%',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Michael Roberts',
    role: 'Founder, DataScale',
    feedback:
      'The team at SARX Labs understands not just code, but business needs. Truly exceptional partners.',
    rating: 5,
    metric: 'Achieved 99.99% uptime',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    name: 'Emily Watson',
    role: 'Director, GrowthFirst',
    feedback:
      'SARX Labs brings innovation and technical excellence. Their solutions scale beautifully with our business.',
    rating: 5,
    metric: 'Scaled to 10M users',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    name: 'David Lee',
    role: 'VP Engineering, TechScale',
    feedback:
      'Best development partner we have worked with. Their code quality and communication are top-tier.',
    rating: 5,
    metric: 'Zero critical bugs in 2 years',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Jessica Williams',
    role: 'CEO, ModernTech',
    feedback:
      'SARX Labs is the team to call for impossible deadlines and complex requirements. They deliver.',
    rating: 5,
    metric: 'Delivered in 6 weeks (vs 6 months planned)',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
]

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      className="flex-shrink-0 w-96 glassmorphism border border-gray-700 rounded-2xl p-6 hover:border-[#ff0000] transition-all duration-300"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: '0 20px 40px rgba(0, 191, 255, 0.2)',
      }}
    >
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-[#ff0000]">
            ★
          </span>
        ))}
      </div>

      {/* Feedback */}
      <p className="text-gray-300 mb-6 leading-relaxed italic">
        "{testimonial.feedback}"
      </p>

      {/* Metric */}
      <div className="mb-6 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
        <p className="text-[#00bfff] text-sm font-semibold">
          {testimonial.metric}
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-white font-bold">{testimonial.name}</p>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const [offset, setOffset] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  const visibleTestimonials = [
    testimonials[offset],
    testimonials[(offset + 1) % testimonials.length],
    testimonials[(offset + 2) % testimonials.length],
  ]

  return (
    <section
      className="w-full py-20 px-4 bg-black relative overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            What Our <span className="text-[#ff0000]">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Trusted by industry leaders and innovators worldwide
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {visibleTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${offset}-${index}`}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setOffset(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === offset
                    ? 'bg-[#ff0000] w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-red-600 rounded-full blur-3xl opacity-5 pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-5 pointer-events-none" />
    </section>
  )
}
