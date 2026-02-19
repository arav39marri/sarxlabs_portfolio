import TechStack from '@/components/TechStack'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function TechStackPage() {
  return (
    <div className="w-full bg-black overflow-x-hidden">
      <Navigation />
      <section id="tech-stack">
        <TechStack />
      </section>
      <Footer />
    </div>
  )
}
