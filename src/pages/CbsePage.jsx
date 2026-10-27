import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Clock,
  ChevronRight,
  Check,
  GraduationCap,
  FileText,
  Layers,
  FlaskConical,
  X,
  Award
} from 'lucide-react'

const cbseClasses = [
  {
    id: 'class-9',
    classNumber: '9',
    title: 'Class 9 (IX)',
    subtitle: 'Secondary Foundation',
    badge: 'Available Now',
    badgeType: 'active',
    description: 'Complete companion solutions, sample papers, lab manuals & QR synced question banks.',
    subjects: ['Maths', 'Science', 'SST', 'English', 'Hindi'],
    features: [
      '10 Practice Sets with Marking Scheme',
      'NCERT Intext & Exercise Answers',
      'Lab Manual & Viva Q&A'
    ],
    ctaText: 'Explore Class 9',
    isAvailable: true
  },
  {
    id: 'class-10',
    classNumber: '10',
    title: 'Class 10 (X)',
    subtitle: 'Board Examination',
    badge: 'Coming Soon',
    badgeType: 'soon',
    description: 'High-scoring sample papers, last 10-year solved papers & competency question banks.',
    subjects: ['Maths', 'Science', 'SST', 'English', 'Hindi'],
    features: [
      'Board Exam Pattern Sample Papers',
      'Competency & Case Studies',
      'Topper Answer Sheet Analysis'
    ],
    ctaText: 'Coming Soon',
    isAvailable: false
  },
  {
    id: 'class-11',
    classNumber: '11',
    title: 'Class 11 (XI)',
    subtitle: 'Senior Secondary',
    badge: 'Coming Soon',
    badgeType: 'soon',
    description: 'Conceptual notes, NCERT exemplar answers & competitive exam foundation material.',
    subjects: ['Physics', 'Chemistry', 'Maths', 'Biology', 'Commerce'],
    features: [
      'Science & Commerce Stream Notes',
      'Key Derivations & Solvers',
      'NEET / JEE Foundation Maps'
    ],
    ctaText: 'Coming Soon',
    isAvailable: false
  },
  {
    id: 'class-12',
    classNumber: '12',
    title: 'Class 12 (XII)',
    subtitle: 'Board Examination',
    badge: 'Coming Soon',
    badgeType: 'soon',
    description: 'Ultimate 12th board toolkit: Chapterwise solved banks, mock tests & formula cheat sheets.',
    subjects: ['Physics', 'Chemistry', 'Maths', 'Biology', 'Commerce'],
    features: [
      'Previous 12 Years Solved Papers',
      'Assertion-Reasoning & MCQs',
      'Official Board Marking Scheme'
    ],
    ctaText: 'Coming Soon',
    isAvailable: false
  }
]

