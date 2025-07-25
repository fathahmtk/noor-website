import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { 
  Globe, 
  Smartphone, 
  TrendingUp, 
  FileText, 
  Settings,
  Palette,
  Database,
  ShoppingCart,
  Users,
  Calculator
} from 'lucide-react'

const Services = () => {
  const serviceCategories = [
    {
      title: "Web & Branding",
      icon: <Globe className="h-8 w-8" />,
      color: "bg-gradient-to-br from-pink-100 to-purple-100 text-purple-600",
      services: [
        "Business & Ecommerce Websites",
        "Online Booking & Custom Order Platforms",
        "Portfolio & Company Profile Sites",
        "Logo Design & Full Branding",
        "Business Email & Domain Hosting"
      ]
    },
    {
      title: "Software Solutions",
      icon: <Settings className="h-8 w-8" />,
      color: "bg-gradient-to-br from-blue-100 to-indigo-100 text-indigo-600",
      highlight: true,
      services: [
        "ERPNext (Comprehensive ERP Solution)",
        "POS Systems (Restaurant, Laundry, Retail)",
        "Billing, Invoicing & Quotation Systems",
        "Inventory & Accounting (Qatar VAT-Ready)",
        "Payroll & Payslip Generator",
        "Custom CRM / ERP",
        "HRMS (Attendance, Salary, Leave)"
      ]
    },
    {
      title: "Mobile & Cloud Apps",
      icon: <Smartphone className="h-8 w-8" />,
      color: "bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600",
      services: [
        "Android & iOS Apps (Flutter)",
        "Delivery, Ecommerce & Booking Apps",
        "Admin Dashboards & Portals"
      ]
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "bg-gradient-to-br from-orange-100 to-red-100 text-orange-600",
      services: [
        "Social Media Setup & Paid Promotions",
        "Monthly Ads Boosting Packages",
        "Google Business & Google Ads"
      ]
    },
    {
      title: "Professional & Business Services",
      icon: <FileText className="h-8 w-8" />,
      color: "bg-gradient-to-br from-green-100 to-emerald-100 text-green-600",
      services: [
        "Trade License Renewal",
        "CR & Company Setup",
        "Bookkeeping & VAT Filing (Qatar & GCC)",
        "Internal Audit & Financial Reports",
        "Document Preparation"
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive <span className="brand-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From web development to business services, we provide end-to-end digital solutions 
            tailored for businesses in Qatar and the GCC region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`card-hover border-0 shadow-md ${
                category.highlight ? 'ring-2 ring-purple-200 bg-gradient-to-br from-purple-50 to-blue-50' : 'bg-white'
              }`}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {category.title}
                  {category.highlight && (
                    <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 brand-accent-gradient rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className={service.includes('ERPNext') || service.includes('POS') ? 'font-semibold text-gray-800' : ''}>
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialization Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Our Specializations</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <Database className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">ERPNext Implementation</h4>
                  <p className="text-purple-100">Complete ERP solutions with accounting, inventory, HR, and project management modules.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ShoppingCart className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">POS & Accounting Systems</h4>
                  <p className="text-purple-100">Qatar VAT-ready point of sale systems with integrated accounting and reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Qatar Registration Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 text-purple-800 px-6 py-3 rounded-full border border-purple-200">
            <span className="font-semibold">🇶🇦 Qatar Registered Business</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

