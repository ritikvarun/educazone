import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafc] text-slate-800 flex flex-col justify-between selection:bg-red-500 selection:text-white relative overflow-hidden font-sans">
      
      {/* Background Grid Pattern & Ambient Red Glow */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-red-500/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[350px] bg-red-400/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Home Page */}
      <Home />

    </div>
  )
}
