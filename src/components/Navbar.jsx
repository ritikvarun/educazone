import { useState, useRef, useEffect } from 'react'
import { Search, ShoppingCart, User, X, ChevronDown } from 'lucide-react'
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
  const dropdownRef = useRef(null)

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-xs transition-all">
      {/* Main Navbar Top Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        
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

        {/* Center: Search Bar matching user design */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (searchQuery.trim()) {
              console.log('Searching for:', searchQuery)
            }
          }}
          className="flex-1 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-2 sm:mx-4"
        >
          <div className="relative flex items-center bg-white rounded-full border border-slate-200/90 hover:border-slate-300 focus-within:border-red-500 focus-within:ring-3 focus-within:ring-red-500/15 p-1 sm:p-1.5 pl-3.5 sm:pl-4 transition-all shadow-2xs">
            <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-400 shrink-0 mr-2 sm:mr-3 pointer-events-none" strokeWidth={1.8} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by exam, class or book — JEE, NEET, Class 10..."
              className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-xs sm:text-sm font-normal outline-none pr-1.5"
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
              className="shrink-0 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-200 shadow-xs cursor-pointer select-none"
            >
              Search
            </button>
          </div>
        </form>

        {/* Right: Actions (Login, Cart) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Login Button */}
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-red-300 text-slate-700 hover:text-red-600 font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <User className="w-4 h-4 text-slate-500 group-hover:text-red-600" />
            <span>Login</span>
          </button>

          {/* Cart Icon with Counter Badge */}
          <button
            type="button"
            title="Shopping Cart"
            aria-label="Shopping Cart"
            className="relative p-2.5 rounded-full text-slate-700 hover:text-red-600 hover:bg-red-50/80 transition-all duration-200 cursor-pointer active:scale-90"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-1 right-1 min-w-[18px] h-[18px] px-1 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
              {cartCount}
            </span>
          </button>
        </div>

      </div>

      {/* Sub Navbar Row */}
      <nav className="w-full border-t border-slate-200/60 bg-white/95 relative">
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

                    {/* Dropdown Menu matching user screenshot */}
                    {isBooksSolutionOpen && (
                      <div className="absolute left-0 top-full mt-2 w-48 sm:w-52 bg-white rounded-md shadow-2xl border border-slate-200/90 z-50 overflow-hidden text-left animate-in fade-in slide-in-from-top-1 duration-150">
                        {/* Top Red Accent Stripe (matching screenshot) */}
                        <div className="h-[3px] bg-red-600 w-full" />

                        {/* List Items with Dividers */}
                        <ul className="divide-y divide-slate-100 py-0.5">
                          {booksSolutionOptions.map((opt, idx) => (
                            <li key={opt.name}>
                              <a
                                href={opt.href}
                                onClick={() => setIsBooksSolutionOpen(false)}
                                className={`block px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-tight transition-colors duration-150 ${
                                  idx === 0
                                    ? 'text-blue-600 hover:bg-slate-50'
                                    : 'text-slate-800 hover:text-blue-600 hover:bg-slate-50'
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
    </header>
  )
}
