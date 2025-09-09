import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Shield, Users, FileText, UserCheck, AlertTriangle, Eye, TrendingUp, Building2, CreditCard, Globe, Database, Gavel } from 'lucide-react';
import { APICategory } from './APICategory';
import { APICard } from './APICard';
import { getAPIsByCategory } from '../data/apiData';

const categories = [
  {
    id: 'kyc',
    icon: UserCheck,
    title: 'KYC',
    description: 'Identity verification for individuals with document validation and biometric checks.',
    apiCount: 8,
  },
  {
    id: 'kyb',
    icon: Users,
    title: 'KYB',
    description: 'Business verification for company registration and corporate structure validation.',
    apiCount: 6,
  },
  {
    id: 'aml',
    icon: Shield,
    title: 'AML',
    description: 'Advanced screening against sanctions lists, PEPs, and global watchlists.',
    apiCount: 5,
  },
  {
    id: 'due-diligence',
    icon: FileText,
    title: 'Due Diligence',
    description: 'Comprehensive background checks and risk assessment processes.',
    apiCount: 7,
  },
  {
    id: 'criminal',
    icon: AlertTriangle,
    title: 'Criminal Screening',
    description: 'Criminal background verification and adverse media screening.',
    apiCount: 4,
  },
  {
    id: 'negative',
    icon: Eye,
    title: 'Negative Profiles',
    description: 'Screening against negative news, bankruptcy, and reputation risks.',
    apiCount: 6,
  },
  {
    id: 'transaction-monitoring',
    icon: TrendingUp,
    title: 'Transaction Monitoring',
    description: 'Real-time transaction analysis and suspicious activity detection.',
    apiCount: 8,
  },
  {
    id: 'regulatory-reporting',
    icon: FileText,
    title: 'Regulatory Reporting',
    description: 'Automated compliance reporting for various regulatory frameworks.',
    apiCount: 5,
  },
  {
    id: 'credit-risk',
    icon: CreditCard,
    title: 'Credit & Risk',
    description: 'Credit scoring, risk assessment, and financial stability analysis.',
    apiCount: 9,
  },
  {
    id: 'fraud-detection',
    icon: Shield,
    title: 'Fraud Detection',
    description: 'Advanced fraud prevention and detection using ML algorithms.',
    apiCount: 7,
  },
  {
    id: 'data-enrichment',
    icon: Database,
    title: 'Data Enrichment',
    description: 'Enhance customer profiles with additional data sources and insights.',
    apiCount: 6,
  },
  {
    id: 'geolocation',
    icon: Globe,
    title: 'Geolocation & GeoIP',
    description: 'Location verification, IP geolocation, and geographic risk assessment.',
    apiCount: 4,
  },
  {
    id: 'legal-compliance',
    icon: Gavel,
    title: 'Legal Compliance',
    description: 'Legal entity verification, court records, and litigation history.',
    apiCount: 5,
  },
  {
    id: 'esg-screening',
    icon: Building2,
    title: 'ESG Screening',
    description: 'Environmental, Social, and Governance risk assessment and monitoring.',
    apiCount: 4,
  },
];

