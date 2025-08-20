export default function Page() {
  return (
    <main className="relative flex flex-col items-center justify-center px-8 py-16 min-h-[80vh] overflow-hidden">
      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto z-10">
        <div className="absolute top-0 left-0 mt-8 ml-8 z-20">
            <h1 className="text-3xl font-semibold text-gray-800">
            Your Dream,<br />Our Commitment!
            </h1>
        </div>
        <div className="relative flex items-center justify-center w-full">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-[32px] bg-blue-400 opacity-40 blur-3xl -z-10" style={{filter:'blur(48px)'}}></div>
          <img src="/assets/about.png" alt="Team working" className="rounded-[32px] shadow-2xl w-[320px] h-[320px] object-cover rotate-[18deg] mx-auto" />
        </div>
      </div>
      {/* Decorative paper plane and lines */}
      <img src="/assets/intersect.png" alt="Paper plane" className="absolute left-0 bottom-0 w-[500px] max-w-[60vw] opacity-80 pointer-events-none select-none" />
      <div className="absolute left-1/4 bottom-10 w-24 h-24 bg-blue-200 rounded-full opacity-40 blur-2xl"></div>
      <div className="absolute left-0 right-0 bottom-0 h-2 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 opacity-60"
       style={{height:'8px'}}></div>
    </main>
  )
}