import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SignUpModal } from '../components/SignUpModal'
import {
  ArrowLeft,
  Play,
  BookOpen,
  CheckCircle,
  Star,
  Building2,
  TrendingUp,
  Shield,
  Coins,
  Users,
} from 'lucide-react'

export const IndustryDetailPage: React.FC = () => {
  const { industryId } = useParams()
  const [signUpModal, setSignUpModal] = useState<{
    isOpen: boolean
    type: 'signup' | 'demo' | 'trial'
    formSource?: 'hero-cta' | 'footer-cta'
  }>({
    isOpen: false,
    type: 'signup',
    formSource: 'hero-cta',
  })

  const openSignUpModal = (type: 'signup' | 'demo' | 'trial', formSource) => {
    setSignUpModal({ isOpen: true, type, formSource })
  }

  const closeSignUpModal = () => {
    setSignUpModal({ isOpen: false, type: 'signup' })
  }

  // Mock industry data - in a real app, this would come from a data source
  const industriesData = {
    'banking-nbfc': {
      title: 'Banking & NBFC Solutions',
      subtitle:
        'Comprehensive RegTech Solutions for Banks and Non-Banking Financial Companies',
      description:
        'Advanced regulatory technology solutions designed specifically for banks and NBFCs to ensure compliance with RBI guidelines, automate KYC processes, and enhance risk management capabilities.',
      longDescription:
        'Our banking and NBFC solutions provide end-to-end regulatory compliance automation, from customer onboarding to ongoing monitoring. With deep integration capabilities and industry-specific workflows, we help financial institutions streamline their compliance processes while maintaining the highest security standards.',
      icon: Building2,
      gradient: 'from-blue-600 to-blue-800',
      bgGradient: 'from-blue-50 to-blue-100',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      image:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'RBI-compliant digital KYC automation with video verification',
        'Real-time AML transaction monitoring and suspicious activity detection',
        'Automated regulatory reporting for RBI, SEBI, and other authorities',
        'Advanced risk scoring and credit assessment algorithms',
        'Comprehensive audit trails and compliance documentation',
        'Integration with core banking systems and existing workflows',
        'Multi-language support for diverse customer base',
        'Mobile-first customer onboarding experience',
        'Fraud detection and prevention with machine learning',
      ],
      benefits: [
        'Reduce customer onboarding time by 80% with automated KYC processes',
        'Achieve 100% regulatory compliance with automated reporting',
        'Lower operational costs by 60% through process automation',
        'Improve customer experience with faster account opening',
        'Enhance risk management with real-time monitoring',
        'Ensure data security with bank-grade encryption',
        'Scale operations without proportional increase in compliance costs',
        'Reduce manual errors and improve accuracy',
      ],
      useCases: [
        'Digital account opening for savings and current accounts',
        'Loan origination and credit assessment automation',
        'Corporate banking customer onboarding and due diligence',
        'Trade finance compliance and documentation',
        'Wealth management client verification and risk profiling',
        'Credit card application processing and fraud prevention',
        'MSME lending with automated risk assessment',
        'Foreign exchange compliance and monitoring',
      ],
      stats: {
        clients: '150+',
        transactions: '50M+',
        compliance: '100%',
        reduction: '70%',
      },
      regulations: [
        'RBI Guidelines',
        'PMLA Compliance',
        'SEBI Regulations',
        'FEMA Compliance',
      ],
    },
    'fintech-payments': {
      title: 'Fintech & Payments Solutions',
      subtitle:
        'Identity Verification and Fraud Prevention for Fintech Companies',
      description:
        'Specialized RegTech solutions for fintech companies and payment processors with real-time fraud detection, compliance automation, and seamless customer onboarding.',
      longDescription:
        'Our fintech solutions are built for the fast-paced, digital-first world of financial technology. From payment processors to digital lending platforms, we provide the regulatory backbone that enables innovation while ensuring compliance.',
      icon: TrendingUp,
      gradient: 'from-green-600 to-green-800',
      bgGradient: 'from-green-50 to-green-100',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      image:
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Real-time payment fraud detection with ML algorithms',
        'Instant KYC verification for digital wallet onboarding',
        'API-first architecture for seamless integration',
        'Multi-channel identity verification (mobile, web, API)',
        'Automated compliance reporting for payment regulations',
        'Advanced device fingerprinting and behavioral analytics',
        'Cross-border payment compliance and screening',
        'Digital lending risk assessment and automation',
        'Merchant onboarding and verification workflows',
      ],
      benefits: [
        'Process payments 10x faster with real-time verification',
        'Reduce fraud losses by 85% with advanced detection',
        'Achieve 99.5% accuracy in identity verification',
        'Scale customer acquisition without compliance bottlenecks',
        'Improve conversion rates with frictionless onboarding',
        'Ensure regulatory compliance across multiple jurisdictions',
        'Reduce operational overhead with automated processes',
        'Enable rapid product launches with pre-built compliance',
      ],
      useCases: [
        'Digital wallet customer onboarding and verification',
        'P2P payment platform fraud prevention',
        'Buy-now-pay-later (BNPL) credit assessment',
        'Cryptocurrency exchange KYC compliance',
        'Cross-border remittance compliance and monitoring',
        'Merchant payment processing verification',
        'Digital lending platform risk assessment',
        'Neobank account opening and compliance',
      ],
      stats: {
        clients: '200+',
        transactions: '100M+',
        accuracy: '99.5%',
        fraud: '85%',
      },
      regulations: ['PCI DSS', 'PSD2 Compliance', 'GDPR', 'AML Directives'],
    },
    'insurance-insurtech': {
      title: 'Insurance & InsurTech Solutions',
      subtitle: 'Risk Assessment and Fraud Prevention for Insurance Industry',
      description:
        'Comprehensive risk assessment and fraud prevention solutions for insurance companies and InsurTech startups with advanced due diligence and claim verification.',
      longDescription:
        'Our insurance solutions combine traditional risk assessment with modern technology to help insurers make better underwriting decisions, prevent fraud, and ensure regulatory compliance.',
      icon: Shield,
      gradient: 'from-purple-600 to-purple-800',
      bgGradient: 'from-purple-50 to-purple-100',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Automated policy holder identity verification',
        'AI-powered claim fraud detection and analysis',
        'Comprehensive risk profiling and underwriting support',
        'Regulatory compliance automation for IRDAI guidelines',
        'Medical history verification and validation',
        'Property and asset verification for general insurance',
        'Social media and digital footprint analysis',
        'Third-party data integration for risk assessment',
        'Automated claim processing and settlement workflows',
      ],
      benefits: [
        'Reduce claim fraud by 75% with advanced detection algorithms',
        'Improve underwriting accuracy by 60% with comprehensive data',
        'Accelerate policy issuance by 50% with automated verification',
        'Lower operational costs through process automation',
        'Enhance customer experience with faster claim processing',
        'Ensure IRDAI compliance with automated reporting',
        'Improve risk selection and pricing accuracy',
        'Reduce manual intervention in routine processes',
      ],
      useCases: [
        'Life insurance policy underwriting and risk assessment',
        'Health insurance claim fraud detection and prevention',
        'Motor insurance policy verification and pricing',
        'Property insurance risk assessment and validation',
        'Travel insurance customer verification and claims',
        'Cyber insurance risk profiling and assessment',
        'Crop insurance farmer verification and claim processing',
        'Marine insurance cargo and vessel verification',
      ],
      stats: {
        clients: '80+',
        claims: '5M+',
        fraud: '75%',
        accuracy: '95%',
      },
      regulations: [
        'IRDAI Guidelines',
        'Insurance Laws',
        'Data Protection',
        'Consumer Protection',
      ],
    },
    'mutual-funds-amcs': {
      title: 'Mutual Funds & AMCs Solutions',
      subtitle: 'Investor Verification and Compliance Automation',
      description:
        'Specialized solutions for mutual fund companies and Asset Management Companies with comprehensive KYC automation, investor due diligence, and regulatory compliance.',
      longDescription:
        'Our mutual fund solutions streamline investor onboarding, ensure SEBI compliance, and provide comprehensive risk management for asset management companies of all sizes.',
      icon: TrendingUp,
      gradient: 'from-orange-600 to-orange-800',
      bgGradient: 'from-orange-50 to-orange-100',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      image:
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'SEBI-compliant investor KYC automation and verification',
        'Automated regulatory reporting and compliance monitoring',
        'Comprehensive risk assessment and investor profiling',
        'Integration with KRA (KYC Registration Agencies)',
        'Systematic Investment Plan (SIP) automation',
        'Anti-money laundering monitoring for investments',
        'Distributor and agent verification workflows',
        'Portfolio management and compliance tracking',
        'Investor grievance management and resolution',
      ],
      benefits: [
        'Reduce investor onboarding time by 70% with automation',
        'Achieve 100% SEBI compliance with automated processes',
        'Improve investor experience with digital-first approach',
        'Lower operational costs through process optimization',
        'Enhance risk management with comprehensive profiling',
        'Ensure accurate regulatory reporting and documentation',
        'Scale operations without proportional cost increase',
        'Reduce compliance risks and regulatory penalties',
      ],
      useCases: [
        'New investor onboarding and KYC verification',
        'Systematic Investment Plan (SIP) automation',
        'High-net-worth individual (HNI) due diligence',
        'Institutional investor verification and compliance',
        'Distributor and agent onboarding workflows',
        'Portfolio management service (PMS) compliance',
        'Alternative Investment Fund (AIF) investor verification',
        'Regulatory reporting automation for SEBI',
      ],
      stats: {
        clients: '60+',
        investors: '2M+',
        compliance: '100%',
        automation: '80%',
      },
      regulations: [
        'SEBI Regulations',
        'PMLA Compliance',
        'FEMA Guidelines',
        'Tax Regulations',
      ],
    },
    'cryptocurrency-exchanges': {
      title: 'Cryptocurrency Exchange Solutions',
      subtitle: 'Advanced KYC and AML Compliance for Digital Asset Platforms',
      description:
        'Comprehensive RegTech solutions for cryptocurrency exchanges and digital asset platforms with enhanced due diligence, transaction monitoring, and regulatory compliance.',
      longDescription:
        'Our cryptocurrency solutions provide the regulatory framework needed for digital asset platforms to operate safely and compliantly in the evolving regulatory landscape.',
      icon: Coins,
      gradient: 'from-yellow-600 to-yellow-800',
      bgGradient: 'from-yellow-50 to-yellow-100',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      image:
        'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Enhanced KYC verification with blockchain address validation',
        'Real-time AML transaction screening and monitoring',
        'Comprehensive sanctions list screening and PEP checks',
        'Cryptocurrency transaction analysis and risk scoring',
        'Automated suspicious activity reporting (SAR)',
        'Multi-jurisdiction regulatory compliance support',
        'Advanced wallet address clustering and analysis',
        'Travel rule compliance for cross-border transactions',
        'Institutional client enhanced due diligence (EDD)',
      ],
      benefits: [
        'Ensure regulatory compliance across multiple jurisdictions',
        'Reduce AML false positives by 60% with advanced analytics',
        'Process customer onboarding 5x faster with automation',
        'Monitor transactions 24/7 with real-time screening',
        'Minimize regulatory risks and potential penalties',
        'Improve customer trust with transparent compliance',
        'Scale operations globally with consistent compliance',
        'Reduce operational costs through automation',
      ],
      useCases: [
        'Cryptocurrency exchange customer onboarding',
        'Digital asset trading platform compliance',
        'DeFi protocol regulatory compliance integration',
        'Institutional crypto custody compliance',
        'Cross-border cryptocurrency remittance monitoring',
        'NFT marketplace user verification and compliance',
        'Stablecoin issuer regulatory compliance',
        'Crypto payment processor AML monitoring',
      ],
      stats: {
        clients: '40+',
        users: '1M+',
        screening: '24/7',
        compliance: '100%',
      },
      regulations: [
        'FATF Guidelines',
        'Travel Rule',
        'AML Directives',
        'Local Crypto Regulations',
      ],
    },
  }

  const industry = industriesData[industryId as keyof typeof industriesData]

  if (!industry) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Industry Not Found
          </h1>
          <Link to="/industries" className="text-red-600 hover:text-red-700">
            Back to Industries
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          {industry.title} - {industry.subtitle} | Reguard RegTech Solutions
        </title>
        <meta
          name="description"
          content={`${
            industry.longDescription
          } Specialized RegTech solutions for ${industry.title.toLowerCase()} with advanced compliance automation, risk management, and regulatory reporting.`}
        />
        <meta
          name="keywords"
          content={`${industry.title}, ${
            industry.subtitle
          }, RegTech solutions, compliance automation, ${
            industry.title.includes('Banking')
              ? 'banking compliance, NBFC solutions, RBI guidelines, digital KYC, AML monitoring'
              : industry.title.includes('Fintech')
              ? 'fintech compliance, payment processing, fraud detection, digital wallet KYC'
              : industry.title.includes('Insurance')
              ? 'insurance RegTech, claim fraud detection, risk assessment, IRDAI compliance'
              : industry.title.includes('Mutual')
              ? 'mutual fund compliance, SEBI regulations, investor KYC, AMC solutions'
              : 'cryptocurrency compliance, crypto exchange KYC, AML monitoring, digital asset regulation'
          }, regulatory technology, financial compliance, automated verification, risk management platform`}
        />
        <link
          rel="canonical"
          href={`https://reguard.com/industries/${industryId}`}
        />
        <meta
          property="og:title"
          content={`${industry.title} - Specialized RegTech Solutions`}
        />
        <meta property="og:description" content={industry.description} />
        <meta
          property="og:url"
          content={`https://reguard.com/industries/${industryId}`}
        />
        <meta property="og:image" content={industry.image} />
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
              to="/industries"
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              Industries
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{industry.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className={`bg-gradient-to-br ${industry.gradient} text-white py-20`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link
              to="/industries"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mr-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Industries
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <industry.icon size={32} className="text-white" />
                </div>
              </div>

              <h1 className="font-gilroy text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {industry.title}
              </h1>

              <p className="text-xl text-white/90 mb-6 font-medium">
                {industry.subtitle}
              </p>

              <p className="font-inter text-lg text-white/80 mb-8 leading-relaxed">
                {industry.longDescription}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {industry.stats.clients}
                  </div>
                  <div className="text-sm text-white/80">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {industry.stats.transactions ||
                      industry.stats.claims ||
                      industry.stats.investors ||
                      industry.stats.users}
                  </div>
                  <div className="text-sm text-white/80">Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {industry.stats.compliance}
                  </div>
                  <div className="text-sm text-white/80">Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {industry.stats.reduction ||
                      industry.stats.accuracy ||
                      industry.stats.fraud ||
                      industry.stats.automation ||
                      industry.stats.screening}
                  </div>
                  <div className="text-sm text-white/80">Efficiency</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openSignUpModal('demo', 'hero-cta')}
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <Play size={20} />
                  <span>Request Demo</span>
                </button>
                <button
                  onClick={() => openSignUpModal('trial', 'hero-cta')}
                  className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2"
                >
                  <BookOpen size={20} />
                  <span>Start Free Trial</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/30">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Regulatory Compliance
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {industry.regulations.map((reg, index) => (
                      <span
                        key={index}
                        className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs"
                      >
                        {reg}
                      </span>
                    ))}
                  </div>
                </div>
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
              <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-8">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industry.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${industry.gradient} mt-2 flex-shrink-0`}
                    ></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Industry-specific capability designed for your sector
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-8">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industry.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <CheckCircle
                      size={24}
                      className={`${industry.iconColor} mt-1 flex-shrink-0`}
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{benefit}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases */}
            <section>
              <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-8">
                Use Cases
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industry.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl bg-gradient-to-br ${industry.bgGradient} border border-gray-200 hover:shadow-lg transition-all`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div
                        className={`w-10 h-10 ${industry.iconBg} rounded-lg flex items-center justify-center`}
                      >
                        <Star size={16} className={industry.iconColor} />
                      </div>
                      <h3 className="font-semibold text-gray-900">{useCase}</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Streamlined compliance and verification for this specific
                      use case
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Customer Testimonial */}
            <section className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Customer"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Rajesh Kumar</h3>
                  <p className="text-gray-600">Chief Compliance Officer</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "Reguard's {industry.title.toLowerCase()} solutions have
                transformed our compliance operations. The automation and
                accuracy have significantly improved our efficiency while
                ensuring full regulatory compliance."
              </blockquote>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">5.0 out of 5</span>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Quick Start */}
            <div
              className={`bg-gradient-to-br ${industry.bgGradient} rounded-xl p-6 border border-gray-200`}
            >
              <h3 className="font-gilroy text-xl font-bold text-gray-900 mb-6">
                Get Started Today
              </h3>
              <div className="space-y-4">
                <button
                  onClick={() => openSignUpModal('demo', 'footer-cta')}
                  className={`w-full bg-gradient-to-r ${industry.gradient} hover:shadow-lg text-white py-3 px-4 rounded-lg font-semibold transition-all transform hover:-translate-y-0.5`}
                >
                  Request Industry Demo
                </button>
                <button
                  onClick={() => openSignUpModal('trial', 'footer-cta')}
                  className="w-full border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 py-3 px-4 rounded-lg font-semibold transition-colors"
                >
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* Industry Stats */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-gilroy text-xl font-bold text-gray-900 mb-6">
                Industry Impact
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Active Clients
                    </h4>
                    <p className="text-sm text-gray-600">
                      Trusted by industry leaders
                    </p>
                  </div>
                  <span className="font-bold text-gray-900">
                    {industry.stats.clients}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Compliance Rate
                    </h4>
                    <p className="text-sm text-gray-600">
                      Regulatory adherence
                    </p>
                  </div>
                  <span className="font-bold text-green-600">
                    {industry.stats.compliance}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Cost Reduction
                    </h4>
                    <p className="text-sm text-gray-600">
                      Operational efficiency
                    </p>
                  </div>
                  <span className="font-bold text-blue-600">
                    {industry.stats.reduction ||
                      industry.stats.accuracy ||
                      industry.stats.fraud ||
                      industry.stats.automation ||
                      industry.stats.screening}
                  </span>
                </div>
              </div>
            </div>

            {/* Regulatory Compliance */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-gilroy text-xl font-bold text-gray-900 mb-6">
                Regulatory Compliance
              </h3>
              <div className="space-y-3">
                {industry.regulations.map((regulation, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-sm font-medium text-gray-900">
                      {regulation}
                    </span>
                  </div>
                ))}
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
        formSource={signUpModal.formSource}
      />
    </div>
  )
}
