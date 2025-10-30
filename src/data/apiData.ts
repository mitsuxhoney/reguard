// Comprehensive API data for all RegTech APIs
export interface APIData {
  metaName?: string;
  metaDescription?: string;
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  responseTime: string;
  accuracy: string;
  pricing: string;
  isPopular?: boolean;
  features: string[];
  useCases: string[];
  endpoints: {
    method: string,
    path: string,
    description: string,
  }[];
  codeExamples: {
    curl: string,
    javascript: string,
    python: string,
  };
}

export const apiDatabase: Record<string, APIData> = {
  // KYC APIs
  'identity-document-verification': {
    metaName: 'Identity Document Verification API | Reguard AI',
    metaDescription: 'Verify identity documents instantly with Reguard AI. Our powerful API ensures accurate, secure, and fast KYC verification for seamless user onboarding.',
    id: 'identity-document-verification',
    name: 'Identity Document Verification API',
    category: 'KYC',
    description:
      'Advanced OCR and ML-powered document authentication for passports, IDs, and licenses with real-time fraud detection.',
    longDescription:
      'Our Identity Document Verification API uses cutting-edge OCR technology combined with machine learning algorithms to authenticate government-issued documents with 99.5% accuracy. The API supports over 200 document types from 195+ countries and includes advanced fraud detection capabilities.',
    responseTime: '<2s',
    accuracy: '99.5%',
    pricing: '$0.50 per verification',
    isPopular: true,
    features: [
      'Advanced OCR with 99.5% accuracy for document data extraction',
      'Real-time fraud detection using machine learning algorithms',
      'Support for 200+ government document types worldwide',
      'Multi-language OCR support for global compliance',
      'Document authenticity verification with security features',
      'Automated data extraction and validation',
      'GDPR and SOC 2 compliant processing',
      'RESTful API with comprehensive SDKs',
    ],
    useCases: [
      'Financial services customer onboarding and KYC compliance',
      'E-commerce age verification and identity validation',
      'Travel and hospitality automated check-in processes',
      'Healthcare patient identity verification and HIPAA compliance',
      'Government digital services access and citizen verification',
      'Educational institution student enrollment and verification',
      'Cryptocurrency exchange KYC and AML compliance',
      'Insurance policy application processing and fraud prevention',
    ],
    endpoints: [
      {
        method: 'POST',
        path: '/v1/kyc/document/verify',
        description:
          'Verify identity document authenticity and extract data with fraud detection',
      },
      {
        method: 'GET',
        path: '/v1/kyc/document/status/{id}',
        description: 'Get real-time verification status and results',
      },
      {
        method: 'POST',
        path: '/v1/kyc/document/extract',
        description:
          'Extract structured data from identity documents using OCR',
      },
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.reguard.com/v1/kyc/document/verify" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "document_image": "base64_encoded_image",
    "document_type": "passport",
    "country": "US"
  }'`,
      javascript: `const response = await fetch('https://api.reguard.com/v1/kyc/document/verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    document_image: 'base64_encoded_image',
    document_type: 'passport',
    country: 'US'
  })
});

const result = await response.json();`,
      python: `import requests

url = "https://api.reguard.com/v1/kyc/document/verify"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "document_image": "base64_encoded_image",
    "document_type": "passport",
    "country": "US"
}

response = requests.post(url, headers=headers, json=data)`,
    },
  },
  'facial-recognition-match': {
    metaName: 'Facial Recognition Match API | Verify Faces with Reguard AI',
    metaDescription: 'Use Reguard AI Facial Recognition Match API to verify identities instantly. Detect face matches with high accuracy for secure and seamless KYC verification.',
    id: 'facial-recognition-match',
    name: 'Facial Recognition Match API',
    category: 'KYC',
    description:
      'Biometric face matching between live selfies and document photos with advanced liveness detection.',
    longDescription:
      'Our Facial Recognition Match API provides state-of-the-art biometric verification by comparing live selfies with document photos. With 99.8% accuracy and advanced liveness detection, it prevents spoofing attacks and ensures genuine user verification.',
    responseTime: '<1s',
    accuracy: '99.8%',
    pricing: '$0.30 per match',
    features: [
      'Advanced facial recognition with 99.8% accuracy',
      'Real-time liveness detection to prevent spoofing',
      'Support for multiple image formats and qualities',
      'Anti-spoofing technology against photos and videos',
      'Biometric template generation and matching',
      'Age and gender estimation capabilities',
      'Multi-face detection and isolation',
      'GDPR compliant biometric processing',
    ],
    useCases: [
      'Digital banking customer verification and authentication',
      'Mobile app user onboarding with selfie verification',
      'Access control systems for secure facilities',
      'Online gaming and gambling age verification',
      'Healthcare patient identification and safety',
      'Educational proctoring and exam security',
      'Government services citizen authentication',
      'Cryptocurrency exchange enhanced KYC verification',
    ],
    endpoints: [
      {
        method: 'POST',
        path: '/v1/kyc/face/match',
        description: 'Compare two facial images and return similarity score',
      },
      {
        method: 'POST',
        path: '/v1/kyc/face/liveness',
        description: 'Detect if a face image is from a live person',
      },
      {
        method: 'POST',
        path: '/v1/kyc/face/extract',
        description: 'Extract facial features and generate biometric template',
      },
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.reguard.com/v1/kyc/face/match" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "selfie_image": "base64_encoded_selfie",
    "document_image": "base64_encoded_document_photo",
    "liveness_check": true
  }'`,
      javascript: `const response = await fetch('https://api.reguard.com/v1/kyc/face/match', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    selfie_image: 'base64_encoded_selfie',
    document_image: 'base64_encoded_document_photo',
    liveness_check: true
  })
});

const result = await response.json();`,
      python: `import requests

url = "https://api.reguard.com/v1/kyc/face/match"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "selfie_image": "base64_encoded_selfie",
    "document_image": "base64_encoded_document_photo",
    "liveness_check": True
}

response = requests.post(url, headers=headers, json=data)`,
    },
  },
  'address-verification': {
    metaName:'Address Verification API | Validate Customer Data – Reguard AI',
    metaDescription:'Enhance onboarding with Reguard AI Address Verification API. Instantly verify and validate customer addresses to reduce fraud and ensure accuracy.',
    id: 'address-verification',
    name: 'Address Verification API',
    category: 'KYC',
    description:
      'Real-time address validation and postal code verification across 200+ countries.',
    longDescription:
      'Our Address Verification API provides comprehensive address validation services across 200+ countries. It standardizes, validates, and enriches address data while checking against postal databases and utility records for maximum accuracy.',
    responseTime: '<500ms',
    accuracy: '98.2%',
    pricing: '$0.15 per verification',
    features: [
      'Real-time address validation across 200+ countries',
      'Postal code verification and standardization',
      'Address autocomplete and suggestion services',
      'Geocoding with latitude and longitude coordinates',
      'Address risk scoring and fraud detection',
      'Utility bill verification and validation',
      'International address formatting standards',
      'Bulk address processing capabilities',
    ],
    useCases: [
      'Banking customer address verification for account opening',
      'E-commerce shipping address validation and fraud prevention',
      'Insurance policy holder address verification',
      'Loan application address validation and risk assessment',
      'Government services citizen address verification',
      'Telecommunications service address validation',
      'Healthcare patient address verification for billing',
      'Financial services compliance and regulatory reporting',
    ],
    endpoints: [
      {
        method: 'POST',
        path: '/v1/kyc/address/verify',
        description: 'Verify and standardize address information',
      },
      {
        method: 'GET',
        path: '/v1/kyc/address/autocomplete',
        description: 'Get address suggestions based on partial input',
      },
      {
        method: 'POST',
        path: '/v1/kyc/address/geocode',
        description: 'Convert address to geographic coordinates',
      },
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.reguard.com/v1/kyc/address/verify" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "address_line_1": "123 Main Street",
    "city": "New York",
    "state": "NY",
    "postal_code": "10001",
    "country": "US"
  }'`,
      javascript: `const response = await fetch('https://api.reguard.com/v1/kyc/address/verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    address_line_1: '123 Main Street',
    city: 'New York',
    state: 'NY',
    postal_code: '10001',
    country: 'US'
  })
});

const result = await response.json();`,
      python: `import requests

url = "https://api.reguard.com/v1/kyc/address/verify"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "address_line_1": "123 Main Street",
    "city": "New York",
    "state": "NY",
    "postal_code": "10001",
    "country": "US"
}

response = requests.post(url, headers=headers, json=data)`,
    },
  },
  'phone-number-validation': {
    metaName:'Phone Number Validation API | Verify Numbers with Reguard AI',
    metaDescription:'Ensure real-time phone number accuracy with Reguard AI Phone Validation API. Detect invalid, inactive, or fake numbers instantly and improve user verification.',
    id: 'phone-number-validation',
    name: 'Phone Number Validation API',
    category: 'KYC',
    description:
      'Mobile and landline number verification with carrier information and risk scoring.',
    longDescription:
      'Our Phone Number Validation API provides comprehensive phone number verification services including carrier lookup, line type detection, and risk scoring. It validates phone numbers across 200+ countries with real-time carrier data.',
    responseTime: '<300ms',
    accuracy: '97.9%',
    pricing: '$0.10 per validation',
    features: [
      'Real-time phone number validation and formatting',
      'Carrier information and network operator details',
      'Line type detection (mobile, landline, VoIP)',
      'Risk scoring based on historical fraud data',
      'International number format standardization',
      'SMS and voice capability verification',
      'Number portability and porting history',
      'Bulk phone number processing and validation',
    ],
    useCases: [
      'Banking customer phone verification for account security',
      'E-commerce fraud prevention and customer validation',
      'Marketing campaign phone list cleaning and validation',
      'Two-factor authentication phone number verification',
      'Insurance customer contact information validation',
      'Healthcare patient contact verification and updates',
      'Government services citizen contact validation',
      'Financial services regulatory compliance verification',
    ],
    endpoints: [
      {
        method: 'POST',
        path: '/v1/kyc/phone/validate',
        description: 'Validate phone number and get carrier information',
      },
      {
        method: 'POST',
        path: '/v1/kyc/phone/risk-score',
        description: 'Get risk score for phone number based on fraud data',
      },
      {
        method: 'POST',
        path: '/v1/kyc/phone/format',
        description: 'Format phone number to international standards',
      },
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.reguard.com/v1/kyc/phone/validate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "phone_number": "+1234567890",
    "country_code": "US"
  }'`,
      javascript: `const response = await fetch('https://api.reguard.com/v1/kyc/phone/validate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    phone_number: '+1234567890',
    country_code: 'US'
  })
});

const result = await response.json();`,
      python: `import requests

url = "https://api.reguard.com/v1/kyc/phone/validate"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "phone_number": "+1234567890",
    "country_code": "US"
}

response = requests.post(url, headers=headers, json=data)`,
    },
  },
  'email-verification': {
    metaName:'Email Verification API | Secure Identity Checks - Reguard AI',
    metaDescription:'Validate and verify emails instantly with Reguard AI Email Verification API. Ensure accuracy, reduce fraud, and enhance trust with real-time verification.',
    id: 'email-verification',
    name: 'Email Verification API',
    category: 'KYC',
    description:
      'Comprehensive email validation with deliverability checks and risk assessment.',
    longDescription:
      'Our Email Verification API provides comprehensive email validation services including syntax validation, domain verification, mailbox existence checks, and risk scoring. It helps prevent fraud and ensures email deliverability.',
    responseTime: '<200ms',
    accuracy: '99.1%',
    pricing: '$0.05 per verification',
    features: [
      'Real-time email syntax and format validation',
      'Domain verification and MX record checking',
      'Mailbox existence verification without sending emails',
      'Disposable email address detection and blocking',
      'Risk scoring based on email reputation data',
      'Typo detection and suggestion services',
      'Bulk email list cleaning and validation',
      'GDPR compliant email processing and storage',
    ],
    useCases: [
      'User registration email validation and verification',
      'Marketing email list cleaning and deliverability improvement',
      'E-commerce customer email verification for order processing',
      'Banking customer email validation for account communications',
      'SaaS platform user onboarding email verification',
      'Newsletter subscription email validation and management',
      'Customer support email verification and routing',
      'Fraud prevention through disposable email detection',
    ],
    endpoints: [
      {
        method: 'POST',
        path: '/v1/kyc/email/verify',
        description: 'Verify email address and check deliverability',
      },
      {
        method: 'POST',
        path: '/v1/kyc/email/risk-score',
        description: 'Get risk score for email address',
      },
      {
        method: 'POST',
        path: '/v1/kyc/email/suggest',
        description: 'Get suggestions for misspelled email addresses',
      },
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.reguard.com/v1/kyc/email/verify" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com"
  }'`,
      javascript: `const response = await fetch('https://api.reguard.com/v1/kyc/email/verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com'
  })
});

const result = await response.json();`,
      python: `import requests

url = "https://api.reguard.com/v1/kyc/email/verify"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "email": "user@example.com"
}

response = requests.post(url, headers=headers, json=data)`,
    },
  },
  'age-verification': {
    id: 'age-verification',
    name: 'Age Verification API',
    category: 'KYC',
    description:
      'Age validation through document analysis and third-party data sources.',
    longDescription:
      'Our Age Verification API provides comprehensive age validation services through document analysis, database lookups, and third-party data sources. It ensures compliance with age-restricted services and regulations.',
    responseTime: '<1.5s',
    accuracy: '98.7%',
    pricing: '$0.25 per verification',
    features: [
      'Document-based age verification with OCR extraction',
      'Third-party database age validation and cross-referencing',
      'Real-time age calculation and validation logic',
      'Multiple verification methods for enhanced accuracy',
      'Age-restricted content compliance verification',
      'Fraud detection for age manipulation attempts',
      'International age verification standards support',
      'Audit trails and compliance reporting capabilities',
    ],
    useCases: [
      'Online gaming and gambling age verification compliance',
      'Alcohol and tobacco e-commerce age validation',
      'Social media platform age verification for minors',
      'Financial services age verification for account opening',
      'Healthcare age verification for treatment consent',
      'Educational platform age verification for content access',
      'Dating app age verification and safety compliance',
      'Government services age verification for benefits eligibility',
    ],
    endpoints: [
      {
        method: 'POST',
        path: '/v1/kyc/age/verify',
        description: 'Verify age through document or database lookup',
      },
      {
        method: 'POST',
        path: '/v1/kyc/age/document',
        description: 'Extract and verify age from identity documents',
      },
      {
        method: 'POST',
        path: '/v1/kyc/age/database',
        description: 'Verify age through third-party database lookup',
      },
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.reguard.com/v1/kyc/age/verify" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "document_image": "base64_encoded_image",
    "minimum_age": 21,
    "verification_method": "document"
  }'`,
      javascript: `const response = await fetch('https://api.reguard.com/v1/kyc/age/verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    document_image: 'base64_encoded_image',
    minimum_age: 21,
    verification_method: 'document'
  })
});

const result = await response.json();`,
      python: `import requests

url = "https://api.reguard.com/v1/kyc/age/verify"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "document_image": "base64_encoded_image",
    "minimum_age": 21,
    "verification_method": "document"
}

response = requests.post(url, headers=headers, json=data)`,
    },
  },

  // KYB APIs
  'company-registration-lookup': {
    metaName:'Company Registration Lookup API | Verify Business with Reguard AI',
    metaDescription:'Quickly verify company registration details with Reguard AI. Ensure business authenticity, reduce fraud, and make smarter onboarding decisions in seconds.',
    id: 'company-registration-lookup',
    name: 'Company Registration Lookup API',
    category: 'KYB',
    description:
      'Verify business registration details across multiple jurisdictions and regulatory bodies.',
    longDescription:
      'Our Company Registration Lookup API provides comprehensive business verification services across multiple jurisdictions. It validates company registration details, corporate structure, and regulatory compliance status in real-time.',
    responseTime: '<3s',
    accuracy: '99.1%',
    pricing: '$1.50 per lookup',
    isPopular: true,
    features: [
      'Multi-jurisdiction company registration verification',
      'Real-time regulatory database integration',
      'Corporate structure and hierarchy analysis',
      'Business license and permit validation',
      'Financial status and credit rating checks',
      'Director and shareholder information lookup',
      'Compliance status and regulatory history',
      'International business registry access',
    ],
    useCases: [
      'Banking corporate account opening and due diligence',
      'B2B vendor verification and supplier onboarding',
      'Insurance commercial policy underwriting',
      'Investment due diligence and risk assessment',
      'Government contract bidding verification',
      'Partnership and joint venture validation',
      'Merger and acquisition due diligence',
      'Regulatory compliance and reporting requirements',
    ],
    endpoints: [
      {
        method: 'POST',
        path: '/v1/kyb/company/lookup',
        description: 'Look up company registration and basic information',
      },
      {
        method: 'GET',
        path: '/v1/kyb/company/details/{id}',
        description: 'Get detailed company information and structure',
      },
      {
        method: 'POST',
        path: '/v1/kyb/company/verify',
        description: 'Verify company registration status and compliance',
      },
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.reguard.com/v1/kyb/company/lookup" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "company_name": "Example Corp",
    "registration_number": "12345678",
    "jurisdiction": "US"
  }'`,
      javascript: `const response = await fetch('https://api.reguard.com/v1/kyb/company/lookup', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    company_name: 'Example Corp',
    registration_number: '12345678',
    jurisdiction: 'US'
  })
});

const result = await response.json();`,
      python: `import requests

url = "https://api.reguard.com/v1/kyb/company/lookup"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "company_name": "Example Corp",
    "registration_number": "12345678",
    "jurisdiction": "US"
}

response = requests.post(url, headers=headers, json=data)`,
    },
  },
  'ultimate-beneficial-owner': {
    metaName:"Ultimate Beneficial Owner API | Verify UBO Instantly – Reguard AI",
    metaDescription:'Reguard AI Ultimate Beneficial Owner API helps identify true business owners in seconds. Enhance KYC compliance with fast, reliable UBO verification.',
    id: 'ultimate-beneficial-owner',
    name: 'Ultimate Beneficial Owner API',
    category: 'KYB',
    description:
      'Identify and verify UBO structures with ownership percentage calculations.',
    longDescription:
      'Our Ultimate Beneficial Owner API provides comprehensive UBO identification and verification services. It analyzes complex corporate structures to identify individuals who ultimately own or control a business entity.',
    responseTime: '<5s',
    accuracy: '98.7%',
    pricing: '$2.00 per analysis',
    features: [
      'Complex corporate structure analysis and mapping',
      'Ownership percentage calculations and thresholds',
      'Multi-layered entity relationship tracking',
      'Individual UBO identity verification and screening',
      'Regulatory compliance threshold monitoring',
      'Historical ownership change tracking',
      'Cross-border entity structure analysis',
      'Automated UBO reporting and documentation',
    ],
    useCases: [
      'Banking UBO compliance for corporate accounts',
      'Anti-money laundering due diligence requirements',
      'Investment fund UBO disclosure and verification',
      'Insurance commercial policy UBO identification',
      'Government contract UBO transparency requirements',
      'Regulatory reporting and compliance documentation',
      'Private equity and venture capital due diligence',
      'International trade finance UBO verification',
    ],
    endpoints: [
      {
        method: 'POST',
        path: '/v1/kyb/ubo/analyze',
        description: 'Analyze corporate structure and identify UBOs',
      },
      {
        method: 'GET',
        path: '/v1/kyb/ubo/structure/{id}',
        description: 'Get detailed ownership structure visualization',
      },
      {
        method: 'POST',
        path: '/v1/kyb/ubo/verify',
        description: 'Verify identified UBOs against screening databases',
      },
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.reguard.com/v1/kyb/ubo/analyze" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "company_id": "12345678",
    "jurisdiction": "US",
    "threshold_percentage": 25
  }'`,
      javascript: `const response = await fetch('https://api.reguard.com/v1/kyb/ubo/analyze', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    company_id: '12345678',
    jurisdiction: 'US',
    threshold_percentage: 25
  })
});

const result = await response.json();`,
      python: `import requests

url = "https://api.reguard.com/v1/kyb/ubo/analyze"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "company_id": "12345678",
    "jurisdiction": "US",
    "threshold_percentage": 25
}

response = requests.post(url, headers=headers, json=data)`,
    },
  },

  // AML APIs
  'sanctions-screening': {
    metaName:'Sanctions Screening API | Reguard AI – Global Watchlist Check',
    metaDescription:'Verify individuals and businesses against global watchlists instantly with Reguard AI’s Sanctions Screening API. Ensure compliance and prevent financial risks.',
    id: 'sanctions-screening',
    name: 'Sanctions Screening API',
    category: 'AML',
    description:
      'Real-time screening against OFAC, EU, UN, and 40+ global sanctions lists.',
    longDescription:
      'Our Sanctions Screening API provides comprehensive screening against global sanctions lists including OFAC, EU, UN, and 40+ other regulatory bodies. It offers real-time screening with fuzzy matching and risk scoring.',
    responseTime: '<1s',
    accuracy: '99.9%',
    pricing: '$0.20 per screening',
    isPopular: true,
    features: [
      'Real-time screening against 40+ global sanctions lists',
      'OFAC, EU, UN, and HMT sanctions database integration',
      'Advanced fuzzy matching and name variation detection',
      'Risk scoring and confidence level assessment',
      'Automated list updates and synchronization',
      'Bulk screening capabilities for large datasets',
      'Historical screening audit trails and reporting',
      'Custom watchlist integration and management',
    ],
    useCases: [
      'Banking customer and transaction sanctions screening',
      'International trade finance compliance verification',
      'Cryptocurrency exchange AML compliance screening',
      'Insurance policy holder sanctions verification',
      'Investment management client screening',
      'Government contractor sanctions compliance',
      'Supply chain vendor sanctions verification',
      'Cross-border payment compliance screening',
    ],
    endpoints: [
      {
        method: 'POST',
        path: '/v1/aml/sanctions/screen',
        description: 'Screen individual or entity against sanctions lists',
      },
      {
        method: 'POST',
        path: '/v1/aml/sanctions/bulk',
        description: 'Bulk screening of multiple individuals or entities',
      },
      {
        method: 'GET',
        path: '/v1/aml/sanctions/lists',
        description: 'Get available sanctions lists and last update times',
      },
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.reguard.com/v1/aml/sanctions/screen" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "date_of_birth": "1980-01-01",
    "country": "US",
    "entity_type": "individual"
  }'`,
      javascript: `const response = await fetch('https://api.reguard.com/v1/aml/sanctions/screen', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    date_of_birth: '1980-01-01',
    country: 'US',
    entity_type: 'individual'
  })
});

const result = await response.json();`,
      python: `import requests

url = "https://api.reguard.com/v1/aml/sanctions/screen"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "name": "John Doe",
    "date_of_birth": "1980-01-01",
    "country": "US",
    "entity_type": "individual"
}

response = requests.post(url, headers=headers, json=data)`,
    },
  },
  'pep-screening': {
    metaName:'SPEP Screening API – Verify Identity Seamlessly | Reguard AI',
    metaDescription:'Enhance your KYC process with Reguard AI’s SPEP Screening API. Instantly verify user identity, reduce fraud, and ensure compliance with secure automation.',
    id: 'pep-screening',
    name: 'PEP Screening API',
    category: 'AML',
    description:
      'Politically Exposed Person screening with relationship mapping and risk scoring.',
    longDescription:
      'Our PEP Screening API provides comprehensive screening against Politically Exposed Person databases with relationship mapping, family connections, and risk scoring based on political exposure levels.',
    responseTime: '<2s',
    accuracy: '99.4%',
    pricing: '$0.35 per screening',
    features: [
      'Comprehensive PEP database screening and verification',
      'Family and associate relationship mapping',
      'Political exposure level assessment and risk scoring',
      'Historical PEP status tracking and monitoring',
      'Multi-jurisdiction PEP list integration',
      'Adverse media correlation and cross-referencing',
      'Automated PEP status updates and notifications',
      'Enhanced due diligence workflow integration',
    ],
    useCases: [
      'Banking enhanced due diligence for high-risk customers',
      'Investment management PEP client screening',
      'Insurance high-value policy PEP verification',
      'Real estate transaction PEP buyer screening',
      'Private banking wealth management PEP assessment',
      'Cryptocurrency exchange enhanced KYC screening',
      'Government contract bidding PEP verification',
      'International business partnership PEP screening',
    ],
    endpoints: [
      {
        method: 'POST',
        path: '/v1/aml/pep/screen',
        description: 'Screen individual against PEP databases',
      },
      {
        method: 'GET',
        path: '/v1/aml/pep/profile/{id}',
        description: 'Get detailed PEP profile and relationships',
      },
      {
        method: 'POST',
        path: '/v1/aml/pep/monitor',
        description: 'Set up ongoing PEP status monitoring',
      },
    ],
    codeExamples: {
      curl: `curl -X POST "https://api.reguard.com/v1/aml/pep/screen" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "date_of_birth": "1970-05-15",
    "nationality": "US",
    "position": "Government Official"
  }'`,
      javascript: `const response = await fetch('https://api.reguard.com/v1/aml/pep/screen', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    date_of_birth: '1970-05-15',
    nationality: 'US',
    position: 'Government Official'
  })
});

const result = await response.json();`,
      python: `import requests

url = "https://api.reguard.com/v1/aml/pep/screen"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "name": "John Doe",
    "date_of_birth": "1970-05-15",
    "nationality": "US",
    "position": "Government Official"
}

response = requests.post(url, headers=headers, json=data)`,
    },
  },
}

// Helper function to get API by ID
export const getAPIById = (apiId: string): APIData | null => {
  return apiDatabase[apiId] || null
}

// Helper function to get APIs by category
export const getAPIsByCategory = (category: string): APIData[] => {
  return Object.values(apiDatabase).filter(
    (api) => api.category.toLowerCase() === category.toLowerCase()
  )
}

// Helper function to get all APIs
export const getAllAPIs = (): APIData[] => {
  return Object.values(apiDatabase)
}
