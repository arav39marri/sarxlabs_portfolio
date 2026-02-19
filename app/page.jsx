'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  )
}

function HomeContent() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Smooth scrolling setup with reduced motion support
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (!prefersReducedMotion) {
      document.documentElement.scrollBehavior = 'smooth'
    }

    // Scroll to specific section if hash is present
    const section = searchParams.get('section')
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }

    return () => {
      document.documentElement.scrollBehavior = 'auto'
    }
  }, [searchParams])

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
      <section id="testimonials">
        <Testimonials />
      </section>
       <section id="about">
        <About show={false} />
      </section> 
      <section id="cta">
        <CTA />
      </section>
      <Footer />
    </div>
  )
}
