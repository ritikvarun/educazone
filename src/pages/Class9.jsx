import { useState, useMemo } from 'react'
import {
  BookOpen,
  Download,
  FileText,
  Search,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Eye,
  Award,
  HelpCircle,
  X,
  Layers,
  GraduationCap
} from 'lucide-react'

// Class 9 Chapter Data for CBSE / NCERT
const class9Chapters = [
  // Mathematics
  {
    id: 'math-ch1',
    subject: 'Mathematics',
    subjectId: 'math',
    chapterNumber: 1,
    title: 'Number Systems',
    description: 'Irrational numbers, real numbers and their decimal expansions, operations on real numbers, laws of exponents.',
    exercises: ['Ex 1.1', 'Ex 1.2', 'Ex 1.3', 'Ex 1.4', 'Ex 1.5'],
    totalQuestions: 28,
    pdfSize: '2.4 MB',
    difficulty: 'Medium',
    isImportant: true,
    solutions: [
      { q: 'Q1: Is zero a rational number? Can you write it in the form p/q, where p and q are integers and q ≠ 0?', a: 'Yes, zero is a rational number. It can be written as 0/1, 0/2, 0/5, etc., where numerator is 0 and denominator is any non-zero integer.' },
      { q: 'Q2: Find five rational numbers between 3/5 and 4/5.', a: 'Multiply numerator and denominator by 6: 3/5 = 18/30 and 4/5 = 24/30. Five rational numbers are: 19/30, 20/30, 21/30, 22/30, 23/30.' },
      { q: 'Q3: State whether every integer is a rational number.', a: 'Yes, every integer m can be represented in the form m/1, where 1 is non-zero, hence it is a rational number.' }
    ]
  },
  {
    id: 'math-ch2',
    subject: 'Mathematics',
    subjectId: 'math',
    chapterNumber: 2,
    title: 'Polynomials',
    description: 'Degree of polynomials, zeroes of a polynomial, Remainder Theorem, Factor Theorem, algebraic identities.',
    exercises: ['Ex 2.1', 'Ex 2.2', 'Ex 2.3', 'Ex 2.4'],
    totalQuestions: 35,
    pdfSize: '3.1 MB',
    difficulty: 'Hard',
    isImportant: true,
    solutions: [
      { q: 'Q1: Which of the following expressions are polynomials in one variable: 4x² - 3x + 7?', a: '4x² - 3x + 7 has exponents of x as 2 and 1, which are whole numbers. Hence, it is a polynomial in one variable.' },
      { q: 'Q2: Find the value of p(x) = 5x - 4x² + 3 at x = 0 and x = -1.', a: 'At x = 0: p(0) = 5(0) - 4(0)² + 3 = 3. At x = -1: p(-1) = 5(-1) - 4(-1)² + 3 = -5 - 4 + 3 = -6.' }
    ]
  },
  {
    id: 'math-ch3',
    subject: 'Mathematics',
    subjectId: 'math',
    chapterNumber: 3,
    title: 'Coordinate Geometry',
    description: 'Cartesian plane, coordinates of a point, names and terms associated with coordinate axes, quadrants.',
    exercises: ['Ex 3.1', 'Ex 3.2'],
    totalQuestions: 14,
    pdfSize: '1.8 MB',
    difficulty: 'Easy',
    isImportant: false,
    solutions: [
      { q: 'Q1: What is the name of horizontal and vertical lines drawn to determine the position of any point in the Cartesian plane?', a: 'The horizontal line is called the x-axis and the vertical line is called the y-axis.' },
      { q: 'Q2: What is the name of each part of the plane formed by these two lines?', a: 'Each part is called a Quadrant (1st, 2nd, 3rd, and 4th quadrants).' }
    ]
  },
  {
    id: 'math-ch4',
    subject: 'Mathematics',
    subjectId: 'math',
    chapterNumber: 4,
    title: 'Linear Equations in Two Variables',
    description: 'Introduction to linear equations in form ax + by + c = 0, solutions of linear equations, graph representation.',
    exercises: ['Ex 4.1', 'Ex 4.2'],
    totalQuestions: 18,
    pdfSize: '2.1 MB',
    difficulty: 'Medium',
    isImportant: true,
    solutions: [
      { q: 'Q1: The cost of a notebook is twice the cost of a pen. Write a linear equation in two variables to represent this statement.', a: 'Let the cost of a notebook be ₹x and the cost of a pen be ₹y. Given: x = 2y. Standard form: x - 2y = 0.' }
    ]
  },
  {
    id: 'math-ch6',
    subject: 'Mathematics',
    subjectId: 'math',
    chapterNumber: 6,
    title: 'Lines and Angles',
    description: 'Basic terms and definitions, intersecting and non-intersecting lines, pairs of angles, parallel lines, transversals.',
    exercises: ['Ex 6.1', 'Ex 6.2'],
    totalQuestions: 22,
    pdfSize: '2.9 MB',
    difficulty: 'Hard',
    isImportant: true,
    solutions: [
      { q: 'Q1: In Fig, lines AB and CD intersect at O. If ∠AOC + ∠BOE = 70° and ∠BOD = 40°, find ∠BOE and reflex ∠COE.', a: 'Since AB is a line, ∠AOC + ∠COE + ∠BOE = 180°. Given ∠AOC + ∠BOE = 70°, so ∠COE = 180° - 70° = 110°. Reflex ∠COE = 360° - 110° = 250°. Since ∠AOC = ∠BOD = 40° (vertically opposite), ∠BOE = 70° - 40° = 30°.' }
    ]
  },
  {
    id: 'math-ch7',
    subject: 'Mathematics',
    subjectId: 'math',
    chapterNumber: 7,
    title: 'Triangles',
    description: 'Congruence of triangles, SAS, ASA, AAS, SSS, RHS congruence criteria, properties of isosceles triangles.',
    exercises: ['Ex 7.1', 'Ex 7.2', 'Ex 7.3'],
    totalQuestions: 30,
    pdfSize: '3.4 MB',
    difficulty: 'Hard',
    isImportant: true,
    solutions: [
      { q: 'Q1: In quadrilateral ACBD, AC = AD and AB bisects ∠A. Show that ΔABC ≅ ΔABD.', a: 'In ΔABC and ΔABD: 1) AC = AD (Given), 2) ∠CAB = ∠DAB (AB bisects ∠A), 3) AB = AB (Common side). Therefore, by SAS congruence rule, ΔABC ≅ ΔABD. Hence, BC = BD (CPCT).' }
    ]
  },
  {
    id: 'math-ch12',
    subject: 'Mathematics',
    subjectId: 'math',
    chapterNumber: 12,
    title: "Heron's Formula",
    description: 'Area of a triangle by Heron’s formula s = (a+b+c)/2, Area = √[s(s-a)(s-b)(s-c)], real-world applications.',
    exercises: ['Ex 12.1'],
    totalQuestions: 12,
    pdfSize: '1.9 MB',
    difficulty: 'Medium',
    isImportant: false,
    solutions: [
      { q: 'Q1: A traffic signal board indicating "SCHOOL AHEAD" is an equilateral triangle with side a. Find its area using Heron’s formula.', a: 'Semi-perimeter s = (a + a + a)/2 = 3a/2. Area = √[s(s-a)(s-a)(s-a)] = √[(3a/2)(a/2)(a/2)(a/2)] = (√3/4)a².' }
    ]
  },
  {
    id: 'math-ch13',
    subject: 'Mathematics',
    subjectId: 'math',
    chapterNumber: 13,
    title: 'Surface Areas and Volumes',
    description: 'Surface areas and volumes of right circular cones, spheres, hemispheres, combined solids.',
    exercises: ['Ex 13.1', 'Ex 13.2', 'Ex 13.3', 'Ex 13.4'],
    totalQuestions: 38,
    pdfSize: '4.2 MB',
    difficulty: 'Hard',
    isImportant: true,
    solutions: [
      { q: 'Q1: Diameter of the base of a cone is 10.5 cm and its slant height is 10 cm. Find its curved surface area.', a: 'Radius r = 10.5 / 2 = 5.25 cm. Slant height l = 10 cm. Curved Surface Area = πrl = (22/7) × 5.25 × 10 = 22 × 0.75 × 10 = 165 cm².' }
    ]
  },

  // Science
  {
    id: 'sci-ch1',
    subject: 'Science',
    subjectId: 'science',
    chapterNumber: 1,
    title: 'Matter in Our Surroundings',
    description: 'Physical nature of matter, characteristics of particles, states of matter, evaporation and latent heat.',
    exercises: ['Intext Questions', 'Chapter End Exercise'],
    totalQuestions: 24,
    pdfSize: '2.8 MB',
    difficulty: 'Easy',
    isImportant: true,
    solutions: [
      { q: 'Q1: Why does a desert cooler cool better on a hot, dry day?', a: 'On a hot and dry day, high temperature and low humidity accelerate the rate of evaporation of water. Evaporation causes cooling, making the cooler more effective.' },
      { q: 'Q2: How does water kept in an earthen pot (matka) become cool during summer?', a: 'An earthen pot has micro-pores through which water seeps out and continuously evaporates from the surface, absorbing latent heat of vaporisation from the remaining water.' }
    ]
  },
  {
    id: 'sci-ch2',
    subject: 'Science',
    subjectId: 'science',
    chapterNumber: 2,
    title: 'Is Matter Around Us Pure',
    description: 'Mixtures, solutions, suspensions, colloids, separation techniques, physical and chemical changes.',
    exercises: ['Intext Questions', 'Chapter End Exercise'],
    totalQuestions: 26,
    pdfSize: '3.0 MB',
    difficulty: 'Medium',
    isImportant: true,
    solutions: [
      { q: 'Q1: Differentiate between homogeneous and heterogeneous mixtures with examples.', a: 'Homogeneous mixtures have uniform composition throughout (e.g., sugar dissolved in water, air). Heterogeneous mixtures have non-uniform composition with visible boundaries (e.g., sand in water, oil and water).' }
    ]
  },
  {
    id: 'sci-ch5',
    subject: 'Science',
    subjectId: 'science',
    chapterNumber: 5,
    title: 'The Fundamental Unit of Life',
    description: 'Cell structure, plasma membrane, cell wall, nucleus, cytoplasm, cell organelles, plant vs animal cells.',
    exercises: ['Intext Questions', 'Chapter End Exercise'],
    totalQuestions: 22,
    pdfSize: '3.6 MB',
    difficulty: 'Medium',
    isImportant: true,
    solutions: [
      { q: 'Q1: Why is the plasma membrane called a selectively permeable membrane?', a: 'Because it permits the entry and exit of some selected substances while preventing the movement of other materials.' },
      { q: 'Q2: Why are lysosomes known as suicide bags?', a: 'Lysosomes contain powerful digestive enzymes. When cell metabolism gets disturbed or the cell gets damaged, lysosomes may burst and digest their own cell.' }
    ]
  },
  {
    id: 'sci-ch8',
    subject: 'Science',
    subjectId: 'science',
    chapterNumber: 7,
    title: 'Motion',
    description: 'Distance and displacement, uniform and non-uniform motion, velocity, acceleration, 3 equations of motion.',
    exercises: ['Intext Numericals', 'Chapter End Exercise'],
    totalQuestions: 30,
    pdfSize: '3.2 MB',
    difficulty: 'Hard',
    isImportant: true,
    solutions: [
      { q: 'Q1: An athlete completes one round of a circular track of diameter 200 m in 40 s. What will be the distance and displacement at 2 min 20 s?', a: 'Time = 2 min 20 s = 140 s. Number of rounds = 140 / 40 = 3.5 rounds. Radius = 100 m. Distance = 3.5 × 2πr = 7 × (22/7) × 100 = 2200 m. Since he ends up at opposite point of circle, displacement = diameter = 200 m.' }
    ]
  },
  {
    id: 'sci-ch9',
    subject: 'Science',
    subjectId: 'science',
    chapterNumber: 8,
    title: 'Force and Laws of Motion',
    description: 'Balanced and unbalanced forces, Newton’s 1st, 2nd, and 3rd laws of motion, inertia and momentum, conservation of momentum.',
    exercises: ['Numericals', 'Conceptual Questions'],
    totalQuestions: 28,
    pdfSize: '2.9 MB',
    difficulty: 'Hard',
    isImportant: true,
    solutions: [
      { q: 'Q1: Why do you fall in the forward direction when a moving bus brakes to a stop and fall backward when it accelerates from rest?', a: 'Due to inertia of motion, when bus stops, lower body comes to rest with bus while upper body tends to keep moving forward. When accelerating from rest, inertia of rest keeps upper body stationary while lower body moves forward.' }
    ]
  },
  {
    id: 'sci-ch10',
    subject: 'Science',
    subjectId: 'science',
    chapterNumber: 9,
    title: 'Gravitation',
    description: 'Universal law of gravitation, free fall, acceleration due to gravity (g), mass vs weight, Archimedes’ principle, buoyancy.',
    exercises: ['Intext Questions', 'Chapter End Exercise'],
    totalQuestions: 25,
    pdfSize: '2.7 MB',
    difficulty: 'Medium',
    isImportant: true,
    solutions: [
      { q: 'Q1: State Universal Law of Gravitation.', a: 'Every particle attracts every other particle in the universe with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres: F = G(m1 × m2) / r².' }
    ]
  },

  // Social Science
  {
    id: 'sst-ch1',
    subject: 'Social Science',
    subjectId: 'sst',
    chapterNumber: 1,
    title: 'The French Revolution (History)',
    description: 'Storming of the Bastille, French society under Louis XVI, outbreak of revolution, abolition of censorship.',
    exercises: ['Short & Long Answer Questions'],
    totalQuestions: 18,
    pdfSize: '2.2 MB',
    difficulty: 'Medium',
    isImportant: true,
    solutions: [
      { q: 'Q1: Describe the circumstances leading to the outbreak of revolutionary protest in France.', a: '1) Financial bankruptcy from long wars and royal extravagance. 2) Subsistence crisis due to bad harvest and rising bread prices. 3) Heavy tax burden exclusively on the Third Estate. 4) Growing influence of philosophers like Rousseau, Montesquieu, and Locke.' }
    ]
  },
  {
    id: 'sst-ch2',
    subject: 'Social Science',
    subjectId: 'sst',
    chapterNumber: 1,
    title: 'India - Size and Location (Geography)',
    description: 'Latitudinal and longitudinal extent of India, standard meridian (82°30’ E), Indian subcontinent and neighbours.',
    exercises: ['Map Work & NCERT Questions'],
    totalQuestions: 15,
    pdfSize: '1.9 MB',
    difficulty: 'Easy',
    isImportant: false,
    solutions: [
      { q: 'Q1: Why is the 82°30’ E chosen as the Standard Meridian of India?', a: 'Because it passes through the centre of India (Mirzapur, UP), preventing a 2-hour local time lag between Arunachal Pradesh in the east and Gujarat in the west.' }
    ]
  },
  {
    id: 'sst-ch3',
    subject: 'Social Science',
    subjectId: 'sst',
    chapterNumber: 1,
    title: 'What is Democracy? Why Democracy? (Civics)',
    description: 'Features of democracy, free and fair electoral competition, rule of law, arguments for and against democracy.',
    exercises: ['Concept Check & Exercises'],
    totalQuestions: 16,
    pdfSize: '2.0 MB',
    difficulty: 'Medium',
    isImportant: true,
    solutions: [
      { q: 'Q1: Write three major arguments against democracy.', a: '1) Leaders keep changing leading to political instability. 2) Democracy is all about political competition and power play with little morality. 3) Consultations lead to delays in decision-making.' }
    ]
  },

  // English
  {
    id: 'eng-ch1',
    subject: 'English',
    subjectId: 'english',
    chapterNumber: 1,
    title: 'The Fun They Had (Beehive)',
    description: 'Margie and Tommy’s story set in year 2157 with mechanical teachers and telebooks vs old human schools.',
    exercises: ['Thinking about the Text', 'Grammar'],
    totalQuestions: 12,
    pdfSize: '1.5 MB',
    difficulty: 'Easy',
    isImportant: false,
    solutions: [
      { q: 'Q1: What did Margie write in her diary?', a: 'On 17 May 2157, Margie wrote: "Today Tommy found a real book!"' },
      { q: 'Q2: What had once happened to Tommy’s teacher?', a: 'Tommy’s mechanical teacher was once taken away for nearly a month because the history sector had blanked out completely.' }
    ]
  },
  {
    id: 'eng-ch2',
    subject: 'English',
    subjectId: 'english',
    chapterNumber: 2,
    title: 'The Sound of Music (Beehive)',
    description: 'Part 1: Evelyn Glennie listens to sound without hearing it. Part 2: The Shehnai of Bismillah Khan.',
    exercises: ['Comprehension', 'Vocabulary'],
    totalQuestions: 16,
    pdfSize: '1.7 MB',
    difficulty: 'Medium',
    isImportant: true,
    solutions: [
      { q: 'Q1: How does Evelyn hear music despite profound deafness?', a: 'Evelyn feels music through different parts of her body. Percussionist Ron Forbes tuned two large drums to different notes; she sensed the higher drum from the waist up and the lower drum from the waist down.' }
    ]
  }
]

