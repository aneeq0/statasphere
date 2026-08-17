import { useEffect } from 'react'
import { Action } from '../sections/Action'
import { AnalystAgent } from '../sections/AnalystAgent'
import { Ecosystem } from '../sections/Ecosystem'
import { FinalCTA } from '../sections/FinalCTA'
import { Hero } from '../sections/Hero'
import { HowItWorks } from '../sections/HowItWorks'
import { MarketingVideo } from '../sections/MarketingVideo'
import { Problem } from '../sections/Problem'
import { SignalIntelligence } from '../sections/SignalIntelligence'
import { StatasphereView } from '../sections/StatasphereView'
import { StrategicPositioning } from '../sections/StrategicPositioning'

export function HomePage() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace('#', '')
      if (!id || id === 'top') {
        if (id === 'top') window.scrollTo(0, 0)
        return
      }
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }

    scrollToHash()
    window.addEventListener('popstate', scrollToHash)
    window.addEventListener('hashchange', scrollToHash)
    return () => {
      window.removeEventListener('popstate', scrollToHash)
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])

  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <StatasphereView />
      <SignalIntelligence />
      <AnalystAgent />
      <Action />
      <Ecosystem />
      <StrategicPositioning />
      <MarketingVideo />
      <FinalCTA />
    </>
  )
}
