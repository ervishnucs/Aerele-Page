export default function Loading() {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center px-6 md:px-16 py-16 animate-pulse">
      <div className="mb-8">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#032148"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="20" fontFamily="Arial" dy=".3em">A</text></svg>
      </div>
      <div className="h-10 w-72 bg-gray-200 rounded mb-6" />
      <div className="h-4 w-full max-w-3xl bg-gray-200 rounded mb-4" />
      <div className="h-4 w-full max-w-2xl bg-gray-200 rounded mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div className="h-6 w-56 bg-gray-200 rounded border-4 border-[#032148]" />
          <div className="h-4 w-full bg-gray-200 rounded border-4 border-[#032148]" />
          <div className="h-4 w-5/6 bg-gray-200 rounded border-4 border-[#032148]" />
          <div className="h-4 w-4/6 bg-gray-200 rounded border-4 border-[#032148]" />
        </div>
        <div className="h-64 bg-gray-200 rounded border-4 border-[#032148]" />
      </div>
    </div>
  );
}


