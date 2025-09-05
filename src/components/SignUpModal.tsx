<<<<<<< HEAD
import React, { useState } from 'react';
import { X, Mail, User, Building2, Phone, Shield, Zap, Globe } from 'lucide-react';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'signup' | 'demo' | 'trial';
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: ''
  });

  if (!isOpen) return null;

  const getModalTitle = () => {
    switch (type) {
      case 'demo':
        return 'Request Demo';
      case 'trial':
        return 'Get Your API Key';
      default:
        return 'Get Started';
    }
  };

  const getModalDescription = () => {
    switch (type) {
      case 'demo':
        return 'Schedule a personalized demo to see how Reguard can transform your identity verification process.';
      case 'trial':
        return 'Start your free trial with 1000 API calls. No credit card required.';
      default:
        return 'Join thousands of businesses using Reguard for secure identity verification.';
    }
  };

  const getCoverContent = () => {
    switch (type) {
      case 'demo':
        return {
          title: 'See Reguard in Action',
          subtitle: 'Discover how leading companies verify identities at scale',
          features: [
            { icon: Shield, text: 'Bank-grade security' },
            { icon: Zap, text: 'Lightning-fast APIs' },
            { icon: Globe, text: 'Global coverage' }
          ]
        };
      case 'trial':
        return {
          title: 'Start Building Today',
          subtitle: 'Get instant access to our powerful identity verification APIs',
          features: [
            { icon: Shield, text: '1000 free API calls' },
            { icon: Zap, text: 'No credit card required' },
            { icon: Globe, text: 'Full API access' }
          ]
        };
      default:
        return {
          title: 'Transform Your Business',
          subtitle: 'Join the future of identity verification with Reguard',
          features: [
            { icon: Shield, text: 'Enterprise security' },
            { icon: Zap, text: '99.9% uptime SLA' },
            { icon: Globe, text: 'Trusted worldwide' }
          ]
        };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const coverContent = getCoverContent();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden">
        <div className="flex min-h-[600px]">
          {/* Left Cover Section */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            {/* Cover Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional team"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center p-12 text-white">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 leading-tight">
                  {coverContent.title}
                </h2>
                <p className="text-red-100 text-lg leading-relaxed">
                  {coverContent.subtitle}
                </p>
              </div>
              
              <div className="space-y-4">
                {coverContent.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <feature.icon size={20} className="text-white" />
                    </div>
                    <span className="text-white font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-4 text-red-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">500K+</div>
                    <div className="text-sm">Daily Verifications</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-sm">Uptime SLA</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">30+</div>
                    <div className="text-sm">APIs Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {getModalTitle()}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {getModalDescription()}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Work Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="e.g. CTO, Product Manager"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {type === 'demo' ? 'Schedule Demo' : type === 'trial' ? 'Get API Key' : 'Get Started'}
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-gray-500 leading-relaxed">
                  By signing up, you agree to our{' '}
                  <a href="#" className="text-red-600 hover:text-red-700 font-medium">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-red-600 hover:text-red-700 font-medium">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
=======
import React, { useState } from 'react';
import { X, Mail, User, Building2, Phone, Shield, Zap, Globe } from 'lucide-react';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'signup' | 'demo' | 'trial';
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    jobTitle: ''
  });

  if (!isOpen) return null;

  const getModalTitle = () => {
    switch (type) {
      case 'demo':
        return 'Request Demo';
      case 'trial':
        return 'Get Your API Key';
      default:
        return 'Get Started';
    }
  };

  const getModalDescription = () => {
    switch (type) {
      case 'demo':
        return 'Schedule a personalized demo to see how Reguard can transform your identity verification process.';
      case 'trial':
        return 'Start your free trial with 1000 API calls. No credit card required.';
      default:
        return 'Join thousands of businesses using Reguard for secure identity verification.';
    }
  };

  const getCoverContent = () => {
    switch (type) {
      case 'demo':
        return {
          title: 'See Reguard in Action',
          subtitle: 'Discover how leading companies verify identities at scale',
          features: [
            { icon: Shield, text: 'Bank-grade security' },
            { icon: Zap, text: 'Lightning-fast APIs' },
            { icon: Globe, text: 'Global coverage' }
          ]
        };
      case 'trial':
        return {
          title: 'Start Building Today',
          subtitle: 'Get instant access to our powerful identity verification APIs',
          features: [
            { icon: Shield, text: '1000 free API calls' },
            { icon: Zap, text: 'No credit card required' },
            { icon: Globe, text: 'Full API access' }
          ]
        };
      default:
        return {
          title: 'Transform Your Business',
          subtitle: 'Join the future of identity verification with Reguard',
          features: [
            { icon: Shield, text: 'Enterprise security' },
            { icon: Zap, text: '99.9% uptime SLA' },
            { icon: Globe, text: 'Trusted worldwide' }
          ]
        };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const coverContent = getCoverContent();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden">
        <div className="flex min-h-[600px]">
          {/* Left Cover Section */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            {/* Cover Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional team"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center p-12 text-white">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 leading-tight">
                  {coverContent.title}
                </h2>
                <p className="text-red-100 text-lg leading-relaxed">
                  {coverContent.subtitle}
                </p>
              </div>
              
              <div className="space-y-4">
                {coverContent.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <feature.icon size={20} className="text-white" />
                    </div>
                    <span className="text-white font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-4 text-red-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">500K+</div>
                    <div className="text-sm">Daily Verifications</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-sm">Uptime SLA</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">30+</div>
                    <div className="text-sm">APIs Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {getModalTitle()}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {getModalDescription()}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Work Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="e.g. CTO, Product Manager"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {type === 'demo' ? 'Schedule Demo' : type === 'trial' ? 'Get API Key' : 'Get Started'}
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-gray-500 leading-relaxed">
                  By signing up, you agree to our{' '}
                  <a href="#" className="text-red-600 hover:text-red-700 font-medium">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-red-600 hover:text-red-700 font-medium">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> 8d32107 (meta)
};