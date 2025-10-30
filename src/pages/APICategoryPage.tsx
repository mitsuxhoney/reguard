import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SignUpModal } from '../components/SignUpModal'
import { APICard } from '../components/APICard'
import { Search, ArrowLeft, Filter } from 'lucide-react'
import { getAPIsByCategory } from '../data/apiData'
import SEO from '../components/SEO'

export const APICategoryPage: React.FC = () => {
  const { category } = useParams()
  const [signUpModal, setSignUpModal] = useState<{
    isOpen: boolean
    type: 'signup' | 'demo' | 'trial'
  }>({
    isOpen: false,
    type: 'signup',
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('popularity')
  const navigate = useNavigate()

  const openSignUpModal = (type: 'signup' | 'demo' | 'trial') => {
    setSignUpModal({ isOpen: true, type })
  }

  const closeSignUpModal = () => {
    setSignUpModal({ isOpen: false, type: 'signup' })
  }

  const handleAPIClick = (apiId: string, category: string) => {
    navigate(`/apis/${category}/${apiId}`)
  }

  const categoryData = {
    kyc: {
      metaName:'KYC Identity Verification APIs | Reguard AI',
      metaDescription:'Verify identities instantly with Reguard AI KYC APIs. Fast, secure, and accurate verification to prevent fraud and boost user trust effortlessly.',
      title: 'KYC Identity Verification APIs',
      description:
      'Comprehensive Know Your Customer (KYC) APIs for individual identity verification with advanced document validation, biometric authentication, facial recognition, and real-time fraud detection capabilities.',
      totalAPIs: 8,
      gradient: 'from-blue-600 to-purple-600',
      keywords:
      'KYC API, identity verification, document verification, facial recognition, biometric authentication, customer onboarding, compliance automation, fraud detection, OCR processing, liveness detection',
    },
    kyb: {
      metaName:'KYB Business Verification APIs | Reguard AI Identity Check',
      metaDescription:'Verify business legitimacy in seconds with Reguard AI KYB APIs. Automate onboarding, detect fraud, and ensure compliance with real-time verification.',
      title: 'KYB Business Verification APIs',
      description:
      'Know Your Business (KYB) verification solutions for company registration validation, corporate structure analysis, beneficial ownership identification, and comprehensive business compliance checks.',
      totalAPIs: 6,
      gradient: 'from-green-600 to-teal-600',
      keywords:
      'KYB API, business verification, company registration, corporate structure, beneficial ownership, UBO verification, business compliance, entity verification, corporate due diligence',
    },
    aml: {
      metaName:'AML Compliance & Screening APIs | Reguard AI Solutions',
      metaDescription:'Ensure regulatory safety with Reguard AI AML Compliance & Screening APIs. Automate risk checks, detect suspicious activity, and stay audit-ready effortlessly.',
      title: 'AML Compliance and Screening APIs',
      description:
        'Anti-Money Laundering (AML) screening APIs for real-time sanctions list checking, Politically Exposed Person (PEP) screening, adverse media monitoring, and comprehensive financial crime prevention.',
      totalAPIs: 5,
      gradient: 'from-red-600 to-orange-600',
      keywords:
        'AML API, anti-money laundering, sanctions screening, PEP screening, OFAC compliance, financial crime prevention, transaction monitoring, suspicious activity detection, regulatory compliance',
    },
    'due-diligence': {
      metaName:'Due Diligence APIs | Verify Businesses & Individuals – Reguard AI',
      metaDescription:'Enhance your risk checks with Reguard AI’s Due Diligence APIs. Instantly verify businesses and individuals to ensure compliance and prevent fraud.',
      title: 'Due Diligence APIs',
      description:
        'Comprehensive due diligence solutions for background verification, litigation checks, financial history review, and corporate investigations to ensure compliance and mitigate risks.',
      totalAPIs: 3,
      gradient: 'from-indigo-600 to-cyan-600',
      keywords:
        'due diligence API, background checks, litigation screening, corporate investigations, financial history, compliance checks, vendor verification',
    },
    criminal: {
      metaName:'Criminal Screening APIs | Verify Backgrounds with Reguard AI',
      metaDescription:'Ensure trusted onboarding with Reguard AI’s Criminal Screening APIs. Instantly detect fraud, verify identities, and maintain compliance with ease.',
      title: 'Criminal Screening APIs',
      description:
        'APIs for criminal background checks, court record searches, watchlist matching, and law enforcement data integration to ensure safe onboarding and compliance.',
      totalAPIs: 1,
      gradient: 'from-rose-600 to-pink-600',
      keywords:
        'criminal screening API, background verification, criminal records, police verification, court data, law enforcement screening',
    },
    negative: {
      metaName:'',
      metaDescription:'',
      title: 'Negative Profiles & Adverse Media APIs',
      description:
        'Monitor adverse media sources, reputational risks, and negative profiles to protect your organization from high-risk individuals and entities.',
      totalAPIs: 1,
      gradient: 'from-gray-600 to-slate-600',
      keywords:
        'negative profile API, adverse media, reputation risk, negative news screening, media monitoring, compliance risk',
    },
    'transaction-monitoring': {
      metaName:'Transaction Monitoring APIs | Reguard AI Fraud Detection',
      metaDescription:'Enhance security with Reguard AI Transaction Monitoring APIs. Detect suspicious activities, prevent fraud, and ensure real-time risk assessment for your business.',
      title: 'Transaction Monitoring APIs',
      description:
        'Real-time transaction monitoring APIs for anomaly detection, suspicious activity identification, and AML compliance automation.',
      totalAPIs: 1,
      gradient: 'from-emerald-600 to-lime-600',
      keywords:
        'transaction monitoring API, fraud detection, suspicious activity, AML compliance, anomaly detection, financial crime monitoring',
    },
    'credit-risk': {
      metaName:'Credit & Risk Assessment APIs | Smart Insights by ReGuard AI',
      metaDescription:'Empower your business with ReGuard AI Credit & Risk Assessment APIs. Analyze credit data, assess risk accurately, and make faster, data-driven decisions.',
      title: 'Credit & Risk Assessment APIs',
      description:
        'Credit scoring and risk evaluation APIs for financial institutions to assess creditworthiness, detect risk factors, and make informed lending decisions.',
      totalAPIs: 1,
      gradient: 'from-yellow-600 to-orange-600',
      keywords:
        'credit risk API, credit scoring, risk assessment, financial health, lending risk, creditworthiness evaluation',
    },
    'fraud-detection': {
      metaName:'Fraud Detection APIs by ReGuard AI | Detect & Prevent Risks',
      metaDescription:'ReGuard AI Fraud Detection APIs help businesses detect fake identities, prevent scams, and secure onboarding with advanced AI-powered verification.',
      title: 'Fraud Detection APIs',
      description:
        'Advanced fraud detection APIs with AI-driven pattern analysis, device fingerprinting, and transaction risk scoring to prevent fraudulent activities.',
      totalAPIs: 2,
      gradient: 'from-fuchsia-600 to-purple-600',
      keywords:
        'fraud detection API, fraud prevention, device fingerprinting, risk scoring, synthetic identity detection, anomaly detection',
    },
    'data-enrichment': {
      metaName:'Data Enrichment APIs | Enhance Customer Insights – Reguard AI',
      metaDescription:'Unlock richer customer profiles with Reguard AI Data Enrichment APIs. Improve accuracy, insights, and decision-making with verified data intelligence.',
      title: 'Data Enrichment APIs',
      description:
        'Enhance customer profiles with data enrichment APIs that provide demographic, behavioral, and firmographic insights for better decision-making.',
      totalAPIs: 4,
      gradient: 'from-teal-600 to-cyan-600',
      keywords:
        'data enrichment API, customer profiling, firmographic data, demographic enrichment, behavioral insights, identity enhancement',
    },
    geolocation: {
      metaName:'Geolocation Verification APIs | Verify Location with ReGuard AI',
      metaDescription:'ReGuard AI Geolocation Verification APIs help businesses verify user locations in real time, reduce fraud, and ensure compliance with advanced AI accuracy.',
      title: 'Geolocation Verification APIs',
      description:
        'Verify user location and IP details with geolocation APIs to prevent fraud, ensure compliance, and enable regional personalization.',
      totalAPIs: 1,
      gradient: 'from-sky-600 to-indigo-600',
      keywords:
        'geolocation API, IP verification, location verification, fraud prevention, regional compliance, geo-IP data',
    },
    'legal-compliance': {
      metaName:'Legal Compliance Verification APIs | Reguard AI',
      metaDescription:'Ensure business transparency with Reguard AI Legal Compliance Verification APIs. Automate KYC, AML, and identity checks securely and meet regulatory standards.',
      title: 'Legal Compliance Verification APIs',
      description:
        'Legal entity verification APIs for corporate compliance checks, license verification, and regulatory adherence to meet industry requirements.',
      totalAPIs: 1,
      gradient: 'from-violet-600 to-indigo-600',
      keywords:
        'legal compliance API, entity verification, regulatory compliance, license checks, compliance automation, corporate governance',
    },
  }

  const currentCategory =
    categoryData[category as keyof typeof categoryData] || categoryData.kyc
  const currentAPIs = getAPIsByCategory(category || 'kyc')

  const filteredAPIs = currentAPIs.filter(
    (api) =>
      api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      api.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedAPIs = [...filteredAPIs].sort((a, b) => {
    if (sortBy === 'popularity') {
      return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0)
    }
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name)
    }
    if (sortBy === 'accuracy') {
      return parseFloat(b.accuracy) - parseFloat(a.accuracy)
    }
    return 0
  })

  return (
    <div className="min-h-screen bg-white">
      <SEO title={currentCategory.title} description={currentCategory.description}/>
      <Header/>

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
            <span className="text-gray-900 font-medium capitalize">
              {category}
            </span>
          </nav>
        </div>
      </div>

          {/* Hero Section */}
      <section
        className={`bg-gradient-to-br ${currentCategory.gradient} text-white py-16`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="flex items-center mb-6">
            <Link
              to="/apis"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mr-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to All APIs
            </Link>
          </div> */}

          <div className="max-w-4xl">
            <h1 className="font-gilroy text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {currentCategory.title}
            </h1>
            <p className="font-inter text-xl text-white/90 mb-8 leading-relaxed">
              {currentCategory.description}
            </p>

            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">
                  {currentCategory.totalAPIs}
                </div>
                <div className="text-white/80">Available APIs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-white/80">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">&lt;2s</div>
                <div className="text-white/80">Avg Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search APIs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter size={16} className="text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="name">Sort by Name</option>
                  <option value="accuracy">Sort by Accuracy</option>
                </select>
              </div>

              <div className="text-sm text-gray-600">
                {filteredAPIs.length} of {currentAPIs.length} APIs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {sortedAPIs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedAPIs.map((api) => (
              <APICard
                key={api.id}
                id={api.id}
                name={api.name}
                description={api.description}
                responseTime={api.responseTime}
                accuracy={api.accuracy}
                category={api.category}
                isPopular={api.isPopular}
                onClick={() => handleAPIClick(api.id, category || 'kyc')}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No APIs found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or browse other categories.
            </p>
            <Link
              to="/apis"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
            >
              <ArrowLeft size={16} className="mr-2" />
              Browse All APIs
            </Link>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-inter text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start integrating our {currentCategory.title.toLowerCase()} today
            with 1000 free API calls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openSignUpModal('trial', 'footer-cta')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              Get API Key
            </button>
            <button
              onClick={() => openSignUpModal('demo', 'footer-cta')}
              className="border-2 border-red-600 hover:bg-red-600 hover:text-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Schedule Demo
            </button>
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