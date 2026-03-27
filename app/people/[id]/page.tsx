import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getPeopleById } from "@/lib/tmdb.actions";
import {
  Star,
  Calendar,
  MapPin,
  Info,
  ChevronLeft,
  Globe,
  Instagram,
  Twitter,
  Facebook,
  User,
  Heart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function PersonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const person = await getPeopleById(Number(resolvedParams.id));

  if (!person || !person.name) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <User className="w-20 h-20 text-white/10" />
          <h1 className="text-2xl text-gray-400 font-bold tracking-widest">
            PERSON NOT FOUND
          </h1>
          <Link
            href="/people"
            className="text-[#FFD700] hover:underline font-medium"
          >
            Return to People
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Filter and sort "Known For" credits
  const knownFor =
    person.combined_credits?.cast
      ?.filter((item: any) => item.poster_path)
      ?.sort((a: any, b: any) => (b.vote_count || 0) - (a.vote_count || 0))
      ?.slice(0, 10) || [];

  const socialLinks = person.external_ids || {};

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white flex flex-col font-sans selection:bg-[#FFD700]/30 selection:text-white">
      <Navbar />

      <main className="grow pt-16">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/people"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#FFD700] transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-bold uppercase tracking-widest">
              Back to People
            </span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sidebar (Image & Personal Info) */}
            <aside className="w-full lg:w-[350px] shrink-0 space-y-12">
              {/* Profile Image */}
              <div className="relative aspect-2/3 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                {person.profile_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w780${person.profile_path}`}
                    alt={person.name}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 350px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#16161D] flex items-center justify-center">
                    <User className="w-20 h-20 text-white/10" />
                  </div>
                )}
                {/* Popularity Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">
                      Popularity Score
                    </span>
                    <span className="text-[#FFD700] font-black text-xl">
                      {person.popularity?.toFixed(1)}
                    </span>
                  </div>
                  <Heart className="w-6 h-6 text-[#FFD700] fill-[#FFD700]" />
                </div>
              </div>

              {/* Personal Details Card */}
              <div className="bg-[#12121A] rounded-2xl border border-white/5 p-8 space-y-8 shadow-xl">
                <h3 className="text-lg font-black uppercase tracking-[0.2em] text-white border-b border-white/10 pb-4">
                  Personal Info
                </h3>

                <div className="space-y-6">
                  {person.known_for_department && (
                    <div className="space-y-1">
                      <p className="text-xs text-white/40 uppercase font-black tracking-widest">
                        Known For
                      </p>
                      <p className="font-bold text-gray-200">
                        {person.known_for_department}
                      </p>
                    </div>
                  )}

                  {person.gender !== undefined && (
                    <div className="space-y-1">
                      <p className="text-xs text-white/40 uppercase font-black tracking-widest">
                        Gender
                      </p>
                      <p className="font-bold text-gray-200">
                        {person.gender === 1
                          ? "Female"
                          : person.gender === 2
                            ? "Male"
                            : "Non-binary"}
                      </p>
                    </div>
                  )}

                  {person.birthday && (
                    <div className="space-y-1">
                      <p className="text-xs text-white/40 uppercase font-black tracking-widest">
                        Birthday
                      </p>
                      <p className="font-bold text-gray-200 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#FFD700]" />
                        {new Date(person.birthday).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                        {!person.deathday && (
                          <span className="text-white/40 text-xs">
                            (
                            {Math.floor(
                              (new Date().getTime() -
                                new Date(person.birthday).getTime()) /
                                31557600000,
                            )}{" "}
                            years old)
                          </span>
                        )}
                      </p>
                    </div>
                  )}

                  {person.deathday && (
                    <div className="space-y-1">
                      <p className="text-xs text-white/40 uppercase font-black tracking-widest">
                        Day of Death
                      </p>
                      <p className="font-bold text-gray-200 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-red-500" />
                        {new Date(person.deathday).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  )}

                  {person.place_of_birth && (
                    <div className="space-y-1">
                      <p className="text-xs text-white/40 uppercase font-black tracking-widest">
                        Place of Birth
                      </p>
                      <p className="font-bold text-gray-200 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#FFD700]" />
                        {person.place_of_birth}
                      </p>
                    </div>
                  )}

                  {person.also_known_as && person.also_known_as.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs text-white/40 uppercase font-black tracking-widest">
                        Also Known As
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {person.also_known_as
                          .slice(0, 3)
                          .map((name: string) => (
                            <span
                              key={name}
                              className="text-[11px] font-medium text-gray-400 bg-white/5 border border-white/10 px-2 py-1 rounded-md"
                            >
                              {name}
                            </span>
                          ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Social Media Links */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4">
                  {socialLinks.instagram_id && (
                    <a
                      href={`https://instagram.com/${socialLinks.instagram_id}`}
                      target="_blank"
                      rel="noopener"
                      className="text-white/40 hover:text-[#FFD700] transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {socialLinks.twitter_id && (
                    <a
                      href={`https://twitter.com/${socialLinks.twitter_id}`}
                      target="_blank"
                      rel="noopener"
                      className="text-white/40 hover:text-[#FFD700] transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {socialLinks.facebook_id && (
                    <a
                      href={`https://facebook.com/${socialLinks.facebook_id}`}
                      target="_blank"
                      rel="noopener"
                      className="text-white/40 hover:text-[#FFD700] transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                  {person.homepage && (
                    <a
                      href={person.homepage}
                      target="_blank"
                      rel="noopener"
                      className="text-white/40 hover:text-[#FFD700] transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-16 lg:pt-4">
              {/* Header */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-linear-to-r from-white via-white/80 to-white/20 bg-clip-text text-transparent drop-shadow-2xl">
                  {person.name}
                </h1>
                <div className="flex items-center gap-4 text-white/40 text-sm font-bold uppercase tracking-widest">
                  <span>{person.known_for_department}</span>
                  <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full" />
                  <span>{person.place_of_birth}</span>
                </div>
              </div>

              {/* Biography Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-white">
                    Biography
                  </h2>
                  <div className="h-px grow bg-linear-to-r from-white/20 to-transparent" />
                </div>
                {person.biography ? (
                  <div className="relative">
                    <p className="text-gray-300 text-lg leading-relaxed font-medium transition-all duration-500 overflow-hidden line-clamp-12">
                      {person.biography}
                    </p>
                    {/* Could add a 'Read More' toggle if biography is long */}
                  </div>
                ) : (
                  <p className="text-white/20 text-lg italic tracking-widest">
                    We don&apos;t have a biography for {person.name}.
                  </p>
                )}
              </div>

              {/* Known For Section */}
              {knownFor.length > 0 && (
                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 grow">
                      <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-white shrink-0">
                        Known For
                      </h2>
                      <div className="h-px grow bg-linear-to-r from-white/20 to-transparent" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
                    {knownFor.map((item: any) => (
                      <Link
                        key={item.id}
                        href={`/${item.media_type === "tv" ? "tv" : "movies"}/${item.id}`}
                        className="group flex flex-col gap-3"
                      >
                        <div className="relative aspect-2/3 rounded-xl overflow-hidden border border-white/5 bg-[#16161D] shadow-xl group-hover:scale-[1.03] group-hover:border-[#FFD700]/30 transition-all duration-500">
                          <Image
                            src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                            alt={item.title || item.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10">
                              <Star className="w-3 h-3 text-[#FFD700] fill-[#FFD700]" />
                              <span className="text-[10px] font-bold">
                                {item.vote_average?.toFixed(1)}
                              </span>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-tighter text-white/60 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10">
                              {item.media_type}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-1 px-1">
                          <h4 className="font-bold text-sm truncate group-hover:text-[#FFD700] transition-colors">
                            {item.title || item.name}
                          </h4>
                          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest truncate">
                            {item.character || "Acting"}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
