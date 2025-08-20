export default function Page() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between px-8 py-16 min-h-[80vh] relative overflow-hidden">
      <div className="flex-1 z-10">
        <h1 className="text-4xl md:text-5xl  text-gray-900 mb-6">Your Dream,<br />Our Commitment!</h1>
        <p className="text-lg text-gray-600 mb-8">{/* Add a subtitle or description here if needed */}</p>
      </div>
      <div className="flex-1 flex justify-center z-10">
        <div className="relative">
          <div className="absolute -top-8 -left-8 w-full h-full rounded-[32px] bg-blue-400 opacity-40 blur-3xl -z-10" style={{filter:'blur(48px)'}}></div>
          <img src="/assets/about.png" alt="Team working" className="rounded-[32px] shadow-2xl w-[320px] h-[320px] object-cover rotate-[18deg]" />
        </div>
      </div>
      {/* Decorative paper plane and lines */}
      <img src="/assets/intersect.png" alt="Paper plane" className="absolute left-0 bottom-0 w-[500px] max-w-[60vw] opacity-80 pointer-events-none select-none" />
      <div className="absolute left-1/4 bottom-10 w-24 h-24 bg-blue-200 rounded-full opacity-40 blur-2xl"></div>
      <div className="absolute left-0 right-0 bottom-0 h-2 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 opacity-60" style={{height:'8px'}}></div>
    </main>
  )
}