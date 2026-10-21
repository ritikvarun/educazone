import { useState } from 'react'
import {
  ArrowRight,
  X,
  Filter,
  Check,
  Download,
  BookOpen,
  Sparkles
} from 'lucide-react'

// Filter Options matching reference screenshot
const filterBoards = ['NCERT', 'CBSE', 'UP Board']

const filterSessions = [
  '2026-2027',
  '2025-2026',
  '2024-2025',
  '2023-2024',
  '2022-2023'
]

// Tabs & Content Data (Matching Screenshots: Sample Paper, Lab Manual, Question Bank, NCERT Solutions)
const bookTypesData = {
  'Sample Paper': {
    heading: 'Sample Paper',
    bannerGradient: 'from-[#284a1e] via-[#335c27] to-[#1e3816]',
    bannerTexture: 'bg-[#284a1e]',
    bookBadge: 'CBSE 2026-27',
    bookTitle: 'CBSE Class 9 Sample Question Papers',
    subjects: [
      { id: 'eng-r1', name: 'English R1', code: 'ENG-01', totalSets: 'Set 1 to Set 5', pdfSize: '2.4 MB' },
      { id: 'eng-r2', name: 'English R2', code: 'ENG-02', totalSets: 'Set 1 to Set 5', pdfSize: '2.6 MB' },
      { id: 'hin-r1', name: 'Hindi R1', code: 'HIN-01', totalSets: 'Set 1 to Set 5', pdfSize: '2.1 MB' },
      { id: 'hin-r2', name: 'Hindi R2', code: 'HIN-02', totalSets: 'Set 1 to Set 5', pdfSize: '2.3 MB' },
      { id: 'maths', name: 'Maths', code: 'MATH-041', totalSets: 'Set 1 to Set 10', pdfSize: '3.8 MB', isPopular: true },
      { id: 'science', name: 'Science', code: 'SCI-086', totalSets: 'Set 1 to Set 10', pdfSize: '4.1 MB', isPopular: true },
      { id: 'sst', name: 'SST', code: 'SST-087', totalSets: 'Set 1 to Set 8', pdfSize: '3.2 MB' },
    ]
  },
  'Lab Manual': {
    heading: 'Lab Manual',
    bannerGradient: 'from-[#3a0852] via-[#50106f] to-[#250435]',
    bannerTexture: 'bg-[#3a0852]',
    bookBadge: 'CBSE 2026-27',
    bookTitle: 'CBSE Social Science Complete Laboratory Manual Class 9',
    show3DBook: true,
    subjects: [
      { id: 'sst-lab', name: 'Social Science', code: 'SST-LAB-01', totalSets: 'Complete Lab Manual & Viva Voce', pdfSize: '4.5 MB', isPopular: true },
      { id: 'sci-lab', name: 'Science', code: 'SCI-LAB-01', totalSets: 'Physics, Chem & Bio Experiments', pdfSize: '5.2 MB' },
      { id: 'math-lab', name: 'Maths Activity', code: 'MATH-LAB-01', totalSets: 'NCERT Hands-on Math Projects', pdfSize: '3.1 MB' },
    ]
  },
  'Question Bank': {
    heading: 'Question Bank',
    bannerGradient: 'from-[#6e1414] via-[#8a1c1c] to-[#480c0c]',
    bannerTexture: 'bg-[#6e1414]',
    bookBadge: 'CBSE 2026-27',
    bookTitle: 'CBSE Class 9 Chapterwise Solved Question Bank',
    subjects: [
      { id: 'math-qb', name: 'Maths', code: 'MATH-QB', totalSets: 'Chapter 1 to 14 Solved Bank', pdfSize: '4.8 MB', isPopular: true },
      { id: 'sci-qb', name: 'Science', code: 'SCI-QB', totalSets: 'Complete Theory + Numericals', pdfSize: '5.5 MB', isPopular: true },
      { id: 'sst-qb', name: 'Social Science', code: 'SST-QB', totalSets: 'History, Civics, Geo, Eco', pdfSize: '4.2 MB' },
      { id: 'eng-qb', name: 'English', code: 'ENG-QB', totalSets: 'Beehive & Moments Solved', pdfSize: '3.6 MB' },
      { id: 'hin-qb', name: 'Hindi', code: 'HIN-QB', totalSets: 'Grammar & Literature Bank', pdfSize: '3.4 MB' },
    ]
  },
  'NCERT Solutions': {
    heading: 'NCERT Solutions',
    bannerGradient: 'from-[#0f172a] via-[#1e293b] to-[#0a0f1d]',
    bannerTexture: 'bg-[#0f172a]',
    bookBadge: 'CBSE 2026-27',
    bookTitle: 'NCERT Complete Textbook Solutions Class 9',
    subjects: [
      { id: 'math-ncert', name: 'Maths', code: 'MATH-NCERT', totalSets: 'All Intext & Exercise Qs', pdfSize: '3.9 MB', isPopular: true },
      { id: 'sci-ncert', name: 'Science', code: 'SCI-NCERT', totalSets: 'Physics, Chem & Bio Solutions', pdfSize: '4.3 MB', isPopular: true },
      { id: 'sst-ncert', name: 'Social Science', code: 'SST-NCERT', totalSets: 'Complete History, Geo, Civics', pdfSize: '3.8 MB' },
      { id: 'eng-ncert', name: 'English', code: 'ENG-NCERT', totalSets: 'Beehive & Moments Solutions', pdfSize: '2.9 MB' },
      { id: 'hin-ncert', name: 'Hindi', code: 'HIN-NCERT', totalSets: 'Kshitij & Kritika Solutions', pdfSize: '2.7 MB' },
    ]
  }
}