const subjectFilters = [
  { id: 'all', name: 'All Subjects', count: 18 },
  { id: 'math', name: 'Mathematics', count: 8 },
  { id: 'science', name: 'Science', count: 6 },
  { id: 'sst', name: 'Social Science', count: 3 },
  { id: 'english', name: 'English', count: 2 }
]

const quickStats = [
  { label: 'Total Chapters', value: '60+', icon: BookOpen },
  { label: 'Step-by-Step Solutions', value: '1,200+', icon: CheckCircle2 },
  { label: 'Free PDF Downloads', value: '100%', icon: Download },
  { label: 'CBSE 2026-27 Aligned', value: 'Updated', icon: Award }
]

const faqs = [
  {
    q: 'Are these Class 9 NCERT Solutions updated for the latest 2026-27 CBSE curriculum?',
    a: 'Yes, all our NCERT solutions, chapter summaries, and practice questions strictly follow the rationalised and updated CBSE syllabus for the 2026-27 academic session with zero deleted topics.'
  },
  {
    q: 'Can I download the Class 9 chapter solutions in PDF format for offline study?',
    a: 'Absolutely! Every single chapter has a dedicated "Download PDF" button that gives you access to complete chapter exercises and step-by-step solutions with no login or payment required.'
  },
  {
    q: 'Which reference books are covered under EducaZone Class 9 solutions?',
    a: 'Besides NCERT Exemplar and NCERT Textbooks, we cover solutions for RD Sharma & RS Aggarwal for Mathematics, Lakhmir Singh & Manjit Kaur for Science, and All in One for Social Science.'
  },
  {
    q: 'How should a Class 9 student prepare for annual exams effectively?',
    a: 'Start by thoroughly studying NCERT theory, solve every intext and exercise question, revise formulas daily, and attempt past year question papers and sample test series available in our Paid & Free Test section.'
  }
]

