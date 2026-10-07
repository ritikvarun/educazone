import { Wrench, Phone, MessageCircle } from 'lucide-react'
import logoBadge from './assets/educazone-badge.png'

export default function App() {
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

        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-50 border border-red-200 text-red-600 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          <span className="tracking-wide">System Maintenance</span>
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
        <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col items-center gap-3 w-full max-w-md">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            For urgent queries or assistance, feel free to contact us:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919084715552"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-red-300 text-slate-800 hover:text-red-600 font-semibold text-sm shadow-xs hover:shadow-md transition-all group"
            >
              <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>+91 90847 15552</span>
            </a>
            <a
              href="https://wa.me/919084715552"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 text-emerald-700 font-semibold text-sm shadow-xs hover:shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto px-6 py-6 border-t border-slate-200/70 flex items-center justify-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} EducaZone. All rights reserved.</p>
      </footer>

    </div>
  )
}
