import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ]

  const services = [
    "Web Development & Design",
    "Mobile App Development",
    "Digital Marketing",
    "Software Solutions",
    "Business Services"
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              NOOR DIGITAL SOLUTIONS
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              At Noor Digital Solutions, customer satisfaction is not just a goal—it's the foundation 
              of everything we do. We are committed to delivering the highest quality websites and 
              online solutions that not only meet but exceed expectations.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <a href="mailto:info@noordigital.business" className="text-gray-300 hover:text-white transition-colors">
                  info@noordigital.business
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <a href="tel:+97474464994" className="text-gray-300 hover:text-white transition-colors">
                  +974 7446 4994
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services Area</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Noor Digital Solutions W.L.L. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <div className="inline-flex items-center bg-purple-900 text-purple-200 px-4 py-2 rounded-full text-sm">
              <span className="mr-2">🇶🇦</span>
              Qatar Registered Business
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

