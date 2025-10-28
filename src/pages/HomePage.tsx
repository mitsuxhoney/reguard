import React from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { APIDiscovery } from '../components/APIDiscovery'
import { TrustIndicators } from '../components/TrustIndicators'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { SignUpModal } from '../components/SignUpModal'
// import { Entropy } from '../components/entropy.jsx'
export const HomePage: React.FC = () => {
  const [signUpModal, setSignUpModal] = useState<{
    isOpen: boolean
    type: 'signup' | 'demo' | 'trial'
    formSource?: 'cta' | 'header' | 'hero'
  }>({
    isOpen: false,
    type: 'signup',
    formSource: 'header',
  })


  
  const openSignUpModal = (
    type: 'signup' | 'demo' | 'trial',
    formSource: 'cta' | 'header'
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

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          Reguard - Leading RegTech Identity Verification APIs | KYC, KYB, AML
          Compliance
        </title>
        <meta
          name="description"
          content="Reguard offers 30+ powerful RegTech APIs for identity verification, KYC compliance, KYB verification, AML screening, fraud detection, and due diligence. Trusted by 500K+ businesses with 99.9% uptime SLA and bank-grade security."
        />
        <meta
          name="keywords"
          content="RegTech APIs, KYC verification API, KYB compliance, AML screening, identity verification, document verification, facial recognition API, sanctions screening, PEP screening, fraud detection API, due diligence automation, compliance APIs, financial services technology, banking APIs, fintech solutions, customer onboarding APIs, digital identity verification, biometric authentication, OCR document processing, anti-money laundering APIs, know your customer APIs, know your business verification, transaction monitoring APIs, risk management APIs, regulatory compliance automation"
        />
        <link rel="canonical" href="https://reguard.com" />
        <meta
          property="og:title"
          content="Reguard - Leading RegTech Identity Verification APIs"
        />
        <meta
          property="og:description"
          content="30+ powerful APIs for KYC, KYB, AML compliance. Trusted by 500K+ businesses worldwide."
        />
        <meta property="og:url" content="https://reguard.com" />
      </Helmet>
      <Header />
      {/* <div className='w-full'>
        <Entropy />
      </div>   */}
      <Hero
        onOpenSignUp={openSignUpModal}
        onScrollToAPIs={scrollToAPIDiscovery}
      />
      <TrustIndicators />
      <APIDiscovery /> 
      <CTA onOpenSignUp={openSignUpModal} />
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
