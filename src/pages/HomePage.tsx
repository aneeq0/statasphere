import { useEffect } from 'react'
import { Action } from '../sections/Action'
import { FinalCTA } from '../sections/FinalCTA'
import { Hero } from '../sections/Hero'
import { HowItWorks } from '../sections/HowItWorks'
import { Problem } from '../sections/Problem'
import { SignalIntelligence } from '../sections/SignalIntelligence'

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
      <SignalIntelligence />
      <Action />
      <FinalCTA />
    </>
  )
}
