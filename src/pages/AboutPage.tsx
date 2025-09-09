import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SignUpModal } from '../components/SignUpModal'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  Shield,
  Users,
  Globe,
  Award,
  Target,
  Heart,
  Zap,
  CheckCircle,
} from 'lucide-react'

export const AboutPage: React.FC = () => {
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

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description:
        'We prioritize data security and privacy in everything we build, ensuring bank-grade protection for all our clients.',
    },
    {
      icon: Users,
      title: 'Customer Success',
      description:
        "Our clients' success is our success. We work closely with each organization to ensure they achieve their compliance goals.",
    },
    {
      icon: Zap,
      title: 'Innovation',
      description:
        'We continuously innovate to stay ahead of regulatory changes and provide cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description:
        'We operate with the highest ethical standards and transparency in all our business practices.',
    },
  ]

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description:
        'ReGuard India was established with a vision to revolutionize regulatory compliance in financial services.',
    },
    {
      year: '2019',
      title: 'First API Launch',
      description:
        'Launched our first KYC verification API, serving early adopters in the fintech space.',
    },
    {
      year: '2020',
      title: 'Series A Funding',
      description:
        'Raised Series A funding to expand our product portfolio and engineering team.',
    },
    {
      year: '2021',
      title: '100+ Clients',
      description:
        'Reached the milestone of serving over 100 financial institutions across India.',
    },
    {
      year: '2022',
      title: 'International Expansion',
      description:
        'Expanded operations to Southeast Asia and the Middle East markets.',
    },
    {
      year: '2023',
      title: 'AI Integration',
      description:
        'Integrated advanced AI and machine learning capabilities across all our products.',
    },
    {
      year: '2024',
      title: '500+ Clients',
      description:
        'Serving over 500 financial institutions with 30+ APIs and comprehensive solutions.',
    },
    {
      year: '2025',
      title: 'Global Leadership',
      description:
        'Established as a leading RegTech platform with presence in 15+ countries.',
    },
  ]

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Co-Founder',
      image:
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former banking executive with 15+ years in financial services and regulatory compliance.',
    },
    {
      name: 'Priya Sharma',
      role: 'CTO & Co-Founder',
      image:
        'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Technology leader with expertise in AI, machine learning, and scalable system architecture.',
    },
    {
      name: 'Amit Patel',
      role: 'Chief Compliance Officer',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Regulatory expert with deep knowledge of RBI, SEBI, and international compliance frameworks.',
    },
    {
      name: 'Sneha Gupta',
      role: 'VP of Product',
      image:
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Product strategist focused on creating user-centric RegTech solutions for financial institutions.',
    },
    {
      name: 'Arjun Singh',
      role: 'VP of Engineering',
      image:
        'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Engineering leader with 12+ years building scalable fintech platforms and API infrastructure.',
    },
    {
      name: 'Kavya Reddy',
      role: 'Head of UX Design',
      image:
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Design expert specializing in financial UX and compliance workflow optimization.',
    },
    {
      name: 'Rohit Mehta',
      role: 'VP of Marketing',
      image:
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Marketing strategist with expertise in B2B fintech growth and regulatory technology positioning.',
    },
    {
      name: 'Ananya Joshi',
      role: 'Head of Operations',
      image:
        'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Operations leader focused on scaling processes and ensuring operational excellence across teams.',
    },
    {
      name: 'Vikram Agarwal',
      role: 'Senior Engineering Manager',
      image:
        'https://images.pexels.com/photos/6801875/pexels-photo-6801875.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Full-stack engineer with expertise in microservices architecture and cloud infrastructure.',
    },
    {
      name: 'Meera Nair',
      role: 'Product Manager - APIs',
      image:
        'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Product manager specializing in API strategy and developer experience optimization.',
    },
    {
      name: 'Karthik Iyer',
      role: 'Lead Data Scientist',
      image:
        'https://images.pexels.com/photos/6801876/pexels-photo-6801876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'AI/ML expert developing fraud detection algorithms and risk assessment models.',
    },
    {
      name: 'Divya Krishnan',
      role: 'Marketing Manager',
      image:
        'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Digital marketing specialist focused on content strategy and developer community engagement.',
    },
    {
      name: 'Arjun Singh',
      role: 'VP of Engineering',
      image:
        'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Engineering leader with 12+ years building scalable fintech platforms and API infrastructure.',
    },
    {
      name: 'Kavya Reddy',
      role: 'Head of UX Design',
      image:
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Design expert specializing in financial UX and compliance workflow optimization.',
    },
    {
      name: 'Rohit Mehta',
      role: 'VP of Marketing',
      image:
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Marketing strategist with expertise in B2B fintech growth and regulatory technology positioning.',
    },
    {
      name: 'Ananya Joshi',
      role: 'Head of Operations',
      image:
        'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Operations leader focused on scaling processes and ensuring operational excellence across teams.',
    },
    {
      name: 'Vikram Agarwal',
      role: 'Senior Engineering Manager',
      image:
        'https://images.pexels.com/photos/6801875/pexels-photo-6801875.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Full-stack engineer with expertise in microservices architecture and cloud infrastructure.',
    },
    {
      name: 'Meera Nair',
      role: 'Product Manager - APIs',
      image:
        'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Product manager specializing in API strategy and developer experience optimization.',
    },
    {
      name: 'Karthik Iyer',
      role: 'Lead Data Scientist',
      image:
        'https://images.pexels.com/photos/6801876/pexels-photo-6801876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'AI/ML expert developing fraud detection algorithms and risk assessment models.',
    },
    {
      name: 'Divya Krishnan',
      role: 'Marketing Manager',
      image:
        'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Digital marketing specialist focused on content strategy and developer community engagement.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About ReGuard India - Leading RegTech Company | Reguard</title>
        <meta
          name="description"
          content="Learn about ReGuard India's mission to revolutionize regulatory compliance in financial services. Founded in 2018, we serve 500+ clients with 30+ APIs for KYC, AML, and compliance automation across 15+ countries."
        />
        <meta
          name="keywords"
          content="About ReGuard India, RegTech company, regulatory technology, compliance automation, financial services technology, KYC solutions, AML compliance, identity verification, fraud prevention, regulatory compliance, fintech solutions, banking technology, insurance RegTech, company history, leadership team, RegTech innovation"
        />
        <link rel="canonical" href="https://reguard.com/about" />
        <meta
          property="og:title"
          content="About ReGuard India - Leading RegTech Company"
        />
        <meta
          property="og:description"
          content="Revolutionizing regulatory compliance in financial services with 30+ APIs serving 500+ clients globally."
        />
        <meta property="og:url" content="https://reguard.com/about" />
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
              to={'/about'}
              className="text-gray-800 font-medium hover:text-red-600 transition-colors capitalize"
            >
              About
            </Link>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-gilroy text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                About ReGuard India
              </h1>
              <p className="font-inter text-xl text-gray-300 mb-8 leading-relaxed">
                We're on a mission to revolutionize regulatory compliance in
                financial services through innovative technology solutions that
                make compliance faster, more accurate, and cost-effective for
                businesses worldwide.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-gray-300 text-sm">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-gray-300 text-sm">APIs Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-gray-300 text-sm">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">7</div>
                  <div className="text-gray-300 text-sm">Years Strong</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="ReGuard India Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-red-600 mr-4" />
                <h2 className="font-gilroy text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="font-inter text-lg text-gray-600 leading-relaxed mb-6">
                To democratize access to advanced regulatory technology
                solutions, enabling financial institutions of all sizes to
                achieve seamless compliance while focusing on their core
                business objectives.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">
                    Simplify complex compliance processes
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">
                    Reduce operational costs and risks
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">
                    Enable faster time-to-market
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Globe className="w-12 h-12 text-red-600 mr-4" />
                <h2 className="font-gilroy text-3xl font-bold text-gray-900">
                  Our Vision
                </h2>
              </div>
              <p className="font-inter text-lg text-gray-600 leading-relaxed mb-6">
                To become the global standard for regulatory technology
                solutions, powering the next generation of financial services
                with intelligent, automated, and secure compliance
                infrastructure.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">
                    Global RegTech leadership
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">
                    Innovative compliance solutions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">
                    Secure infrastructure standards
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the talented professionals driving ReGuard India's innovation
              and success across all departments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="font-gilroy text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-red-600 font-semibold mb-3">{member.role}</p>
                <p className="font-inter text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-gilroy text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Compliance Operations?
          </h2>
          <p className="font-inter text-xl text-red-100 max-w-3xl mx-auto mb-8">
            Join hundreds of financial institutions that trust ReGuard India for
            their regulatory technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openSignUpModal('demo', 'footer-cta')}
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              Schedule a Demo
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
