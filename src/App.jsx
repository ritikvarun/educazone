import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Class9 from './pages/Class9'

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash.toLowerCase() === '#class-9') {
      return 'class-9'
    }
    return 'home'
  })

  // Listen to hash changes (e.g. clicking links or browser back/forward)
  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash.toLowerCase()
      if (hash === '#class-9') {
        setCurrentPage('class-9')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (hash === '#home' || hash === '' || hash === '#') {
        setCurrentPage('home')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateTo = (page) => {
    setCurrentPage(page)
    window.location.hash = page === 'home' ? '' : page
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

