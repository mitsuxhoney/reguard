import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SignUpModal } from './SignUpModal'
import { LoginModal } from './LoginModal'
import {
  Menu,
  X,
  ChevronDown,
  UserCheck,
  Users,
  Shield,
  FileText,
  AlertTriangle,
  Eye,
  TrendingUp,
  Building2,
  CreditCard,
  Globe,
  Database,
  Gavel,
  ExternalLink,
  Briefcase,
  BookOpen,
  Info,
  Sparkles,
  Clock,
} from 'lucide-react'
import ReguardLogo from '../assets/reguard-new-logo-dark.svg'
const apiCategories = [
  {
    id: 'kyc',
    icon: UserCheck,
    title: 'KYC',
    description: 'Identity verification for individuals',
    count: 6,
  },
  {
    id: 'kyb',
    icon: Users,
    title: 'KYB',
    description: 'Business verification solutions',
    count: 4,
  },
  {
    id: 'aml',
    icon: Shield,
    title: 'AML',
    description: 'Anti-money laundering screening',
    count: 4,
  },
  {
    id: 'due-diligence',
    icon: FileText,
    title: 'Due Diligence',
    description: 'Comprehensive background checks',
    count: 3,
  },
  {
    id: 'criminal',
    icon: AlertTriangle,
    title: 'Criminal Screening',
    description: 'Criminal background verification',
    count: 3,
  },
  {
    id: 'negative',
    icon: Eye,
    title: 'Negative Profiles',
    description: 'Adverse media and reputation risks',
    count: 3,
  },
  {
    id: 'transaction-monitoring',
    icon: TrendingUp,
    title: 'Transaction Monitoring',
    description: 'Real-time transaction analysis',
    count: 5,
  },
  {
    id: 'credit-risk',
    icon: CreditCard,
    title: 'Credit & Risk',
    description: 'Credit scoring and risk assessment',
    count: 5,
  },
  {
    id: 'fraud-detection',
    icon: Shield,
    title: 'Fraud Detection',
    description: 'Advanced fraud prevention',
    count: 4,
  },
  {
    id: 'data-enrichment',
    icon: Database,
    title: 'Data Enrichment',
    description: 'Customer profile enhancement',
    count: 4,
  },
  {
    id: 'geolocation',
    icon: Globe,
    title: 'Geolocation',
    description: 'Location and IP verification',
    count: 3,
  },
  {
    id: 'legal-compliance',
    icon: Gavel,
    title: 'Legal Compliance',
    description: 'Legal entity verification',
    count: 4,
  },
]

const industries = [
  {
    id: 'banking-nbfc',
    title: 'Banking & NBFC',
    description: 'Comprehensive compliance solutions for banks and NBFCs',
  },
  {
    id: 'fintech-payments',
    title: 'Fintech & Payments',
    description: 'Identity verification for fintech and payment companies',
  },
  {
    id: 'insurance-insurtech',
    title: 'Insurance & InsurTech',
    description: 'Risk assessment and fraud prevention for insurance',
  },
  {
    id: 'mutual-funds-amcs',
    title: 'Mutual Funds & AMCs',
    description: 'Investor verification and compliance automation',
  },
  {
    id: 'cryptocurrency-exchanges',
    title: 'Cryptocurrency Exchanges',
    description: 'KYC and AML compliance for crypto platforms',
  },
]

