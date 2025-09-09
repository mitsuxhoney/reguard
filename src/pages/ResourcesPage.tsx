import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SignUpModal } from '../components/SignUpModal'
import {
  BookOpen,
  FileText,
  Code,
  TrendingUp,
  ArrowRight,
  Calendar,
  User,
  Clock,
} from 'lucide-react'

export const ResourcesPage: React.FC = () => {
  const [signUpModal, setSignUpModal] = useState<{
    isOpen: boolean
    type: 'signup' | 'demo' | 'trial'
  }>({
    isOpen: false,
    type: 'signup',
  })

  const openSignUpModal = (type: 'signup' | 'demo' | 'trial') => {
    setSignUpModal({ isOpen: true, type })
  }

  const closeSignUpModal = () => {
    setSignUpModal({ isOpen: false, type: 'signup' })
  }

  const resources = [
    {
      id: 'blog',
      title: 'Blog',
      description:
        'Latest insights, industry trends, and thought leadership articles on RegTech, compliance automation, and financial technology innovations.',
      icon: BookOpen,
      gradient: 'from-blue-600 to-blue-800',
      bgGradient: 'from-blue-50 to-blue-100',
      image:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      count: '150+ Articles',
      updated: 'Updated Daily',
    },
    {
      id: 'case-studies',
      title: 'Case Studies',
      description:
        'Real-world success stories from our clients showcasing how Reguard solutions have transformed their compliance operations and business outcomes.',
      icon: FileText,
      gradient: 'from-green-600 to-green-800',
      bgGradient: 'from-green-50 to-green-100',
      image:
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      count: '50+ Case Studies',
      updated: 'Updated Weekly',
    },
    {
      id: 'developer-docs',
      title: 'Developer Documentation',
      description:
        'Comprehensive API documentation, integration guides, SDKs, and technical resources for developers building with Reguard APIs.',
      icon: Code,
      gradient: 'from-purple-600 to-purple-800',
      bgGradient: 'from-purple-50 to-purple-100',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      count: '30+ APIs',
      updated: 'Updated Continuously',
    },
    {
      id: 'regulatory-updates',
      title: 'Regulatory Updates',
      description:
        'Stay informed with the latest regulatory changes, compliance requirements, and industry updates affecting financial services and RegTech.',
      icon: TrendingUp,
      gradient: 'from-orange-600 to-orange-800',
      bgGradient: 'from-orange-50 to-orange-100',
      image:
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      count: '200+ Updates',
      updated: 'Updated Daily',
    },
  ]

  const featuredContent = [
    {
      type: 'Blog',
      title: 'The Future of RegTech: AI and Machine Learning in Compliance',
      excerpt:
        'Explore how artificial intelligence and machine learning are revolutionizing regulatory compliance and risk management in financial services.',
      author: 'Dr. Priya Sharma',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Technology Trends',
    },
    {
      type: 'Case Study',
      title: 'How ABC Bank Reduced KYC Processing Time by 80%',
      excerpt:
        "Learn how ABC Bank transformed their customer onboarding process using Reguard's automated KYC solutions, achieving significant efficiency gains.",
      author: 'Reguard Team',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'Banking Success Story',
    },
    {
      type: 'Regulatory Update',
      title: 'New RBI Guidelines on Digital KYC: What You Need to Know',
      excerpt:
        'Comprehensive analysis of the latest RBI guidelines on digital KYC processes and their impact on financial institutions.',
      author: 'Compliance Team',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Regulatory Compliance',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Resources - Blog, Case Studies, Developer Docs, Regulatory Updates |
          Reguard
        </title>
        <meta
          name="description"
          content="Comprehensive RegTech resources including industry blog, client case studies, developer documentation, and regulatory updates. Stay informed with the latest trends in compliance automation, identity verification, and financial technology."
        />
        <meta
          name="keywords"
          content="RegTech resources, compliance blog, case studies, developer documentation, API docs, regulatory updates, financial technology insights, KYC guides, AML compliance resources, fintech trends, banking compliance, insurance RegTech, cryptocurrency compliance, identity verification guides, fraud prevention resources, risk management insights, regulatory technology news, compliance automation guides"
        />
        <link rel="canonical" href="https://reguard.com/resources" />
        <meta
          property="og:title"
          content="RegTech Resources - Blog, Case Studies, Developer Docs"
        />
        <meta
          property="og:description"
          content="Comprehensive resources for RegTech professionals including industry insights, success stories, and technical documentation."
        />
        <meta property="og:url" content="https://reguard.com/resources" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-16 h-16 text-red-400 mr-4" />
            <h1 className="font-gilroy text-4xl sm:text-5xl font-bold tracking-tight">
              Resources & Knowledge Hub
            </h1>
          </div>
          <p className="font-inter text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Stay ahead in the RegTech landscape with our comprehensive
            collection of industry insights, technical documentation, success
            stories, and regulatory updates. Everything you need to succeed in
            compliance automation and identity verification.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-gray-300">Resources Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-gray-300">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Daily</div>
              <div className="text-gray-300">Content Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-4">
              Explore Our Resource Categories
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              From technical documentation to industry insights, find the
              resources you need to excel in regulatory technology and
              compliance automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div
                key={resource.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div
                        className={`p-2 bg-white/20 rounded-lg backdrop-blur-sm`}
                      >
                        <resource.icon size={20} className="text-white" />
                      </div>
                      <div className="text-white text-sm">
                        <div className="font-semibold">{resource.count}</div>
                        <div className="opacity-80">{resource.updated}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-gilroy text-2xl font-bold text-gray-900 mb-4">
                    {resource.title}
                  </h3>
                  <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                    {resource.description}
                  </p>

                  <Link
                    to={`/resources/${resource.id}`}
                    className={`inline-flex items-center bg-gradient-to-r ${resource.gradient} hover:shadow-lg text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5`}
                  >
                    <span>Explore {resource.title}</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-4">
              Featured Content
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our most popular and recent content across all resource
              categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-red-200 transition-all duration-300"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {content.type}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {content.category}
                  </span>
                </div>

                <h3 className="font-gilroy text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {content.title}
                </h3>

                <p className="font-inter text-gray-600 mb-4 leading-relaxed">
                  {content.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{content.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{content.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(content.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-gilroy text-3xl sm:text-4xl font-bold mb-4">
            Stay Updated with RegTech Insights
          </h2>
          <p className="font-inter text-xl text-red-100 max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter and get the latest RegTech trends,
            compliance updates, and industry insights delivered directly to your
            inbox.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white hover:bg-gray-100 text-red-600 px-6 py-3 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <p className="text-red-200 text-sm">
            Join 10,000+ RegTech professionals • No spam, unsubscribe anytime
          </p>
        </div>
      </section>

      <Footer />
      <SignUpModal
        isOpen={signUpModal.isOpen}
        onClose={closeSignUpModal}
        type={signUpModal.type}
        formSource={signUpModal.formSource}
      />
    </div>
  )
}
