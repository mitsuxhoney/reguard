import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { SolutionsPage } from './pages/SolutionsPage'
import { APIDetailPage } from './pages/APIDetailPage'
import { SolutionDetailPage } from './pages/SolutionDetailPage'
import { APICategoryPage } from './pages/APICategoryPage'
import { IndustriesPage } from './pages/IndustriesPage'
import { IndustryDetailPage } from './pages/IndustryDetailPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { BlogPage } from './pages/BlogPage'
import { CaseStudiesPage } from './pages/CaseStudiesPage'
import { DeveloperDocsPage } from './pages/DeveloperDocsPage'
import { RegulatoryUpdatesPage } from './pages/RegulatoryUpdatesPage'
import { AboutPage } from './pages/AboutPage'
import { CareersPage } from './pages/CareersPage'
import { ContactPage } from './pages/ContactPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsOfServicesPage } from './pages/TermsOfServicesPage'
import { PostOnboardingCompliancePage } from './pages/PostOnboardingCompliancePage'
import { ScrollToTop } from './components/ScrollToTop'
import { Toaster } from 'sonner'

function App() {
  return (
    <div>
      <ScrollToTop />
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/:solutionId" element={<SolutionDetailPage />} />
        <Route path="/apis" element={<APICategoryPage />} />
        <Route path="/apis/:category" element={<APICategoryPage />} />
        <Route path="/apis/:category/:apiId" element={<APIDetailPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route
          path="/industries/:industryId"
          element={<IndustryDetailPage />}
        />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/blog" element={<BlogPage />} />
        <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
        <Route
          path="/resources/developer-docs"
          element={<DeveloperDocsPage />}
        />
        <Route
          path="/resources/regulatory-updates"
          element={<RegulatoryUpdatesPage />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-services" element={<TermsOfServicesPage />} />
        <Route
          path="/solutions/post-onboarding-compliance"
          element={<PostOnboardingCompliancePage />}
        />
      </Routes>
    </div>
  )
}

export default App
