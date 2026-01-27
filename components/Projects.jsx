'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'

const projects = [
  {
    id: 1,
    name: 'Neural Commerce',
    category: 'AI',
    techStack: ['React', 'Python', 'TensorFlow', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e12482fe?w=500&h=300&fit=crop',
    description: 'AI-powered e-commerce platform with intelligent product recommendations',
    problem: 'Retailers struggled with low conversion rates and personalization at scale.',
    solution: 'Built ML models analyzing user behavior for real-time product recommendations',
    links: { demo: '#', github: '#' },
  },
  {
    id: 2,
    name: 'CloudSync Pro',
    category: 'Web',
    techStack: ['Next.js', 'AWS', 'TypeScript', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    description: 'Enterprise cloud synchronization platform for distributed teams',
    problem: 'Teams needed seamless file sync across regions with strong security.',
    solution: 'Developed multi-region cloud architecture with end-to-end encryption',
    links: { demo: '#', github: '#' },
  },
  {
    id: 3,
    name: 'MobileSync',
    category: 'Mobile',
    techStack: ['React Native', 'Firebase', 'Realm', 'Swift'],
    image: 'https://images.unsplash.com/photo-1512941691920-25bda097d146?w=500&h=300&fit=crop',
    description: 'Cross-platform mobile app for real-time data synchronization',
    problem: 'Mobile teams needed offline-first sync with cloud backends.',
    solution: 'Built native mobile apps with offline-first architecture and background sync',
    links: { demo: '#', github: '#' },
  },
  {
    id: 4,
    name: 'AutoFlow Engine',
    category: 'Automation',
    techStack: ['Node.js', 'RabbitMQ', 'Python', 'Docker'],
    image: 'https://images.unsplash.com/photo-1454696462328-e2d88c3d8e91?w=500&h=300&fit=crop',
    description: 'Workflow automation platform with visual builder',
    problem: 'Businesses spent hours on repetitive tasks without automation tools.',
    solution: 'Created no-code automation platform serving 500+ enterprise clients',
    links: { demo: '#', github: '#' },
  },
]

const categories = ['All', 'Web', 'Mobile', 'AI', 'Automation']

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
  {project && (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="
          relative                   
          bg-gray-900
          rounded-2xl
          w-full
          max-w-2xl
          max-h-[90vh]                
          no-scrollbar 
          overflow-y-auto            
          p-6 sm:p-8                   
          border border-gray-700
        "
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          className="
            sticky top-2             
            ml-auto
            block
            z-50
            text-gray-400
            hover:text-white
            text-2xl
          "
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
        >
          ✕
        </motion.button>

        <img
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          className="w-full h-36 sm:h-64 object-cover rounded-xl mb-6"
        />

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          {project.name}
        </h2>

        <p className="text-[#00bfff] font-semibold mb-4">
          {project.category}
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-white mb-2">Problem</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            {project.problem}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-white mb-2">Solution</h3>
          <p className="text-gray-300 text-sm sm:text-base">
            {project.solution}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-white mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800 text-[#00bfff] rounded-full text-xs sm:text-sm border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href={project.links.demo}
            className="flex-1 py-2 bg-red-600 text-white font-bold rounded-lg text-center hover:bg-red-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            Live Demo
          </motion.a>

          <motion.a
            href={project.links.github}
            className="flex-1 py-2 border-2 border-[#00bfff] text-[#00bfff] font-bold rounded-lg text-center hover:bg-[#00bfff] hover:text-black transition"
            whileHover={{ scale: 1.05 }}
          >
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

  )
}

function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      className="flex-shrink-0 w-72 sm:w-80 md:w-80 lg:w-80 cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      onClick={() => onSelect(project)}
    >
      <div className="relative rounded-2xl overflow-hidden glassmorphism border border-gray-700 group-hover:border-[#ff0000] transition-all duration-300 h-full">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="p-4 sm:p-6">
          <p className="text-[#00bfff] text-xs sm:text-sm font-semibold mb-2">
            {project.category}
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.name}</h3>
          <p className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <p className="text-[#ff0000] font-semibold text-xs sm:text-sm">
              Click to view details →
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black overflow-hidden relative">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured <span className="text-[#ff0000]">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            Cutting-edge solutions delivered to industry leaders
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto pb-2 sm:pb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category
                  ? 'bg-red-600 text-white'
                  : 'border border-gray-600 text-gray-300 hover:border-gray-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Carousel */}
        <div 
          className="overflow-x-auto pb-4 hide-scrollbar"
          style={{
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none' /* IE and Edge */
          }}
        >
          <motion.div
            className="flex gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <ProjectCard
                  project={project}
                  onSelect={setSelectedProject}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-5 pointer-events-none" />
    </section>
  )
}