const apis = {
  kyc: [
    {
      name: 'Identity Document Verification',
      description: 'Advanced OCR and ML-powered document authentication for passports, IDs, and licenses with real-time fraud detection.',
      responseTime: '<2s',
      accuracy: '99.5%',
      category: 'KYC',
      isPopular: true,
    },
    {
      name: 'Facial Recognition Match',
      description: 'Biometric face matching between live selfies and document photos with advanced liveness detection.',
      responseTime: '<1s',
      accuracy: '99.8%',
      category: 'KYC',
    },
    {
      name: 'Address Verification',
      description: 'Real-time address validation and postal code verification across 200+ countries.',
      responseTime: '<500ms',
      accuracy: '98.2%',
      category: 'KYC',
    },
    {
      name: 'Phone Number Validation',
      description: 'Mobile and landline number verification with carrier information and risk scoring.',
      responseTime: '<300ms',
      accuracy: '97.9%',
      category: 'KYC',
    },
    {
      name: 'Email Verification',
      description: 'Comprehensive email validation with deliverability checks and risk assessment.',
      responseTime: '<200ms',
      accuracy: '99.1%',
      category: 'KYC',
    },
    {
      name: 'Age Verification',
      description: 'Age validation through document analysis and third-party data sources.',
      responseTime: '<1.5s',
      accuracy: '98.7%',
      category: 'KYC',
    },
  ],
  kyb: [
    {
      name: 'Company Registration Lookup',
      description: 'Verify business registration details across multiple jurisdictions and regulatory bodies.',
      responseTime: '<3s',
      accuracy: '99.1%',
      category: 'KYB',
      isPopular: true,
    },
    {
      name: 'Ultimate Beneficial Owner',
      description: 'Identify and verify UBO structures with ownership percentage calculations.',
      responseTime: '<5s',
      accuracy: '98.7%',
      category: 'KYB',
    },
    {
      name: 'Business License Verification',
      description: 'Validate professional licenses and permits for regulated industries.',
      responseTime: '<4s',
      accuracy: '99.3%',
      category: 'KYB',
    },
    {
      name: 'Corporate Structure Analysis',
      description: 'Deep analysis of corporate hierarchies and subsidiary relationships.',
      responseTime: '<6s',
      accuracy: '98.9%',
      category: 'KYB',
    },
  ],
  aml: [
    {
      name: 'Sanctions Screening',
      description: 'Real-time screening against OFAC, EU, UN, and 40+ global sanctions lists.',
      responseTime: '<1s',
      accuracy: '99.9%',
      category: 'AML',
      isPopular: true,
    },
    {
      name: 'PEP Screening',
      description: 'Politically Exposed Person screening with relationship mapping and risk scoring.',
      responseTime: '<2s',
      accuracy: '99.4%',
      category: 'AML',
    },
    {
      name: 'Adverse Media Monitoring',
      description: 'Continuous monitoring of negative news and media mentions across global sources.',
      responseTime: '<3s',
      accuracy: '97.8%',
      category: 'AML',
    },
    {
      name: 'Transaction Monitoring',
      description: 'Real-time transaction analysis for suspicious activity detection.',
      responseTime: '<500ms',
      accuracy: '98.6%',
      category: 'AML',
    },
  ],
  'due-diligence': [
    {
      name: 'Enhanced Due Diligence',
      description: 'Comprehensive risk profiling with multi-source data aggregation and analysis.',
      responseTime: '<10s',
      accuracy: '98.9%',
      category: 'Due Diligence',
    },
    {
      name: 'Financial Risk Assessment',
      description: 'Credit history and financial stability analysis for individuals and businesses.',
      responseTime: '<8s',
      accuracy: '99.2%',
      category: 'Due Diligence',
    },
    {
      name: 'Regulatory Compliance Check',
      description: 'Verify compliance status across multiple regulatory frameworks.',
      responseTime: '<12s',
      accuracy: '98.5%',
      category: 'Due Diligence',
    },
  ],
  criminal: [
    {
      name: 'Criminal Background Check',
      description: 'Multi-jurisdictional criminal record searches with court record verification.',
      responseTime: '<15s',
      accuracy: '98.5%',
      category: 'Criminal',
      isPopular: true,
    },
    {
      name: 'Sex Offender Registry',
      description: 'Screening against national and state sex offender registries.',
      responseTime: '<5s',
      accuracy: '99.7%',
      category: 'Criminal',
    },
    {
      name: 'Interpol Database Check',
      description: 'International criminal database screening through official channels.',
      responseTime: '<20s',
      accuracy: '99.9%',
      category: 'Criminal',
    },
  ],
  negative: [
    {
      name: 'Bankruptcy Screening',
      description: 'Real-time bankruptcy record searches across federal and state databases.',
      responseTime: '<6s',
      accuracy: '99.1%',
      category: 'Negative Profiles',
    },
    {
      name: 'Litigation History',
      description: 'Comprehensive civil and commercial litigation record searches.',
      responseTime: '<8s',
      accuracy: '98.3%',
      category: 'Negative Profiles',
    },
    {
      name: 'Reputation Risk Analysis',
      description: 'Social media and online presence analysis for reputation risks.',
      responseTime: '<10s',
      accuracy: '97.5%',
      category: 'Negative Profiles',
    },
  ],
  'transaction-monitoring': [
    {
      name: 'Real-time Transaction Screening',
      description: 'Monitor transactions in real-time for suspicious patterns and regulatory compliance.',
      responseTime: '<100ms',
      accuracy: '99.2%',
      category: 'Transaction Monitoring',
      isPopular: true,
    },
    {
      name: 'Behavioral Analytics',
      description: 'AI-powered analysis of customer transaction behavior and anomaly detection.',
      responseTime: '<2s',
      accuracy: '98.7%',
      category: 'Transaction Monitoring',
    },
    {
      name: 'Currency Transaction Reporting',
      description: 'Automated CTR generation and filing for large cash transactions.',
      responseTime: '<5s',
      accuracy: '99.8%',
      category: 'Transaction Monitoring',
    },
    {
      name: 'Wire Transfer Screening',
      description: 'SWIFT message screening and wire transfer compliance monitoring.',
      responseTime: '<1s',
      accuracy: '99.5%',
      category: 'Transaction Monitoring',
    },
    {
      name: 'Trade Finance Monitoring',
      description: 'Monitor trade finance transactions for compliance and risk assessment.',
      responseTime: '<3s',
      accuracy: '98.9%',
      category: 'Transaction Monitoring',
    },
  ],
  'regulatory-reporting': [
    {
      name: 'SAR Filing Automation',
      description: 'Automated Suspicious Activity Report generation and regulatory filing.',
      responseTime: '<30s',
      accuracy: '99.6%',
      category: 'Regulatory Reporting',
    },
    {
      name: 'FATCA Reporting',
      description: 'Foreign Account Tax Compliance Act reporting and documentation.',
      responseTime: '<10s',
      accuracy: '99.4%',
      category: 'Regulatory Reporting',
    },
    {
      name: 'CRS Compliance',
      description: 'Common Reporting Standard compliance and automatic exchange of information.',
      responseTime: '<15s',
      accuracy: '99.1%',
      category: 'Regulatory Reporting',
    },
    {
      name: 'Basel III Reporting',
      description: 'Capital adequacy and risk management reporting for Basel III compliance.',
      responseTime: '<45s',
      accuracy: '98.8%',
      category: 'Regulatory Reporting',
    },
  ],
  'credit-risk': [
    {
      name: 'Credit Score Analysis',
      description: 'Comprehensive credit scoring using multiple bureau data and alternative sources.',
      responseTime: '<3s',
      accuracy: '99.3%',
      category: 'Credit & Risk',
      isPopular: true,
    },
    {
      name: 'Probability of Default',
      description: 'AI-powered default probability calculation using advanced risk models.',
      responseTime: '<2s',
      accuracy: '98.9%',
      category: 'Credit & Risk',
    },
    {
      name: 'Income Verification',
      description: 'Verify income through bank statements, tax records, and employment data.',
      responseTime: '<8s',
      accuracy: '99.1%',
      category: 'Credit & Risk',
    },
    {
      name: 'Asset Verification',
      description: 'Verify assets including real estate, investments, and personal property.',
      responseTime: '<12s',
      accuracy: '98.5%',
      category: 'Credit & Risk',
    },
    {
      name: 'Debt-to-Income Ratio',
      description: 'Calculate and analyze debt-to-income ratios for lending decisions.',
      responseTime: '<1s',
      accuracy: '99.7%',
      category: 'Credit & Risk',
    },
  ],
  'fraud-detection': [
    {
      name: 'Device Fingerprinting',
      description: 'Advanced device identification and fraud prevention through behavioral analysis.',
      responseTime: '<200ms',
      accuracy: '99.4%',
      category: 'Fraud Detection',
      isPopular: true,
    },
    {
      name: 'Synthetic Identity Detection',
      description: 'Detect synthetic identities using ML algorithms and cross-reference validation.',
      responseTime: '<3s',
      accuracy: '98.8%',
      category: 'Fraud Detection',
    },
    {
      name: 'Account Takeover Prevention',
      description: 'Real-time detection of account takeover attempts and unauthorized access.',
      responseTime: '<500ms',
      accuracy: '99.1%',
      category: 'Fraud Detection',
    },
    {
      name: 'Payment Fraud Screening',
      description: 'Advanced payment fraud detection for cards, ACH, and digital payments.',
      responseTime: '<300ms',
      accuracy: '99.6%',
      category: 'Fraud Detection',
    },
  ],
  'data-enrichment': [
    {
      name: 'Customer Profile Enhancement',
      description: 'Enrich customer profiles with demographic, psychographic, and behavioral data.',
      responseTime: '<5s',
      accuracy: '98.7%',
      category: 'Data Enrichment',
    },
    {
      name: 'Social Media Intelligence',
      description: 'Extract insights from social media profiles for enhanced customer understanding.',
      responseTime: '<8s',
      accuracy: '97.9%',
      category: 'Data Enrichment',
    },
    {
      name: 'Business Intelligence',
      description: 'Comprehensive business data enrichment including financials and market data.',
      responseTime: '<10s',
      accuracy: '98.5%',
      category: 'Data Enrichment',
    },
    {
      name: 'Contact Information Validation',
      description: 'Verify and enrich contact information with current and accurate details.',
      responseTime: '<2s',
      accuracy: '99.2%',
      category: 'Data Enrichment',
    },
  ],
  geolocation: [
    {
      name: 'IP Geolocation',
      description: 'Accurate IP address geolocation with ISP and connection type information.',
      responseTime: '<100ms',
      accuracy: '98.9%',
      category: 'Geolocation',
    },
    {
      name: 'Address Geocoding',
      description: 'Convert addresses to precise geographic coordinates with validation.',
      responseTime: '<500ms',
      accuracy: '99.5%',
      category: 'Geolocation',
    },
    {
      name: 'Geographic Risk Assessment',
      description: 'Assess geographic risk based on location, jurisdiction, and regulatory environment.',
      responseTime: '<1s',
      accuracy: '98.3%',
      category: 'Geolocation',
    },
  ],
  'legal-compliance': [
    {
      name: 'Court Records Search',
      description: 'Comprehensive court records search across federal, state, and local jurisdictions.',
      responseTime: '<20s',
      accuracy: '99.1%',
      category: 'Legal Compliance',
    },
    {
      name: 'Legal Entity Verification',
      description: 'Verify legal entity status, registration, and good standing certificates.',
      responseTime: '<8s',
      accuracy: '99.4%',
      category: 'Legal Compliance',
    },
  ],
};

