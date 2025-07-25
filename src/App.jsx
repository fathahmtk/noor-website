import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ERPNextSection from './components/ERPNextSection'
import POSSection from './components/POSSection'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <ERPNextSection />
        <POSSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