const class9Materials = [
  {
    id: 'syllabus',
    title: 'Syllabus',
    tabName: 'Syllabus',
    badge: '2026-27 CBSE',
    subtitle: 'Course Structure',
    icon: <BookOpen className="w-5 h-5 text-red-600" />,
    description: 'Unit-wise weightage, deleted syllabus portions & official question paper design guidelines.',
    subjects: ['Maths', 'Science', 'SST', 'English', 'Hindi'],
    ctaText: 'Explore Syllabus'
  },
  {
    id: 'sample-paper',
    title: 'Sample Paper',
    tabName: 'Sample Paper',
    badge: '10 Sets with Solution',
    subtitle: 'Model Test Papers',
    icon: <FileText className="w-5 h-5 text-emerald-600" />,
    description: '10 Full-length CBSE pattern sample question papers with step-by-step marking schemes.',
    subjects: ['Maths', 'Science', 'SST', 'English', 'Hindi'],
    ctaText: 'Explore Sample Paper'
  },
  {
    id: 'previous-year-paper',
    title: 'Previous Year Paper',
    tabName: 'Previous Year Paper',
    badge: 'Past 5-10 Years',
    subtitle: 'Solved Exam Papers',
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    description: 'Past years annual examination solved question papers with model answers.',
    subjects: ['Maths', 'Science', 'SST', 'English', 'Hindi'],
    ctaText: 'Explore PYQ Papers'
  },
  {
    id: 'practice-paper',
    title: 'Practice Paper',
    tabName: 'Practice Paper',
    badge: 'Mock Test Series',
    subtitle: 'Timed Mock Drills',
    icon: <Layers className="w-5 h-5 text-purple-600" />,
    description: 'Chapterwise timed test papers, competency MCQs & revision practice sets.',
    subjects: ['Maths', 'Science', 'SST', 'English', 'Hindi'],
    ctaText: 'Explore Practice Paper'
  }
]

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function CbsePage({ onNavigateHome, onNavigateCbseClass9 }) {
  const [activeModalClass, setActiveModalClass] = useState(null)
  const [selectedClassId, setSelectedClassId] = useState('class-9')

  return (
    <div className="w-full flex-1 flex flex-col bg-[#fafafc] min-h-screen">
      
      {/* Top Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0f1d] text-white relative overflow-hidden border-b border-white/10 shadow-lg">
        {/* Ambient Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/70 mb-4">
            <a
              href="/"
              onClick={(e) => {
                if (onNavigateHome) {
                  e.preventDefault()
                  onNavigateHome()
                }
              }}
              className="hover:text-white transition-colors font-medium hover:underline flex items-center gap-1"
            >
              Home
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-white/80 font-medium">Free Material</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-white font-bold bg-red-600/80 px-2 py-0.5 rounded">CBSE</span>
          </nav>

          {/* Title Row */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/90 text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>CBSE Board • Free Study Material</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              CBSE Classes 9, 10, 11 & 12 Free Material
            </h1>

            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
              Access official chapter-wise textbook solutions, sample papers, question banks, and laboratory records prepared strictly according to the latest CBSE curriculum for session 2026-2027.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px] text-white/85">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                <span>100% NCERT & CBSE Aligned</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                <span>Sample Papers with Marking Schemes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                <span>Physical Book QR Code Sync</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Grid: Class 9, 10, 11, 12 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full flex-1">
        
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>Select Your Class</span>
              <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                4 Classes
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Choose your CBSE class to explore chapter solutions, sample question papers, and revision notes.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid - 4 in one line on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
          {cbseClasses.map((item) => {
            const isClass9 = item.id === 'class-9'
            const isSelected = selectedClassId === item.id

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isClass9) {
                    setSelectedClassId('class-9')
                  } else {
                    setActiveModalClass(item)
                  }
                }}
                className={`relative bg-white rounded-2xl border transition-all duration-300 p-5 flex flex-col justify-between overflow-hidden group cursor-pointer ${
                  isClass9
                    ? isSelected
                      ? 'border-red-500 shadow-xl ring-2 ring-red-500'
                      : 'border-red-500/80 shadow-md hover:shadow-xl ring-1 ring-red-500/20'
                    : 'border-slate-200/90 hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                {/* Top Colored Accent Stripe */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    isClass9
                      ? 'bg-gradient-to-r from-red-600 to-rose-500'
                      : 'bg-slate-200 group-hover:bg-red-400 transition-colors'
                  }`}
                />

                {/* Card Body */}
                <div className="space-y-3">
                  {/* Header: Title and Class Number Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        {item.subtitle}
                      </span>
                      <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-red-600 transition-colors mt-0.5">
                        {item.title}
                      </h3>
                    </div>

                    {/* Compact Class Number Badge */}
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-lg font-black text-slate-800 shadow-2xs shrink-0 group-hover:scale-105 group-hover:text-red-600 group-hover:bg-red-50 transition-all">
                      {item.classNumber}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        item.badgeType === 'active'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {item.badgeType === 'active' ? (
                        <Check className="w-3 h-3 stroke-[3] text-emerald-600" />
                      ) : (
                        <Clock className="w-3 h-3 text-amber-600 animate-pulse" />
                      )}
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Subjects Pills */}
                  <div className="pt-0.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Subjects:
                    </span>
                    <div className="flex flex-wrap items-center gap-1">
                      {item.subjects.map((subj) => (
                        <span
                          key={subj}
                          className="text-[11px] font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5"
                        >
                          {subj}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="py-2.5 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-red-600 stroke-[2.5] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-4 border-t border-slate-100 mt-3">
                  {isClass9 ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        if (onNavigateCbseClass9) {
                          onNavigateCbseClass9()
                        }
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-sm shadow-red-500/20 flex items-center justify-center gap-1.5 transition-all active:scale-98 cursor-pointer"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveModalClass(item)
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>{item.ctaText}</span>
                    </button>
                  )}
                </div>

              </div>
            )
          })}
        </div>

        {/* Class 9 Material Types Grid: 4 in one line */}
        {selectedClassId === 'class-9' && (
          <div className="mt-10 pt-8 border-t border-slate-200 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Class 9 (IX) Study Material
                  </h3>
                  <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                    4 in 1 Line
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Select any category below to access chapter PDFs, practice sets, and solutions:
                </p>
              </div>

              <button
                type="button"
                onClick={() => onNavigateCbseClass9 && onNavigateCbseClass9()}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100/70 border border-red-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer self-start sm:self-auto"
              >
                <span>Open Full Class 9 Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 4 in one line on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
              {class9Materials.map((mat) => (
                <div
                  key={mat.id}
                  className="relative bg-white rounded-2xl border border-slate-200/90 hover:border-red-500 hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 group-hover:bg-red-600 transition-colors" />

                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-red-50 transition-all">
                        {mat.icon}
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">
                        {mat.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        {mat.subtitle}
                      </span>
                      <h4 className="text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors mt-0.5">
                        {mat.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {mat.description}
                    </p>

                    <div className="pt-0.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                        Subjects:
                      </span>
                      <div className="flex flex-wrap items-center gap-1">
                        {mat.subjects.map((subj) => (
                          <span
                            key={subj}
                            className="text-[11px] font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5"
                          >
                            {subj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (onNavigateCbseClass9) {
                          onNavigateCbseClass9()
                        }
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-sm shadow-red-500/20 flex items-center justify-center gap-1.5 transition-all active:scale-98 cursor-pointer"
                    >
                      <span>{mat.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom WhatsApp Mentor Assistance Card */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <WhatsAppIcon className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-black text-slate-900">
                Need Specific CBSE Chapter Solutions or Sample Papers?
              </h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xl">
                Our academic teachers and editorial faculty can share sample paper PDFs and marking schemes directly with you on WhatsApp.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919084715552?text=Hello%20EducaZone%20Team%2C%20I%20am%20looking%20for%20CBSE%20Free%20Study%20Material%20and%20Solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-transform active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat with CBSE Mentor</span>
          </a>
        </div>

      </main>

      {/* Modal for Class 10, 11, 12 */}
      {activeModalClass && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden relative">
            <div className="h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 w-full" />
            
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                    CBSE 2026-27
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    {activeModalClass.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalClass(null)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-amber-800">
                  <Clock className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span>Content Status: Uploading Shortly</span>
                </div>
                <p>
                  Official solutions and sample papers for <strong>{activeModalClass.title}</strong> are currently in the final proofreading stage by our CBSE academic faculty.
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Want early access or need a specific chapter question bank right now? You can request instant access through our WhatsApp mentor desk.
              </p>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalClass(null)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50"
                >
                  Close
                </button>
                <a
                  href={`https://wa.me/919084715552?text=Hello%20EducaZone%20Team%2C%20I%20need%20early%20access%20to%20CBSE%20${encodeURIComponent(activeModalClass.title)}%20study%20material.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp Mentor</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
