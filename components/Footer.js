export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} ZipLink. Built for speed.
        </p>
      </div>
    </footer>
  )
}