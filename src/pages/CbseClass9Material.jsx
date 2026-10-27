import { useState, useMemo } from 'react'
import {
  ArrowRight,
  X,
  Check,
  Download,
  BookOpen,
  Sparkles,
  Clock,
  ChevronRight,
  FileText,
  Layers,
  Search,
  BookCheck,
  Calculator,
  Atom,
  Globe,
  Award,
  Eye,
  GraduationCap
} from 'lucide-react'

// 4 Main Material Categories (All in 1 Line)
const materialCategories = [
  {
    id: 'syllabus',
    key: 'Syllabus',
    title: 'Syllabus',
    subtitle: 'Official Curriculum',
    badge: 'CBSE 2026-27',
    badgeType: 'active',
    icon: <BookOpen className="w-5 h-5 text-red-600" />,
    accentBorder: 'border-red-500',
    description: 'Unit-wise weightage, deleted syllabus portions, practical guidelines & examination pattern.',
    ctaText: 'View Syllabus'
  },
  {
    id: 'sample-paper',
    key: 'Sample Paper',
    title: 'Sample Paper',
    subtitle: 'Model Test Papers',
    badge: '10 Sets with Solution',
    badgeType: 'active',
    icon: <FileText className="w-5 h-5 text-emerald-600" />,
    accentBorder: 'border-emerald-500',
    description: '10 Full-length CBSE pattern sample question papers with step-by-step marking schemes.',
    ctaText: 'View Sample Papers'
  },
  {
    id: 'previous-year-paper',
    key: 'Previous Year Paper',
    title: 'Previous Year Paper',
    subtitle: 'Annual Solved Papers',
    badge: 'Past 5-10 Years',
    badgeType: 'active',
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    accentBorder: 'border-blue-500',
    description: 'Past 5-10 years annual examination solved question papers with model topper answers.',
    ctaText: 'View PYQ Papers'
  },
  {
    id: 'practice-paper',
    key: 'Practice Paper',
    title: 'Practice Paper',
    subtitle: 'Mock Test Series',
    badge: 'Self Assessment',
    badgeType: 'active',
    icon: <Layers className="w-5 h-5 text-purple-600" />,
    accentBorder: 'border-purple-500',
    description: 'Chapterwise timed test papers, competency MCQs & high-score revision practice sets.',
    ctaText: 'View Practice Papers'
  }
]