const filterBookTypes = Object.keys(bookTypesData)

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Class9({ onNavigateHome }) {
  // Filters & Tabs State
  const [selectedBoards, setSelectedBoards] = useState(['CBSE'])
  const [selectedSession, setSelectedSession] = useState('2026-2027')
  const [activeTab, setActiveTab] = useState('Sample Paper')
  
  // Mobile Filter Drawer Toggle
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  // Solution Modal State
  const [selectedSubjectModal, setSelectedSubjectModal] = useState(null)
  const [downloadToast, setDownloadToast] = useState(null)

  // Toggle Board Selection (Multi-select)
  const toggleBoard = (board) => {
    setSelectedBoards((prev) =>
      prev.includes(board)
        ? prev.filter((b) => b !== board)
        : [...prev, board]
    )
  }

  // Clear All Filters
  const handleClearAll = () => {
    setSelectedBoards([])
    setSelectedSession('2026-2027')
    setActiveTab('Sample Paper')
  }

  // Download Simulation
  const handleDownload = (subject) => {
    setDownloadToast(`${subject.name} (${activeTab}) PDF downloaded!`)
    setTimeout(() => setDownloadToast(null), 3500)
  }

  // Active board display
  const activeBoardText = selectedBoards.length > 0 ? selectedBoards.join(', ') : 'CBSE'

  // Current Active Tab Configuration
  const currentTabConfig = bookTypesData[activeTab] || bookTypesData['Sample Paper']
  const currentSubjects = currentTabConfig.subjects

  return (
    <div className="w-full flex-1 flex flex-col bg-[#fafafc] min-h-screen">
      
      {/* Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-[100] bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-red-500/30 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs sm:text-sm font-semibold">{downloadToast}</span>
        </div>
      )}

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full flex-1">
        
        {/* Top Header: Exact Title from Reference */}
        <div className="pb-5 mb-6 border-b border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              EducaZone {activeBoardText} Class 9 Books Solutions
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select category tabs or filters to access official book solutions, lab manuals, and sample papers.
            </p>
          </div>

          {/* Mobile Filter Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(true)}
            className="md:hidden inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-xs shadow-2xs hover:border-red-500 transition-colors"
          >
            <Filter className="w-4 h-4 text-red-600" />
            <span>Filters ({selectedBoards.length + (selectedSession ? 1 : 0) + 1})</span>
          </button>
        </div>

        {/* 2-Column Layout: Left Filters + Right Content */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start">
          
          {/* ================= LEFT SIDEBAR FILTERS (Desktop) ================= */}
          <aside className="hidden md:block w-60 lg:w-68 shrink-0 bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs sticky top-28">
            
            {/* Filter Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                FILTERS
              </span>
              <button
                type="button"
                onClick={handleClearAll}
                className="text-xs font-bold text-red-600 hover:text-red-700 transition-colors cursor-pointer"
              >
                Clear All
              </button>
            </div>

            {/* Section 1: Board */}
            <div className="py-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Board</h3>
              <div className="space-y-2.5">
                {filterBoards.map((board) => {
                  const isChecked = selectedBoards.includes(board)
                  return (
                    <label
                      key={board}
                      onClick={() => toggleBoard(board)}
                      className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 hover:text-red-600 cursor-pointer select-none group"
                    >
                      <div
                        className={`w-4.5 h-4.5 rounded-[4px] border flex items-center justify-center transition-all ${
                          isChecked
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'border-slate-300 bg-white group-hover:border-red-400'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className={isChecked ? 'font-bold text-slate-900' : 'font-normal'}>
                        {board}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Section 2: Academic Session */}
            <div className="py-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Academic Session</h3>
              <div className="space-y-2.5">
                {filterSessions.map((session) => {
                  const isChecked = selectedSession === session
                  return (
                    <label
                      key={session}
                      onClick={() => setSelectedSession(session)}
                      className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 hover:text-red-600 cursor-pointer select-none group"
                    >
                      <div
                        className={`w-4.5 h-4.5 rounded-[4px] border flex items-center justify-center transition-all ${
                          isChecked
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'border-slate-300 bg-white group-hover:border-red-400'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className={isChecked ? 'font-bold text-slate-900' : 'font-normal'}>
                        {session}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Section 3: Type of Books */}
            <div className="pt-4">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Type of Books</h3>
              <div className="space-y-2.5">
                {filterBookTypes.map((type) => {
                  const isChecked = activeTab === type
                  return (
                    <label
                      key={type}
                      onClick={() => setActiveTab(type)}
                      className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 hover:text-red-600 cursor-pointer select-none group"
                    >
                      <div
                        className={`w-4.5 h-4.5 rounded-[4px] border flex items-center justify-center transition-all ${
                          isChecked
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'border-slate-300 bg-white group-hover:border-red-400'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className={isChecked ? 'font-bold text-slate-900' : 'font-normal'}>
                        {type}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>

          </aside>

          {/* ================= RIGHT MAIN CONTENT AREA ================= */}
          <div className="flex-1 w-full space-y-5">
            
            {/* TABS ABOVE BANNER (Requested by User) */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {filterBookTypes.map((tab) => {
                const isActive = activeTab === tab
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-4.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap border shadow-2xs flex items-center gap-2 ${
                      isActive
                        ? 'bg-red-600 text-white border-red-600 shadow-sm'
                        : 'bg-white text-slate-700 hover:text-red-600 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span>{tab}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                        isActive ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {bookTypesData[tab]?.subjects?.length || 0}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* TAB CONTENT BANNER (Matches screenshot colors & 3D book mockup) */}
            <div
              className={`rounded-2xl bg-gradient-to-r ${currentTabConfig.bannerGradient} px-6 sm:px-8 py-7 sm:py-9 text-white shadow-md relative overflow-hidden transition-all duration-300 flex items-center justify-between min-h-[140px]`}
            >
              {/* Subtle ambient lighting */}
              <div className="absolute -top-12 -right-12 w-52 h-52 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              {/* Banner Left Info */}
              <div className="relative z-10 max-w-md">
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  {currentTabConfig.heading}
                </h2>
                <p className="text-xs sm:text-sm font-medium text-white/90 mt-1.5">
                  {activeBoardText} {selectedSession || '2026-27'}
                </p>
              </div>

              {/* Banner Right: 3D Book Cover Mockup (Matching Lab Manual Screenshot) */}
              <div className="relative z-10 hidden sm:flex items-center shrink-0 pr-2">
                <div className="w-24 sm:w-28 h-32 sm:h-36 rounded-r-md rounded-l-xs bg-white text-slate-900 shadow-2xl border border-slate-300 flex flex-col justify-between p-2 transform rotate-1 hover:rotate-0 transition-transform duration-300 relative select-none">
                  {/* Spine effect */}
                  <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-slate-400 to-slate-200 border-r border-slate-300" />
                  
                  {/* Top Book Header */}
                  <div className="pl-2 pt-0.5">
                    <span className="text-[7px] font-black tracking-widest text-red-600 uppercase block">EDUCAZONE</span>
                    <span className="text-[8px] font-extrabold text-slate-800 leading-tight block mt-0.5">
                      CBSE {currentTabConfig.heading.toUpperCase()}
                    </span>
                  </div>

                  {/* Middle Badge */}
                  <div className="pl-2 my-auto">
                    <div className="p-1 rounded bg-slate-50 border border-slate-200 text-center">
                      <span className="text-[9px] font-black text-slate-900 block leading-tight">CLASS 9</span>
                      <span className="text-[6.5px] font-bold text-red-600 uppercase block">2026-27</span>
                    </div>
                  </div>

                  {/* Bottom Strip */}
                  <div className="pl-2 pt-1 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[6.5px] font-semibold text-slate-500">Official Edition</span>
                    <BookOpen className="w-2.5 h-2.5 text-red-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* SUBJECT CARDS GRID UNDER TAB */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {currentSubjects.map((subject) => (
                <div
                  key={subject.id}
                  onClick={() => setSelectedSubjectModal(subject)}
                  className="bg-[#fffdfa] hover:bg-white rounded-xl border border-[#f0ebe1] hover:border-red-500 hover:shadow-md transition-all duration-200 px-4.5 py-3.5 flex items-center justify-between gap-3 group cursor-pointer"
                >
                  {/* Left: Subject Name */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {subject.name}
                    </span>
                    {subject.isPopular && (
                      <span className="text-[9px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Right: 'View' text + circle arrow button */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs sm:text-sm font-bold text-red-600 group-hover:text-red-700 transition-colors">
                      View
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-red-500/80 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-2xs">
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick QR Code Physical Book Help Card */}
            <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Studying from the Official EducaZone Class 9 Book?
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500">
                    Need instant chapter solutions or formula sheets on your phone? Contact our mentor support team.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/919084715552?text=Hello%20EducaZone%20Team%2C%20I%20have%20purchased%20the%20Class%209%20Book%20and%20scanned%20the%20QR%20code.%20I%20need%20help%20with%20chapter%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-xs transition-transform active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Mentor</span>
              </a>
            </div>

          </div>

        </div>

      </main>

      {/* ================= MOBILE FILTER DRAWER ================= */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[1000] flex md:hidden animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileFilterOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Drawer Body */}
          <div className="relative ml-auto w-[300px] max-w-[85vw] h-full bg-white shadow-2xl p-5 overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-sm font-extrabold uppercase text-slate-900">FILTERS</span>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Board */}
              <div className="py-4 border-b border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">Board</h4>
                <div className="space-y-2">
                  {filterBoards.map((b) => (
                    <label
                      key={b}
                      onClick={() => toggleBoard(b)}
                      className="flex items-center gap-2.5 text-xs text-slate-700 font-medium cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedBoards.includes(b)}
                        readOnly
                        className="rounded text-red-600 focus:ring-red-500 w-4 h-4"
                      />
                      <span>{b}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mobile Academic Session */}
              <div className="py-4 border-b border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">Academic Session</h4>
                <div className="space-y-2">
                  {filterSessions.map((s) => (
                    <label
                      key={s}
                      onClick={() => setSelectedSession(s)}
                      className="flex items-center gap-2.5 text-xs text-slate-700 font-medium cursor-pointer"
                    >
                      <input
                        type="radio"
                        checked={selectedSession === s}
                        readOnly
                        className="text-red-600 focus:ring-red-500 w-4 h-4"
                      />
                      <span>{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mobile Type of Books */}
              <div className="pt-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">Type of Books</h4>
                <div className="space-y-2">
                  {filterBookTypes.map((t) => (
                    <label
                      key={t}
                      onClick={() => {
                        setActiveTab(t)
                        setIsMobileFilterOpen(false)
                      }}
                      className="flex items-center gap-2.5 text-xs text-slate-700 font-medium cursor-pointer"
                    >
                      <input
                        type="radio"
                        checked={activeTab === t}
                        readOnly
                        className="text-red-600 focus:ring-red-500 w-4 h-4"
                      />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex gap-2">
              <button
                type="button"
                onClick={handleClearAll}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-red-600 text-white text-xs font-bold shadow-xs hover:bg-red-700"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= SUBJECT DETAIL MODAL ================= */}
      {selectedSubjectModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-200/80 flex items-center justify-between bg-[#fffdfa]">
              <div>
                <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
                  {activeBoardText} • {selectedSession}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                  {selectedSubjectModal.name} — {activeTab}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSubjectModal(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200 text-xs text-red-700 leading-relaxed flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                <span>
                  Official chapter solutions and practice question sets for <strong>{selectedSubjectModal.name} ({activeTab})</strong> are linked with your physical Class 9 book QR code.
                </span>
              </div>

              <div className="rounded-xl border border-slate-200 divide-y divide-slate-100 text-xs">
                <div className="p-3 flex items-center justify-between">
                  <span className="text-slate-500">Available Practice Content:</span>
                  <span className="font-bold text-slate-800">{selectedSubjectModal.totalSets}</span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="text-slate-500">Curriculum Session:</span>
                  <span className="font-bold text-slate-800">{selectedSession}</span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="text-slate-500">File Download Format:</span>
                  <span className="font-bold text-slate-800">High Resolution PDF ({selectedSubjectModal.pdfSize})</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/60 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedSubjectModal(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-white text-xs font-bold cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  handleDownload(selectedSubjectModal)
                  setSelectedSubjectModal(null)
                }}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md shadow-red-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