export default function Class9({ onNavigateHome }) {
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeModalChapter, setActiveModalChapter] = useState(null)
  const [downloadSuccessToast, setDownloadSuccessToast] = useState(null)
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  // Filter chapters based on subject and search query
  const filteredChapters = useMemo(() => {
    return class9Chapters.filter((ch) => {
      const matchesSubject = selectedSubject === 'all' || ch.subjectId === selectedSubject
      const matchesSearch =
        ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesSubject && matchesSearch
    })
  }, [selectedSubject, searchQuery])

  // Trigger simulated download toast
  const handleDownloadPdf = (chapter) => {
    setDownloadSuccessToast(`"${chapter.title}" PDF downloaded successfully!`)
    setTimeout(() => {
      setDownloadSuccessToast(null)
    }, 3500)
  }

  return (
    <div className="w-full flex-1 flex flex-col bg-[#fafafc]">
      
      {/* Toast Notification */}
      {downloadSuccessToast && (
        <div className="fixed bottom-6 right-6 z-[100] bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-red-500/30 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs sm:text-sm font-semibold">{downloadSuccessToast}</span>
        </div>
      )}

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-8 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-10 right-10 w-80 h-80 bg-red-600/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-600">Books Solution</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-red-600 font-bold">Class 9</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Left Header Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-50 border border-red-200 text-red-600 mb-4 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-red-600" />
                <span>CBSE & NCERT Solutions 2026-27</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Class 9 <span className="text-red-600">NCERT Solutions</span> & Study Material
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Comprehensive chapter-wise textbook solutions, conceptual theory, solved exemplar numericals, and free downloadable PDF revision guides tailored for Class 9 students.
              </p>

              {/* Quick Search inside Class 9 */}
              <div className="mt-6 max-w-lg relative">
                <div className="relative flex items-center bg-white rounded-2xl border border-slate-300 focus-within:border-red-500 focus-within:ring-4 focus-within:ring-red-500/10 p-1.5 pl-4 transition-all shadow-xs">
                  <Search className="w-4.5 h-4.5 text-slate-400 shrink-0 mr-2.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Class 9 chapters, topics, formulas..."
                    className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-sm outline-none pr-2"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="p-1 mr-1 text-slate-400 hover:text-slate-600 rounded-full transition-colors cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Stat Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 shrink-0 lg:w-96">
              {quickStats.map((stat, idx) => {
                const IconComponent = stat.icon
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-red-300 hover:bg-white transition-all shadow-2xs group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-red-100/60 text-red-600 flex items-center justify-center mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-red-600 transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-500 mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full flex-1">
        
        {/* Subject Filter Pills */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-slate-200/80">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto py-1">
            {subjectFilters.map((sub) => {
              const isActive = selectedSubject === sub.id
              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-500/20'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-red-300 hover:text-red-600'
                  }`}
                >
                  <span>{sub.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {sub.count}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="text-xs font-semibold text-slate-500">
            Showing <span className="font-bold text-slate-900">{filteredChapters.length}</span> chapters
          </div>
        </div>

        {/* Chapters Cards Grid */}
        {filteredChapters.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 max-w-md mx-auto">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">No chapters found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try searching with another keyword or switch subject filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedSubject('all')
                setSearchQuery('')
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredChapters.map((chapter) => (
              <div
                key={chapter.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/[0.05] transition-all duration-200 group"
              >
                <div>
                  {/* Top Header Card */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-lg border border-red-200/60">
                      {chapter.subject} • Ch {chapter.chapterNumber}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {chapter.isImportant && (
                        <span className="text-[10px] font-bold text-white bg-red-600 px-2 py-0.5 rounded-md flex items-center gap-1 shadow-2xs">
                          ★ High Weightage
                        </span>
                      )}
                      <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {chapter.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Chapter Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {chapter.title}
                  </h3>

                  {/* Chapter Description */}
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {chapter.description}
                  </p>

                  {/* Exercises Covered Pills */}
                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    {chapter.exercises.map((ex, exIdx) => (
                      <span
                        key={exIdx}
                        className="text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md"
                      >
                        {ex}
                      </span>
                    ))}
                    <span className="text-[10px] text-slate-400 font-medium pl-1">
                      ({chapter.totalQuestions} Qs)
                    </span>
                  </div>
                </div>

                {/* Card Actions Bottom */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalChapter(chapter)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs transition-all shadow-xs cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Solutions</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDownloadPdf(chapter)}
                    title={`Download ${chapter.title} PDF (${chapter.pdfSize})`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-800 hover:text-red-600 font-semibold text-xs border border-slate-200 transition-all cursor-pointer group/btn"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-500 group-hover/btn:text-red-600" />
                    <span>PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Study Material Highlights Banner */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl shadow-red-600/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-xs mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>EducaZone Free Resource Pack</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Download Complete Class 9 Formula Book & Question Bank
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-red-50 leading-relaxed">
              Get all chapter formulas, important definitions, diagrams, and exemplar questions compiled in one single high-yield PDF handbook.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                setDownloadSuccessToast('Class 9 Complete Formula Handbook PDF downloaded!')
                setTimeout(() => setDownloadSuccessToast(null), 3500)
              }}
              className="px-6 py-3.5 rounded-2xl bg-white hover:bg-red-50 text-red-600 font-extrabold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Formula Book</span>
            </button>
          </div>
        </div>

        {/* FAQs Accordion Section */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Class 9 Preparation FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-sm sm:text-base text-slate-900 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`ml-4 text-xs font-extrabold w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-red-600 text-white rotate-45' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </section>

      {/* Solution Preview Modal */}
      {activeModalChapter && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-200/80 flex items-center justify-between bg-slate-50/70 shrink-0">
              <div>
                <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
                  {activeModalChapter.subject} • Chapter {activeModalChapter.chapterNumber}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                  {activeModalChapter.title} — Solutions
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalChapter(null)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Solved Questions */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200/70 text-xs text-red-700 leading-relaxed flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                <span>
                  Below is a quick preview of sample textbook solutions. Click "Download Full Chapter PDF" below to obtain all {activeModalChapter.totalQuestions} step-by-step solved questions with complete proofs and diagrams.
                </span>
              </div>

              {activeModalChapter.solutions.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.q}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-3 border-l-2 border-red-500 bg-white p-2.5 rounded-r-xl">
                    <span className="font-bold text-red-600 block text-[11px] uppercase mb-1">Answer / Solution:</span>
                    {item.a}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-white flex items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                PDF Size: <strong className="text-slate-800">{activeModalChapter.pdfSize}</strong>
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveModalChapter(null)}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleDownloadPdf(activeModalChapter)
                    setActiveModalChapter(null)
                  }}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md shadow-red-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Full Chapter PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Footer */}
      <footer className="w-full border-t border-slate-200/80 bg-white py-8 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">EducaZone</span>
            <span className="text-red-600 font-bold">Class 9 Portal</span>
            <span>• © {new Date().getFullYear()} EducaZone</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              Back to Home
            </button>
            <a href="#about-us" className="hover:text-red-600 transition-colors">About Us</a>
            <a href="#contact-us" className="hover:text-red-600 transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
