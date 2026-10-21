import { useState, useMemo } from 'react'
import {
  ArrowRight,
  X,
  Filter,
  Check,
  Download,
  BookOpen,
  Sparkles,
  Clock,
  ChevronRight,
  FileText,
  FlaskConical,
  Layers,
  Search,
  ShieldCheck,
  Zap,
  QrCode,
  GraduationCap,
  Calculator,
  Atom,
  Globe,
  LayoutGrid,
  List,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  BookCheck,
  Smartphone,
  MessageCircle,
  Award,
  Share2
} from 'lucide-react'

// Filter Options
const filterBoards = ['CBSE', 'NCERT', 'UP Board']

const filterSessions = [
  '2026-2027',
  '2025-2026',
  '2024-2025',
  '2023-2024'
]

// Tab Metadata with Rich Visuals & Icons
const tabMeta = {
  'Sample Paper': {
    icon: <FileText className="w-4 h-4" />,
    heading: 'Sample Paper',
    tagline: 'CBSE Class 9 Official Question Papers with Step-by-Step Marking Scheme',
    bannerGradient: 'from-[#173313] via-[#22481b] to-[#0f240c]',
    accentColor: '#284a1e',
    badgeText: 'CBSE 2026-27 PATTERN',
    subjects: [
      { id: 'maths', name: 'Mathematics', code: 'MATH-041', totalSets: 'Set 1 to Set 10', pdfSize: '3.8 MB', isPopular: true, topics: 'Number Systems, Polynomials, Coordinate Geometry, Linear Equations, Triangles' },
      { id: 'science', name: 'Science', code: 'SCI-086', totalSets: 'Set 1 to Set 10', pdfSize: '4.1 MB', isPopular: true, topics: 'Matter in Our Surroundings, Fundamental Unit of Life, Motion, Force & Laws' },
      { id: 'sst', name: 'Social Science', code: 'SST-087', totalSets: 'Set 1 to Set 8', pdfSize: '3.2 MB', topics: 'French Revolution, India - Size & Location, What is Democracy, Palampur Economy' },
      { id: 'eng-r1', name: 'English Communicative', code: 'ENG-101', totalSets: 'Set 1 to Set 5', pdfSize: '2.4 MB', topics: 'Reading Skills, Creative Writing Skills with Grammar, Literature Textbook' },
      { id: 'eng-r2', name: 'English Language & Lit', code: 'ENG-184', totalSets: 'Set 1 to Set 5', pdfSize: '2.6 MB', topics: 'Beehive Prose & Poetry, Moments Supplementary Reader Chapters' },
      { id: 'hin-r1', name: 'Hindi Course A', code: 'HIN-002', totalSets: 'Set 1 to Set 5', pdfSize: '2.1 MB', topics: 'Kshitij Bhag 1, Kritika Bhag 1, Vyakaran, Anuched & Patra Lekhan' },
      { id: 'hin-r2', name: 'Hindi Course B', code: 'HIN-085', totalSets: 'Set 1 to Set 5', pdfSize: '2.3 MB', topics: 'Sparsh Bhag 1, Sanchayan Bhag 1, Shabda Aur Pad, Sandhi, Samas' },
    ]
  },
  'Lab Manual': {
    icon: <FlaskConical className="w-4 h-4" />,
    heading: 'Lab Manual',
    tagline: 'Practical Laboratory Experiments, Observations, Viva Voce & Record Book',
    bannerGradient: 'from-[#2b083d] via-[#3d0e57] to-[#180424]',
    accentColor: '#3a0852',
    badgeText: 'PRACTICAL & VIVA COMPANION',
    subjects: [
      { id: 'sci-lab', name: 'Science Practical Manual', code: 'SCI-LAB-01', totalSets: 'Physics, Chem & Bio Experiments', pdfSize: '5.2 MB', isPopular: true, topics: 'True Solution, Suspension & Colloid, Plant & Animal Tissues, Reflection Laws' },
      { id: 'sst-lab', name: 'Social Science Project Book', code: 'SST-LAB-01', totalSets: 'Disaster Management & Project Work', pdfSize: '4.5 MB', isPopular: true, topics: 'Hazard Mitigation, Man-made Disasters, Relief Measures & Map Projects' },
      { id: 'math-lab', name: 'Maths Activity Manual', code: 'MATH-LAB-01', totalSets: 'NCERT Hands-on Math Projects', pdfSize: '3.1 MB', topics: 'Square Root Spiral, Algebraic Identities Geometrical Verification, Coordinate Plotting' },
    ]
  },
  'Question Bank': {
    icon: <Layers className="w-4 h-4" />,
    heading: 'Question Bank',
    tagline: 'Chapterwise Solved Questions with Competency-Based MCQs & Case Studies',
    bannerGradient: 'from-[#4e1111] via-[#6d1616] to-[#300808]',
    accentColor: '#6e1414',
    badgeText: 'COMPETENCY & CASE-BASED',
    subjects: [
      { id: 'math-qb', name: 'Mathematics Question Bank', code: 'MATH-QB', totalSets: 'Chapter 1 to 14 Solved Bank', pdfSize: '4.8 MB', isPopular: true, topics: 'Assertion-Reason, 2/3/5 Marks Subjective, HOTS & Case Study Questions' },
      { id: 'sci-qb', name: 'Science Question Bank', code: 'SCI-QB', totalSets: 'Complete Theory + Numericals', pdfSize: '5.5 MB', isPopular: true, topics: 'Formula Bank, Chemical Equations, Ray Diagrams & NCERT Exemplar' },
      { id: 'sst-qb', name: 'Social Science Question Bank', code: 'SST-QB', totalSets: 'History, Civics, Geo, Eco', pdfSize: '4.2 MB', topics: 'Timeline Events, Map Points, Constitutional Provisions & Case Passages' },
      { id: 'eng-qb', name: 'English Question Bank', code: 'ENG-QB', totalSets: 'Beehive & Moments Solved', pdfSize: '3.6 MB', topics: 'Extract-based Questions, Character Sketches, Thematic Short & Long Answers' },
      { id: 'hin-qb', name: 'Hindi Question Bank', code: 'HIN-QB', totalSets: 'Grammar & Literature Bank', pdfSize: '3.4 MB', topics: 'Padvichar, Sandhi, Samas, Kavyakhand & Gadyakhand Prashnottar' },
    ]
  },
  'NCERT Solutions': {
    icon: <BookOpen className="w-4 h-4" />,
    heading: 'NCERT Solutions',
    tagline: 'Comprehensive Step-by-Step Textbook Intext & Chapter Exercise Answers',
    bannerGradient: 'from-[#0b1226] via-[#141e3d] to-[#070b1a]',
    accentColor: '#0f172a',
    badgeText: '100% NCERT AUTHENTIC',
    subjects: [
      { id: 'math-ncert', name: 'Mathematics NCERT Solutions', code: 'MATH-NCERT', totalSets: 'All Intext & Exercise Qs', pdfSize: '3.9 MB', isPopular: true, topics: 'Exercise 1.1 to 14.4 Complete Solved Proofs & Geometric Constructions' },
      { id: 'sci-ncert', name: 'Science NCERT Solutions', code: 'SCI-NCERT', totalSets: 'Physics, Chem & Bio Solutions', pdfSize: '4.3 MB', isPopular: true, topics: 'Chapter End Exercises, In-between Activity Explanations & Numerical Proofs' },
      { id: 'sst-ncert', name: 'Social Science NCERT Solutions', code: 'SST-NCERT', totalSets: 'Complete History, Geo, Civics', pdfSize: '3.8 MB', topics: 'All NCERT Questions with Points-wise Model Answers & Definitions' },
      { id: 'eng-ncert', name: 'English NCERT Solutions', code: 'ENG-NCERT', totalSets: 'Beehive & Moments Solutions', pdfSize: '2.9 MB', topics: 'Thinking About The Text & Language Questions Solved by Faculty' },
      { id: 'hin-ncert', name: 'Hindi NCERT Solutions', code: 'HIN-NCERT', totalSets: 'Kshitij & Kritika Solutions', pdfSize: '2.7 MB', topics: 'Prashna Abhyas & Rachna Aur Abhivyakti with High Scoring Tips' },
    ]
  }
}

