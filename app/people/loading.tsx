export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex flex-col font-sans overflow-hidden">
      <main className="grow pt-32 pb-16 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section Skeleton */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-4">
              <div className="h-16 md:h-20 w-3/4 max-w-xl bg-white/5 rounded-2xl animate-pulse" />
              <div className="h-6 w-1/2 max-w-sm bg-white/5 rounded-lg animate-pulse" />
            </div>
            <div className="hidden lg:block w-32 h-16 bg-white/5 rounded-2xl animate-pulse" />
          </div>

          {/* People Grid Skeleton */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div key={item} className="flex flex-col gap-4">
                {/* Image Skeleton */}
                <div className="relative aspect-2/3 rounded-2xl bg-white/5 border border-white/5 animate-pulse overflow-hidden">
                   {/* Shimmer effect simulation */}
                   <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/3 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                </div>
                
                {/* Info Skeleton */}
                <div className="space-y-2">
                  <div className="h-5 w-3/4 bg-white/5 rounded-md animate-pulse" />
                  <div className="h-3 w-1/2 bg-white/5 rounded-md animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
