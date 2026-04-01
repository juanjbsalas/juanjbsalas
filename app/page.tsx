import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import CurrentlyBuilding from '@/components/sections/CurrentlyBuilding'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Home — hero + currently building */}
        <section id="home">
          <Hero />
          <CurrentlyBuilding />
        </section>

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Projects />

        {/* About Me */}
        <About />

        {/* Contact */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
