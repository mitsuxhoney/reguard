import React from 'react'
import { ArrowRight, Code, BookOpen, Phone } from 'lucide-react'

interface CTAProps {
  onOpenSignUp: (type: 'signup' | 'demo' | 'trial') => void
}

export const CTA: React.FC<CTAProps> = ({ onOpenSignUp }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-gilroy text-3xl sm:text-4xl font-bold mb-4">
            Ready to Integrate Reguard APIs?
          </h2>
          <p className="font-inter text-xl text-red-100 max-w-2xl mx-auto">
            Get started with our comprehensive APIs in minutes. Choose from
            flexible plans designed for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <Code className="w-12 h-12 mx-auto mb-4 text-red-200" />
            <h3 className="text-lg font-semibold mb-2">Quick Integration</h3>
            <p className="text-red-100 text-sm">
              RESTful APIs with comprehensive SDKs for popular programming
              languages
            </p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-red-200" />
            <h3 className="text-lg font-semibold mb-2">
              Detailed Documentation
            </h3>
            <p className="text-red-100 text-sm">
              Step-by-step guides, code examples, and interactive API explorer
            </p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <Phone className="w-12 h-12 mx-auto mb-4 text-red-200" />
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-red-100 text-sm">
              Dedicated technical support team to help you every step of the way
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onOpenSignUp('trial', 'footer-cta')}
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center space-x-2"
          >
            <span>Get API Key</span>
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => onOpenSignUp('demo', 'footer-cta')}
            className="border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Schedule Demo
          </button>
        </div>

        <div className="text-center mt-8">
          <p className="text-red-200 text-sm">
            No credit card required • 1000 free API calls • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
