import ShortenerForm from '@/components/ShortenerForm'

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-slate-50">
      
      <div className="text-center space-y-4 mb-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Make your links <br/>
          <span className="text-blue-600">shorter & smarter.</span>
        </h1>
        <p className="text-slate-600 text-lg md:text-xl">
          ZipLink is the open-source link management tool for modern marketing teams.
        </p>
      </div>

      <ShortenerForm />
    </div>
  )
}