import { ArrowLeft } from 'lucide-react'

export default function Class9({ onNavigateHome }) {
  return (
    <div className="w-full flex-1 flex flex-col justify-center items-center py-20 sm:py-28 px-4 relative">
      
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-red-500/[0.06] rounded-full blur-[100px] pointer-events-none" />

      {/* Center Content: Just 'Soon...' */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="text-6xl sm:text-8xl font-black text-slate-900 tracking-tight">
          Soon<span className="text-red-600">.</span>
        </h1>

        <button
          type="button"
          onClick={onNavigateHome}
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white hover:bg-red-50 text-slate-700 hover:text-red-600 font-bold text-xs sm:text-sm border border-slate-200 transition-all shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

    </div>
  )
}
