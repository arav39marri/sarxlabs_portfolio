import Services from '@/components/Services'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <div className="w-full bg-black overflow-x-hidden">
      <Navigation />
      <section id="services">
        <Services />
      </section>
      <Footer />
    </div>
  )
}
