import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Class9 from './pages/Class9'

function isClass9Route() {
  if (typeof window === 'undefined') return false
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '')
  const hash = window.location.hash.toLowerCase()
  return path === '/class-9' || path === '/class9' || hash === '#class-9'
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return isClass9Route() ? 'class-9' : 'home'
  })

  // Listen to browser navigation (back/forward) and route changes
  useEffect(() => {
    function handleLocationChange() {
      if (isClass9Route()) {
        setCurrentPage('class-9')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setCurrentPage('home')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    // If loaded with legacy #class-9 hash, cleanly migrate URL bar to /class-9
    if (typeof window !== 'undefined' && window.location.hash.toLowerCase() === '#class-9') {
      window.history.replaceState({}, '', '/class-9')
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('hashchange', handleLocationChange)
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('hashchange', handleLocationChange)
    }
  }, [])

  const navigateTo = (page) => {
    setCurrentPage(page)
    const targetPath = page === 'home' ? '/' : `/${page}`
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== targetPath || window.location.hash) {
        window.history.pushState({}, '', targetPath)
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#fafafc] text-slate-800 flex flex-col justify-between selection:bg-red-500 selection:text-white relative overflow-x-clip font-sans">

      {/* Ambient Red Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-red-500/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[350px] bg-red-400/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Sticky Header Navbar */}
      <Navbar
        onNavigateHome={() => navigateTo('home')}
        onNavigateClass9={() => navigateTo('class-9')}
        currentPage={currentPage}
      />

      {/* Main Page Routing */}
      {currentPage === 'class-9' ? (
        <Class9 onNavigateHome={() => navigateTo('home')} />
      ) : (
        <Home />
      )}

    </div>
  )
}

