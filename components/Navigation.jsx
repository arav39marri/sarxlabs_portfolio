'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const sections = [
    // { id: 'hero', label: 'Home', route: '/' },
    { id: 'services', label: 'Services', route: '/services' },
    { id: 'projects', label: 'Projects', route: '/projects' },
    // { id: 'tech-stack', label: 'Tech Stack', route: '/tech-stack' },
    { id: 'testimonials', label: 'Testimonials', route: '/testimonials' },
    { id: 'about', label: 'About Us', route: '/about' },
    { id: 'cta', label: 'Contact', route: '/contact' }
  ]

  useEffect(() => {
    // Set active section based on current pathname
    const currentSection = sections.find(section => section.route === pathname)
    if (currentSection) {
      setActiveSection(currentSection.id)
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    // Only add scroll listener on home page
    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  const navigateToSection = (section) => {
  setActiveSection(section.id)
  setMobileMenuOpen(false)
  
  if (section.route === '/') {
    // On home page, scroll to section
    if (pathname === '/') {
      const element = document.getElementById(section.id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to home page with section parameter
      router.push(`/?section=${section.id}`)
    }
  } else {
    // Navigate to route page
    router.push(section.route)
  }
}

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-blue-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo and Organization Name */}
            <motion.div
              className="flex items-center gap-3 flex-shrink-0 cursor-pointer"
               onClick={() => (router.push('/'))}
              whileHover={{ scale: 1.05 }}
            >
              <img src="/logo_sarxlabs.png" alt="SarX LABS" className="w-10 h-10 rounded-lg" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-white">SarX LABS</h1>
                <p className="text-xs text-blue-400">Technology Studio</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => navigateToSection(section)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-red-500 border-b-2 border-red-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>

            {/* CTA Button - Desktop */}
            <motion.button
              onClick={() => navigateToSection(sections.find(s => s.id === 'cta'))}
              className="hidden lg:block px-6 py-2 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-blue-500/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2 glassmorphism">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => navigateToSection(section)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-red-500/20 text-red-400 border-l-2 border-red-500'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {section.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => navigateToSection(sections.find(s => s.id === 'cta'))}
                className="w-full px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-lg font-semibold mt-4"
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20 sm:h-20" />
    </>
  )
}

export default Navigation
