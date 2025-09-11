import React from 'react';
import { Shield, Award, Users, Zap } from 'lucide-react';
import airbnbLogo from '../assets/airbnb.png';
import RedditLogo from '../assets/reddit.webp';
import BetwayLogo from '../assets/betway.webp';
import Dream11Logo from '../assets/Dream11Logo.png';
import MetaLogo from '../assets/meta.webp';
import OnoLogo from '../assets/Onologo.avif';
import Probo from '../assets/probo.avif';
export const TrustIndicators: React.FC = () => {
  const stats = [
    {
      icon: Shield,
      value: '99.9%',
      label: 'Uptime SLA',
      description: 'Enterprise-grade reliability',
    },
    {
      icon: Users,
      value: '500K+',
      label: 'Daily Verifications',
      description: 'Trusted by businesses worldwide',
    },
    {
      icon: Award,
      value: 'SOC 2',
      label: 'Type II Certified',
      description: 'Bank-level security standards',
    },
    {
      icon: Zap,
      value: '<2s',
      label: 'Average Response',
      description: 'Lightning-fast API performance',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-gilroy text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="font-inter text-lg text-gray-600">
            Join thousands of businesses that rely on Reguard for secure identity verification
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Compliance Badges */}
        {/* Client Logos Carousel */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {/* First set of logos */}
              <div className="flex space-x-12 items-center min-w-max">
                <div className="flex items-center justify-center h-14 w-32 transition-all duration-300">
                  <img 
                    src={airbnbLogo}  
                    alt="Airbnb"
                    width={80}
                    height={80}  
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-12 w-32 transition-all duration-300">
                  <img 
                    src={BetwayLogo}
                    alt="Betway" 
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-12 w-32 transition-all duration-300">
                  <img 
                    src={Dream11Logo}
                    alt="Dream11" 
                    className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-12 w-32 transition-all duration-300">
                  <img 
                    src={MetaLogo}
                    alt="Meta" 
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-12 w-32 transition-all duration-300">
                  <img 
                    src={RedditLogo}
                    alt="Reddit"
                    width={200}
                    height={100} 
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-12 w-32 transition-all duration-300">
                  <img 
                    src={OnoLogo}
                    alt="Ono"
                    width={100}
                    height={90} 
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-12 w-32 transition-all duration-300">
                  <img 
                    src={Probo}
                    alt="Probo" 
                    className="h-24 w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-12 items-center min-w-max">
                <div className="flex items-center justify-center h-14 w-32 transition-all duration-300">
                  <img 
                    src={airbnbLogo}  
                    alt="Airbnb"
                    width={80}
                    height={80}  
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-12 w-32 transition-all duration-300">
                  <img 
                    src={BetwayLogo}
                    alt="Betway" 
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-12 w-32 transition-all duration-300">
                  <img 
                    src={Dream11Logo}
                    alt="Dream11" 
                    className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-12 w-32 transition-all duration-300">
                  <img 
                    src={MetaLogo}
                    alt="Meta" 
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-12 w-32 transition-all duration-300">
                  <img 
                    src={RedditLogo}
                    alt="Reddit"
                    width={200}
                    height={100} 
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-12 w-32 transition-all duration-300">
                  <img 
                    src={OnoLogo}
                    alt="Ono"
                    width={100}
                    height={90} 
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center h-12 w-32 transition-all duration-300">
                  <img 
                    src={Probo}
                    alt="Probo" 
                    className="h-24 w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
            Compliance & Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-lg shadow-sm flex items-center justify-center mb-3 border border-blue-100">
                <Shield size={20} className="text-blue-600" />
              </div>
              <span className="font-semibold text-gray-900 text-sm text-center">GDPR Compliant</span>
              <span className="text-xs text-gray-500 text-center mt-1">Data Protection</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-green-50 rounded-lg shadow-sm flex items-center justify-center mb-3 border border-green-100">
                <Award size={20} className="text-green-600" />
              </div>
              <span className="font-semibold text-gray-900 text-sm text-center">ISO 27001</span>
              <span className="text-xs text-gray-500 text-center mt-1">Security Standard</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-purple-50 rounded-lg shadow-sm flex items-center justify-center mb-3 border border-purple-100">
                <Shield size={20} className="text-purple-600" />
              </div>
              <span className="font-semibold text-gray-900 text-sm text-center">PCI DSS</span>
              <span className="text-xs text-gray-500 text-center mt-1">Payment Security</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-orange-50 rounded-lg shadow-sm flex items-center justify-center mb-3 border border-orange-100">
                <Award size={20} className="text-orange-600" />
              </div>
              <span className="font-semibold text-gray-900 text-sm text-center">SOC 2 Type II</span>
              <span className="text-xs text-gray-500 text-center mt-1">Audit Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};