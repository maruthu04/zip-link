import Link from 'next/link'
import { Zap, Github } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-200 bg-white/70 backdrop-blur-lg sticky top-0 z-50 transition-all">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-tr from-blue-600 to-blue-400 p-1.5 rounded-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
            <Zap className="h-5 w-5 text-white fill-current" />
          </div>
          <span className="font-extrabold text-xl text-slate-800 tracking-tight">
            ZipLink
          </span>
        </Link>

        
        <div className="flex items-center gap-4">
          

          <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

          <a 
            href="https://github.com/maruthu04/zip-link" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Github className="h-4 w-4" />
            <span>Star on GitHub</span>
          </a>
        </div>

      </div>
    </nav>
  )
}