const filterBookTypes = Object.keys(tabMeta)

// ============================================================================
// 3D-STYLED VECTOR ILLUSTRATIONS MATCHING USER'S IMAGE 1
// ============================================================================

// 1. Math 3D Calculator & Geometry Illustration
function MathIllustration() {
  return (
    <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 80 80" fill="none">
      <rect x="18" y="12" width="44" height="56" rx="10" fill="#3B82F6" />
      <rect x="18" y="12" width="44" height="52" rx="10" fill="#60A5FA" />
      <rect x="24" y="18" width="32" height="14" rx="4" fill="#1E3A8A" />
      <text x="52" y="29" fill="#93C5FD" fontSize="9" fontWeight="900" textAnchor="end" fontFamily="monospace">9×9=81</text>
      <circle cx="28" cy="40" r="3" fill="#FFFFFF" />
      <circle cx="36" cy="40" r="3" fill="#FFFFFF" />
      <circle cx="44" cy="40" r="3" fill="#FFFFFF" />
      <circle cx="52" cy="40" r="3" fill="#F59E0B" />
      <circle cx="28" cy="48" r="3" fill="#FFFFFF" />
      <circle cx="36" cy="48" r="3" fill="#FFFFFF" />
      <circle cx="44" cy="48" r="3" fill="#FFFFFF" />
      <circle cx="52" cy="48" r="3" fill="#EF4444" />
      <circle cx="28" cy="56" r="3" fill="#FFFFFF" />
      <circle cx="36" cy="56" r="3" fill="#FFFFFF" />
      <rect x="42" y="53" width="13" height="6" rx="3" fill="#10B981" />
      <path d="M56 8 L66 14 L66 26 L56 20 Z" fill="#F59E0B" opacity="0.9" />
      <path d="M46 14 L56 8 L66 14 L56 20 Z" fill="#FBBF24" />
      <path d="M46 14 L56 20 L56 32 L46 26 Z" fill="#D97706" />
    </svg>
  )
}

