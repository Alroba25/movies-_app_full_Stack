import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans">
      {/* Fake Navbar Skeleton */}
      <div className="h-16 border-b border-white/5 flex items-center px-4 sm:px-6 lg:px-8 justify-between shrink-0 bg-[#0d0d0c] z-50">
        <div className="w-32 h-8 bg-white/5 rounded-md animate-pulse"></div>
        <div className="hidden md:flex gap-6">
          <div className="w-16 h-4 bg-white/5 rounded-md animate-pulse"></div>
          <div className="w-16 h-4 bg-white/5 rounded-md animate-pulse"></div>
          <div className="w-16 h-4 bg-white/5 rounded-md animate-pulse"></div>
        </div>
      </div>

      <main className="grow pt-16">
        {/* HERO SECTION SKELETON */}
        <div className="relative w-full min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0d0d0c]">
          <div className="absolute inset-0 bg-white/5 animate-pulse" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0a0a0a] to-transparent z-10" />

          {/* Center Spinner */}
          <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10">
            <Loader2 className="w-32 h-32 text-white animate-spin" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 mt-8 mb-20">
            <div className="flex flex-col md:flex-row gap-8 md:gap-14 lg:gap-20 items-center md:items-start">
              {/* Poster Art Skeleton */}
              <div className="shrink-0 perspective-[1000px]">
                <div className="w-[240px] sm:w-[300px] md:w-[340px] aspect-2/3 rounded-2xl bg-white/10 animate-pulse shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] border border-white/10"></div>
              </div>

              {/* Movie Details Skeleton */}
              <div className="flex-1 flex flex-col gap-6 md:pt-4 max-w-3xl justify-center w-full">
                {/* Title & Tagline */}
                <div className="space-y-4 w-full">
                  <div className="w-3/4 h-12 md:h-16 bg-white/10 rounded-lg animate-pulse"></div>
                  <div className="w-1/2 h-6 md:h-8 bg-white/5 rounded-md animate-pulse"></div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="w-24 h-10 bg-white/5 rounded-full animate-pulse"></div>
                  <div className="w-28 h-10 bg-white/5 rounded-full animate-pulse"></div>
                  <div className="w-20 h-10 bg-white/5 rounded-full animate-pulse"></div>
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-2 mt-2">
                  <div className="w-24 h-8 bg-white/5 rounded-full animate-pulse"></div>
                  <div className="w-20 h-8 bg-white/5 rounded-full animate-pulse"></div>
                  <div className="w-32 h-8 bg-white/5 rounded-full animate-pulse"></div>
                </div>

                {/* Overview */}
                <div className="mt-4 bg-white/5 p-6 rounded-2xl border border-white/5 animate-pulse">
                  <div className="w-40 h-6 bg-white/10 rounded-md mb-4"></div>
                  <div className="space-y-3">
                    <div className="w-full h-4 bg-white/5 rounded-sm"></div>
                    <div className="w-full h-4 bg-white/5 rounded-sm"></div>
                    <div className="w-5/6 h-4 bg-white/5 rounded-sm"></div>
                    <div className="w-4/6 h-4 bg-white/5 rounded-sm"></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <div className="w-48 h-14 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="w-40 h-14 bg-white/5 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DETAILS SECTION Skeleton */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-[#111] h-32 rounded-2xl border border-white/5 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
