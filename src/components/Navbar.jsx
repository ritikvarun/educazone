import { useState, useRef, useEffect } from 'react'
import { Search, ShoppingCart, User, X, ChevronDown, Menu, Heart } from 'lucide-react'
import logoBadge from '../assets/educazone-badge.png'

const booksSolutionOptions = [
  { name: 'Class 9', href: '#class-9' },
  { name: 'Class 10', href: '#class-10' },
  { name: 'Class 11', href: '#class-11' },
  { name: 'Class 12', href: '#class-12' },
  { name: 'Entrance Exams', href: '#entrance-exams' },
  { name: 'K-8 Solutions', href: '#k-8-solutions' },
  { name: 'K-8 E-Learning', href: '#k-8-e-learning' },
]

const subNavItems = [
  { name: 'About Us', href: '#about-us' },
  { name: 'Books', href: '#books' },
  { name: 'Books Solution', isDropdown: true },
  { name: 'Paid Test Series', href: '#paid-test-series' },
  { name: 'PDF', href: '#pdf' },
  { name: 'Previous Year Paper', href: '#previous-year-paper' },
  { name: 'Job Alerts', href: '#job-alerts' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Contact Us', href: '#contact-us' },
]

export default function Navbar({
  cartCount = 0
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isBooksSolutionOpen, setIsBooksSolutionOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileBooksOpen, setIsMobileBooksOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close Books Solution dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsBooksSolutionOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs transition-all">
      
      {/* ================= DESKTOP VIEW (md and up) ================= */}
      <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 items-center justify-between gap-6">
        {/* Left: Brand Logo */}
        <div className="flex items-center shrink-0">
          <a href="#" className="relative group flex items-center gap-2">
            <div className="absolute -inset-1 bg-red-500/15 rounded-2xl blur-md group-hover:bg-red-500/25 transition-all"></div>
            <img
              src={logoBadge}
              alt="EducaZone Logo"
              className="relative h-11 sm:h-13 w-auto object-contain drop-shadow-[0_4px_16px_rgba(255,30,39,0.22)] transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </a>
        </div>

        {/* Center: Search Bar with inner red button */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (searchQuery.trim()) {
              console.log('Searching for:', searchQuery)
            }
          }}
          className="flex-1 max-w-lg lg:max-w-xl mx-4"
        >
          <div className="relative flex items-center bg-white rounded-full border border-slate-200/90 hover:border-slate-300 focus-within:border-red-500 focus-within:ring-3 focus-within:ring-red-500/15 p-1.5 pl-4 transition-all shadow-2xs">
            <Search className="w-4.5 h-4.5 text-slate-400 shrink-0 mr-3 pointer-events-none" strokeWidth={1.8} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by exam, class or book — JEE, NEET, Class 10..."
              className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-sm font-normal outline-none pr-1.5"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 mr-1 text-slate-400 hover:text-slate-600 rounded-full transition-colors cursor-pointer"
                title="Clear"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              type="submit"
              className="shrink-0 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 shadow-xs cursor-pointer select-none"
            >
              Search
            </button>
          </div>
        </form>

        {/* Right Actions: Wishlist, Login, Cart */}
        <div className="flex items-center gap-6 shrink-0">
          <button
            type="button"
            className="flex flex-col items-center justify-center text-slate-800 hover:text-red-600 transition-colors group cursor-pointer"
          >
            <Heart className="w-5 h-5 text-slate-700 group-hover:text-red-600 transition-colors" strokeWidth={1.8} />
            <span className="text-[11px] font-medium mt-0.5 text-slate-600 group-hover:text-red-600">Wishlist</span>
          </button>

          <button
            type="button"
            className="flex flex-col items-center justify-center text-slate-800 hover:text-red-600 transition-colors group cursor-pointer"
          >
            <User className="w-5 h-5 text-slate-700 group-hover:text-red-600 transition-colors" strokeWidth={1.8} />
            <span className="text-[11px] font-medium mt-0.5 text-slate-600 group-hover:text-red-600">Login</span>
          </button>

          <button
            type="button"
            className="relative flex flex-col items-center justify-center text-slate-800 hover:text-red-600 transition-colors group cursor-pointer"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-slate-700 group-hover:text-red-600 transition-colors" strokeWidth={1.8} />
              <span className="absolute -top-1.5 -right-2 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            </div>
            <span className="text-[11px] font-medium mt-0.5 text-slate-600 group-hover:text-red-600">Cart</span>
          </button>
        </div>
      </div>

      {/* ================= MOBILE VIEW (Matching User Screenshot Exactly) ================= */}
      <div className="md:hidden flex flex-col">
        {/* Row 1: Hamburger + Logo on Left, Wishlist + Login + Cart on Right */}
        <div className="px-3.5 py-2.5 flex items-center justify-between">
          {/* Left: Hamburger Button + Logo */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1 -ml-1 text-slate-800 hover:text-red-600 transition-colors cursor-pointer active:scale-95"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6 stroke-[2]" />
            </button>

            <a href="#" className="flex items-center">
              <img
                src={logoBadge}
                alt="EducaZone Logo"
                className="h-9 w-auto object-contain"
              />
            </a>
          </div>

          {/* Right: Wishlist, Login, Cart (vertical stack as in screenshot) */}
          <div className="flex items-center gap-3.5">
            <button
              type="button"
              className="flex flex-col items-center justify-center text-slate-800 hover:text-red-600 transition-colors group cursor-pointer"
            >
              <Heart className="w-5 h-5 text-slate-800 group-hover:text-red-600 transition-colors" strokeWidth={1.8} />
              <span className="text-[10px] font-medium mt-0.5 text-slate-600 group-hover:text-red-600">Wishlist</span>
            </button>

            <button
              type="button"
              className="flex flex-col items-center justify-center text-slate-800 hover:text-red-600 transition-colors group cursor-pointer"
            >
              <User className="w-5 h-5 text-slate-800 group-hover:text-red-600 transition-colors" strokeWidth={1.8} />
              <span className="text-[10px] font-medium mt-0.5 text-slate-600 group-hover:text-red-600">Login</span>
            </button>

            <button
              type="button"
              className="relative flex flex-col items-center justify-center text-slate-800 hover:text-red-600 transition-colors group cursor-pointer"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-slate-800 group-hover:text-red-600 transition-colors" strokeWidth={1.8} />
                <span className="absolute -top-1.5 -right-2 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              </div>
              <span className="text-[10px] font-medium mt-0.5 text-slate-600 group-hover:text-red-600">Cart</span>
            </button>
          </div>
        </div>

        {/* Row 2: Full-width Search Bar with Red Border (as in user screenshot) */}
        <div className="px-3.5 pb-2.5">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (searchQuery.trim()) {
                console.log('Searching for:', searchQuery)
              }
            }}
            className="w-full"
          >
            <div className="relative flex items-center bg-white rounded-full border border-red-500 px-3.5 py-2 shadow-2xs">
              <Search className="w-4 h-4 text-slate-400 shrink-0 mr-2.5 pointer-events-none" strokeWidth={1.8} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by exam, class or book — JEE, NEET, Cla..."
                className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-xs font-normal outline-none pr-1.5"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 mr-0.5 text-slate-400 hover:text-slate-600 rounded-full transition-colors cursor-pointer"
                  title="Clear"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* ================= SUB NAVBAR ROW (Desktop & Tablet) ================= */}
      <nav className="hidden md:block w-full border-t border-slate-200/60 bg-white/95 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center gap-5 sm:gap-7 md:gap-9 py-2.5 overflow-x-auto sm:overflow-visible whitespace-nowrap no-scrollbar text-xs sm:text-sm font-medium text-slate-700">
            {subNavItems.map((item) => (
              <li key={item.name} className="shrink-0">
                {item.isDropdown ? (
                  <div className="relative inline-block text-left" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsBooksSolutionOpen((prev) => !prev)}
                      className={`inline-flex items-center gap-1 py-0.5 cursor-pointer font-medium transition-colors duration-150 ${
                        isBooksSolutionOpen ? 'text-red-600 font-semibold' : 'hover:text-red-600'
                      }`}
                      aria-expanded={isBooksSolutionOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isBooksSolutionOpen ? 'rotate-180 text-red-600' : 'text-slate-500'
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu in RBW Theme */}
                    {isBooksSolutionOpen && (
                      <div className="absolute left-0 top-full mt-2 w-48 sm:w-52 bg-white rounded-md shadow-2xl border border-slate-200/90 z-50 overflow-hidden text-left animate-in fade-in slide-in-from-top-1 duration-150">
                        {/* Top Red Accent Stripe */}
                        <div className="h-[3px] bg-red-600 w-full" />

                        {/* List Items with Dividers */}
                        <ul className="divide-y divide-slate-100 py-0.5">
                          {booksSolutionOptions.map((opt, idx) => (
                            <li key={opt.name}>
                              <a
                                href={opt.href}
                                onClick={() => setIsBooksSolutionOpen(false)}
                                className={`block px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-tight transition-all duration-150 ${
                                  idx === 0
                                    ? 'text-red-600 bg-red-50/40 hover:bg-red-50 hover:text-red-700'
                                    : 'text-slate-900 hover:text-red-600 hover:bg-red-50/50'
                                }`}
                              >
                                {opt.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="hover:text-red-600 transition-colors duration-150 py-0.5 inline-block"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ================= MOBILE MENU DRAWER ================= */}
      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-[60] transition-opacity duration-300 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Slide-over Drawer (From Left side next to Hamburger) */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] max-w-[85vw] bg-white z-[70] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden border-r border-slate-200 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Red Accent Line */}
        <div className="h-[3px] bg-red-600 w-full shrink-0" />

        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/80">
          <img src={logoBadge} alt="EducaZone Logo" className="h-9 w-auto object-contain" />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 rounded-full text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {/* Quick Action: Login & Cart */}
          <div className="grid grid-cols-2 gap-2.5 pb-4 border-b border-slate-100">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs transition-all shadow-xs cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-900 hover:text-red-600 font-bold text-xs border border-slate-200 transition-all cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4 text-slate-700" />
              <span>Cart ({cartCount})</span>
            </button>
          </div>

          {/* Navigation Links in RBW Theme */}
          <nav>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">Menu</p>
            <ul className="space-y-1">
              {subNavItems.map((item) => (
                <li key={item.name}>
                  {item.isDropdown ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setIsMobileBooksOpen((prev) => !prev)}
                        className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl font-bold text-sm transition-colors text-left cursor-pointer ${
                          isMobileBooksOpen ? 'text-red-600 bg-red-50/60' : 'text-slate-900 hover:bg-red-50/60 hover:text-red-600'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileBooksOpen ? 'rotate-180 text-red-600' : 'text-slate-400'
                          }`}
                        />
                      </button>

                      {/* Expandable Accordion for Books Solution */}
                      {isMobileBooksOpen && (
                        <div className="my-1.5 ml-3 pl-3 border-l-2 border-red-500 bg-slate-50/60 rounded-r-xl py-1">
                          <ul className="space-y-0.5">
                            {booksSolutionOptions.map((opt, idx) => (
                              <li key={opt.name}>
                                <a
                                  href={opt.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`block py-2 px-3 text-xs font-bold rounded-lg transition-colors ${
                                    idx === 0
                                      ? 'text-red-600 bg-red-50/60'
                                      : 'text-slate-800 hover:text-red-600 hover:bg-white'
                                  }`}
                                >
                                  {opt.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2.5 px-3 rounded-xl font-bold text-sm text-slate-900 hover:bg-red-50/60 hover:text-red-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-200/80 bg-slate-50/60 text-xs text-slate-500 flex items-center justify-between">
          <span className="font-semibold text-slate-700">EducaZone</span>
          <span className="text-[11px] font-bold text-red-600 tracking-wider">LEARN | GROW | SUCCEED</span>
        </div>
      </div>

    </header>
  )
}
