import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const RegulatoryUpdatesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Regulatory Updates - Latest Compliance News | Reguard RegTech
        </title>
        <meta
          name="description"
          content="Stay informed with the latest regulatory updates, compliance requirements, and industry changes affecting financial services. Expert analysis on RBI guidelines, SEBI regulations, and global compliance trends."
        />
        <meta
          name="keywords"
          content="regulatory updates, compliance news, RBI guidelines, SEBI regulations, financial regulations, banking compliance updates, insurance regulations, cryptocurrency regulations, AML updates, KYC requirements, regulatory changes, compliance requirements, financial services regulations"
        />
        <link
          rel="canonical"
          href="https://reguard.com/resources/regulatory-updates"
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
            <span className="text-gray-900 font-medium">
              Regulatory Updates
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="flex items-center mb-6">
            <Link
              to="/resources"
              className="inline-flex items-center text-orange-200 hover:text-white transition-colors mr-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Resources
            </Link>
          </div> */}

          <h1 className="font-gilroy text-4xl lg:text-5xl font-bold mb-6">
            Regulatory Updates
          </h1>
          <p className="font-inter text-xl text-orange-100 max-w-3xl">
            Stay informed with the latest regulatory changes and compliance
            requirements.
          </p>
        </div>
      </section>

      {/* Regulatory Updates Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="font-gilroy text-2xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600 mb-8">
            Regular regulatory updates and compliance news are currently being
            prepared.
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