// 2. Science 3D Atom & Molecules (Matching IIT JEE Atom in Image 1!)
function ScienceIllustration() {
  return (
    <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="40" rx="26" ry="10" transform="rotate(-30 40 40)" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="3 2" />
      <ellipse cx="40" cy="40" rx="26" ry="10" transform="rotate(30 40 40)" stroke="#10B981" strokeWidth="2.5" />
      <ellipse cx="40" cy="40" rx="26" ry="10" transform="rotate(90 40 40)" stroke="#3B82F6" strokeWidth="2.5" />
      <circle cx="18" cy="28" r="3.5" fill="#EF4444" />
      <circle cx="62" cy="52" r="3.5" fill="#3B82F6" />
      <circle cx="40" cy="14" r="3.5" fill="#10B981" />
      <circle cx="40" cy="66" r="3" fill="#F59E0B" />
      <rect x="33" y="33" width="14" height="14" rx="4" fill="#3B82F6" />
      <circle cx="36" cy="36" r="5" fill="#EF4444" />
      <circle cx="45" cy="42" r="6" fill="#10B981" />
      <circle cx="40" cy="38" r="4.5" fill="#F59E0B" />
    </svg>
  )
}

// 3. Social Science 3D Globe on Stand
function SSTIllustration() {
  return (
    <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="68" rx="16" ry="4" fill="#94A3B8" />
      <path d="M38 56 L42 56 L42 68 L38 68 Z" fill="#64748B" />
      <path d="M22 22 A 24 24 0 0 0 40 60 A 24 24 0 0 0 58 22" stroke="#64748B" strokeWidth="3" fill="none" />
      <circle cx="40" cy="36" r="20" fill="#38BDF8" />
      <path d="M32 26 C36 24 44 26 42 32 C40 38 34 36 30 38 C28 40 32 46 36 44 C42 42 46 48 42 52 C36 56 26 50 24 42 C22 34 28 28 32 26 Z" fill="#22C55E" opacity="0.9" />
      <path d="M48 24 C52 26 56 32 54 36 C52 40 48 38 46 34 C44 30 46 26 48 24 Z" fill="#22C55E" opacity="0.9" />
      <ellipse cx="40" cy="36" rx="20" ry="6" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" fill="none" />
      <circle cx="42" cy="30" r="2.5" fill="#EF4444" />
    </svg>
  )
}

