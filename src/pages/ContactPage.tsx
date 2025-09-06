import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SignUpModal } from '../components/SignUpModal'
import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Headphones,
} from 'lucide-react'

export const ContactPage: React.FC = () => {
  const [signUpModal, setSignUpModal] = useState<{
    isOpen: boolean
    type: 'signup' | 'demo' | 'trial'
  }>({
    isOpen: false,
    type: 'signup',
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  })

  const openSignUpModal = (type: 'signup' | 'demo' | 'trial') => {
    setSignUpModal({ isOpen: true, type })
  }

  const closeSignUpModal = () => {
    setSignUpModal({ isOpen: false, type: 'signup' })
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form or show success message
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: "Send us an email and we'll respond within 24 hours",
      contact: 'hello@reguard.com',
      action: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team during business hours',
      contact: '+91 80 4567 8900',
      action: 'Call Now',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team for immediate assistance',
      contact: 'Available 24/7',
      action: 'Start Chat',
    },
    {
      icon: Users,
      title: 'Schedule Demo',
      description: 'Book a personalized demo with our product experts',
      contact: '30-minute session',
      action: 'Book Demo',
    },
  ]

  const offices = [
    {
      city: 'Bangalore',
      address: '123 Tech Park, Electronic City, Bangalore 560100, India',
      phone: '+91 80 4567 8900',
      email: 'bangalore@reguard.com',
      isHeadquarters: true,
    },
    {
      city: 'Mumbai',
      address:
        '456 Business District, Bandra Kurla Complex, Mumbai 400051, India',
      phone: '+91 22 6789 0123',
      email: 'mumbai@reguard.com',
      isHeadquarters: false,
    },
    {
      city: 'Delhi',
      address: '789 Corporate Center, Connaught Place, New Delhi 110001, India',
      phone: '+91 11 2345 6789',
      email: 'delhi@reguard.com',
      isHeadquarters: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Contact ReGuard India - Get in Touch | Reguard RegTech Solutions
        </title>
        <meta
          name="description"
          content="Contact ReGuard India for RegTech solutions, API support, and business inquiries. Reach our offices in Bangalore, Mumbai, and Delhi. Email: hello@reguard.com, Phone: +91 80 4567 8900. 24/7 support available."
        />
        <meta
          name="keywords"
          content="contact ReGuard India, RegTech support, API help, business inquiries, Bangalore office, Mumbai office, Delhi office, customer support, technical support, sales contact, demo request, RegTech consultation, compliance support, identity verification support"
        />
        <link rel="canonical" href="https://reguard.com/contact" />
        <meta
          property="og:title"
          content="Contact ReGuard India - Get in Touch"
        />
        <meta
          property="og:description"
          content="Contact India's leading RegTech company for API support, business inquiries, and compliance solutions."
        />
        <meta property="og:url" content="https://reguard.com/contact" />
      </Helmet>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              to="/"
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              to={'/contact'}
              className="text-gray-800 font-medium hover:text-red-600 transition-colors capitalize"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-gilroy text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Have questions about our RegTech solutions? Need technical support?
            Want to schedule a demo? We're here to help you succeed with
            regulatory compliance automation.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">&lt;2hrs</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">3</div>
              <div className="text-gray-300">Office Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs. Our team is
              ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <method.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-gilroy text-xl font-bold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="font-inter text-gray-600 mb-4 leading-relaxed">
                  {method.description}
                </p>
                <div className="text-red-600 font-semibold mb-4">
                  {method.contact}
                </div>
                <button
                  onClick={() => {
                    if (method.title === 'Schedule Demo') {
                      openSignUpModal('demo')
                    } else if (method.title === 'Email Us') {
                      window.location.href = 'mailto:hello@reguard.com'
                    } else if (method.title === 'Call Us') {
                      window.location.href = 'tel:+918045678900'
                    } else if (method.title === 'Live Chat') {
                      // Add chat widget integration here
                      alert('Live chat will be available soon!')
                    }
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                >
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="font-inter text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="demo">Product Demo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Office Information */}
            <div>
              <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-6">
                Our Offices
              </h2>
              <p className="font-inter text-gray-600 mb-8 leading-relaxed">
                Visit us at any of our office locations across India. We're
                always happy to meet in person.
              </p>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="font-gilroy text-xl font-bold text-gray-900">
                        {office.city}
                      </h3>
                      {office.isHeadquarters && (
                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                          Headquarters
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <MapPin size={16} className="text-gray-500 mt-0.5" />
                        <span className="text-gray-600">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone size={16} className="text-gray-500" />
                        <span className="text-gray-600">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail size={16} className="text-gray-500" />
                        <span className="text-gray-600">{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-6 h-6 text-red-600" />
                  <h3 className="font-gilroy text-lg font-bold text-gray-900">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM IST</div>
                  <div>Saturday: 10:00 AM - 2:00 PM IST</div>
                  <div>Sunday: Closed</div>
                </div>
                <div className="mt-3 flex items-center space-x-2">
                  <Headphones size={16} className="text-red-600" />
                  <span className="text-sm text-red-600 font-semibold">
                    24/7 Technical Support Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <SignUpModal
        isOpen={signUpModal.isOpen}
        onClose={closeSignUpModal}
        type={signUpModal.type}
      />
    </div>
  )
}