// Category-wise Subject Data
const categorySubjects = {
  'Syllabus': [
    {
      id: 'math-syl',
      name: 'Mathematics',
      code: 'MATH-041',
      totalSets: 'Full 2026-27 Structure',
      pdfSize: '1.4 MB',
      topics: 'Unit 1: Number Systems (10 M), Unit 2: Algebra (20 M), Unit 3: Coordinate Geometry (04 M), Unit 4: Geometry (27 M), Unit 5: Mensuration (13 M), Unit 6: Statistics (06 M). Internal Assessment: 20 Marks.',
      highlights: ['Unit-wise Marks Weightage', 'Prescribed NCERT Chapters', 'Deleted Exercise Portions', 'Internal Assessment Rubrics']
    },
    {
      id: 'sci-syl',
      name: 'Science',
      code: 'SCI-086',
      totalSets: 'Theory + Practical Scheme',
      pdfSize: '1.8 MB',
      topics: 'Unit 1: Matter - Nature & Behaviour (25 M), Unit 2: Organization in Living World (22 M), Unit 3: Motion, Force & Work (27 M), Unit 4: Food & Food Production (06 M). Practical Assessment: 20 Marks.',
      highlights: ['Theory (80 Marks) Blueprint', '15 Prescribed Experiments', 'Viva-Voce Evaluation Guide', 'Annual Exam Question Typology']
    },
    {
      id: 'sst-syl',
      name: 'Social Science',
      code: 'SST-087',
      totalSets: '4-Book Integrated Syllabus',
      pdfSize: '1.6 MB',
      topics: 'History: India & Contemporary World I (20 M), Geography: Contemporary India I (20 M), Political Science: Democratic Politics I (20 M), Economics (20 M). Project Work: 05 Marks.',
      highlights: ['Complete Map Item List', 'Disaster Management Projects', 'Chapter-wise Marks Allotment', 'Internal Assessment Criteria']
    },
    {
      id: 'eng-syl',
      name: 'English Language & Literature',
      code: 'ENG-184',
      totalSets: 'Reading, Writing & Literature',
      pdfSize: '1.2 MB',
      topics: 'Section A: Reading Skills (20 Marks), Section B: Writing Skills & Grammar (20 Marks), Section C: Language Through Literature (40 Marks). Internal Assessment (ASL): 20 Marks.',
      highlights: ['Beehive Prose & Poetry List', 'Moments Supplementary Chapters', 'Grammar Topics & Formats', 'ASL Listening & Speaking Rubrics']
    },
    {
      id: 'hin-syl',
      name: 'Hindi Course A & B',
      code: 'HIN-002 / 085',
      totalSets: 'Course A & B Combined',
      pdfSize: '1.1 MB',
      topics: 'Khand Ka: Apatith Gadyansh (10 M), Khand Kha: Vyavaharik Vyakaran (16 M), Khand Ga: Pathyapustak (30 M), Khand Gha: Lekhan Kaushal (24 M). Shravan Evam Vachan: 20 Marks.',
      highlights: ['Kshitij & Kritika Chapters (Course A)', 'Sparsh & Sanchayan (Course B)', 'Sandhi, Samas, Vyakaran Format', 'Anuched & Patra Lekhan Formats']
    }
  ],
  'Sample Paper': [
    {
      id: 'math-sp',
      name: 'Mathematics',
      code: 'MATH-041',
      totalSets: '10 Sets with Marking Scheme',
      pdfSize: '3.8 MB',
      topics: 'Section A (20 MCQs), Section B (5 Very Short 2M), Section C (6 Short 3M), Section D (4 Long 5M), Section E (3 Case-Based 4M). Complete step-by-step verified solutions.',
      highlights: ['100% CBSE Pattern Blueprint', 'Step-by-Step Marking Scheme', 'HOTS & Case-Based Questions', 'Formula Cheat Sheet Included']
    },
    {
      id: 'sci-sp',
      name: 'Science',
      code: 'SCI-086',
      totalSets: '10 Sets with Marking Scheme',
      pdfSize: '4.1 MB',
      topics: 'Physics, Chemistry, Biology integrated sets. Section A: 20 MCQs (including Assertion-Reason), Section B: 6 VSA (2M), Section C: 7 SA (3M), Section D: 3 LA (5M), Section E: 3 Case Studies (4M).',
      highlights: ['Assertion-Reasoning Focus', 'Neat Well-Labeled Diagrams', 'Complete Numerical Solvers', 'NCERT Exemplar Questions']
    },
    {
      id: 'sst-sp',
      name: 'Social Science',
      code: 'SST-087',
      totalSets: '8 Sets with Marking Scheme',
      pdfSize: '3.2 MB',
      topics: 'Comprehensive papers covering History, Geography, Political Science & Economics. Includes Map Work questions and Competency-based source passages.',
      highlights: ['Point-wise High Scoring Answers', 'Verified Map Pointing Keys', 'Source & Case-based Passages', 'Topper Answer Formats']
    },
    {
      id: 'eng-sp',
      name: 'English Language & Literature',
      code: 'ENG-184',
      totalSets: '8 Sets with Marking Scheme',
      pdfSize: '2.6 MB',
      topics: 'Full length 80-mark papers with unseen comprehension passages, formal letter writing, analytical paragraphs, grammar gap filling, and Beehive & Moments literature answers.',
      highlights: ['Unseen Passages with MCQs', 'Standard Format Writing Tasks', 'Error Correction & Editing Solvers', 'Extract-based Literature Qs']
    },
    {
      id: 'hin-sp',
      name: 'Hindi Course A & B',
      code: 'HIN-002 / 085',
      totalSets: '8 Sets with Marking Scheme',
      pdfSize: '2.4 MB',
      topics: 'Complete question papers for both Course A and Course B. Model answers for Nibandh/Anuched, Patra, Samvad, Sandhi, Samas, and Textbook question answers.',
      highlights: ['Vyakaran Step-by-Step Solvers', 'High-Scoring Essay & Letter Formats', 'Kavyansh Arthgrahana Answers', 'Complete 80-Mark Mock Blueprint']
    }
  ],
  'Previous Year Paper': [
    {
      id: 'math-pyq',
      name: 'Mathematics',
      code: 'MATH-041',
      totalSets: 'Past 5 Years Solved Papers',
      pdfSize: '4.9 MB',
      topics: 'Annual school examination and regional CBSE papers from 2021 to 2025 with complete step-wise verified solutions and marking scheme breakdown.',
      highlights: ['Annual Exam Papers 2021-2025', 'Common Student Mistake Warnings', 'Repeated 5-Mark Questions', 'Teacher Marking Notes']
    },
    {
      id: 'sci-pyq',
      name: 'Science',
      code: 'SCI-086',
      totalSets: 'Past 5 Years Solved Papers',
      pdfSize: '5.1 MB',
      topics: 'Solved annual exam papers with complete physics numericals, ray diagrams, chemical equations, and biology labeled diagrams.',
      highlights: ['Frequently Asked Numericals', 'Ray Diagrams & Chemical Equations', 'Chapter-wise Trend Analysis', 'Model Solutions by Evaluators']
    },
    {
      id: 'sst-pyq',
      name: 'Social Science',
      code: 'SST-087',
      totalSets: 'Past 5 Years Solved Papers',
      pdfSize: '4.4 MB',
      topics: 'Past 5 years solved question papers with highlighted 3-mark and 5-mark repeated questions, timeline dates, and map questions.',
      highlights: ['Repeated 3 & 5 Mark Questions', 'Official Answer Keys', 'Map Work Analysis', 'Historical Dates & Facts Summary']
    },
    {
      id: 'eng-pyq',
      name: 'English Language & Literature',
      code: 'ENG-184',
      totalSets: 'Past 5 Years Solved Papers',
      pdfSize: '3.5 MB',
      topics: 'Past 5 years final examination papers with solved grammar exercises, letter formats, and analytical paragraphs.',
      highlights: ['Grammar Questions Solved', 'High-Scoring Writing Samples', 'Literature Character Analysis', 'Model Answer Sheets']
    },
    {
      id: 'hin-pyq',
      name: 'Hindi Course A & B',
      code: 'HIN-002 / 085',
      totalSets: 'Past 5 Years Solved Papers',
      pdfSize: '3.1 MB',
      topics: '5 Years annual school board examination papers with model Hindi writing skills, grammar questions, and literature solutions.',
      highlights: ['Solved Vyakaran Sections', 'Model Writing Solutions', 'Important Kavyansh Explanations', 'Final Exam Scoring Blueprint']
    }
  ],
  'Practice Paper': [
    {
      id: 'math-prac',
      name: 'Mathematics',
      code: 'MATH-041',
      totalSets: '10 Timed Practice Drills',
      pdfSize: '4.2 MB',
      topics: 'Timed full-length mock drill papers (3 Hours, 80 Marks) for self-evaluation. Includes answer keys and self-scoring rubric for practice.',
      highlights: ['Timed 3-Hour Exam Drills', 'Competency MCQs & HOTS', 'Self-Assessment Score Card', 'Step-by-Step Answer Explanations']
    },
    {
      id: 'sci-prac',
      name: 'Science',
      code: 'SCI-086',
      totalSets: '10 Timed Practice Drills',
      pdfSize: '4.6 MB',
      topics: 'Intensive practice sets with Assertion-Reason drills, Case Study questions, and numerical problem banks for maximum scoring.',
      highlights: ['Assertion-Reason Specialist Drills', 'Case-Based Question Banks', 'Formula Revision Practice', 'Full Diagnostic Solutions']
    },
    {
      id: 'sst-prac',
      name: 'Social Science',
      code: 'SST-087',
      totalSets: '8 Comprehensive Test Sets',
      pdfSize: '3.9 MB',
      topics: 'Targeted practice papers with source analysis questions, map labeling drills, and point-wise answer structure practice.',
      highlights: ['Source-Based Question Practice', 'Blank Map Practice Sheets', 'Long Answer Writing Guides', 'Time-Management Tips']
    },
    {
      id: 'eng-prac',
      name: 'English Language & Literature',
      code: 'ENG-184',
      totalSets: '6 Mock Test Papers',
      pdfSize: '3.0 MB',
      topics: 'Full length mock tests for speed, reading comprehension accuracy, grammar confidence, and creative writing polish.',
      highlights: ['Reading Speed Boosters', 'Writing Skills Drills', 'Grammar Rule Application', 'Literature Extract Practice']
    },
    {
      id: 'hin-prac',
      name: 'Hindi Course A & B',
      code: 'HIN-002 / 085',
      totalSets: '6 Mock Test Papers',
      pdfSize: '2.8 MB',
      topics: 'Complete mock papers for self-testing before annual examinations. Step-by-step scoring guide for Hindi grammar and literature.',
      highlights: ['Time-Bound Mock Tests', 'Vyakaran Quick Practice', 'Creative Writing Scoring Keys', 'Detailed Answer Keys']
    }
  ]
}

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function CbseClass9Material({ onNavigateHome, onNavigateCbse }) {
  const [activeCategory, setActiveCategory] = useState('Sample Paper')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubjectModal, setSelectedSubjectModal] = useState(null)
  const [downloadToast, setDownloadToast] = useState(null)

  const currentSubjects = categorySubjects[activeCategory] || []

  const filteredSubjects = useMemo(() => {
    if (!searchQuery.trim()) return currentSubjects
    const q = searchQuery.toLowerCase().trim()
    return currentSubjects.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.code.toLowerCase().includes(q) ||
        s.topics.toLowerCase().includes(q)
    )
  }, [currentSubjects, searchQuery])

  const handleDownload = (subjectName) => {
    setDownloadToast(`Downloading EducaZone CBSE Class 9 ${subjectName} (${activeCategory}) PDF...`)
    setTimeout(() => {
      setDownloadToast(null)
    }, 3500)
  }

  return (
    <div className="w-full flex-1 flex flex-col bg-[#fafafc] min-h-screen font-sans">
      
      {/* Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-[100] bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-red-500/30 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs sm:text-sm font-semibold">{downloadToast}</span>
        </div>
      )}

      {/* Top Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0f1d] text-white relative overflow-hidden border-b border-white/10 shadow-lg">
        {/* Ambient Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
          
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
            <a
              href="/cbse"
              onClick={(e) => {
                if (onNavigateCbse) {
                  e.preventDefault()
                  onNavigateCbse()
                }
              }}
              className="hover:text-white transition-colors font-medium hover:underline"
            >
              Free Material
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <a
              href="/cbse"
              onClick={(e) => {
                if (onNavigateCbse) {
                  e.preventDefault()
                  onNavigateCbse()
                }
              }}
              className="hover:text-white transition-colors font-medium hover:underline"
            >
              CBSE
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-white font-bold bg-red-600 px-2 py-0.5 rounded">
              Class 9 (IX)
            </span>
          </nav>

          {/* Title Row */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/90 text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>CBSE Class 9 (IX) • Session 2026-27</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              CBSE Class 9 Free Study Material
            </h1>

            <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
              Official chapter-wise syllabus, 10 pattern sample papers with marking schemes, past 5-10 year solved papers, and timed mock practice sets for all subjects.
            </p>

            {/* Live Subject Filter Search */}
            <div className="pt-2 max-w-lg">
              <div className="relative flex items-center bg-white/95 rounded-2xl shadow-xl p-1.5 pl-4 border border-white/20 focus-within:ring-3 focus-within:ring-red-500/30">
                <Search className="w-4 h-4 text-slate-400 shrink-0 mr-3 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search subject or topic in Class 9 (Maths, Science, Hindi...)"
                  className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs sm:text-sm font-medium outline-none pr-2"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="p-1 mr-1 text-slate-400 hover:text-slate-600 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full flex-1 space-y-8">
        
        {/* ========================================================================= */}
        {/* 1. THE 4 MAIN CATEGORY BOXES IN ONE LINE (Syllabus, Sample Paper, PYQ, Practice) */}
        {/* ========================================================================= */}
        <section aria-label="Class 9 Material Categories">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span>Select Material Type</span>
                <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                  4 in 1 Line
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Click any box below to switch the subject list directly:
              </p>
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Active: <strong className="text-red-600 font-bold">{activeCategory}</strong>
            </div>
          </div>

          {/* 4 Cards Grid - Exactly 4 in One Line on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
            {materialCategories.map((item) => {
              const isSelected = activeCategory === item.key

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveCategory(item.key)}
                  className={`relative bg-white rounded-2xl border transition-all duration-300 p-5 flex flex-col justify-between overflow-hidden group cursor-pointer ${
                    isSelected
                      ? 'border-red-500 shadow-xl ring-2 ring-red-500 bg-red-50/15'
                      : 'border-slate-200/90 hover:border-slate-300 hover:shadow-lg'
                  }`}
                >
                  {/* Top Colored Accent Stripe */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 transition-colors ${
                      isSelected ? 'bg-red-600' : 'bg-slate-200 group-hover:bg-red-400'
                    }`}
                  />

                  {/* Card Body */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all ${
                          isSelected
                            ? 'bg-red-50 border-red-200 scale-105'
                            : 'bg-slate-50 border-slate-200/80 group-hover:scale-105 group-hover:bg-red-50'
                        }`}
                      >
                        {item.icon}
                      </div>

                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          isSelected
                            ? 'bg-red-600 text-white'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        {item.subtitle}
                      </span>
                      <h3
                        className={`text-lg font-black tracking-tight transition-colors mt-0.5 ${
                          isSelected ? 'text-red-600' : 'text-slate-900 group-hover:text-red-600'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-slate-100 mt-3">
                    <button
                      type="button"
                      className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all select-none ${
                        isSelected
                          ? 'bg-red-600 text-white shadow-sm shadow-red-500/25 ring-1 ring-red-600'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Selected & Active</span>
                        </>
                      ) : (
                        <>
                          <span>{item.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                </div>
              )
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. SUBJECT LIST FOR ACTIVE CATEGORY (Maths, Science, SST, English, Hindi)  */}
        {/* ========================================================================= */}
        <section aria-label="Subject List" className="space-y-4 pt-4 border-t border-slate-200">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span>Class 9 {activeCategory} Subjects</span>
                <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                  {filteredSubjects.length} {filteredSubjects.length === 1 ? 'Subject' : 'Subjects'}
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Download verified chapter-wise PDFs and blueprints strictly prepared as per CBSE 2026-27:
              </p>
            </div>

            <span className="text-xs text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1 self-start sm:self-auto">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>100% Free Downloads</span>
            </span>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSubjects.map((subj) => (
              <div
                key={subj.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-red-400 hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Top Subject Tag & Code */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-md">
                      {subj.code}
                    </span>
                    <span className="font-semibold text-slate-400 text-[11px]">
                      {subj.totalSets}
                    </span>
                  </div>

                  {/* Subject Name */}
                  <h4 className="text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors">
                    {subj.name}
                  </h4>

                  {/* Topics / Overview */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {subj.topics}
                  </p>

                  {/* Feature Highlights */}
                  {subj.highlights && (
                    <div className="pt-2 border-t border-slate-100 space-y-1">
                      {subj.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                          <Check className="w-3 h-3 text-red-600 stroke-[3] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-5 border-t border-slate-100 mt-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSubjectModal(subj)}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Overview</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDownload(subj.name)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs shadow-red-500/20 active:scale-95 transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 3. WHATSAPP MENTOR ASSISTANCE CARD                                       */}
        {/* ========================================================================= */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
              <WhatsAppIcon className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-black text-slate-900">
                Need Class 9 Handwritten Notes, Marking Schemes or Doubt Help?
              </h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xl">
                Our EducaZone academic mentor desk is available 24/7 on WhatsApp for CBSE Class 9 students and parents.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/919084715552?text=Hello%20EducaZone%20Team%2C%20I%20need%20CBSE%20Class%209%20${encodeURIComponent(activeCategory)}%20study%20material.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-transform active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </main>

      {/* Overview Modal */}
      {selectedSubjectModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden relative">
            <div className="h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 w-full" />
            
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                      {selectedSubjectModal.code}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500">
                      {activeCategory}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mt-1">
                    {selectedSubjectModal.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSubjectModal(null)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                <span className="font-bold text-slate-900 block text-xs">
                  Syllabus & Blueprint Overview:
                </span>
                <p className="leading-relaxed">
                  {selectedSubjectModal.topics}
                </p>
              </div>

              {selectedSubjectModal.highlights && (
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-900 block">
                    Key Inclusions:
                  </span>
                  {selectedSubjectModal.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-red-600 stroke-[3] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedSubjectModal(null)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleDownload(selectedSubjectModal.name)
                    setSelectedSubjectModal(null)
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm shadow-red-500/25 active:scale-95 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF ({selectedSubjectModal.pdfSize})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
