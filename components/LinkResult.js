'use client'
import { useState } from 'react'
import { Copy, Check, QrCode } from 'lucide-react'

export default function LinkResult({ shortUrl }) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="mt-6 w-full animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="p-4 bg-white border border-blue-100 rounded-xl shadow-sm flex flex-col sm:flex-row items-center gap-3">
        
        {/* The Link Display */}
        <div className="flex-1 w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 font-mono text-sm truncate">
          {shortUrl}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={handleCopy}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
              isCopied 
                ? 'bg-green-100 text-green-700' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {isCopied ? 'Copied' : 'Copy'}
          </button>
          
          <button className="p-2.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50" title="QR Code">
            <QrCode className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}