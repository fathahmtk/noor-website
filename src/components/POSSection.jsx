import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { 
  ShoppingCart, 
  CreditCard, 
  BarChart3, 
  Users, 
  Package, 
  CheckCircle,
  ArrowRight,
  Smartphone,
  Shield,
  Zap,
  Calculator,
  Receipt
} from 'lucide-react'
import posSystem from '../assets/pos-system.png'
import posDashboard from '../assets/pos-dashboard.jpg'

const POSSection = () => {
  const posTypes = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Retail POS",
      description: "Complete retail management with inventory tracking and customer management"
    },
    {
      icon: <Receipt className="h-6 w-6" />,
      title: "Restaurant POS",
      description: "Table management, kitchen orders, and integrated billing for restaurants"
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Laundry POS",
      description: "Specialized system for laundry services with order tracking and pricing"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Service POS",
      description: "Service-based business management with appointment scheduling"
    }
  ]

  const features = [
    "Qatar VAT compliant billing",
    "Real-time inventory management",
    "Multiple payment methods support",
    "Customer loyalty programs",
    "Detailed sales analytics",
    "Multi-location support",
    "Offline mode capability",
    "Integration with accounting systems"
  ]

  const integrations = [
    { name: "QuickBooks", icon: <Calculator className="h-5 w-5" /> },
    { name: "ERPNext", icon: <BarChart3 className="h-5 w-5" /> },
    { name: "Payment Gateways", icon: <CreditCard className="h-5 w-5" /> },
    { name: "Mobile Apps", icon: <Smartphone className="h-5 w-5" /> }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShoppingCart className="h-4 w-4 mr-2" />
            POS Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional <span className="brand-gradient">POS Systems</span> for Every Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your business operations with our comprehensive Point of Sale systems. 
            Qatar VAT-ready solutions with integrated accounting and inventory management.
          </p>
        </div>

        {/* POS Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {posTypes.map((pos, index) => (
            <Card key={index} className="feature-card card-hover border-0 shadow-md text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {pos.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {pos.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{pos.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content - Image */}
          <div className="slide-in-left">
            <div className="relative">
              <img 
                src={posSystem} 
                alt="POS System Interface" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-xl shadow-lg floating-animation">
                <div className="text-sm font-medium">Qatar VAT</div>
                <div className="text-xs opacity-90">Ready</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Our POS Solutions?
            </h3>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="brand-accent-gradient text-white hover:opacity-90 transition-all duration-300"
              >
                Get POS Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                className="border-green-300 text-green-700 hover:bg-green-50"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive Dashboard & Analytics
              </h3>
              <p className="text-gray-600 mb-6">
                Monitor your business performance with real-time analytics, sales reports, 
                and inventory insights. Make data-driven decisions with our comprehensive 
                reporting dashboard.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4 text-blue-500" />
                  <span>Sales Analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4 text-green-500" />
                  <span>Inventory Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-purple-500" />
                  <span>Customer Insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Secure Transactions</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={posDashboard} 
                alt="POS Dashboard" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Seamless Integrations
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {integration.icon}
                </div>
                <h4 className="font-semibold text-gray-900">{integration.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Qatar Compliance Highlight */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl shadow-xl text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Qatar VAT Compliance Guaranteed</h3>
            <p className="text-green-100 mb-6">
              Our POS systems are fully compliant with Qatar's VAT regulations and GCC standards. 
              Generate proper tax invoices, maintain audit trails, and ensure regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>5% VAT Calculation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Tax Invoice Generation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Audit Trail Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default POSSection

