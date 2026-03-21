import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0d0d0c] flex flex-col font-sans">
      {/* Fake Navbar Skeleton */}
      <div className="h-16 border-b border-white/5 flex items-center px-4 sm:px-6 lg:px-8 justify-between shrink-0 bg-[#0d0d0c] z-50">
        <div className="w-32 h-8 bg-white/5 rounded-md animate-pulse"></div>
        <div className="hidden md:flex gap-6">
          <div className="w-16 h-4 bg-white/5 rounded-md animate-pulse"></div>
          <div className="w-16 h-4 bg-white/5 rounded-md animate-pulse"></div>
          <div className="w-16 h-4 bg-white/5 rounded-md animate-pulse"></div>
        </div>
      </div>

      <main className="flex min-h-screen w-full flex-col">
        <div>
          {/* Hero Slider Skeleton */}
          <div className="relative w-full h-[60vh] md:h-[85vh] bg-white/5 animate-pulse overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0d0d0c] to-transparent" />
            <div className="absolute bottom-20 left-4 md:left-20 space-y-4 w-full max-w-3xl">
              <div className="w-3/4 md:w-96 h-12 md:h-16 bg-white/10 rounded-lg"></div>
              <div className="w-1/2 md:w-72 h-6 md:h-8 bg-white/10 rounded-lg mt-4"></div>
              <div className="flex gap-4 mt-8">
                <div className="w-32 md:w-40 h-10 md:h-12 bg-white/10 rounded-full"></div>
                <div className="w-32 md:w-40 h-10 md:h-12 bg-white/10 rounded-full bg-opacity-50"></div>
              </div>
            </div>
            {/* Center large spinner for extra cinematic feel */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <Loader2 className="w-24 h-24 text-yellow-500 animate-spin" />
            </div>
          </div>

          {/* Content Rows Skeleton */}
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
            {[1, 2, 3].map((row) => (
              <div key={row} className="space-y-6">
                <div className="w-48 md:w-64 h-8 bg-white/5 rounded-md animate-pulse"></div>
                <div className="flex gap-4 overflow-hidden">
                  {[1, 2, 3, 4, 5, 6].map((card) => (
                    <div key={card} className="w-[160px] md:w-[220px] aspect-2/3 shrink-0 bg-white/5 rounded-2xl animate-pulse shadow-lg"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}