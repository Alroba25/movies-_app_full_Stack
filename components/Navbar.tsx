import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, Star } from "lucide-react";
import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";

export default function Navbar({ activePage }: { activePage?: string }) {
  const linkClass = (page: string) =>
    `hover:text-[#FFD700] hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-all duration-300 cursor-pointer ${
      activePage === page
        ? "text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
        : "text-[#B3B3B3]"
    }`;

  return (
    <nav className="flex items-center justify-between w-full bg-linear-to-b from-[#0B0B0F]/95 via-[#0B0B0F]/50 to-transparent py-5 px-6 sm:px-10 absolute top-0 left-0 z-50 transition-all duration-500 pointer-events-none">
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

        <ul
          className="hidden lg:flex items-center gap-8 font-medium text-lg tracking-wide"
          style={{ letterSpacing: "1px" }}
        >
          <li className={linkClass("movies")}>
            <Link href="/movies">Movies</Link>
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
            <Button className=" cursor-pointer font-bold border border-[#FFD700]/40 text-[#FFD700] bg-[#FFD700]/5 rounded-full hover:bg-[#FFD700] hover:text-[#0B0B0F] transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] px-5 backdrop-blur-sm">
              Premium
              <Star className="ml-2 w-4 h-4" />
            </Button>
          </li>
        </ul>
      </div>

      <div className="flex gap-4 items-center pointer-events-auto">
        <Search className="text-white w-5 h-5 cursor-pointer hover:text-[#FFD700] hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] transition-all hover:scale-110 duration-300" />
        <Show when="signed-in">
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-xl border-2 border-[#FFD700] rounded-full overflow-hidden flex items-center justify-center bg-black/50 backdrop-blur-sm shadow-[0_0_15px_rgba(255,215,0,0.3)] gap-3">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox:
                    "w-9 h-9 sm:w-10 sm:h-10 border-none shadow-none",
                },
              }}
            />
          </div>
        </Show>
      </div>
    </nav>
  );
}
