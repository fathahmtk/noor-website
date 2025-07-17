import React, { useState } from 'react';
import Head from 'next/head';

export default function NoorDigitalWebsite() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('accounting');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'erp',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you shortly via WhatsApp.`);
    // In production: Connect to your backend/WhatsApp API
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      <Head>
        <title>Noor Digital Solutions | Qatar ERP & Accounting Software</title>
        <meta name="description" content="Qatar's leading provider of VAT-compliant ERP, POS and accounting solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>NOOR</span>
            <span className="ml-2 text-lg">Digital Solutions</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-purple-600">Home</a>
            <a href="#services" className="hover:text-purple-600">Services</a>
            <a href="#erp" className="hover:text-purple-600">ERP Solutions</a>
            <a href="#contact" className="hover:text-purple-600">Contact</a>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile menu button would go here */}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Qatar's Premier <span className="text-yellow-300">Accounting & ERP</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            VAT-compliant software tailored for Qatari businesses
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="https://wa.me/97474464994"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg"
            >
              WhatsApp Consultation
            </a>
            <a
              href="#services"
              className="bg-white text-purple-800 hover:bg-purple-100 font-semibold py-3 px-8 rounded-lg"
            >
              Our Services
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {['Qatar Registered', 'VAT Compliant', '24/7 Support'].map((item) => (
              <div key={item} className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <span className="mr-2">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Accounting Services */}
            <ServiceCard 
              icon="🧾"
              title="Accounting & VAT"
              services={[
                "Qatar VAT-Compliant Software",
                "WPS Payroll Automation",
                "Financial Reporting",
                "Expense Tracking"
              ]}
              darkMode={darkMode}
            />

            {/* ERP Solutions - Highlighted */}
            <div className={`relative p-8 rounded-xl shadow-lg border-2 ${darkMode ? 'border-purple-400 bg-gray-800' : 'border-purple-600 bg-white'}`}>
              <div className="absolute -top-3 -right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <span className="text-4xl mb-4">📊</span>
              <h3 className="text-xl font-semibold mb-4">ERP Solutions</h3>
              <ul className="space-y-2 mb-6">
                <li>• Customizable ERP Systems</li>
                <li>• Inventory Management</li>
                <li>• Arabic/English Interface</li>
                <li>• Qatar Localization</li>
              </ul>
              <a href="#erp" className={`font-medium ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                Learn more →
              </a>
            </div>

            {/* POS Systems */}
            <ServiceCard 
              icon="🖥️"
              title="POS Systems"
              services={[
                "Retail & Restaurant POS",
                "VAT-Inclusive Billing",
                "Inventory Integration",
                "Customer Management"
              ]}
              darkMode={darkMode}
            />
          </div>
        </div>
      </section>

      {/* ERP Focus Section */}
      <section id="erp" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-purple-50'}`}>
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frappe ERP Next Solutions</h2>
            <p className="text-xl">Customizable ERP platform for Qatari businesses</p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-4 border-b dark:border-gray-600">
              {['Accounting', 'Inventory', 'HR', 'CRM'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`p-4 font-medium ${activeTab === tab.toLowerCase() ? (darkMode ? 'bg-purple-900 text-white' : 'bg-purple-100 text-purple-800') : ''}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-6 md:p-8">
              {activeTab === 'accounting' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Accounting Module</h3>
                    <ul className="space-y-3 mb-6">
                      <li>• Automated Qatar VAT calculations</li>
                      <li>• WPS payroll integration</li>
                      <li>• Multi-currency support</li>
                      <li>• Financial dashboards</li>
                    </ul>
                    <a 
                      href="#contact" 
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg"
                    >
                      Request Demo
                    </a>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-600 rounded-lg p-4 flex items-center justify-center">
                    <span className="text-gray-400">Accounting Dashboard Preview</span>
                  </div>
                </div>
              )}

              {/* Other tabs content would go here */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p>We'll help you find the right solution for your business</p>
          </div>

          <div className={`grid md:grid-cols-2 gap-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-xl shadow-lg`}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3">📱</span>
                  <div>
                    <p className="font-medium">WhatsApp/Call</p>
                    <p>+974 7446 4994</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">📧</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>info@noordigital.business</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">🕘</span>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p>Sun-Thu: 9AM - 6PM</p>
                  </div>
                </li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-2">WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-2">Service Needed</label>
                <select
                  className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="erp">ERP System</option>
                  <option value="accounting">Accounting Software</option>
                  <option value="pos">POS System</option>
                  <option value="vat">VAT Services</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg"
              >
                Request Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/97474464994"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Noor Digital Solutions W.L.L.</p>
          <p className="text-sm">Qatar Registered Business</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, services, darkMode }) {
  return (
    <div className={`p-6 rounded-xl shadow ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
      <span className="text-4xl mb-4 block">{icon}</span>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">•</span>
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}