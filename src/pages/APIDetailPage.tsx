import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SignUpModal } from '../components/SignUpModal'
import {
  ArrowLeft,
  Clock,
  Target,
  Code,
  BookOpen,
  Play,
  Copy,
  Check,
  ExternalLink,
  Shield,
  Zap,
  Globe,
} from 'lucide-react'
import { getAPIById } from '../data/apiData'

export const APIDetailPage: React.FC = () => {
  const { category, apiId } = useParams()
  const [signUpModal, setSignUpModal] = useState<{
    isOpen: boolean
    type: 'signup' | 'demo' | 'trial'
    formSource?: 'header' | 'hero-cta' | 'footer-cta'
  }>({
    isOpen: false,
    type: 'signup',
    formSource: 'header',
  })
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('curl')

  const openSignUpModal = (type: 'signup' | 'demo' | 'trial', formSource) => {
    setSignUpModal({ isOpen: true, type, formSource })
  }

  const closeSignUpModal = () => {
    setSignUpModal({ isOpen: false, type: 'signup' })
  }

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  // Get API data from database
  const apiData = getAPIById(apiId || '')

  if (!apiData) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            API Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The requested API could not be found.
          </p>
          <Link
            to={`/apis/${category}`}
            className="text-red-600 hover:text-red-700"
          >
            Back to {category?.toUpperCase()} APIs
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{apiData.name} - RegTech API Documentation | Reguard</title>
        <meta
          name="description"
          content={`${apiData.longDescription} Integrate ${apiData.name} with ${apiData.accuracy} accuracy, ${apiData.responseTime} response time, and enterprise-grade security. Complete API documentation, code examples, and pricing.`}
        />
        <meta
          name="keywords"
          content={`${apiData.name}, ${apiData.category} API, identity verification API, document verification, OCR API, fraud detection API, biometric verification, liveness detection, KYC compliance API, RegTech API, financial services API, document authentication, machine learning verification, real-time fraud detection, government document verification, passport verification API, driver license verification, national ID verification, compliance automation`}
        />
        <link
          rel="canonical"
          href={`https://reguard.com/apis/${category}/${apiId}`}
        />
        <meta
          property="og:title"
          content={`${apiData.name} - RegTech API Documentation`}
        />
        <meta
          property="og:description"
          content={`Advanced ${apiData.category} API with ${apiData.accuracy} accuracy and ${apiData.responseTime} response time.`}
        />
        <meta
          property="og:url"
          content={`https://reguard.com/apis/${category}/${apiId}`}
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
              to="/apis"
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              APIs
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              to={`/apis/${category}`}
              className="text-gray-500 hover:text-red-600 transition-colors capitalize"
            >
              {category}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{apiData.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="flex items-center mb-6">
            <Link
              to={`/apis/${category}`}
              className="inline-flex items-center text-red-300 hover:text-white transition-colors mr-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to {category?.toUpperCase()} APIs
            </Link>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {apiData.category}
                </span>
                {apiData.isPopular && (
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                )}
              </div>

              <h1 className="font-gilroy text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {apiData.name}
              </h1>

              <p className="font-inter text-xl text-gray-300 mb-8 leading-relaxed">
                {apiData.longDescription}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg mb-1 mx-auto">
                    <Clock size={20} />
                  </div>
                  <div className="text-xl font-bold">
                    {apiData.responseTime}
                  </div>
                  <div className="text-xs text-gray-300">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg mb-1 mx-auto">
                    <Target size={20} />
                  </div>
                  <div className="text-xl font-bold">{apiData.accuracy}</div>
                  <div className="text-xs text-gray-300">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg mb-1 mx-auto">
                    <Shield size={20} />
                  </div>
                  <div className="text-xl font-bold">{apiData.pricing}</div>
                  <div className="text-xs text-gray-300">Per Request</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openSignUpModal('trial')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <Play size={20} />
                  <span>Try API</span>
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2">
                  <BookOpen size={20} />
                  <span>View Docs</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="text-green-400" size={24} />
                  <Zap className="text-yellow-400" size={24} />
                  <Globe className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Enterprise Ready</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 99.9% uptime SLA</li>
                  <li>• SOC 2 Type II certified</li>
                  <li>• GDPR compliant</li>
                  <li>• 24/7 technical support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <section>
              <h2 className="font-gilroy text-2xl font-bold text-gray-900 mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {apiData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases */}
            <section>
              <h2 className="font-gilroy text-2xl font-bold text-gray-900 mb-6">
                Use Cases
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {apiData.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="p-6 border border-gray-200 rounded-lg hover:border-red-200 hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {useCase}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Perfect for businesses requiring secure identity
                      verification
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Code Examples */}
            <section>
              <h2 className="font-gilroy text-2xl font-bold text-gray-900 mb-6">
                Code Examples
              </h2>
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex border-b border-gray-700">
                  {Object.keys(apiData.codeExamples).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveTab(lang)}
                      className={`px-6 py-3 text-sm font-medium transition-colors ${
                        activeTab === lang
                          ? 'bg-red-600 text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <pre className="p-6 text-sm text-gray-300 overflow-x-auto">
                    <code>
                      {
                        apiData.codeExamples[
                          activeTab as keyof typeof apiData.codeExamples
                        ]
                      }
                    </code>
                  </pre>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        apiData.codeExamples[
                          activeTab as keyof typeof apiData.codeExamples
                        ],
                        activeTab
                      )
                    }
                    className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    {copiedCode === activeTab ? (
                      <Check size={16} className="text-green-400" />
                    ) : (
                      <Copy size={16} className="text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </section>

            {/* API Endpoints */}
            <section>
              <h2 className="font-gilroy text-2xl font-bold text-gray-900 mb-6">
                API Endpoints
              </h2>
              <div className="space-y-4">
                {apiData.endpoints.map((endpoint, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6"
                  >
                    <div className="flex items-center space-x-4 mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          endpoint.method === 'POST'
                            ? 'bg-green-100 text-green-800'
                            : endpoint.method === 'GET'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {endpoint.method}
                      </span>
                      <code className="font-mono text-sm bg-gray-100 px-3 py-1 rounded">
                        {endpoint.path}
                      </code>
                    </div>
                    <p className="text-gray-600">{endpoint.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Quick Start */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
              <h3 className="font-gilroy text-lg font-bold text-gray-900 mb-4">
                Quick Start
              </h3>
              <div className="space-y-4">
                <button
                  onClick={() => openSignUpModal('trial', 'footer-cta')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                >
                  Get API Key
                </button>
                <button className="w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                  View Documentation
                </button>
                <button
                  onClick={() => openSignUpModal('demo')}
                  className="w-full text-red-600 hover:text-red-700 py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <ExternalLink size={16} />
                  <span>Schedule Demo</span>
                </button>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-gilroy text-lg font-bold text-gray-900 mb-4">
                Pricing
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Per verification</span>
                  <span className="font-bold text-gray-900">
                    {apiData.pricing}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Free tier</span>
                  <span className="font-bold text-green-600">
                    1,000 calls/month
                  </span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Volume discounts available for enterprise customers
                  </p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-gilroy text-lg font-bold text-gray-900 mb-4">
                Need Help?
              </h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <BookOpen size={16} />
                  <span>API Documentation</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Code size={16} />
                  <span>Code Examples</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Contact Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <SignUpModal
        isOpen={signUpModal.isOpen}
        onClose={closeSignUpModal}
        type={signUpModal.type}
      />
    </div>
  )
}
