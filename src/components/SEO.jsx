 // src/components/SEO.jsx
import { Helmet } from 'react-helmet-async'

export default function SEO({
  title = 'Reguard AI - Post-Onboarding Compliance AI',
  description = '85% Frauds Happens after KYC, You can stop them in real-time using Reguard AI',
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
