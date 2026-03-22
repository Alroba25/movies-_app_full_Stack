import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, Star } from "lucide-react";
import Link from "next/link";

export default function Navbar({ activePage }: { activePage?: string }) {
  const linkClass = (page: string) =>
    `hover:text-[#FFD700] hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-all duration-300 cursor-pointer ${
      activePage === page
        ? "text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
        : "text-[#B3B3B3]"
    }`;

  return (
    <nav className="flex items-center w-full bg-linear-to-b from-[#0B0B0F]/95 via-[#0B0B0F]/50 to-transparent py-5 px-6 sm:px-10 absolute top-0 left-0 z-50 transition-all duration-500 pointer-events-none">
      <div className="flex items-center gap-10 pointer-events-auto">
        <Link
          href="/"
          className="hover:scale-105 transition-transform duration-300 drop-shadow-xl"
        >
          <Image
            className="cursor-pointer"
            src="/Images/logo.svg"
            alt="Logo"
            width={120}
            height={120}
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 font-medium text-sm tracking-wide">
          <li className={linkClass("movies")}>
            <Link href="/movies">Movies</Link>
          </li>
          <li className={linkClass("tv_shows")}>
            <Link href="/tv_shows">TV Shows</Link>
          </li>
          <li className={linkClass("series")}>
            <Link href="/series">Series</Link>
          </li>
          <li className={linkClass("kids")}>
            <Link href="/kids">Kids</Link>
          </li>
          <li className={linkClass("my_list")}>
            <Link href="/my_list">My List</Link>
          </li>

          <li>
            <Button className="cursor-pointer font-bold border border-[#FFD700]/40 text-[#FFD700] bg-[#FFD700]/5 rounded-full hover:bg-[#FFD700] hover:text-[#0B0B0F] transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] px-5 backdrop-blur-sm">
              Premium
              <Star className="ml-2 w-4 h-4" />
            </Button>
          </li>
        </ul>
      </div>

      <div className="ml-auto flex items-center pr-32 sm:pr-48 lg:pr-64 pointer-events-auto">
        <Search className="text-white w-5 h-5 cursor-pointer hover:text-[#FFD700] hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] transition-all hover:scale-110 duration-300" />
      </div>
    </nav>
  );
}
