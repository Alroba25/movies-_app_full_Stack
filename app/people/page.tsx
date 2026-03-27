import { getPeople } from "@/lib/tmdb.actions";
import Image from "next/image";
import Link from "next/link";
import { Star, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pagenator from "@/components/pagenator";

export default async function PeoplePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const data = await getPeople(page);

  if (!data || !data.results) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center">
        <p className="text-white/60 text-xl font-bold tracking-widest">
          NO PEOPLE FOUND
        </p>
      </div>
    );
  }

  const people = data.results;
  const totalPages = Math.min(data.total_pages || 1, 500); // TMDB popular lists cap at 500

  return (
    <>
      <Navbar activePage="people" />
      <div className="min-h-screen bg-[#0B0B0F] text-white font-sans selection:bg-[#FFD700] selection:text-black">
        {/* Hero Section */}
        <div className="relative pt-32 pb-16 px-6 sm:px-10 overflow-hidden">
          {/* Animated Background Gradients */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[120px] animate-pulse pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px] animate-pulse pointer-events-none delay-1000" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-2">
                <h1
                  style={{ letterSpacing: "3px" }}
                  className="text-5xl md:text-7xl font-black tracking-tighter bg-linear-to-r from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-2xl"
                >
                  POPULAR PEOPLE
                </h1>
                <p className="text-[#B3B3B3] text-lg md:text-xl max-w-2xl font-medium">
                  The most trending actors, actresses and creators in the
                  entertainment industry right now.
                </p>
              </div>
            </div>

            {/* People Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8">
              {people.map((person: any) => (
                <Link
                  href={`/people/${person.id}`}
                  key={person.id}
                  className="group relative flex flex-col gap-3 transition-all duration-500 cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative aspect-2/3 rounded-2xl overflow-hidden border border-white/5 bg-[#16161D] shadow-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:border-[#FFD700]/30 group-hover:shadow-[#FFD700]/10">
                    {person.profile_path ? (
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                        alt={person.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-white/5 to-white/0 gap-3">
                        <User className="w-16 h-16 text-white/10 group-hover:text-white/20 transition-colors" />
                        <span className="text-white/20 text-xs font-bold uppercase tracking-widest">
                          No Image
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />

                    {/* Department Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/90">
                        {person.known_for_department}
                      </span>
                    </div>

                    {/* Floating Action Button */}
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#FFD700] text-black flex items-center justify-center scale-0 rotate-90 group-hover:scale-100 group-hover:rotate-0 transition-all duration-500 shadow-xl">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                  </div>

                  {/* Info Container */}
                  <div className="space-y-1">
                    <h2
                      style={{ letterSpacing: "2px" }}
                      className="font-bold text-lg leading-tight truncate group-hover:text-[#FFD700] transition-colors duration-300"
                    >
                      {person.name}
                    </h2>
                    <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
                      {person.known_for
                        ?.slice(0, 2)
                        .map((item: any, idx: number) => (
                          <span
                            key={item.id}
                            className="text-[#B3B3B3] text-[11px] font-medium opacity-60 truncate"
                          >
                            {item.title || item.name}
                            {idx === 0 && person.known_for.length > 1
                              ? ","
                              : ""}
                          </span>
                        ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Pagenator page={page} totalPages={totalPages} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
