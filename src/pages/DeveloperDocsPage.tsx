import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const DeveloperDocsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Developer Documentation - API Guides & SDKs | Reguard RegTech APIs
        </title>
        <meta
          name="description"
          content="Comprehensive developer documentation for Reguard's RegTech APIs. Integration guides, SDKs, code examples, and technical resources for KYC, AML, fraud detection, and compliance automation APIs."
        />
        <meta
          name="keywords"
          content="RegTech API documentation, developer guides, API integration, SDK documentation, KYC API docs, AML API guides, fraud detection API, compliance API documentation, identity verification API, technical documentation, API reference, code examples, integration tutorials"
        />
        <link
          rel="canonical"
          href="https://reguard.com/resources/developer-docs"
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
              Developer Documentation
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="flex items-center mb-6">
            <Link
              to="/resources"
              className="inline-flex items-center text-purple-200 hover:text-white transition-colors mr-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Resources
            </Link>
          </div> */}

          <h1 className="font-gilroy text-4xl lg:text-5xl font-bold mb-6">
            Developer Documentation
          </h1>
          <p className="font-inter text-xl text-purple-100 max-w-3xl">
            Comprehensive API documentation, integration guides, and technical
            resources for developers.
          </p>
        </div>
      </section>

      {/* Developer Docs Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="font-gilroy text-2xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600 mb-8">
            Comprehensive developer documentation and API guides are currently
            being finalized.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apis"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore APIs
            </Link>
            <Link
              to="/resources"
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Other Resources
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
