import Testimonials from '@/components/Testimonials'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function TestimonialsPage() {
  return (
    <div className="w-full bg-black overflow-x-hidden">
      <Navigation />
      <section id="testimonials">
        <Testimonials />
      </section>
      <Footer />
    </div>
  )
}
