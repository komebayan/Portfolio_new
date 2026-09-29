import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import FeaturedProject from './components/FeaturedProject'
import Journey from './components/Journey'
import Services from './components/Services'
import Exploring from './components/Exploring'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="app-wrapper">
      {/* Background Ambience Layers */}
      <div className="bg-grid-overlay" aria-hidden="true" />
      
      <div className="bg-ambient-glow" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>

      {/* Subtle Interactive Mouse Cursor Spotlight */}
      <div
        className="mouse-spotlight"
        aria-hidden="true"
        style={{
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
        }}
      />

      {/* Main Structural Components */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FeaturedProject />
        <Journey />
        <Services />
        <Exploring />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
