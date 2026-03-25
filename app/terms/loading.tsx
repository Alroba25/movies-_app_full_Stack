import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] flex flex-col font-sans">
      {/* Fake Navbar Skeleton */}
      <div className="h-20 border-b border-white/5 flex items-center px-6 sm:px-10 justify-between shrink-0 bg-[#0B0B0F] z-50">
        <div className="w-32 h-8 bg-white/5 rounded-md animate-pulse"></div>
        <div className="hidden lg:flex gap-8">
          <div className="w-16 h-4 bg-white/5 rounded-md animate-pulse"></div>
          <div className="w-16 h-4 bg-white/5 rounded-md animate-pulse"></div>
          <div className="w-16 h-4 bg-white/5 rounded-md animate-pulse"></div>
          <div className="w-16 h-4 bg-white/5 rounded-md animate-pulse"></div>
        </div>
      </div>

      <main className="flex min-h-screen w-full flex-col">
        <div>
          {/* Hero Slider Skeleton */}
          <div className="relative w-full h-[90vh] md:h-screen bg-white/5 animate-pulse overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t from-[#0B0B0F] via-[#0B0B0F]/60 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-full md:w-[75%] lg:w-[65%] bg-linear-to-r from-[#0B0B0F] via-[#0B0B0F]/80 to-transparent" />
            <div className="absolute bottom-[120px] md:bottom-[150px] left-0 px-6 md:px-12 lg:px-20 space-y-4 w-full max-w-2xl xl:max-w-3xl">
              <div className="w-3/4 md:w-96 h-12 md:h-16 bg-white/10 rounded-lg"></div>
              <div className="flex gap-3 mb-5 mt-4">
                <div className="w-10 h-6 bg-white/10 rounded-sm"></div>
                <div className="w-10 h-6 bg-white/10 rounded-sm"></div>
                <div className="w-20 h-6 bg-white/10 rounded-sm"></div>
              </div>
              <div className="w-full h-6 md:h-8 bg-white/10 rounded-lg mt-4 hidden md:block"></div>
              <div className="w-3/4 h-6 md:h-8 bg-white/10 rounded-lg mt-2 hidden md:block"></div>
              <div className="flex gap-4 mt-8">
                <div className="w-40 md:w-48 h-12 md:h-14 bg-white/10 rounded-full"></div>
                <div className="w-40 md:w-48 h-12 md:h-14 bg-white/10 rounded-full bg-opacity-50"></div>
              </div>
            </div>
            {/* Center large spinner */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <Loader2 className="w-24 h-24 text-[#FFD700] animate-spin" />
            </div>
          </div>

          {/* Content Rows Skeleton */}
          <div className="flex flex-col gap-2 pb-10">
            {[1, 2, 3, 4, 5].map((row) => (
              <div key={row} className="py-10 pt-4 px-4 md:px-10 bg-[#0B0B0F]">
                <div className="w-48 md:w-64 h-8 bg-white/5 rounded-md animate-pulse mb-6"></div>
                <div className="flex gap-4 md:gap-5 overflow-hidden">
                  {[1, 2, 3, 4, 5, 6].map((card) => (
                    <div key={card} className="w-[160px] md:w-[220px] h-[240px] md:h-[330px] shrink-0 bg-white/5 rounded-xl animate-pulse shadow-lg"></div>
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