// 4. English 3D Literature Book & Quill
function EnglishIllustration() {
  return (
    <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 80 80" fill="none">
      <path d="M16 48 C24 44 36 44 40 47 C44 44 56 44 64 48 L64 30 C56 26 44 26 40 29 C36 26 24 26 16 30 Z" fill="#FFFFFF" />
      <path d="M16 48 L16 52 C24 48 36 48 40 51 C44 48 56 48 64 52 L64 48 C56 44 44 44 40 47 C36 44 24 44 16 48 Z" fill="#E2E8F0" />
      <path d="M14 53 C23 49 36 49 40 52 C44 49 57 49 66 53 L66 51 C57 47 44 47 40 50 C36 47 23 47 14 51 Z" fill="#DC2626" />
      <path d="M39 29 L39 44 L41 42 L43 44 L43 29 Z" fill="#F59E0B" />
      <path d="M52 14 C44 18 42 28 36 42 L38 43 C46 32 58 20 62 10 Z" fill="#F43F5E" />
      <path d="M36 42 L34 46 L38 43 Z" fill="#FBBF24" />
      <line x1="22" y1="34" x2="34" y2="34" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="38" x2="32" y2="38" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="46" y1="34" x2="58" y2="34" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="46" y1="38" x2="54" y2="38" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// 5. Hindi 3D Manuscript Scroll with Akshar 'अ'
function HindiIllustration() {
  return (
    <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 80 80" fill="none">
      <rect x="20" y="20" width="40" height="42" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
      <rect x="16" y="16" width="48" height="8" rx="4" fill="#D97706" />
      <rect x="16" y="58" width="48" height="8" rx="4" fill="#D97706" />
      <circle cx="50" cy="50" r="7" fill="#DC2626" />
      <circle cx="50" cy="50" r="5" fill="#EF4444" />
      <text x="50" y="53" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">★</text>
      <text x="36" y="44" fill="#92400E" fontSize="22" fontWeight="900" fontFamily="sans-serif">अ</text>
    </svg>
  )
}

// 6. Cute 3D School Backpack (Matching Image 1's Pre Foundation / School Boards card!)
function BackpackIllustration() {
  return (
    <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 80 80" fill="none">
      <path d="M33 22 C33 16 47 16 47 22" stroke="#B45309" strokeWidth="3" fill="none" />
      <rect x="22" y="22" width="36" height="42" rx="10" fill="#F97316" />
      <rect x="24" y="24" width="32" height="38" rx="8" fill="#FB923C" />
      <path d="M22 34 C28 36 52 36 58 34 L58 28 C58 24 54 22 50 22 L30 22 C26 22 22 24 22 28 Z" fill="#EA580C" />
      <rect x="28" y="38" width="24" height="20" rx="5" fill="#FBBF24" />
      <rect x="36" y="44" width="8" height="2" rx="1" fill="#1F2937" />
      <rect x="18" y="36" width="5" height="16" rx="2" fill="#FDE047" />
      <rect x="57" y="36" width="5" height="16" rx="2" fill="#FDE047" />
    </svg>
  )
}

// 7. Lab Manual Chemistry Beaker 3D Illustration
function LabIllustration() {
  return (
    <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md" viewBox="0 0 80 80" fill="none">
      <path d="M35 16 L45 16 L45 28 L56 50 C58 54 55 58 50 58 L30 58 C25 58 22 54 24 50 L35 28 Z" fill="#E0E7FF" opacity="0.6" stroke="#818CF8" strokeWidth="2" />
      <path d="M28 48 C34 46 46 50 52 48 L50 56 C49 57 48 57 47 57 L33 57 C32 57 31 57 30 56 Z" fill="#A855F7" />
      <circle cx="36" cy="44" r="2.5" fill="#C084FC" />
      <circle cx="44" cy="40" r="1.5" fill="#C084FC" />
      <circle cx="39" cy="34" r="2" fill="#C084FC" />
      <rect x="33" y="14" width="14" height="4" rx="2" fill="#6366F1" />
      <line x1="33" y1="42" x2="37" y2="42" stroke="#818CF8" strokeWidth="1.5" />
      <line x1="32" y1="48" x2="36" y2="48" stroke="#818CF8" strokeWidth="1.5" />
    </svg>
  )
}

// Helper: Custom Pastel Arc & Illustration configuration per subject matching Image 1
function getSubjectCardConfig(subject) {
  const name = subject.name.toLowerCase()
  const code = subject.code || 'CBSE-09'
  const sets = subject.totalSets || 'All Sets'

  if (name.includes('math')) {
    return {
      arcBg: 'bg-blue-50/90',
      illustration: <MathIllustration />,
      pills: ['Class 9', sets, code, 'Soon']
    }
  }
  if (name.includes('sci')) {
    return {
      arcBg: 'bg-amber-50/80', // Matching Image 1 IIT JEE atom background!
      illustration: <ScienceIllustration />,
      pills: ['Class 9', sets, code, 'Soon']
    }
  }
  if (name.includes('sst') || name.includes('social')) {
    return {
      arcBg: 'bg-cyan-50/80',
      illustration: <SSTIllustration />,
      pills: ['Class 9', sets, code, 'Soon']
    }
  }
  if (name.includes('eng')) {
    return {
      arcBg: 'bg-rose-50/80',
      illustration: <EnglishIllustration />,
      pills: ['Class 9', sets, code, 'Soon']
    }
  }
  if (name.includes('hin')) {
    return {
      arcBg: 'bg-orange-50/80',
      illustration: <HindiIllustration />,
      pills: ['Class 9', sets, code, 'Soon']
    }
  }
  if (name.includes('lab') || name.includes('practical')) {
    return {
      arcBg: 'bg-purple-50/90',
      illustration: <LabIllustration />,
      pills: ['Class 9', sets, code, 'Soon']
    }
  }
  return {
    arcBg: 'bg-yellow-50/90',
    illustration: <BackpackIllustration />,
    pills: ['Class 9', sets, code, 'Soon']
  }
}

// Helper: Custom visual styling and icons based on subject name
function getSubjectTheme(subjectName) {
  const name = subjectName.toLowerCase()
  if (name.includes('math')) {
    return {
      icon: <Calculator className="w-5 h-5" />,
      accentGradient: 'from-blue-600 to-indigo-700',
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200/80',
      iconContainer: 'bg-gradient-to-br from-blue-500/10 to-indigo-500/15 text-blue-600 border border-blue-200/60',
      category: 'Mathematics & Logic',
    }
  }
  if (name.includes('sci')) {
    return {
      icon: <Atom className="w-5 h-5" />,
      accentGradient: 'from-emerald-600 to-teal-700',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200/80',
      iconContainer: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/15 text-emerald-600 border border-emerald-200/60',
      category: 'Science & Experiments',
    }
  }
  if (name.includes('sst') || name.includes('social')) {
    return {
      icon: <Globe className="w-5 h-5" />,
      accentGradient: 'from-amber-600 to-orange-700',
      badgeColor: 'text-amber-700 bg-amber-50 border-amber-200/80',
      iconContainer: 'bg-gradient-to-br from-amber-500/10 to-orange-500/15 text-amber-600 border border-amber-200/60',
      category: 'Social Studies & Civics',
    }
  }
  if (name.includes('eng')) {
    return {
      icon: <FileText className="w-5 h-5" />,
      accentGradient: 'from-rose-600 to-red-700',
      badgeColor: 'text-rose-700 bg-rose-50 border-rose-200/80',
      iconContainer: 'bg-gradient-to-br from-rose-500/10 to-red-500/15 text-rose-600 border border-rose-200/60',
      category: 'English Language & Lit',
    }
  }
  if (name.includes('hin')) {
    return {
      icon: <BookOpen className="w-5 h-5" />,
      accentGradient: 'from-orange-600 to-amber-700',
      badgeColor: 'text-orange-700 bg-orange-50 border-orange-200/80',
      iconContainer: 'bg-gradient-to-br from-orange-500/10 to-amber-500/15 text-orange-600 border border-orange-200/60',
      category: 'Hindi Sahitya & Vyakaran',
    }
  }
  return {
    icon: <BookOpen className="w-5 h-5" />,
    accentGradient: 'from-slate-700 to-slate-900',
    badgeColor: 'text-slate-700 bg-slate-50 border-slate-200/80',
    iconContainer: 'bg-gradient-to-br from-slate-500/10 to-slate-600/15 text-slate-700 border border-slate-200/60',
    category: 'Core Curriculum',
  }
}

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Class9({ onNavigateHome }) {
  // State
  const [selectedBoard, setSelectedBoard] = useState('CBSE')
  const [selectedSession, setSelectedSession] = useState('2026-2027')
  const [activeTab, setActiveTab] = useState('Sample Paper')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'compact'

  // Modal & Toast
  const [selectedSubjectModal, setSelectedSubjectModal] = useState(null)
  const [downloadToast, setDownloadToast] = useState(null)

  // Current config
  const currentTabConfig = tabMeta[activeTab] || tabMeta['Sample Paper']

  // Filtered subjects based on search query
  const filteredSubjects = useMemo(() => {
    const list = currentTabConfig.subjects || []
    if (!searchQuery.trim()) return list
    const q = searchQuery.toLowerCase().trim()
    return list.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.code.toLowerCase().includes(q) ||
        (s.topics && s.topics.toLowerCase().includes(q))
    )
  }, [currentTabConfig, searchQuery])

  // Download Simulation
  const handleDownloadBlueprint = () => {
    setDownloadToast(`EducaZone ${selectedBoard} Class 9 (${activeTab}) Syllabus Blueprint Downloaded!`)
    setTimeout(() => setDownloadToast(null), 3500)
  }

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

      {/* ========================================================================= */}
      {/* 1. TOP FULL-WIDTH HERO SECTION (Relocated & Expanded to Full Width)        */}
      {/* ========================================================================= */}
      <section className={`w-full bg-gradient-to-br ${currentTabConfig.bannerGradient} text-white relative overflow-hidden transition-all duration-500 border-b border-white/10 shadow-lg`}>
        {/* Ambient Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-black/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
          
          {/* Breadcrumb Navigation inside Hero */}
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
            <span className="text-white/80 font-medium">Books Solution</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-white font-bold bg-white/15 px-2 py-0.5 rounded">Class 9</span>
          </nav>

          {/* Hero Row: Left Title & Live Search | Right 3D Book Graphic */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="max-w-2xl space-y-3.5">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  <span>2026-27 Book QR Companion</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-bold text-white/90 border border-white/20">
                  {selectedBoard} Board • {selectedSession}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                Class 9 {currentTabConfig.heading}
              </h1>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                {currentTabConfig.tagline}. Scanned from your physical EducaZone book? Access step-by-step verified solutions and marking schemes directly on your device.
              </p>

              {/* Embedded Hero Live Search Bar */}
              <div className="pt-2 max-w-lg">
                <div className="relative flex items-center bg-white/95 rounded-2xl shadow-xl p-1.5 pl-4 border border-white/20 focus-within:ring-3 focus-within:ring-red-500/30">
                  <Search className="w-4.5 h-4.5 text-slate-400 shrink-0 mr-3 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search subject or topic (Maths, Science, English...)"
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
                  <div className="shrink-0 bg-red-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl select-none">
                    Live Filter
                  </div>
                </div>
              </div>

              {/* Feature Highlights Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px] text-white/85">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  <span>100% NCERT & CBSE Aligned</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  <span>Chapter-by-Chapter Solutions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  <span>24/7 WhatsApp Mentor Support</span>
                </div>
              </div>

            </div>

            {/* Right: 3D Interactive Book Showcase */}
            <div className="self-center lg:self-auto shrink-0 relative pt-2 lg:pt-0">
              <div className="relative group select-none">
                
                {/* Floating QR Badge */}
                <div className="absolute -top-3.5 -right-3.5 z-20 bg-red-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-2xl border-2 border-white flex items-center gap-1.5 animate-bounce">
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Scan in Book 📲</span>
                </div>

                {/* 3D Book Graphic */}
                <div className="w-32 sm:w-36 h-44 sm:h-48 rounded-r-xl rounded-l-xs bg-white text-slate-900 shadow-2xl border-y border-r border-slate-300 flex flex-col justify-between p-3 transform -rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 relative">
                  {/* Spine Depth Shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-slate-600 via-slate-300 to-white border-r border-slate-300 rounded-l-xs" />
                  
                  {/* Book Top Header */}
                  <div className="pl-3 pt-1">
                    <span className="text-[8px] font-black tracking-widest text-red-600 uppercase block">EDUCAZONE</span>
                    <span className="text-[9px] font-extrabold text-slate-800 leading-tight block mt-0.5 line-clamp-2">
                      {currentTabConfig.heading.toUpperCase()}
                    </span>
                  </div>

                  {/* Book Middle Crest */}
                  <div className="pl-3 my-auto">
                    <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-center shadow-inner">
                      <span className="text-[11px] font-black text-slate-900 block leading-tight">CLASS 9</span>
                      <span className="text-[7.5px] font-bold text-red-600 uppercase block mt-0.5">2026-27 EDITION</span>
                    </div>
                  </div>

                  {/* Book Footer */}
                  <div className="pl-3 pt-1 border-t border-slate-200 flex items-center justify-between text-[7px] text-slate-600 font-bold">
                    <span>Verified Companion</span>
                    <BookCheck className="w-3 h-3 text-red-600" />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STICKY HORIZONTAL COMMAND & CONTROL BAR (Category Tabs + Quick Filters) */}
      {/* ========================================================================= */}
      <nav aria-label="Category and Filter Controls" className="sticky top-18 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Segmented Category Tabs */}
          <div className="w-full md:w-auto flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {filterBookTypes.map((tab) => {
              const isActive = activeTab === tab
              const meta = tabMeta[tab]
              const count = meta?.subjects?.length || 0

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap select-none ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                      : 'bg-slate-100/80 hover:bg-slate-200/70 text-slate-700 hover:text-red-600'
                  }`}
                >
                  <span className={isActive ? 'text-white' : 'text-slate-500'}>
                    {meta.icon}
                  </span>
                  <span>{tab}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white text-slate-600 border border-slate-200'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right Controls: Board Selector + Session Dropdown + View Switcher */}
          <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-2.5 pt-1 md:pt-0 border-t md:border-t-0 border-slate-100">
            
            {/* Quick Board Selector */}
            <div className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 text-xs font-bold">
              {filterBoards.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setSelectedBoard(b)}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    selectedBoard === b
                      ? 'bg-white text-red-600 shadow-2xs font-black'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>

            {/* Session Pill */}
            <div className="flex items-center gap-1.5 bg-slate-100/90 px-3 py-1.5 rounded-xl border border-slate-200/80 text-xs font-bold text-slate-800">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{selectedSession}</span>
            </div>

            {/* View Mode Toggle: Grid vs Compact */}
            <div className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200/80">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs font-bold flex items-center transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-red-600 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Detailed Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('compact')}
                className={`p-1.5 rounded-lg text-xs font-bold flex items-center transition-colors cursor-pointer ${
                  viewMode === 'compact'
                    ? 'bg-white text-red-600 shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Compact List View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 3. MAIN WORKSPACE: RE-ARRANGED 2-PANE LAYOUT                              */}
      {/* Left (70%): Subject Cards Grid | Right (30%): Companion Inspector        */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9 w-full flex-1">
        
        <div className="flex flex-col lg:flex-row gap-7 lg:gap-8 items-start">
          
          {/* =================================================== */}
          {/* LEFT AREA: PRIMARY SUBJECT SHOWCASE (70% Prominence) */}
          {/* =================================================== */}
          <div className="flex-1 w-full space-y-4">
            
            {/* Active Scope Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <span>{activeTab}</span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                    {filteredSubjects.length} {filteredSubjects.length === 1 ? 'Subject' : 'Subjects'}
                  </span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Showing official companion solutions for <strong className="text-slate-700">{selectedBoard} Board ({selectedSession})</strong>
                </p>
              </div>

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-bold text-red-600 hover:text-red-700 underline"
                >
                  Clear "{searchQuery}"
                </button>
              )}
            </div>

            {/* SUBJECT CARDS */}
            {filteredSubjects.length === 0 ? (
              <div className="p-10 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
                <Search className="w-10 h-10 text-slate-400 mx-auto" />
                <h4 className="text-base font-bold text-slate-800">No subjects found for "{searchQuery}"</h4>
                <p className="text-xs text-slate-500">Try searching for Maths, Science, English, SST, or Hindi.</p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 bg-red-600 text-white rounded-xl text-xs font-bold shadow-xs hover:bg-red-700 cursor-pointer"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              /* ========================================================================= */
              /* SUBJECT CARDS MATCHING EXACT DESIGN OF USER'S IMAGE 1                     */
              /* ========================================================================= */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredSubjects.map((subject) => {
                  const cardConfig = getSubjectCardConfig(subject)
                  return (
                    <div
                      key={subject.id}
                      onClick={() => setSelectedSubjectModal(subject)}
                      className="relative bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden group cursor-pointer min-h-[195px]"
                    >
                      {/* Right Side Signature Pastel Arc + 3D Illustration (Identical to Image 1!) */}
                      <div
                        className={`absolute -right-6 top-1/2 -translate-y-1/2 w-36 h-36 sm:w-40 sm:h-40 rounded-full ${cardConfig.arcBg} flex items-center justify-center pointer-events-none group-hover:scale-105 transition-transform duration-300`}
                      >
                        <div className="mr-5">
                          {cardConfig.illustration}
                        </div>
                      </div>

                      {/* Left Content (Matches Image 1: Bold Title at top + pills row below) */}
                      <div className="relative z-10 max-w-[62%] sm:max-w-[66%] space-y-3">
                        {/* Big Bold Title */}
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-red-600 transition-colors leading-tight">
                          {subject.name}
                        </h3>

                        {/* Pills Row (Matching Image 1: Class 11, Class 12, Dropper style rounded pills) */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                          {cardConfig.pills.map((pill, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-semibold text-slate-600 bg-white border border-slate-200/90 rounded-full px-3 py-1 shadow-2xs whitespace-nowrap"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action Link (Matching Image 1: "Explore Category ➔") */}
                      <div className="relative z-10 pt-5">
                        <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 group-hover:text-red-600 transition-colors">
                          <span>Explore Category</span>
                          <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1.5 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

          </div>

          {/* ================================================================= */}
          {/* RIGHT AREA: RE-POSITIONED COMPANION INSPECTOR & HELPER (30% Width) */}
          {/* ================================================================= */}
          <aside className="w-full lg:w-80 shrink-0 space-y-4 lg:sticky lg:top-36">
            
            {/* Widget 1: Active Edition Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                  BOOK COMPANION SPECS
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Official Edition
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500">Target Class:</span>
                  <span className="font-black text-slate-900">Class 9 (IX)</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500">Curriculum Board:</span>
                  <span className="font-bold text-red-600">{selectedBoard} Board</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500">Academic Year:</span>
                  <span className="font-bold text-slate-800">{selectedSession}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500">Sync Status:</span>
                  <span className="font-semibold text-emerald-600 flex items-center gap-1">
                    <Check className="w-3 h-3 stroke-[3]" /> Active QR Portal
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleDownloadBlueprint}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Syllabus Blueprint</span>
              </button>
            </div>


            {/* Widget 3: WhatsApp Mentor Support */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl p-4 shadow-md space-y-2.5">
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-5 h-5" />
                <h4 className="text-xs font-black uppercase tracking-wider">
                  Doubt in Class 9 Chapters?
                </h4>
              </div>
              <p className="text-[11px] text-emerald-100 leading-relaxed">
                Our academic subject faculty is available on WhatsApp to assist with doubts, question queries, and formula sheets.
              </p>
              <a
                href="https://wa.me/919084715552?text=Hello%20EducaZone%20Team%2C%20I%20have%20purchased%20the%20Class%209%20Book%20and%20scanned%20the%20QR%20code.%20I%20need%20help%20with%20chapter%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white text-emerald-800 text-xs font-extrabold hover:bg-emerald-50 transition-all shadow-2xs"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </aside>

        </div>

      </main>

      {/* ========================================================================= */}
      {/* 4. BOTTOM 3-PILLAR ACADEMIC TRUST STRIP                                   */}
      {/* ========================================================================= */}
      <section className="border-t border-slate-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-200/80">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">100% Curriculum Sync</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Formatted strictly according to the latest CBSE sample question paper and marking schemes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-200/80">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Zero-Wait Mobile Access</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  High-speed CDN optimized for mobile scanning right beside your study table.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-200/80">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Senior Faculty Reviewed</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  All solutions and viva voce Q&As prepared by experienced CBSE school educators.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SUBJECT DETAIL MODAL                                                   */}
      {/* ========================================================================= */}
      {selectedSubjectModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden relative">
            
            {/* Top Red Stripe */}
            <div className="h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 w-full" />

            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-start justify-between bg-gradient-to-b from-slate-50 to-white">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-red-50 text-red-600 border border-red-200/80">
                    {selectedBoard} • {selectedSession}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">
                    {selectedSubjectModal.code}
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  {selectedSubjectModal.name}
                </h3>
                <p className="text-xs text-slate-500">
                  {activeTab} • Official Physical Book Companion
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSubjectModal(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Coming Soon & Chapter Readiness */}
            <div className="p-6 space-y-4">
              
              {/* Status Alert Banner */}
              <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90 text-xs text-amber-950 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-amber-100 text-amber-800">
                    <Clock className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                    <span>In Final Review for 2026-27</span>
                  </div>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded">
                    Phase 1 Upload
                  </span>
                </div>
                <p className="leading-relaxed">
                  The verified step-by-step solutions, viva voce answers, and practice paper marking schemes for <strong>{selectedSubjectModal.name}</strong> are currently in final proofreading by our editorial faculty.
                </p>
              </div>

              {/* Publication Specs */}
              <div className="rounded-2xl border border-slate-200 divide-y divide-slate-100 text-xs bg-slate-50/40">
                <div className="p-3 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Digital Companion Status:</span>
                  <span className="font-extrabold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
                    Uploading Very Soon
                  </span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Included Volume:</span>
                  <span className="font-bold text-slate-800">{selectedSubjectModal.totalSets}</span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Curriculum Standard:</span>
                  <span className="font-bold text-slate-800">{selectedBoard} Updated Syllabus</span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Physical Book QR Sync:</span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 stroke-[3]" /> Active QR Link
                  </span>
                </div>
              </div>

              {/* Instant WhatsApp Priority Access */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <span className="font-bold text-emerald-900 block">Need early access to this subject?</span>
                  <span className="text-[11px] text-emerald-700 block">Message our team to receive direct PDF answers on WhatsApp.</span>
                </div>
                <a
                  href={`https://wa.me/919084715552?text=Hello%20EducaZone%20Team%2C%20I%20scanned%20the%20Class%209%20QR%20code%20and%20need%20urgent%20solutions%20for%20${encodeURIComponent(selectedSubjectModal.name)}%20(${encodeURIComponent(activeTab)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] shadow-2xs inline-flex items-center gap-1"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Request</span>
                </a>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between gap-2.5">
              <span className="text-[11px] font-bold text-slate-400 hidden sm:inline">
                EducaZone QR Portal
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedSubjectModal(null)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-white text-xs font-bold cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={`https://wa.me/919084715552?text=Hello%20EducaZone%20Team%2C%20I%20scanned%20the%20Class%209%20QR%20code%20and%20need%20urgent%20solutions%20for%20${encodeURIComponent(selectedSubjectModal.name)}%20(${encodeURIComponent(activeTab)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
