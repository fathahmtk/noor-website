import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { 
  Database, 
  Users, 
  Calculator, 
  BarChart3, 
  Settings, 
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Globe
} from 'lucide-react'
import erpnextInterface from '../assets/erpnext-interface.png'
import erpnextAccounting from '../assets/erpnext-accounting.webp'

const ERPNextSection = () => {
  const features = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Comprehensive Accounting",
      description: "Multi-currency support, automated invoicing, and Qatar VAT compliance"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "HR & Payroll Management",
      description: "Employee management, attendance tracking, and payroll processing"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Inventory Management",
      description: "Real-time stock tracking, warehouse management, and procurement"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Reporting",
      description: "Customizable dashboards and comprehensive business analytics"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Project Management",
      description: "Task tracking, time sheets, and project profitability analysis"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "CRM Integration",
      description: "Lead management, customer support, and sales pipeline tracking"
    }
  ]

  const benefits = [
    "Open-source with no licensing fees",
    "Fully customizable to your business needs",
    "Cloud-based with mobile access",
    "Qatar VAT and GCC compliance ready",
    "Integrated modules for complete business management",
    "Professional implementation and training"
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="erpnext" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Featured Solution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="brand-gradient">ERPNext</span> Implementation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business operations with ERPNext, the world's leading open-source ERP solution. 
            We provide complete implementation, customization, and support services.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose ERPNext for Your Business?
            </h3>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="brand-accent-gradient text-white hover:opacity-90 transition-all duration-300"
              >
                Get ERPNext Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                View Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="slide-in-right">
            <div className="relative">
              <img 
                src={erpnextInterface} 
                alt="ERPNext Interface" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-medium">ERPNext</div>
                <div className="text-xs opacity-90">Dashboard</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Complete ERP Modules & Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card card-hover border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 rounded-lg flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accounting Module Highlight */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advanced Accounting Module
              </h3>
              <p className="text-gray-600 mb-6">
                ERPNext's accounting module provides comprehensive financial management with 
                multi-currency support, automated tax calculations, and Qatar VAT compliance. 
                Generate detailed financial reports and maintain complete audit trails.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>Qatar VAT Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-blue-500" />
                  <span>Real-time Reports</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-purple-500" />
                  <span>Multi-currency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Database className="h-4 w-4 text-orange-500" />
                  <span>Audit Trails</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={erpnextAccounting} 
                alt="ERPNext Accounting Module" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Our ERPNext Implementation Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Analysis", desc: "Business requirements analysis" },
              { step: "2", title: "Setup", desc: "System configuration & customization" },
              { step: "3", title: "Training", desc: "User training & documentation" },
              { step: "4", title: "Support", desc: "Ongoing support & maintenance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 brand-accent-gradient text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ERPNextSection

