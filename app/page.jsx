'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Smooth scrolling setup with reduced motion support
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (!prefersReducedMotion) {
      // Optional: Add Lenis smooth scrolling here if desired
      // For now, using native smooth scroll CSS
      document.documentElement.scrollBehavior = 'smooth'
    }

    return () => {
      document.documentElement.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="w-full bg-black overflow-x-hidden">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="tech-stack">
        <TechStack />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <Footer />
    </div>
  )
}
