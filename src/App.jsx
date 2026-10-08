import { Wrench, Phone } from 'lucide-react'
import logoBadge from './assets/educazone-badge.png'

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function App() {
  const phoneNumber = '+91 90847 15552'
  const telLink = 'tel:+919084715552'
  const whatsappLink = 'https://wa.me/919084715552'

  return (
    <div className="min-h-screen bg-[#fafafc] text-slate-800 flex flex-col justify-between selection:bg-red-500 selection:text-white relative overflow-hidden font-sans">
      
      {/* Background Grid Pattern & Ambient Red Glow */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-red-500/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[350px] bg-red-400/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header */}
      <header className="relative z-10 w-full max-w-5xl mx-auto px-6 py-6 flex items-center justify-between border-b border-slate-200/70">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-1 bg-red-500/15 rounded-2xl blur-md group-hover:bg-red-500/25 transition-all"></div>
            <img
              src={logoBadge}
              alt="EducaZone Logo"
              className="relative h-12 sm:h-14 w-auto object-contain drop-shadow-[0_4px_16px_rgba(255,30,39,0.22)]"
            />
          </div>
        </div>

        {/* Live Status Pill & Quick Action */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-50 border border-red-200 text-red-600 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="tracking-wide">System Maintenance</span>
          </div>
        </div>
      </header>

      {/* Center Hero Card */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-16 text-center flex-1 flex flex-col items-center justify-center">
        
        {/* Maintenance Icon Tag */}
        <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 mb-6 shadow-lg shadow-red-500/10">
          <Wrench className="w-8 h-8 text-red-600 animate-pulse" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          We’ll Be{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-500">
            Back Soon!
          </span>
        </h1>

        {/* Subtitle in Clean English */}
        <p className="text-base sm:text-lg text-slate-600 mt-5 max-w-xl leading-relaxed font-normal">
          EducaZone is currently undergoing scheduled maintenance to upgrade our platform infrastructure, optimize system performance, and improve your learning experience.
        </p>

        <p className="text-xs sm:text-sm text-slate-500 mt-3 max-w-lg leading-relaxed">
          We apologize for any inconvenience caused. All services will be restored shortly.
        </p>

        {/* Contact Support */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col items-center gap-3 w-full max-w-lg">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            For urgent queries or assistance, feel free to contact us:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <a
              href={telLink}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-red-300 text-slate-800 hover:text-red-600 font-semibold text-sm shadow-xs hover:shadow-md transition-all group"
            >
              <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{phoneNumber}</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <div className="w-7 h-7 rounded-lg bg-white/20 text-white flex items-center justify-center">
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </div>
              <span>WhatsApp: {phoneNumber}</span>
            </a>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto px-6 py-6 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} EducaZone. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a
            href={telLink}
            className="hover:text-red-600 transition-colors inline-flex items-center gap-1 font-medium"
          >
            <Phone className="w-3 h-3 text-red-600" />
            <span>{phoneNumber}</span>
          </a>
          <span className="text-slate-300">|</span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-700 text-[#25D366] transition-colors inline-flex items-center gap-1 font-semibold"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </footer>

    </div>
  )
}
