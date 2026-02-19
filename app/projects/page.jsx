import Projects from '@/components/Projects'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ProjectsPage() {
  return (
    <div className="w-full bg-black overflow-x-hidden">
      <Navigation />
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </div>
  )
}
