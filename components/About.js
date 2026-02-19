'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AboutPage({show = true}) {
  return (
    <div className="w-full bg-black overflow-x-hidden">
      <Navigation />
      
      <section className="min-h-screen py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-red-500">SarX LABS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A technology studio dedicated to building innovative digital solutions that transform ideas into reality
            </p>
          </motion.div>

          {/* Our Story */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-300 mb-4">
                  Founded with a passion for innovation, SarX LABS emerged from a simple vision: to bridge the gap between complex technology and practical business solutions. We started as a small team of developers who believed that cutting-edge technology should be accessible to businesses of all sizes.
                </p>
                <p className="text-gray-300 mb-4">
                  Today, we've grown into a full-service technology studio, helping startups and enterprises alike navigate the digital landscape with confidence and creativity.
                </p>
                <p className="text-gray-300">
                  Our journey has been marked by continuous learning, adaptation to emerging technologies, and an unwavering commitment to delivering excellence in every project we undertake.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl blur-3xl opacity-20"></div>
                <img 
                  src="/logo_sarxlabs.png" 
                  alt="SarX LABS" 
                  className="relative w-full h-64 object-contain rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-red-500 mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create meaningful digital experiences. We strive to be the trusted partner that transforms complex challenges into opportunities for innovation.
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-blue-500 mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be at the forefront of technological innovation, creating solutions that not only meet today's needs but anticipate tomorrow's challenges. We envision a world where technology seamlessly integrates with business to unlock unlimited potential.
              </p>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions.
                </p>
              </motion.div>
              
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Quality</h3>
                <p className="text-gray-300">
                  We are committed to excellence in every line of code and every user experience we create.
                </p>
              </motion.div>
              
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Partnership</h3>
                <p className="text-gray-300">
                  We build lasting relationships with our clients, becoming an extension of their team.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-gray-900 rounded-2xl p-6 border border-gray-700 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">SL</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lead Developer</h3>
                <p className="text-gray-400 mb-2">Full-stack Specialist</p>
                <p className="text-gray-300 text-sm">
                  Passionate about creating scalable web applications and innovative solutions.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-gray-900 rounded-2xl p-6 border border-gray-700 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">UX</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">UX Designer</h3>
                <p className="text-gray-400 mb-2">Creative Mind</p>
                <p className="text-gray-300 text-sm">
                  Crafting beautiful and intuitive user experiences that delight and inspire.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-gray-900 rounded-2xl p-6 border border-gray-700 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">AI</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Engineer</h3>
                <p className="text-gray-400 mb-2">Innovation Driver</p>
                <p className="text-gray-300 text-sm">
                  Leveraging artificial intelligence to solve complex problems and create smart solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Section */}
          {show &&
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's build something amazing together. Get in touch with us today.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
            >
              Get Started
            </motion.button>
          </motion.div>
          }
        </div>
      </section>
      {show &&
      <Footer />
        }
    </div>
  )
}
