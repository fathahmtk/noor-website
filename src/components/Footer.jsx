import React from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'ERPNext', id: 'erpnext' },
    { name: 'POS Systems', id: 'pos' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ]

  const services = [
    'ERPNext Implementation',
    'POS System Development',
    'Web Development',
    'Mobile App Development',
    'Digital Marketing',
    'Business Consulting'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 brand-accent-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  NOOR <span className="brand-gradient">DIGITAL</span>
                </h3>
                <p className="text-xs text-gray-400">Solutions W.L.L.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner for digital transformation in Qatar. We specialize in ERPNext implementation, 
              POS systems, and comprehensive business solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+974 7446 4994</p>
                  <p className="text-sm text-gray-400">Phone & WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@noordigital.business</p>
                  <p className="text-sm text-gray-400">Email Address</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">www.noordigital.business</p>
                  <p className="text-sm text-gray-400">Website</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Qatar</p>
                  <p className="text-sm text-gray-400">Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025 Noor Digital Solutions W.L.L. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Qatar Registered Business | Professional Digital Solutions
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={scrollToTop}
                className="w-10 h-10 brand-accent-gradient rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <ArrowUp className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Specialization Banner */}
        <div className="border-t border-gray-800 py-4">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              <span className="text-purple-400 font-semibold">Specializing in:</span> 
              ERPNext Implementation • POS Systems • Qatar VAT Compliance • Business Automation
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