export const APIDiscovery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('kyc');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const currentAPIs = getAPIsByCategory(activeCategory);
  const filteredAPIs = currentAPIs.filter(api =>
    api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    api.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalAPIs = 30; // Total number of APIs across all categories

  const handleAPIClick = (apiId: string, category: string) => {
    navigate(`/apis/${category}/${apiId}`);
  };
  return (
    <section id="apis" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-gilroy text-2xl font-bold text-gray-900 mb-2">
            API Discovery
          </h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto mb-4">
            Explore {totalAPIs}+ powerful APIs across 6 categories for comprehensive identity verification
          </p>
          <div className="max-w-sm mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search APIs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Sidebar Layout */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 m-2">
          {/* Left Sidebar - Categories */}
          <div className="w-full lg:w-64 flex-shrink-0 mb-4 lg:mb-0">
            {/* Mobile: Dropdown */}
            <div className="block md:hidden mb-4">
              <select
                className="w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900"
                value={activeCategory}
                onChange={e => setActiveCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>
            {/* Desktop: Sidebar */}
            <div className="hidden lg:block bg-white rounded-lg border border-gray-200 p-2 sm:p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Categories</h3>
              <div className="space-y-1">
                {categories.map((category) => (
                  <APICategory
                    key={category.id}
                    icon={category.icon}
                    title={category.title}
                    description={category.description}
                    apiCount={category.apiCount}
                    isActive={activeCategory === category.id}
                    onClick={() => setActiveCategory(category.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - API Cards */}
          <div className="flex-1">
            <div className="bg-white rounded-lg border border-gray-200 p-2 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {categories.find(c => c.id === activeCategory)?.title} APIs
                  </h3>
                  <p className="text-sm text-gray-600">
                    {filteredAPIs.length} of {currentAPIs.length} APIs
                  </p>
                </div>
                <div className="text-xs text-gray-500">
                  Sorted by popularity
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {filteredAPIs.map((api, index) => (
                  <APICard
                    key={index}
                    id={api.id}
                    category={api.category.toLowerCase()}
                    name={api.name}
                    description={api.description}
                    responseTime={api.responseTime}
                    accuracy={api.accuracy}
                    categoryLabel={api.category}
                    isPopular={api.isPopular}
                    onClick={() => handleAPIClick(api.id, api.category.toLowerCase())}
                  />
                ))}
              </div>
              {filteredAPIs.length === 0 && (
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">
                    <Search size={32} className="mx-auto" />
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-1">No APIs found</h3>
                  <p className="text-sm text-gray-600">Try adjusting your search terms or browse different categories.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};