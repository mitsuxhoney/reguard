import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react'

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          RegTech Blog - Industry Insights & Compliance Trends | Reguard
        </title>
        <meta
          name="description"
          content="Stay updated with the latest RegTech insights, compliance trends, and financial technology innovations. Expert analysis on KYC automation, AML compliance, fraud prevention, and regulatory updates."
        />
        <meta
          name="keywords"
          content="RegTech blog, compliance trends, financial technology insights, KYC automation, AML compliance, fraud prevention, regulatory updates, fintech news, banking compliance, insurance RegTech, cryptocurrency regulation, identity verification trends, risk management insights, compliance automation, regulatory technology news"
        />
        <link rel="canonical" href="https://reguard.com/resources/blog" />
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
              to="/resources"
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              Resources
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="flex items-center mb-6">
            <Link
              to="/resources"
              className="inline-flex items-center text-blue-200 hover:text-white transition-colors mr-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Resources
            </Link>
          </div> */}

          <h1 className="font-gilroy text-4xl lg:text-5xl font-bold mb-6">
            RegTech Blog & Insights
          </h1>
          <p className="font-inter text-xl text-blue-100 max-w-3xl">
            Expert insights on regulatory technology, compliance automation, and
            the future of financial services.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="font-gilroy text-2xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600 mb-8">
            Our comprehensive blog with RegTech insights and industry analysis
            is currently under development.
          </p>
          <Link
            to="/resources"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Other Resources
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
