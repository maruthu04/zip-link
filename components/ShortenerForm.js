'use client'

import { useState } from 'react'
import { Copy, Check, ArrowRight, Link as LinkIcon, Loader2, Wand2, QrCode, X, ExternalLink, CalendarDays } from 'lucide-react'

export default function ShortenerForm() {
  const [url, setUrl] = useState('')
  const [alias, setAlias] = useState('')
  const [days, setDays] = useState('') 
  const [shortUrl, setShortUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [showQr, setShowQr] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setShortUrl('')
    setShowQr(false)

    if (!url) {
      setError('Please enter a valid URL')
      return
    }

    setIsLoading(true)

    try {
      const res = await fetch('/api/shorten', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          url, 
          alias: alias.trim(),
          days: days || 7 // 
        }) 
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setShortUrl(data.shortUrl)
      
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        
        <div className="bg-slate-50 px-8 py-4 border-b border-slate-100">
          <p className="text-sm text-slate-500 font-medium">
            Paste your link below to shorten it.
          </p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Long URL Input */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Destination URL
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <LinkIcon className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="url"
                  placeholder="https://very-long-website.com/..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium text-slate-700"
                  required
                />
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-4">
              

              <div className="flex-1">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Custom Alias <span className="font-normal normal-case text-slate-300">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Wand2 className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="my-link"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium text-slate-700"
                  />
                </div>
              </div>

              
              <div className="w-full sm:w-32">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Expire In <span className="font-normal normal-case text-slate-300">(Days)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <CalendarDays className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    min="1"
                    max="365"
                    placeholder="7"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium text-slate-700"
                  />
                </div>
              </div>

            </div>

            {error && (
              <div className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg border border-red-100">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-slate-200 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  Generating...
                </>
              ) : (
                <>
                  Shorten Now <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          {/* Result Section (Same as before) */}
          {shortUrl && (
            <div className="mt-8 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-top-2">
              <p className="text-slate-500 text-sm font-medium mb-3">Success! Here is your link:</p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl p-2 pr-2">
                  
                  <a 
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 truncate text-blue-700 font-bold hover:underline"
                  >
                    {shortUrl}
                  </a>
                  
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white text-slate-600 hover:text-blue-600 hover:bg-blue-50 shadow-sm border border-slate-100 transition-all"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <button
                    onClick={() => setShowQr(!showQr)}
                    className={`p-2.5 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium text-sm ${
                      showQr 
                      ? 'bg-blue-200 text-blue-800' 
                      : 'bg-white text-slate-600 hover:text-blue-600 hover:bg-blue-50 shadow-sm border border-slate-100'
                    }`}
                  >
                    <QrCode className="h-4 w-4" />
                  </button>

                  <button
                    onClick={handleCopy}
                    className={`p-2.5 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium text-sm ${
                      isCopied 
                      ? 'bg-green-500 text-white shadow-md' 
                      : 'bg-white text-slate-600 hover:text-blue-600 hover:bg-blue-50 shadow-sm border border-slate-100'
                    }`}
                  >
                    {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {showQr && (
                  <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center animate-in zoom-in-95 duration-200 relative">
                    <button 
                      onClick={() => setShowQr(false)}
                      className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${shortUrl}`}
                      alt="QR Code"
                      className="rounded-lg border border-slate-100 shadow-sm mb-3"
                    />
                    <p className="text-xs text-slate-400 font-medium">Scan to visit</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}