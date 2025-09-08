import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SignUpModal } from '../components/SignUpModal'
import { Link } from 'react-router-dom'

const solutionsData = {
  embedkyc: {
    name: 'EmbedKYC',
    tagline: 'Custom KYC Flow Builder for Financial Institutions',
    badge: 'NEW',
    description:
      'Build and customize your own KYC compliance workflows with our intuitive drag-and-drop interface. Create tailored identity verification processes that match your exact regulatory requirements and business needs.',
    pricing: {
      starter: '$199/month',
      professional: '$599/month',
      enterprise: 'Custom pricing',
    },
    gradient: 'from-blue-600 to-purple-600',
    image:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  watchdawg: {
    name: 'WatchDawg',
    tagline: '360° AML Risk Monitoring and Compliance Platform',
    badge: '',
    description:
      'Comprehensive AML risk monitoring solution that provides continuous surveillance across all customer touchpoints to identify and mitigate financial crimes before they impact your institution.',
    pricing: {
      starter: '$499/month',
      professional: '$1,299/month',
      enterprise: 'Custom pricing',
    },
    gradient: 'from-red-600 to-orange-600',
    image:
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  hearoclock: {
    name: "Hear'O'Clock",
    tagline:
      'AI-Powered Reputation Management for Brands, Enterprises & Government',
    badge: '',
    description:
      "Advanced reputation monitoring and crisis management platform that tracks, analyzes, and helps protect your brand's online presence across all digital channels with real-time threat detection.",
    pricing: {
      starter: '$299/month',
      professional: '$799/month',
      enterprise: 'Custom pricing',
    },
    gradient: 'from-green-600 to-teal-600',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  complianceiq: {
    name: 'ComplianceIQ',
    tagline: 'Intelligent Regulatory Compliance Automation Platform',
    badge: '',
    description:
      'AI-powered compliance automation platform that streamlines regulatory processes, ensures adherence to multiple frameworks, and reduces compliance costs by up to 60%.',
    pricing: {
      starter: '$899/month',
      professional: '$2,499/month',
      enterprise: 'Custom pricing',
    },
    gradient: 'from-purple-600 to-indigo-600',
    image:
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  fraudshield: {
    name: 'FraudShield',
    tagline: 'Advanced Fraud Detection & Prevention Platform',
    badge: '',
    description:
      'Machine learning-powered fraud detection system that identifies suspicious activities in real-time, preventing financial losses and protecting customer trust.',
    pricing: {
      starter: '$599/month',
      professional: '$1,799/month',
      enterprise: 'Custom pricing',
    },
    gradient: 'from-orange-600 to-red-600',
    image:
      'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  riskradar: {
    name: 'RiskRadar',
    tagline: 'Real-time Risk Assessment & Monitoring Dashboard',
    badge: '',
    description:
      'Comprehensive risk management platform that provides 360-degree visibility into organizational risks with predictive analytics and automated mitigation strategies.',
    pricing: {
      starter: '$799/month',
      professional: '$2,199/month',
      enterprise: 'Custom pricing',
    },
    gradient: 'from-teal-600 to-cyan-600',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
}

export const SolutionsPage: React.FC = () => {
  const [signUpModal, setSignUpModal] = useState<{
    isOpen: boolean
    type: 'signup' | 'demo' | 'trial'
    formSource: 'cta' | 'header' | 'hero'
  }>({
    isOpen: false,
    type: 'signup',
    formSource: 'header',
  })

  const openSignUpModal = (
    type: 'signup' | 'demo' | 'trial',
    formSource: 'cta' | 'header' | 'hero'
  ) => {
    setSignUpModal({ isOpen: true, type, formSource })
  }
  const closeSignUpModal = () => {
    setSignUpModal({ isOpen: false, type: 'signup', formSource: 'header' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          RegTech Solutions - EmbedKYC, WatchDawg, Hear'O'Clock | Reguard
        </title>
        <meta
          name="description"
          content="Comprehensive RegTech solutions including EmbedKYC custom flow builder, WatchDawg 360° risk monitoring, and Hear'O'Clock reputation management for enterprises, brands, and government organizations."
        />
        <meta
          name="keywords"
          content="RegTech solutions, EmbedKYC, custom KYC flow builder, WatchDawg, risk monitoring platform, Hear'O'Clock, reputation management, brand monitoring, enterprise compliance solutions, government RegTech, drag and drop KYC, 360 degree monitoring, reputation intelligence, compliance automation platform, regulatory technology solutions, enterprise risk management, brand protection software, government compliance tools"
        />
        <link rel="canonical" href="https://reguard.com/solutions" />
        <meta
          property="og:title"
          content="RegTech Solutions - EmbedKYC, WatchDawg, Hear'O'Clock"
        />
        <meta
          property="og:description"
          content="Comprehensive RegTech solutions for custom KYC flows, risk monitoring, and reputation management."
        />
        <meta property="og:url" content="https://reguard.com/solutions" />
      </Helmet>
      <Header />

      {/* Solutions Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-gilroy text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Complete RegTech Solutions Suite
          </h1>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond APIs - comprehensive RegTech platforms designed to solve
            complex identity verification, risk management, and compliance
            challenges for modern financial institutions, enterprises, and
            government organizations.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(solutionsData).map(([key, solution]) => (
            <Link
              key={key}
              to={`/solutions/${key}`}
              className={`group bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all flex flex-col`}
            >
              <div
                className={`h-40 bg-gradient-to-br ${solution.gradient} flex items-center justify-center`}
              >
                <img
                  src={solution.image}
                  alt={solution.name}
                  className="w-24 h-24 object-cover rounded-xl border-4 border-white shadow-lg"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center space-x-2 mb-2">
                  <h2 className="font-gilroy text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {solution.name}
                  </h2>
                  {solution.badge && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      {solution.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-4">{solution.description}</p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-medium">
                    Starter
                  </span>
                  <span className="font-bold text-gray-900">
                    {solution.pricing.starter}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

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
