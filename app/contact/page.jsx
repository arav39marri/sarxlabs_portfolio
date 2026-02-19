import CTA from '@/components/CTA'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="w-full bg-black overflow-x-hidden">
      <Navigation />
      <section id="cta">
        <CTA />
      </section>
      <Footer />
    </div>
  )
}
