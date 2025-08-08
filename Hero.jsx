import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Star, CircleCheckBig } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 floating-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 floating-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-200 rounded-full opacity-20 floating-animation" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left slide-in-left">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />Qatar Registered Business
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="brand-gradient block mt-2">Digital Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Comprehensive digital solutions including ERPNext implementation, POS systems, web development, and business services tailored for Qatar and GCC markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center">
                <CircleCheckBig className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">ERPNext Specialists</span>
              </div>
              <div className="flex items-center">
                <CircleCheckBig className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">POS Solutions</span>
              </div>
              <div className="flex items-center">
                <CircleCheckBig className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Qatar VAT Ready</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="brand-accent-gradient text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 transition-all duration-300">
                Get Free Consultation
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                <div><span className="font-medium">Email:</span> info@noordigital.business</div>
                <div><span className="font-medium">WhatsApp:</span> +974 7446 4994</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Card */}
          <div className="relative slide-in-right">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 feature-card">
                <div className="text-center">
                  <div className="w-16 h-16 brand-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">N</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">NOOR DIGITAL SOLUTIONS</h3>
                  <p className="text-gray-600 mb-6">Your trusted partner for digital transformation in Qatar</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div><div className="text-2xl font-bold brand-gradient">50+</div><div className="text-sm text-gray-600">Projects</div></div>
                    <div><div className="text-2xl font-bold brand-gradient">5+</div><div className="text-sm text-gray-600">Years</div></div>
                    <div><div className="text-2xl font-bold brand-gradient">100%</div><div className="text-sm text-gray-600">Satisfaction</div></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl shadow-lg floating-animation">
                <div className="text-sm font-medium">ERPNext</div>
                <div className="text-xs opacity-90">Implementation</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-xl shadow-lg floating-animation" style={{ animationDelay: '1s' }}>
                <div className="text-sm font-medium">POS Systems</div>
                <div className="text-xs opacity-90">Qatar Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

