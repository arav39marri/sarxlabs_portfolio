'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'

const projects = [
    {
    "id": 1,
    "name": "trydevLabs",
    "category": "Web",
    "techStack": [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "AWS Lambda"
    ],
    "image": "trydevs.png",
    "description": "Developer-focused platform for coding practice, project showcase, and remote code execution.",
    "problem": "Developers often lack an integrated platform that combines coding practice, project showcasing, and real-time code execution in one place.",
    "solution": "Built a fullstack platform that allows users to practice coding, run code remotely using containerized execution environments, and showcase projects—leveraging AWS Lambda and Docker for scalable execution.",
    "links": {
      "demo": "https://trydev.vercel.app/",
      "github": "https://github.com/arav39marri/trydev-final"
    }
  },
  {
    "id": 2,
    "name": "CodeMate",
    "category": "Automation",
    "techStack": ["React", "JavaScript", "HTML", "CSS", "Monaco Editor"],
    "image": "codemate.png",
    "description": "React-based coding utility / playground app.",
    "problem": "",
    "solution": "",
    "links": { "demo": "https://codematecompiler.vercel.app", "github": "https://github.com/arav39marri/CodeMate" }
  },
  {
    "id": 3,
    "name": "quiz-hosting",
    "category": "Web",
    "techStack": ["JavaScript", "Node.js", "Express", "MongoDB"],
    "image": "quiz_hosting.png",
    "description": "Quiz hosting platform (fullstack repo with client & server).",
    "problem": "",
    "solution": "",
    "links": { "demo": "https://quiz.sarxlabs.in", "github": "https://github.com/arav39marri/quiz-hostin" }
  },
  {
    "id": 4,
    "name": "fileshare",
    "category": "Web",
    "techStack": ["JavaScript", "HTML", "CSS", "WebRTC"],
    "image": "livesharefile.png",
    "description": "Client side of quick file sharing system.",
    "problem": "",
    "solution": "",
    "links": { "demo": "https://livesharefile.vercel.app", "github": "https://github.com/arav39marri/fileshare_client" }
  },
  {
    "id": 5,
    "name": "BusTicket Booking",
    "category": "Web",
    "techStack": ["JavaScript", "WebRTC", "Node.js", "Socket.io"],
    "image": "busticket.png",
    "description": "Real-time communication app (WebRTC).",
    "problem": "",
    "solution": "",
    "links": { "demo": "https://marggo.vercel.app", "github": "https://github.com/arav39marri/rtc-app" }
  },
  {
    "id": 6,
    "name": "chatbot",
    "category": "AI",
    "techStack": ["Python", "Flask", "JavaScript", "HTML", "CSS"],
    "image": "batugadu.png",
    "description": "Chatbot project with front-end UI and Python backend.",
    "problem": "",
    "solution": "",
    "links": { "demo": "https://batugadu.vercel.app", "github": "https://github.com/arav39marri/chatbot" }
  },
  {
    "id": 7,
    "name": "codeforcestracker",
    "category": "Web",
    "techStack": ["JavaScript", "React", "API Integration"],
    "image": "codeforcestracker.png",
    "description": "Codeforces contest tracker / stats dashboard.",
    "problem": "",
    "solution": "",
    "links": { "demo": "https://codeforcestracker.vercel.app", "github": "https://github.com/arav39marri/codeforcestracker" }
  },
  
]

function ProjectCard({ project }) {
  return (
    <motion.div
      className="flex-shrink-0 w-72 sm:w-80 md:w-80 lg:w-80 cursor-pointer group"
      whileHover={{ scale: 1.02 }}
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

          <div className="flex justify-center">
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg text-center hover:bg-red-700 transition text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

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
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <ProjectCard
                  project={project}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-5 pointer-events-none" />
    </section>
  )
}
