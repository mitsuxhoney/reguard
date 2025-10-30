import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { RainbowButton } from '../components/ui/rainbow-button'

const MOBILE_BREAKPOINT = 768
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(undefined)
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])
  return !!isMobile
}
const ICONS = {
  notFound: (props) => (
    <svg
      {...props}
      width="761"
      height="301"
      viewBox="0 0 761 301"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.596592 241.023V199.119L124.034 4.0909H158.977V63.75H137.67L54.5739 195.426V197.699H226.875V241.023H0.596592ZM139.375 295V228.239L139.943 209.489V4.0909H189.659V295H139.375ZM379.787 300.54C356.397 300.54 336.321 294.621 319.56 282.784C302.893 270.852 290.062 253.665 281.065 231.222C272.164 208.684 267.713 181.553 267.713 149.83C267.808 118.106 272.306 91.1174 281.207 68.8636C290.204 46.5151 303.035 29.4697 319.702 17.7273C336.463 5.98484 356.491 0.113626 379.787 0.113626C403.082 0.113626 423.111 5.98484 439.872 17.7273C456.634 29.4697 469.465 46.5151 478.366 68.8636C487.363 91.2121 491.861 118.201 491.861 149.83C491.861 181.648 487.363 208.826 478.366 231.364C469.465 253.807 456.634 270.947 439.872 282.784C423.205 294.621 403.177 300.54 379.787 300.54ZM379.787 256.08C397.969 256.08 412.315 247.131 422.827 229.233C433.433 211.241 438.736 184.773 438.736 149.83C438.736 126.723 436.321 107.311 431.491 91.5909C426.662 75.8712 419.844 64.0341 411.037 56.0795C402.23 48.0303 391.813 44.0057 379.787 44.0057C361.7 44.0057 347.401 53.0019 336.889 70.9943C326.378 88.892 321.075 115.17 320.98 149.83C320.885 173.03 323.205 192.538 327.94 208.352C332.77 224.167 339.588 236.098 348.395 244.148C357.202 252.102 367.666 256.08 379.787 256.08ZM533.8 241.023V199.119L657.237 4.0909H692.18V63.75H670.874L587.777 195.426V197.699H760.078V241.023H533.8ZM672.578 295V228.239L673.146 209.489V4.0909H722.862V295H672.578Z"
        fill="currentColor"
      />
    </svg>
  ),
}
export function Error404() {
  const isMobile = useIsMobile()
  const navigate = useNavigate()
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center py-16 px-4 md:py-24 md:px-20">
        <div className="absolute hidden md:flex inset-0 items-center justify-center text-reguard-navy/20 py-24 px-20">
          {ICONS.notFound()}
        </div>
        <div className="z-10 flex flex-col items-center justify-center gap-8 md:gap-12">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
            <h1 className="text-center text-reguard-red text-4xl md:text-6xl max-w-3xl sm:max-w-5xl font-semibold tracking-tight">
              We couldn&apos;t locate the page you requested
            </h1>
            <p className="text-center text-reguard-navy text-lg md:text-xl max-w-3xl sm:max-w-5xl tracking-tight">
              The page you&apos;re seeking may have been removed, relocated or
              its link may be outdated. Please return to the homepage or contact
              us if you need assistance.
            </p>
          </div>
          <div className="flex gap-3 flex-col md:flex-row w-full items-center justify-center ">
            <RainbowButton
              className="text-sm text-white font-semibold shadow-lg hover:shadow-xl group tracking-widest"
              onClick={() => {
                navigate(-1)
              }}
              size="lg"
            >
              <ArrowLeft className="size-4" /> Go back
            </RainbowButton>
            <RainbowButton
              variant="outline"
              className="px-10 py-5 text-sm text-black font-semibold shadow-lg hover:shadow-xl group tracking-widest"
              onClick={() => navigate('/')}
              size="lg"
            >
              Go Home
            </RainbowButton>
          </div>
        </div>
      </div>
    </>
  )
}
