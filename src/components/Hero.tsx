import React from 'react'
import { SignUpModal } from './SignUpModal'
import { Shield, Zap, Globe } from 'lucide-react'

interface HeroProps {
  onOpenSignUp: (type: 'signup' | 'demo' | 'trial') => void
  onScrollToAPIs: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenSignUp, onScrollToAPIs }) => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          <h1 className="font-gilroy text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Powerful Identity Verification
            <span className="block text-red-400">APIs for Modern Business</span>
          </h1>
          <p className="font-inter text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Secure your business with 30+ advanced APIs for KYC, KYB, AML
            compliance, and comprehensive due diligence across global markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={onScrollToAPIs}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              Explore APIs
            </button>
            <button
              onClick={() => onOpenSignUp('demo', 'hero')}
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Request Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-6 h-6 text-red-400" />
              <span className="text-lg">Bank-Grade Security</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-6 h-6 text-red-400" />
              <span className="text-lg">99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Globe className="w-6 h-6 text-red-400" />
              <span className="text-lg">Global Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
