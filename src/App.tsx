import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { getLegalDoc } from './content/legal'
import { usePathname } from './hooks/usePathname'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'
import { useEffect } from 'react'

export default function App() {
  const path = usePathname()
  const slug = path.replace(/^\//, '').replace(/\/$/, '')
  const legal = slug ? getLegalDoc(slug) : undefined

  useEffect(() => {
    document.title = legal
      ? `${legal.title} — Statasphere`
      : 'Statasphere — Beyond Channel Intelligence'
  }, [legal])

  return (
    <div id="top">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">{legal ? <LegalPage doc={legal} /> : <HomePage />}</main>
      <Footer />
    </div>
  )
}
