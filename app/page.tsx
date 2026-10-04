import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Metrics from '@/components/sections/Metrics'
import Projects from '@/components/sections/Projects'
import Process from '@/components/sections/Process'
import Stack from '@/components/sections/Stack'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Projects />
        <Process />
        <Stack />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
