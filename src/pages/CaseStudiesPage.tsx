import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Case Studies - Client Success Stories | Reguard RegTech Solutions
        </title>
        <meta
          name="description"
          content="Discover how leading financial institutions have transformed their compliance operations with Reguard's RegTech solutions. Real-world case studies showcasing improved efficiency, reduced costs, and enhanced compliance."
        />
        <meta
          name="keywords"
          content="RegTech case studies, client success stories, compliance automation results, KYC implementation, AML success stories, banking transformation, fintech case studies, insurance RegTech results, cryptocurrency compliance, identity verification success, fraud prevention case studies, regulatory compliance results"
        />
        <link
          rel="canonical"
          href="https://reguard.com/resources/case-studies"
        />
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
            <span className="text-gray-900 font-medium">Case Studies</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="flex items-center mb-6">
            <Link
              to="/resources"
              className="inline-flex items-center text-green-200 hover:text-white transition-colors mr-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Resources
            </Link>
          </div> */}

          <h1 className="font-gilroy text-4xl lg:text-5xl font-bold mb-6">
            Client Success Stories
          </h1>
          <p className="font-inter text-xl text-green-100 max-w-3xl">
            Real-world case studies showcasing how our RegTech solutions have
            transformed compliance operations.
          </p>
        </div>
      </section>

      {/* Case Studies Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="font-gilroy text-2xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600 mb-8">
            Detailed case studies showcasing client success stories are
            currently being prepared.
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