const resources = [
  {
    id: 'blog',
    title: 'Blog',
    description: 'Latest insights and industry trends',
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    description: 'Success stories from our clients',
  },
  {
    id: 'developer-docs',
    title: 'Developer Docs',
    description: 'Comprehensive API documentation',
  },
  {
    id: 'regulatory-updates',
    title: 'Regulatory Updates',
    description: 'Latest compliance and regulatory news',
  },
]

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false)
  const [isIndustriesMenuOpen, setIsIndustriesMenuOpen] = useState(false)
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false)
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false)
  const [signUpModal, setSignUpModal] = useState<{
    isOpen: boolean
    type: 'signup' | 'demo' | 'trial'
    formSource?: 'cta' | 'header' | 'hero'
  }>({
    isOpen: false,
    type: 'signup',
    formSource: 'header',
  })
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  const openSignUpModal = (
    type: 'signup' | 'demo' | 'trial',
    formSource: 'header' | 'cta' | 'hero'
  ) => {
    setSignUpModal({ isOpen: true, type, formSource })
  }

  const closeSignUpModal = () => {
    setSignUpModal({ isOpen: false, type: 'signup' })
  }

  const scrollToAPIDiscovery = () => {
    const element = document.getElementById('apis')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const redirectToConsole = () => {
    setLoginModalOpen(true)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/">
              <img src={ReguardLogo} alt="Reguard" className="h-9 w-auto" />
            </Link>
            <div className="hidden lg:flex items-center ml-4">
              <Link to="/careers">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                  We're Hiring
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 group">
                <span>APIs</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isMegaMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Mega Menu with Bridge */}
              {isMegaMenuOpen && (
                <div className="absolute top-full left-0 w-screen max-w-4xl -translate-x-1/3">
                  {/* Invisible bridge to cover the gap */}
                  <div className="h-2 bg-transparent"></div>

                  <div className="bg-white shadow-2xl border border-gray-100 rounded-2xl p-8">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        API Categories
                      </h3>
                      <p className="text-sm text-gray-600">
                        Explore our comprehensive suite of RegTech APIs
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      {apiCategories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/apis/${category.id}`}
                          className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors">
                            <category.icon size={18} className="text-red-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                                {category.title}
                              </h4>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                                {category.count}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                              {category.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                          Ready to integrate?
                        </h4>
                        <p className="text-xs text-gray-500">
                          Get started with our comprehensive documentation
                        </p>
                      </div>
                      <div className="flex space-x-3">
                        <Link
                          to="/apis"
                          className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center space-x-1"
                        >
                          <span>View All APIs</span>
                          <ExternalLink size={14} />
                        </Link>
                        <button
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                          onClick={() => openSignUpModal('trial')}
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsMenuOpen(true)}
              onMouseLeave={() => setIsSolutionsMenuOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 group">
                <span>Solutions</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isSolutionsMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Solutions Mega Menu with Bridge */}
              {isSolutionsMenuOpen && (
                <div className="absolute top-full left-0 w-screen max-w-5xl -translate-x-1/4">
                  {/* Invisible bridge */}
                  <div className="h-2 bg-transparent"></div>

                  <div className="bg-white shadow-2xl border border-gray-100 rounded-2xl p-8">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Complete RegTech Solutions
                      </h3>
                      <p className="text-sm text-gray-600">
                        Comprehensive platforms for identity verification, risk
                        management, and compliance automation
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <Link
                        to="/solutions/embedkyc"
                        className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <Sparkles size={20} className="text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                              EmbedKYC
                            </h4>
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-medium">
                              NEW
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            Custom KYC flow builder with drag-and-drop interface
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/solutions/watchdawg"
                        className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors">
                          <Shield size={20} className="text-red-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-1">
                            WatchDawg
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            360° AML monitoring and risk management platform
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/solutions/hearoclock"
                        className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
                          <Clock size={20} className="text-green-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-1">
                            Hear'O'Clock
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            AI-powered reputation management and crisis response
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/solutions/complianceiq"
                        className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                          <Gavel size={20} className="text-purple-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-1">
                            ComplianceIQ
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            Intelligent regulatory compliance automation
                            platform
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/solutions/fraudshield"
                        className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                          <AlertTriangle
                            size={20}
                            className="text-orange-600"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-1">
                            FraudShield
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            Advanced fraud detection and prevention platform
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/solutions/riskradar"
                        className="group flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                          <TrendingUp size={20} className="text-teal-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-1">
                            RiskRadar
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            Real-time risk assessment and monitoring dashboard
                          </p>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                          Need a custom solution?
                        </h4>
                        <p className="text-xs text-gray-500">
                          We build tailored RegTech platforms for enterprise
                          clients
                        </p>
                      </div>
                      <div className="flex space-x-3">
                        <Link
                          to="/solutions"
                          className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center space-x-1"
                        >
                          <span>View All Solutions</span>
                          <ExternalLink size={14} />
                        </Link>
                        <button
                          onClick={() => openSignUpModal('demo')}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          Contact Sales
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsIndustriesMenuOpen(true)}
              onMouseLeave={() => setIsIndustriesMenuOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 group">
                <span>Industries</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isIndustriesMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isIndustriesMenuOpen && (
                <div className="absolute top-full left-0 w-80">
                  {/* Invisible bridge */}
                  <div className="h-2 bg-transparent"></div>

                  <div className="bg-white shadow-2xl border border-gray-100 rounded-2xl p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Industries We Serve
                      </h3>
                      <p className="text-sm text-gray-600">
                        Specialized solutions for different sectors
                      </p>
                    </div>

                    <div className="space-y-2">
                      {industries.map((industry) => (
                        <Link
                          key={industry.id}
                          to={`/industries/${industry.id}`}
                          className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                            <Briefcase size={16} className="text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                              {industry.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {industry.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsResourcesMenuOpen(true)}
              onMouseLeave={() => setIsResourcesMenuOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 group">
                <span>Resources</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isResourcesMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isResourcesMenuOpen && (
                <div className="absolute top-full left-0 w-80">
                  {/* Invisible bridge */}
                  <div className="h-2 bg-transparent"></div>

                  <div className="bg-white shadow-2xl border border-gray-100 rounded-2xl p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Resources
                      </h3>
                      <p className="text-sm text-gray-600">
                        Knowledge base and documentation
                      </p>
                    </div>

                    <div className="space-y-2">
                      {resources.map((resource) => (
                        <Link
                          key={resource.id}
                          to={`/resources/${resource.id}`}
                          className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
                            <BookOpen size={16} className="text-green-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                              {resource.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {resource.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCompanyMenuOpen(true)}
              onMouseLeave={() => setIsCompanyMenuOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-600 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 group">
                <span>Company</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isCompanyMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isCompanyMenuOpen && (
                <div className="absolute top-full right-0 w-64">
                  {/* Invisible bridge */}
                  <div className="h-2 bg-transparent"></div>

                  <div className="bg-white shadow-2xl border border-gray-100 rounded-2xl p-6">
                    <div className="space-y-2">
                      <Link
                        to="/about"
                        className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                          <Info size={16} className="text-purple-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                            About ReGuard India
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            Our story and mission
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/careers"
                        className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                          <Users size={16} className="text-orange-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                            Careers
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            Join our team
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/contact"
                        className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors">
                          <ExternalLink size={16} className="text-red-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                            Contact
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            Get in touch
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            {/* <button
              onClick={redirectToConsole}
              className="text-gray-700 hover:text-red-600 px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50"
            >
              Sign In
            </button> */}
            <button
              onClick={() => openSignUpModal('signup', 'header')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 px-3">
                  API Categories
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {apiCategories.slice(0, 6).map((category) => (
                    <Link
                      key={category.id}
                      to={`/apis/${category.id}`}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <category.icon size={16} className="text-red-600" />
                      <span className="text-sm text-gray-700">
                        {category.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <Link
                  to="/industries"
                  className="block text-gray-700 hover:text-red-600 px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Industries
                </Link>
                <Link
                  to="/solutions"
                  className="block text-gray-700 hover:text-red-600 px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Solutions
                </Link>
                <Link
                  to="/resources"
                  className="block text-gray-700 hover:text-red-600 px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Resources
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-700 hover:text-red-600 px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/careers"
                  className="block text-gray-700 hover:text-red-600 px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Careers
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-red-600 px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Contact
                </Link>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-3">
                <button
                  onClick={() => setLoginModalOpen(true)}
                  className="block w-full text-left text-gray-700 hover:text-red-600 px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={() => openSignUpModal('trial', 'header')}
                  className="block w-full bg-red-600 hover:bg-red-700 text-white px-3 py-3 rounded-lg text-base font-semibold transition-colors shadow-sm"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <SignUpModal
        isOpen={signUpModal.isOpen}
        onClose={closeSignUpModal}
        type={signUpModal.type}
        formSource={signUpModal.formSource}
      />
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </header>
  )
}
