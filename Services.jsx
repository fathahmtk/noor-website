import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { 
  Globe, 
  Smartphone, 
  TrendingUp, 
  FileText, 
  ShoppingCart, 
  Users, 
  Calculator, 
  Settings,
  Palette,
  Mail
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
      services: [
        "**POS Systems (Restaurant, Laundry, etc.)**",
        "ERPNext Software Service",
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
        <div className="text-center mb-16">
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
            <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md ${category.title === "Software Solutions" ? "ring-2 ring-purple-200 bg-gradient-to-br from-purple-50 to-blue-50" : "bg-white"}`}>
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {category.title}
                  {category.title === "Software Solutions" && (
                    <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Featured</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 brand-accent-gradient rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className={`${service.includes("POS Systems") || service.includes("ERPNext") ? "font-semibold text-gray-800" : ""}`}>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Qatar Registration Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 text-purple-800 px-6 py-3 rounded-full border border-purple-200">
            <span className="font-semibold">🇶🇦 Qatar Registered Business</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

