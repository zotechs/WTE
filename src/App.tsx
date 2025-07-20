import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Team from './components/Team'
import Talents from './components/Talents'
import Projects from './components/Projects'
import Vision from './components/Vision'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Team />
      <Talents />
      <Projects />
      <Vision />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
