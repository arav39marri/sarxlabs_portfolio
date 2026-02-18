'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const socialLinks = [
    { icon: '🔗', label: 'LinkedIn', href: '#' },
    { icon: '🐙', label: 'GitHub', href: '#' },
    { icon: '𝕏', label: 'Twitter', href: '#' },
    { icon: '📧', label: 'Email', href: 'mailto:hello@sarxlabs.com' },
  ]

  return (
    <footer className="w-full bg-black border-t border-gray-800 py-16 px-4 md:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo_sarxlabs.png" alt="SARX LABS" className="w-10 h-10 rounded-lg" />
              <h3 className="text-2xl font-bold text-white">SARX LABS</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building tomorrow's technology today. Premium digital solutions for ambitious brands.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <motion.a
                  href="#"
                  className="hover:text-[#ff0000] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Web Applications
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-[#00bfff] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Mobile Apps
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-[#ff0000] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  AI Solutions
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-[#00bfff] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Cloud Services
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <motion.a
                  href="#"
                  className="hover:text-[#ff0000] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-[#00bfff] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Our Work
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-[#ff0000] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Blog
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-[#00bfff] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Careers
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-3">
              <span className="text-[#00bfff] font-semibold">Email</span>
              <br />
              hello@sarxlabs.com
            </p>
            <p className="text-gray-400 text-sm">
              <span className="text-[#ff0000] font-semibold">Response Time</span>
              <br />
              Within 24 hours
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 py-8"
          variants={itemVariants}
        >
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#ff0000] transition-all glow-red"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} SARX LABS. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 text-gray-500 text-xs mt-4">
              <motion.a
                href="#"
                className="hover:text-gray-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <span>•</span>
              <motion.a
                href="#"
                className="hover:text-gray-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
              <span>•</span>
              <motion.a
                href="#"
                className="hover:text-gray-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff0000] to-transparent opacity-20" />
    </footer>
  )
}
