import { Sparkles, ArrowLeft, Clock, BookOpen, Bell } from 'lucide-react'

export default function Class9({ onNavigateHome }) {
  return (
    <div className="w-full flex-1 flex flex-col justify-between items-center py-12 sm:py-20 px-4 sm:px-6 relative">
      
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-500/[0.06] rounded-full blur-[120px] pointer-events-none" />

      {/* Main Coming Soon Card */}
      <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-red-50 border border-red-200 text-red-600 shadow-2xs mb-6">
          <Clock className="w-3.5 h-3.5 text-red-600 animate-pulse" />
          <span>Books Solution • Class 9</span>
        </div>

        {/* Big Icon */}
        <div className="w-20 h-20 rounded-3xl bg-red-50 border border-red-200/80 flex items-center justify-center text-red-600 mb-6 shadow-xl shadow-red-500/10">
          <BookOpen className="w-10 h-10 text-red-600" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Coming <span className="text-red-600">Soon!</span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
          Class 9 NCERT Solutions, Chapter-wise notes, and reference books study material are currently in the works and will be live very soon.
        </p>

        {/* Subject Tags Preview */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-sm">
          {['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'].map((subj) => (
            <span
              key={subj}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-2xs"
            >
              {subj}
            </span>
          ))}
        </div>

        {/* Action Button: Back to Home */}
        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-red-500/25 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

      </div>

      {/* Simple Bottom Notice */}
      <div className="relative z-10 mt-12 text-center text-xs text-slate-400">
        EducaZone • LEARN | GROW | SUCCEED
      </div>

    </div>
  )
}
