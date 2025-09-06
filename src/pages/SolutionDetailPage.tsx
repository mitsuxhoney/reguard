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
  ExternalLink,
  Sparkles,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Star,
  Gavel,
  AlertTriangle,
  TrendingUp,
} from 'lucide-react'

export const SolutionDetailPage: React.FC = () => {
  const { solutionId } = useParams()
  const [signUpModal, setSignUpModal] = useState<{
    isOpen: boolean
    type: 'signup' | 'demo' | 'trial'
  }>({
    isOpen: false,
    type: 'signup',
  })

  const openSignUpModal = (type: 'signup' | 'demo' | 'trial') => {
    setSignUpModal({ isOpen: true, type })
  }

  const closeSignUpModal = () => {
    setSignUpModal({ isOpen: false, type: 'signup' })
  }

  // Mock solution data - in a real app, this would come from a data source
  const solutionsData = {
    embedkyc: {
      name: 'EmbedKYC',
      tagline: 'Custom KYC Flow Builder for Financial Institutions',
      badge: 'NEW',
      metaTitle: 'Embed KYC by reguard | Easy Custom KYC Workflows',
      metaDescription:
        'Design and customize KYC workflows with EmbedKYC by reguard. Use a simple drag-and-drop tool to meet compliance and streamline identity verification.',
      description:
        'Build and customize your own KYC compliance workflows with our intuitive drag-and-drop interface. Create tailored identity verification processes that match your exact regulatory requirements and business needs.',
      longDescription:
        'EmbedKYC revolutionizes how financial institutions and regulated businesses approach identity verification by providing a powerful, visual workflow builder that requires no coding expertise. Design complex KYC compliance flows, set conditional logic based on risk profiles, and customize every aspect of the customer onboarding experience while maintaining bank-grade security standards and regulatory compliance.',
      icon: Sparkles,
      gradient: 'from-blue-600 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      image:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Visual drag & drop KYC workflow builder with no-code interface',
        'Custom verification steps with conditional logic and risk-based routing',
        'White-label customer onboarding interface with full customization',
        'Real-time analytics dashboard with compliance reporting',
        'Multi-language support for global customer onboarding',
        'Pre-built API integration hub with 30+ verification services',
        'Regulatory compliance templates for different jurisdictions',
        'Advanced conditional logic engine for risk-based decisions',
        'A/B testing capabilities for conversion optimization',
      ],
      benefits: [
        'Reduce KYC development time by 80% with pre-built components',
        'Improve customer onboarding conversion rates by 35%',
        'Ensure regulatory compliance across multiple jurisdictions',
        'Customize user experience without technical expertise',
        'Scale identity verification processes automatically',
        'Real-time compliance monitoring and automated alerts',
        'Reduce operational costs with automated workflows',
        'Faster time-to-market for new financial products',
      ],
      useCases: [
        'Digital banking customer onboarding and account opening',
        'Cryptocurrency exchange KYC compliance automation',
        'Fintech lending platform identity verification',
        'Insurance policy application processing',
        'Investment platform accredited investor verification',
        'Payment processor merchant onboarding',
        'Neobank regulatory compliance workflows',
        'Credit union member verification processes',
      ],
      pricing: {
        starter: '$199/month',
        professional: '$599/month',
        enterprise: 'Custom pricing',
      },
    },
    watchdawg: {
      name: 'WatchDawg',
      tagline: '360° AML Risk Monitoring and Compliance Platform',
      metaTitle: 'WatchDawg AML Risk Monitoring | reguard',
      metaDescription:
        'Stay ahead of financial crimes with WatchDawg by reguard — a smart AML risk monitoring solution offering 24/7 surveillance across all customer touchpoints.',
      description:
        'Comprehensive AML risk monitoring solution that provides continuous surveillance across all customer touchpoints to identify and mitigate financial crimes before they impact your institution.',
      longDescription:
        'WatchDawg offers unparalleled visibility into your AML risk landscape through advanced monitoring capabilities that span across multiple data sources, sanctions databases, PEP lists, and real-time news feeds. Our AI-powered system continuously analyzes transaction patterns, customer behavior, and external risk factors to provide early warning signals and ensure regulatory compliance.',
      icon: Shield,
      gradient: 'from-red-600 to-orange-600',
      bgGradient: 'from-red-50 to-orange-50',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      image:
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Real-time AML transaction monitoring with machine learning',
        'Multi-source data analysis from sanctions lists and PEP databases',
        'Automated suspicious activity alert system with case management',
        'Regulatory compliance dashboard with audit trails',
        'Advanced risk scoring engine with customizable parameters',
        'Global threat intelligence feed with adverse media monitoring',
        'Custom risk rules engine for institution-specific requirements',
        'Historical risk analysis and trend identification',
        'Automated SAR filing and regulatory reporting',
      ],
      benefits: [
        'Reduce AML false positives by 60% with AI-powered analysis',
        'Detect financial crime threats 10x faster than manual processes',
        'Automate regulatory compliance reporting and SAR filing',
        'Minimize operational risk with continuous monitoring',
        'Improve compliance decision making with data-driven insights',
        'Ensure adherence to BSA, AML, and OFAC regulations',
        'Reduce compliance costs by 40% through automation',
        'Strengthen regulatory examination readiness',
      ],
      useCases: [
        'Banking AML transaction monitoring and suspicious activity detection',
        'Real-time sanctions list screening for OFAC compliance',
        'Politically Exposed Person (PEP) monitoring and due diligence',
        'Adverse media tracking and reputation risk management',
        'Cryptocurrency exchange AML compliance and monitoring',
        'Money services business regulatory compliance',
        'Trade finance transaction monitoring and screening',
        'Cross-border payment compliance and risk assessment',
      ],
      pricing: {
        starter: '$499/month',
        professional: '$1,299/month',
        enterprise: 'Custom pricing',
      },
    },
    hearoclock: {
      name: "Hear'O'Clock",
      tagline:
        'AI-Powered Reputation Management for Brands, Enterprises & Government',
      metaTitle: 'Hear’O’Clock by reguard | Real-Time Brand Protection',
      metaDescription:
        'Stay ahead with Hear’O’Clock by reguard – advanced reputation monitoring and crisis management to protect your brand across all digital channels.',
      description:
        "Advanced reputation monitoring and crisis management platform that tracks, analyzes, and helps protect your brand's online presence across all digital channels with real-time threat detection.",
      longDescription:
        "Hear'O'Clock provides comprehensive reputation intelligence by monitoring millions of online sources including news sites, social media platforms, forums, review sites, and dark web mentions. Our advanced sentiment analysis, AI-powered threat detection, and crisis management tools help enterprises, government agencies, and brands stay ahead of reputation risks and respond to threats before they escalate.",
      icon: Clock,
      gradient: 'from-green-600 to-teal-600',
      bgGradient: 'from-green-50 to-teal-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'AI-powered brand sentiment analysis across 10M+ sources daily',
        'Real-time social media monitoring with threat classification',
        'Crisis management dashboard with automated response workflows',
        'Dynamic reputation scoring with trend analysis and forecasting',
        'Competitive intelligence and market positioning analysis',
        'Influencer tracking and engagement impact measurement',
        'Custom alert rules with severity-based escalation protocols',
        'Executive protection monitoring for C-suite reputation management',
        'Dark web monitoring for data breach and threat intelligence',
      ],
      benefits: [
        'Monitor 10M+ online sources daily with comprehensive coverage',
        'Respond to reputation crises 5x faster with automated alerts',
        'Improve brand sentiment scores through proactive management',
        'Protect executive and corporate reputation with early warning systems',
        'Track competitor reputation and market positioning in real-time',
        'Measure PR campaign impact with detailed analytics and ROI tracking',
        'Reduce reputation damage costs by 70% through early intervention',
        'Enhance stakeholder confidence with transparent monitoring',
      ],
      useCases: [
        'Corporate brand reputation management and crisis prevention',
        'Government agency public sentiment monitoring and crisis response',
        'Executive reputation protection and personal brand management',
        'Financial institution regulatory compliance and public trust monitoring',
        'Healthcare organization patient sentiment and safety monitoring',
        'Political campaign reputation tracking and opposition research',
        'Cryptocurrency project community sentiment and fraud detection',
        'ESG compliance monitoring and sustainability reputation tracking',
      ],
      pricing: {
        starter: '$299/month',
        professional: '$799/month',
        enterprise: 'Custom pricing',
      },
    },
    complianceiq: {
      name: 'ComplianceIQ',
      tagline: 'Intelligent Regulatory Compliance Automation Platform',
      metaTitle: 'ComplianceIQ: Smart Compliance & Risk Management | reguard',
      metaDescription:
        'Stay ahead of regulations with ComplianceIQ by reguard. Simplify compliance, reduce risks, and ensure trust with easy, reliable solutions.',
      description:
        'AI-powered compliance automation platform that streamlines regulatory processes, ensures adherence to multiple frameworks, and reduces compliance costs by up to 60%.',
      longDescription:
        'ComplianceIQ revolutionizes regulatory compliance management through intelligent automation, real-time monitoring, and predictive analytics. Our platform helps organizations navigate complex regulatory landscapes while reducing costs and ensuring continuous compliance across multiple frameworks.',
      icon: Gavel,
      gradient: 'from-purple-600 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      image:
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Multi-framework compliance automation across 50+ regulations',
        'AI-powered policy interpretation and implementation',
        'Automated regulatory change detection and updates',
        'Risk-based compliance assessment and prioritization',
        'Real-time compliance monitoring and alerting',
        'Automated audit trail generation and documentation',
        'Regulatory reporting automation and submission',
        'Cross-jurisdictional compliance management',
        'Compliance training and awareness automation',
      ],
      benefits: [
        'Reduce compliance costs by 60% through intelligent automation',
        'Ensure 100% regulatory adherence with real-time monitoring',
        'Accelerate compliance processes by 75% with AI assistance',
        'Minimize regulatory risks with predictive analytics',
        'Streamline audit processes with automated documentation',
        'Stay ahead of regulatory changes with automated updates',
        'Improve compliance team efficiency by 80%',
        'Reduce manual compliance work by 90%',
      ],
      useCases: [
        'Banking regulatory compliance automation (Basel III, CCAR)',
        'Insurance regulatory compliance (Solvency II, ORSA)',
        'Securities compliance management (MiFID II, Dodd-Frank)',
        'Healthcare compliance automation (HIPAA, FDA)',
        'Data privacy compliance (GDPR, CCPA, LGPD)',
        'Financial services compliance (AML, KYC, FATCA)',
        'Energy sector compliance (NERC, FERC)',
        'Pharmaceutical regulatory compliance (GxP, 21 CFR Part 11)',
      ],
      stats: {
        clients: '300+',
        regulations: '50+',
        automation: '90%',
        cost_reduction: '60%',
      },
      pricing: {
        starter: '$899/month',
        professional: '$2,499/month',
        enterprise: 'Custom pricing',
      },
    },
    fraudshield: {
      name: 'FraudShield',
      tagline: 'Advanced Fraud Detection & Prevention Platform',
      metaTitle: 'FraudShield by reguard | Smart Protection Against Fraud',
      metaDescription:
        'Stay one step ahead with FraudShield by reguard. Detect, prevent, and fight fraud with ease—protecting your business and customers in real time.',
      description:
        'Machine learning-powered fraud detection system that identifies suspicious activities in real-time, preventing financial losses and protecting customer trust.',
      longDescription:
        'FraudShield leverages advanced machine learning algorithms, behavioral analytics, and real-time data processing to detect and prevent fraud across all channels. Our platform adapts to emerging fraud patterns and provides comprehensive protection for financial institutions and businesses.',
      icon: AlertTriangle,
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      image:
        'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Real-time fraud detection with sub-second response times',
        'Advanced machine learning models with 99.5% accuracy',
        'Behavioral analytics and user profiling',
        'Device fingerprinting and geolocation analysis',
        'Multi-channel fraud prevention (web, mobile, API)',
        'Adaptive risk scoring with dynamic thresholds',
        'Fraud pattern recognition and trend analysis',
        'Automated case management and investigation workflows',
        'Integration with 100+ data sources and threat feeds',
      ],
      benefits: [
        'Prevent fraud losses by 95% with real-time detection',
        'Reduce false positives by 80% with advanced ML',
        'Improve customer experience with frictionless security',
        'Detect emerging fraud patterns 10x faster',
        'Automate fraud investigation processes by 85%',
        'Protect against account takeover and synthetic identity fraud',
        'Ensure regulatory compliance with automated reporting',
        'Scale fraud prevention across multiple channels',
      ],
      useCases: [
        'Payment fraud prevention for credit cards and digital wallets',
        'Account takeover protection for banking and fintech',
        'E-commerce fraud detection and chargeback prevention',
        'Insurance fraud detection for claims processing',
        'Loan application fraud screening and verification',
        'Cryptocurrency exchange fraud prevention',
        'Mobile banking fraud detection and prevention',
        'Identity theft protection and synthetic fraud detection',
      ],
      stats: {
        clients: '250+',
        accuracy: '99.5%',
        prevention: '95%',
        response_time: '<100ms',
      },
      pricing: {
        starter: '$599/month',
        professional: '$1,799/month',
        enterprise: 'Custom pricing',
      },
    },
    riskradar: {
      name: 'RiskRadar',
      tagline: 'Real-time Risk Assessment & Monitoring Dashboard',
      metaTitle: 'RiskRadar by Reguard | Smart Risk & Fraud Detection',
      metaDescription:
        'Stay ahead of fraud with RiskRadar by Reguard. Get real-time risk insights, smarter identity checks, and secure decisions to protect your business.',
      description:
        'Comprehensive risk management platform that provides 360-degree visibility into organizational risks with predictive analytics and automated mitigation strategies.',
      longDescription:
        'RiskRadar transforms risk management through intelligent automation, predictive analytics, and real-time monitoring. Our platform provides comprehensive risk visibility, automated assessment, and proactive mitigation strategies to protect your organization from emerging threats.',
      icon: TrendingUp,
      gradient: 'from-teal-600 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-50',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Real-time risk monitoring across all business units',
        'Predictive risk analytics with machine learning',
        'Automated risk scoring and threshold management',
        'Comprehensive risk dashboard with executive reporting',
        'Multi-dimensional risk assessment and correlation',
        'Automated mitigation workflow and task management',
        'Risk appetite monitoring and compliance tracking',
        'Scenario analysis and stress testing capabilities',
        'Integration with 200+ risk data sources',
      ],
      benefits: [
        'Reduce operational risks by 70% with predictive analytics',
        'Improve risk visibility across the entire organization',
        'Automate risk assessment processes by 85%',
        'Enable proactive risk mitigation with early warnings',
        'Streamline risk reporting and regulatory compliance',
        'Optimize risk-adjusted decision making',
        'Reduce risk management costs by 50%',
        'Enhance board-level risk governance and oversight',
      ],
      useCases: [
        'Enterprise risk management and governance',
        'Operational risk monitoring and mitigation',
        'Credit risk assessment and portfolio management',
        'Market risk analysis and stress testing',
        'Regulatory risk compliance and monitoring',
        'Cybersecurity risk assessment and management',
        'Supply chain risk monitoring and mitigation',
        'ESG risk assessment and sustainability monitoring',
      ],
      stats: {
        clients: '180+',
        risk_reduction: '70%',
        automation: '85%',
        data_sources: '200+',
      },
      pricing: {
        starter: '$799/month',
        professional: '$2,199/month',
        enterprise: 'Custom pricing',
      },
    },
  }

  const solution = solutionsData[solutionId as keyof typeof solutionsData]

  if (!solution) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Solution Not Found
          </h1>
          <Link to="/solutions" className="text-red-600 hover:text-red-700">
            Back to Solutions
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{solution.metaTitle}</title>
        <meta name="description" content={solution.metaDescription} />
        <meta
          name="keywords"
          content={`${solution.name}, ${solution.tagline}, RegTech solution, compliance automation, enterprise software, regulatory technology, compliance platform, automated monitoring, risk mitigation`}
        />
        <link
          rel="canonical"
          href={`https://reguard.com/solutions/${solutionId}`}
        />
        <meta property="og:title" content={solution.metaTitle} />
        <meta property="og:description" content={solution.metaDescription} />
        <meta
          property="og:url"
          content={`https://reguard.com/solutions/${solutionId}`}
        />
        <meta property="og:image" content={solution.image} />
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
              to="/solutions"
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              Solutions
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{solution.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className={`bg-gradient-to-br ${solution.gradient} text-white py-20`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="flex items-center mb-6">
            <Link
              to="/solutions"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mr-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Solutions
            </Link>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 bg-white/20 rounded-lg backdrop-blur-sm`}>
                  <solution.icon size={32} className="text-white" />
                </div>
                {solution.badge && (
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                    {solution.badge}
                  </span>
                )}
              </div>

              <h1 className="font-gilroy text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {solution.name}
              </h1>

              <p className="text-xl text-white/90 mb-6 font-medium">
                {solution.tagline}
              </p>

              <p className="font-inter text-lg text-white/80 mb-8 leading-relaxed">
                {solution.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openSignUpModal('demo')}
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <Play size={20} />
                  <span>Request Demo</span>
                </button>
                <button
                  onClick={() => openSignUpModal('trial')}
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
                  src={solution.image}
                  alt={solution.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">500K+</div>
                      <div className="text-sm opacity-80">Users</div>
                    </div>
                    <div className="w-px h-12 bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-sm opacity-80">Uptime</div>
                    </div>
                    <div className="w-px h-12 bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-80">Support</div>
                    </div>
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
                {solution.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${solution.gradient} mt-2 flex-shrink-0`}
                    ></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Advanced capability designed for enterprise needs
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
                {solution.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all"
                  >
                    <CheckCircle
                      size={24}
                      className={`${solution.iconColor} mt-1 flex-shrink-0`}
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
                {solution.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl bg-gradient-to-br ${solution.bgGradient} border border-gray-200 hover:shadow-lg transition-all`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div
                        className={`w-10 h-10 ${solution.iconBg} rounded-lg flex items-center justify-center`}
                      >
                        <Star size={16} className={solution.iconColor} />
                      </div>
                      <h3 className="font-semibold text-gray-900">{useCase}</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Streamline processes and ensure compliance in this
                      critical area
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
                  <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
                  <p className="text-gray-600">CTO, FinanceFlow Inc.</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "{solution.name} has transformed how we handle identity
                verification. The customization options and ease of use have
                improved our conversion rates significantly while maintaining
                the highest security standards."
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
              className={`bg-gradient-to-br ${solution.bgGradient} rounded-xl p-6 border border-gray-200`}
            >
              <h3 className="font-gilroy text-xl font-bold text-gray-900 mb-6">
                Get Started Today
              </h3>
              <div className="space-y-4">
                <button
                  onClick={() => openSignUpModal('demo')}
                  className={`w-full bg-gradient-to-r ${solution.gradient} hover:shadow-lg text-white py-3 px-4 rounded-lg font-semibold transition-all transform hover:-translate-y-0.5`}
                >
                  Request Demo
                </button>
                <button
                  onClick={() => openSignUpModal('trial')}
                  className="w-full border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 py-3 px-4 rounded-lg font-semibold transition-colors"
                >
                  Start Free Trial
                </button>
                <button className="w-full text-gray-600 hover:text-gray-800 py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <ExternalLink size={16} />
                  <span>View Documentation</span>
                </button>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-gilroy text-xl font-bold text-gray-900 mb-6">
                Pricing Plans
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Starter</h4>
                    <p className="text-sm text-gray-600">
                      Perfect for small teams
                    </p>
                  </div>
                  <span className="font-bold text-gray-900">
                    {solution.pricing.starter}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Professional
                    </h4>
                    <p className="text-sm text-gray-600">
                      For growing businesses
                    </p>
                  </div>
                  <span className="font-bold text-gray-900">
                    {solution.pricing.professional}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Enterprise</h4>
                    <p className="text-sm text-gray-600">Custom solutions</p>
                  </div>
                  <span className="font-bold text-gray-900">
                    {solution.pricing.enterprise}
                  </span>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-gilroy text-xl font-bold text-gray-900 mb-6">
                Need Help?
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <BookOpen size={18} />
                  <span>Documentation</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Users size={18} />
                  <span>Community Forum</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <ExternalLink size={18} />
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
