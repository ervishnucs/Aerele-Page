export default function Page() {
  return (
    <main className="relative flex flex-col items-center justify-center px-8 py-16 min-h-[80vh] overflow-hidden">
      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto z-10">
        <div className="absolute top-0 left-0 mt-8 ml-8 z-20">
            <h1 className="text-3xl font-semibold text-gray-800">
            Your Dream,<br />Our Commitment!
            </h1>
        </div>
      </div>

      {/* Decorative paper plane and lines */}
      <img
        src="/assets/intersect.png"
        alt="Paper plane"
        className="absolute left-0 bottom-0 w-[600px] max-w-[60vw] opacity-100 pointer-events-none select-none animate-[mymove_4s_ease-in-out_infinite]"
      />
    </main>
  )
}