import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex flex-col font-sans">
      {/* Fake Navbar Skeleton */}
      <div className="h-16 border-b border-white/5 flex items-center px-4 sm:px-6 lg:px-8 justify-between shrink-0 bg-[#0d0d0c]/80 backdrop-blur-md z-50">
        <div className="w-32 h-8 bg-white/5 rounded-md animate-pulse"></div>
        <div className="hidden md:flex gap-6">
          <div className="w-16 h-4 bg-white/5 rounded-md animate-pulse"></div>
          <div className="w-16 h-4 bg-white/5 rounded-md animate-pulse"></div>
          <div className="w-16 h-4 bg-white/5 rounded-md animate-pulse"></div>
        </div>
      </div>

      <main className="grow pt-16">
        {/* Back Button Skeleton */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="inline-flex items-center gap-2 text-white/10 animate-pulse">
            <ChevronLeft className="w-5 h-5" />
            <div className="w-24 h-4 bg-white/5 rounded-sm"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sidebar Skeleton */}
            <aside className="w-full lg:w-[350px] shrink-0 space-y-12">
              {/* Profile Image Skeleton */}
              <div className="relative aspect-2/3 rounded-2xl bg-white/5 animate-pulse shadow-2xl border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>

              {/* Personal Details Card Skeleton */}
              <div className="bg-[#12121A] rounded-2xl border border-white/5 p-8 space-y-8 shadow-xl animate-pulse">
                <div className="w-32 h-6 bg-white/10 rounded-md mb-4"></div>
                
                <div className="space-y-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="space-y-2">
                      <div className="w-20 h-3 bg-white/5 rounded-sm"></div>
                      <div className="w-32 h-5 bg-white/10 rounded-sm"></div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content Skeleton */}
            <div className="flex-1 space-y-16 lg:pt-4">
              {/* Header Skeleton */}
              <div className="space-y-4">
                <div className="w-3/4 h-16 md:h-20 bg-white/10 rounded-xl animate-pulse"></div>
                <div className="flex gap-4">
                  <div className="w-24 h-4 bg-white/5 rounded-md animate-pulse"></div>
                  <div className="w-32 h-4 bg-white/5 rounded-md animate-pulse"></div>
                </div>
              </div>

              {/* Biography Skeleton */}
              <div className="space-y-6">
                <div className="w-40 h-8 bg-white/10 rounded-md animate-pulse"></div>
                <div className="space-y-4">
                  <div className="w-full h-4 bg-white/5 rounded-sm animate-pulse"></div>
                  <div className="w-full h-4 bg-white/5 rounded-sm animate-pulse"></div>
                  <div className="w-full h-4 bg-white/5 rounded-sm animate-pulse"></div>
                  <div className="w-4/5 h-4 bg-white/5 rounded-sm animate-pulse"></div>
                  <div className="w-3/5 h-4 bg-white/5 rounded-sm animate-pulse"></div>
                </div>
              </div>

              {/* Known For Skeleton */}
              <div className="space-y-10">
                <div className="w-48 h-8 bg-white/10 rounded-md animate-pulse"></div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="space-y-3">
                      <div className="aspect-2/3 bg-white/5 rounded-xl animate-pulse border border-white/5"></div>
                      <div className="w-full h-4 bg-white/5 rounded-sm animate-pulse"></div>
                      <div className="w-2/3 h-3 bg-white/5 rounded-sm animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
