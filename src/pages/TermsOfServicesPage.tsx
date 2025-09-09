import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SignUpModal } from '../components/SignUpModal'

export const TermsOfServicesPage: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms of Service | Reguard</title>
        <meta
          name="description"
          content="Read ReGuard India's Terms of Service governing the use of our products, APIs, and website."
        />
        <link rel="canonical" href="https://reguard.com/terms-of-services" />
        <meta property="og:title" content="Terms of Service | Reguard" />
        <meta
          property="og:description"
          content="Understand the terms that apply to using our services and APIs."
        />
        <meta
          property="og:url"
          content="https://reguard.com/terms-of-services"
        />
      </Helmet>
      <Header />

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-gilroy text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="font-inter text-gray-300 max-w-3xl">
            Please review these terms carefully. By accessing or using our
            services, you agree to be bound by them.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Use of Services
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed">
              You may use our products and APIs only in compliance with these
              terms and applicable laws. You are responsible for safeguarding
              API keys and account credentials, and for any activity conducted
              using them.
            </p>
          </div>

          <div>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Accounts and Security
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed">
              Maintain accurate account information and promptly notify us of
              any unauthorized use. We may suspend access if we detect
              suspicious activity or violations of these terms.
            </p>
          </div>

          <div>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Acceptable Use
            </h2>
            <ul className="list-disc pl-6 space-y-2 font-inter text-gray-700">
              <li>
                Do not reverse engineer, disrupt, or overload our services
              </li>
              <li>
                Do not use services for unlawful activities or to process
                prohibited content
              </li>
              <li>
                Comply with rate limits, API documentation, and integration
                guidelines
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Intellectual Property
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed">
              All rights, title, and interest in and to the platform, APIs, and
              content remain with ReGuard India and its licensors. You receive a
              limited, non-exclusive right to use the services as described in
              documentation.
            </p>
          </div>

          <div>
            <h2 className="font-gilroy text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Liability
            </h2>
            <p className="font-inter text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, ReGuard India is not
              liable for indirect, incidental, or consequential damages. Our
              total liability is limited to fees paid in the preceding 12
              months.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-gilroy text-xl font-bold text-gray-900">
                  Need clarification or a custom agreement?
                </h3>
                <p className="font-inter text-gray-600">
                  Talk to our team or schedule a quick demo.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => openSignUpModal('demo', 'footer-cta')}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-semibold transition-colors"
                >
                  Book a Demo
                </button>
                <a
                  href="mailto:legal@reguard.com"
                  className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-5 py-3 rounded-lg font-semibold transition-colors"
                >
                  Email Legal
                </a>
              </div>
            </div>
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
