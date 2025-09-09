import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SignUpModal } from '../components/SignUpModal'
import {
  Briefcase,
  ArrowRight,
  Users,
  Shield,
  TrendingUp,
  Building2,
  Coins,
} from 'lucide-react'

export const IndustriesPage: React.FC = () => {
  const [signUpModal, setSignUpModal] = useState<{
    isOpen: boolean
    type: 'signup' | 'demo' | 'trial'
    formSource?:
      | 'header'
      | 'hero-cta'
      | 'footer-cta'
      | 'cryptocurrency'
      | 'banking'
      | 'fintech'
      | 'insurance'
      | 'mutualfunds'
  }>({
    isOpen: false,
    type: 'signup',
    formSource: 'header',
  })

  const openSignUpModal = (type: 'signup' | 'demo' | 'trial', formSource) => {
    setSignUpModal({ isOpen: true, type, formSource })
  }

  const closeSignUpModal = () => {
    setSignUpModal({ isOpen: false, type: 'signup' })
  }

  const industries = [
    {
      id: 'banking-nbfc',
      title: 'Banking & NBFC',
      description:
        'Comprehensive RegTech solutions for banks and Non-Banking Financial Companies with advanced KYC, AML compliance, and risk management capabilities.',
      icon: Building2,
      form_source: 'banking',
      gradient: 'from-blue-600 to-blue-800',
      bgGradient: 'from-blue-50 to-blue-100',
      image:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Digital KYC Automation',
        'AML Transaction Monitoring',
        'Regulatory Compliance',
        'Risk Assessment',
      ],
      stats: { clients: '150+', compliance: '100%', reduction: '70%' },
    },
    {
      id: 'fintech-payments',
      title: 'Fintech & Payments',
      form_source: 'fintech',
      description:
        'Identity verification and fraud prevention solutions for fintech companies and payment processors with real-time screening and compliance automation.',
      icon: TrendingUp,
      gradient: 'from-green-600 to-green-800',
      bgGradient: 'from-green-50 to-green-100',
      image:
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Real-time Fraud Detection',
        'Payment Compliance',
        'Customer Onboarding',
        'Transaction Monitoring',
      ],
      stats: { clients: '200+', transactions: '10M+', accuracy: '99.5%' },
    },
    {
      id: 'insurance-insurtech',
      title: 'Insurance & InsurTech',
      description:
        'Risk assessment and fraud prevention solutions for insurance companies and InsurTech startups with comprehensive due diligence and claim verification.',
      icon: Shield,
      form_source: 'insurance',
      gradient: 'from-purple-600 to-purple-800',
      bgGradient: 'from-purple-50 to-purple-100',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Policy Holder Verification',
        'Claim Fraud Detection',
        'Risk Profiling',
        'Regulatory Compliance',
      ],
      stats: { clients: '80+', claims: '5M+', fraud: '85%' },
    },
    {
      id: 'mutual-funds-amcs',
      title: 'Mutual Funds & AMCs',
      description:
        'Investor verification and compliance automation for mutual fund companies and Asset Management Companies with comprehensive KYC and due diligence.',
      icon: TrendingUp,
      form_source: 'mutualfunds',
      gradient: 'from-orange-600 to-orange-800',
      bgGradient: 'from-orange-50 to-orange-100',
      image:
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Investor KYC Automation',
        'Regulatory Reporting',
        'Risk Assessment',
        'Compliance Monitoring',
      ],
      stats: { clients: '60+', investors: '2M+', compliance: '100%' },
    },
    {
      id: 'cryptocurrency-exchanges',
      title: 'Cryptocurrency Exchanges',
      description:
        'Advanced KYC and AML compliance solutions for cryptocurrency exchanges and digital asset platforms with enhanced due diligence and transaction monitoring.',
      icon: Coins,
      form_source: 'cryptocurrency',
      gradient: 'from-yellow-600 to-yellow-800',
      bgGradient: 'from-yellow-50 to-yellow-100',
      image:
        'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Enhanced KYC Verification',
        'AML Transaction Screening',
        'Sanctions List Monitoring',
        'Regulatory Compliance',
      ],
      stats: { clients: '40+', users: '1M+', screening: '24/7' },
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Industries We Serve - Banking, Fintech, Insurance, Crypto | Reguard
          RegTech Solutions
        </title>
        <meta
          name="description"
          content="Specialized RegTech solutions for Banking & NBFC, Fintech & Payments, Insurance & InsurTech, Mutual Funds & AMCs, and Cryptocurrency Exchanges. Industry-specific compliance automation, KYC verification, AML screening, and fraud prevention solutions."
        />
        <meta
          name="keywords"
          content="RegTech industries, banking compliance solutions, fintech KYC automation, insurance fraud detection, mutual fund compliance, cryptocurrency exchange AML, NBFC regulatory technology, payment processor verification, InsurTech solutions, AMC compliance automation, digital asset compliance, financial services RegTech, industry-specific compliance, sector-wise RegTech solutions, banking RegTech, fintech compliance, insurance RegTech, crypto compliance solutions"
        />
        <link rel="canonical" href="https://reguard.com/industries" />
        <meta
          property="og:title"
          content="Industries We Serve - Specialized RegTech Solutions"
        />
        <meta
          property="og:description"
          content="Industry-specific RegTech solutions for Banking, Fintech, Insurance, Mutual Funds, and Cryptocurrency sectors."
        />
        <meta property="og:url" content="https://reguard.com/industries" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Briefcase className="w-16 h-16 text-red-400 mr-4" />
            <h1 className="font-gilroy text-4xl sm:text-5xl font-bold tracking-tight">
              Industries We Serve
            </h1>
          </div>
          <p className="font-inter text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Specialized RegTech solutions tailored for different financial
            sectors. From traditional banking to emerging fintech and
            cryptocurrency exchanges, we provide industry-specific compliance
            automation, identity verification, and risk management solutions.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5</div>
              <div className="text-gray-300">Key Industries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-gray-300">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-4">
              Sector-Specific Solutions
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Each industry has unique regulatory requirements and compliance
              challenges. Our specialized solutions are designed to meet the
              specific needs of your sector.
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Image Section */}
                <div className="flex-1 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} rounded-2xl transform rotate-3`}
                  ></div>
                  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                          <industry.icon size={24} className="text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {industry.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-white/90 text-sm">
                        <span>
                          {industry.stats.clients ||
                            industry.stats.transactions ||
                            industry.stats.claims ||
                            industry.stats.investors ||
                            industry.stats.users}{' '}
                          Clients/Users
                        </span>
                        <span>•</span>
                        <span>
                          {industry.stats.compliance ||
                            industry.stats.accuracy ||
                            industry.stats.fraud ||
                            industry.stats.screening}{' '}
                          Success Rate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="font-gilroy text-3xl font-bold text-gray-900 mb-4">
                      {industry.title}
                    </h3>
                    <p className="font-inter text-lg text-gray-600 leading-relaxed mb-6">
                      {industry.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.gradient}`}
                        ></div>
                        <span className="text-gray-700 text-sm font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link
                      to={`/industries/${industry.id}`}
                      className={`bg-gradient-to-r ${industry.gradient} hover:shadow-lg text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 flex items-center space-x-2`}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </Link>
                    <button
                      onClick={() =>
                        openSignUpModal('demo', industry.form_source)
                      }
                      className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Request Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-gilroy text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Industry Compliance?
          </h2>
          <p className="font-inter text-xl text-red-100 max-w-3xl mx-auto mb-8">
            Join industry leaders who trust Reguard for their regulatory
            technology needs. Get started with our specialized solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openSignUpModal('demo', 'footer-cta')}
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              Schedule Industry Demo
            </button>
            <button
              onClick={() => openSignUpModal('trial', 'footer-cta')}
              className="border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Start Free Trial
            </button>
          </div>
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
