import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SignUpModal } from '../components/SignUpModal'
import { Link } from 'react-router-dom'
import ContactHero from "../assets/CareerHero.png"
import Mission from "../assets/mission.png"
import {
  Users,
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  Heart,
  Zap,
  Shield,
  Globe,
} from 'lucide-react'

export const CareersPage: React.FC = () => {
  const [signUpModal, setSignUpModal] = useState<{
    isOpen: boolean
    type: 'signup' | 'demo' | 'trial'
    formSource?: 'footer-cta'
  }>({
    isOpen: false,
    type: 'signup',
    formSource: 'footer-cta',
  })

  const openSignUpModal = (type: 'signup' | 'demo' | 'trial', formSource) => {
    setSignUpModal({ isOpen: true, type, formSource })
  }

  const closeSignUpModal = () => {
    setSignUpModal({ isOpen: false, type: 'signup' })
  }

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description:
        'Comprehensive health insurance, mental health support, and wellness programs for you and your family.',
    },
    {
      icon: Zap,
      title: 'Growth & Learning',
      description:
        'Continuous learning opportunities, conference attendance, and skill development programs.',
    },
    {
      icon: Shield,
      title: 'Work-Life Balance',
      description:
        'Flexible working hours, remote work options, and generous vacation policies.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description:
        'Work on products that serve millions of users across 15+ countries and make a real difference.',
    },
  ]

  const openPositions = [
    {
      title: 'Senior Software Engineer - Backend',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '4-6 years',
      description:
        'Build scalable APIs and microservices for our RegTech platform using Node.js, Python, and cloud technologies.',
    },
    {
      title: 'Product Manager - Compliance',
      department: 'Product',
      location: 'Mumbai, India',
      type: 'Full-time',
      experience: '5-8 years',
      description:
        'Lead product strategy for compliance automation solutions with deep understanding of regulatory requirements.',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description:
        'Manage cloud infrastructure, CI/CD pipelines, and ensure high availability of our RegTech services.',
    },
    {
      title: 'Data Scientist - ML/AI',
      department: 'Data Science',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '3-6 years',
      description:
        'Develop machine learning models for fraud detection, risk assessment, and compliance automation.',
    },
    {
      title: 'Sales Director - Enterprise',
      department: 'Sales',
      location: 'Delhi, India',
      type: 'Full-time',
      experience: '8-12 years',
      description:
        'Lead enterprise sales efforts for banking and financial services clients across India and Southeast Asia.',
    },
    {
      title: 'Compliance Specialist',
      department: 'Compliance',
      location: 'Mumbai, India',
      type: 'Full-time',
      experience: '4-7 years',
      description:
        'Ensure our products meet regulatory requirements and help clients with compliance implementation.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Careers at ReGuard India - Join Our RegTech Team | Reguard
        </title>
        <meta
          name="description"
          content="Join ReGuard India's mission to revolutionize regulatory compliance. Explore career opportunities in engineering, product, sales, and compliance at India's leading RegTech company. Competitive benefits, global impact, and growth opportunities."
        />
        <meta
          name="keywords"
          content="ReGuard India careers, RegTech jobs, fintech careers, compliance jobs, software engineer jobs, product manager jobs, data scientist jobs, DevOps engineer jobs, sales director jobs, Bangalore jobs, Mumbai jobs, remote jobs, financial technology careers, regulatory technology jobs, startup careers India"
        />
        <link rel="canonical" href="https://reguard.com/careers" />
        <meta
          property="og:title"
          content="Careers at ReGuard India - Join Our RegTech Team"
        />
        <meta
          property="og:description"
          content="Join India's leading RegTech company. Explore exciting career opportunities with competitive benefits and global impact."
        />
        <meta property="og:url" content="https://reguard.com/careers" />
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
              to={'/careers'}
              className="text-gray-800 font-medium hover:text-red-600 transition-colors capitalize"
            >
              Careers
            </Link>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Users className="w-12 h-12 text-red-400 mr-4" />
                <h1 className="font-gilroy text-4xl lg:text-5xl font-bold leading-tight">
                  Join Our Mission
                </h1>
              </div>
              <p className="font-inter text-xl text-gray-300 mb-8 leading-relaxed">
                Help us revolutionize regulatory compliance in financial
                services. Join a team of passionate professionals building the
                future of RegTech and making a global impact.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-gray-300 text-sm">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-gray-300 text-sm">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">4.8/5</div>
                  <div className="text-gray-300 text-sm">Employee Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-gray-300 text-sm">Retention Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={ContactHero}
                alt="ReGuard India Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold mb-2">We're Hiring!</h3>
                <p className="text-white/90">
                  Join our growing team of RegTech innovators
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive,
              grow, and make a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <benefit.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-gilroy text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="font-inter text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities across different departments
              and locations.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-red-200 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-gilroy text-xl font-bold text-gray-900">
                        {position.title}
                      </h3>
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {position.department}
                      </span>
                    </div>

                    <p className="font-inter text-gray-600 mb-4 leading-relaxed">
                      {position.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <a
                      href="mailto:careers@reguard.com?subject=Application for Software Engineer Position"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="font-inter text-lg text-gray-600 mb-6 leading-relaxed">
                At ReGuard India, we foster a culture of innovation,
                collaboration, and continuous learning. We believe that diverse
                perspectives and inclusive environments drive the best results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Innovation First
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We encourage experimentation and creative problem-solving
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Collaborative Environment
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Cross-functional teams working together towards common
                      goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Continuous Growth
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Regular learning opportunities and career development
                      programs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Work-Life Balance
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Flexible schedules and remote work options
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={Mission}
                alt="Team Culture"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-gilroy text-3xl sm:text-4xl font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="font-inter text-xl text-red-100 max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals who share our passion
            for RegTech innovation. Send us your resume and let's explore
            opportunities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@reguard.com?subject=Resume Submission - General Application"
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Send Your Resume
            </a>
            <button
              onClick={() => openSignUpModal('demo', 'footer-cta')}
              className="border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Learn More About Us
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
