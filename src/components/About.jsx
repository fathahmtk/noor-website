import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { 
  Award, 
  Users, 
  Globe, 
  CheckCircle,
  Star,
  Target,
  Heart,
  Lightbulb
} from 'lucide-react'

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Target className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Heart className="h-6 w-6" /> }
  ]

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We leverage cutting-edge technology to deliver innovative solutions that drive business growth."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build long-term partnerships based on trust and results."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project, ensuring reliable and scalable solutions."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Local Expertise",
      description: "Deep understanding of Qatar and GCC market requirements and regulatory compliance."
    }
  ]

  const achievements = [
    "Qatar registered business with full legal compliance",
    "Certified ERPNext implementation partner",
    "Expertise in Qatar VAT and GCC regulations",
    "Multi-industry experience across retail, hospitality, and services",
    "Proven track record of successful digital transformations",
    "Ongoing support and maintenance for all clients"
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="brand-gradient">Noor Digital Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for digital transformation in Qatar. We specialize in ERPNext implementation, 
            POS systems, and comprehensive business solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="feature-card card-hover border-0 shadow-md text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 brand-accent-gradient text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold brand-gradient mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Empowering Businesses Through Technology
            </h3>
            <p className="text-gray-600 mb-6">
              Founded by Abdul Fathah, Noor Digital Solutions W.L.L. is a Qatar-registered company 
              dedicated to providing comprehensive digital solutions for businesses across the GCC region. 
              We specialize in ERPNext implementation, POS systems, web development, and business services.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is to help businesses streamline their operations, improve efficiency, 
              and achieve sustainable growth through innovative technology solutions. We understand 
              the unique challenges faced by businesses in Qatar and the GCC, and we tailor our 
              solutions to meet local requirements and regulations.
            </p>

            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Founder Info */}
          <div className="slide-in-right">
            <Card className="feature-card border-0 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-20 h-20 brand-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">AF</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Abdul Fathah
                </CardTitle>
                <CardDescription className="text-purple-600 font-medium">
                  Founder & CEO, Noor Digital Solutions W.L.L.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  With over 5 years of experience in digital solutions and business consulting, 
                  Abdul Fathah leads our team in delivering exceptional results for clients 
                  across Qatar and the GCC region.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 italic">
                    "Our commitment is to transform businesses through technology, 
                    ensuring every client achieves their digital transformation goals."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="feature-card card-hover border-0 shadow-md text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Registration */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-xl text-center">
          <div className="max-w-3xl mx-auto">
            <Globe className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Qatar Registered Business</h3>
            <p className="text-purple-100 mb-6">
              Noor Digital Solutions W.L.L. is officially registered in Qatar, ensuring full legal compliance 
              and professional service delivery. We understand local business requirements and regulatory standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Qatar Commercial Registration</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Professional Business License</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Local Market Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

