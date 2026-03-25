"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, Star, Menu, X } from "lucide-react";
import Link from "next/link";
import { UserButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import SearchHandel from "./SearchHandel";
import { useState, useEffect } from "react";

export default function Navbar({ activePage }: { activePage?: string }) {
  const { userId, isLoaded } = useAuth();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (page: string) =>
    `hover:text-[#FFD700] hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-all duration-300 cursor-pointer ${
      activePage === page
        ? "text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
        : "text-[#B3B3B3]"
    }`;

  const navLinks = [
    { name: "Movies", href: "/movies", id: "movies" },
    { name: "Series", href: "/series", id: "series" },
    { name: "Kids", href: "/kids", id: "kids" },
    { name: "My List", href: "/myList", id: "myList" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 sm:px-10 flex items-center justify-between ${
        isScrolled
          ? "bg-[#0B0B0F]/95 backdrop-blur-md shadow-2xl py-3"
          : "bg-linear-to-b from-[#0B0B0F]/90 via-[#0B0B0F]/40 to-transparent"
      }`}
    >
      <div className="flex items-center gap-10">
        <Link
          href="/"
          className="hover:scale-105 transition-transform duration-300 drop-shadow-xl shrink-0"
        >
          <Image
            className="cursor-pointer transition-all duration-300"
            src="/Images/logo.svg"
            alt="Logo"
            width={isScrolled ? 100 : 120}
            height={isScrolled ? 100 : 120}
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-lg tracking-wide">
          {navLinks.map((link) => (
            <li key={link.id} className={linkClass(link.id)}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}

          <li>
            <Button className="cursor-pointer font-bold border border-[#FFD700]/40 text-[#FFD700] bg-[#FFD700]/5 rounded-full hover:bg-[#FFD700] hover:text-[#0B0B0F] transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] px-5 backdrop-blur-sm">
              Premium
              <Star className="ml-2 w-4 h-4" />
            </Button>
          </li>
        </ul>
      </div>

      <div className="flex gap-3 sm:gap-6 items-center">
        <div className="hidden lg:block">
          <SearchHandel />
        </div>

        {isLoaded && userId ? (
          <div className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-xl border-2 border-[#FFD700] rounded-full overflow-hidden flex items-center justify-center bg-black/50 backdrop-blur-sm shadow-[0_0_15px_rgba(255,215,0,0.3)] gap-3 shrink-0">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox:
                    "w-8 h-8 sm:w-10 sm:h-10 border-none shadow-none",
                },
              }}
            />
          </div>
        ) : (
          isLoaded && (
            <div className="flex items-center gap-3 sm:gap-5">
              <Link
                href="/sign-in"
                className="text-white hover:text-[#FFD700] font-semibold transition-all duration-300 hidden sm:block"
              >
                Log In
              </Link>
              <Link href="/sign-up">
                <Button className="cursor-pointer font-bold border border-[#E50914]/40 text-white bg-[#E50914] rounded-full hover:bg-red-700 transition-all hover:scale-105 shadow-[0_0_15px_rgba(229,9,20,0.2)] px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base backdrop-blur-sm">
                  Join Now
                </Button>
              </Link>
            </div>
          )
        )}

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white hover:text-[#FFD700] transition-colors p-1"
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-[72px] left-0 w-full bg-[#0B0B0F]/98 backdrop-blur-xl transition-all duration-500 ease-in-out border-b border-white/10 lg:hidden overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 py-8"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-6 mb-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const query = (
                e.currentTarget.elements.namedItem("search") as HTMLInputElement
              ).value;
              if (query.trim()) {
                router.push(`/search?query=${encodeURIComponent(query)}`);
                setIsMobileMenuOpen(false);
              }
            }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFD700] w-5 h-5" />
            <input
              name="search"
              type="text"
              placeholder="Search movies..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 transition-all placeholder:text-white/40"
            />
          </form>
        </div>
        <ul className="flex flex-col items-center gap-6 text-xl font-semibold">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${linkClass(link.id)} text-2xl py-2`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
          <li className="pt-4">
            <Button className="w-48 h-12 text-lg cursor-pointer font-bold border border-[#FFD700]/40 text-[#FFD700] bg-[#FFD700]/5 rounded-full hover:bg-[#FFD700] hover:text-[#0B0B0F] transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.1)] px-5 backdrop-blur-sm">
              Premium
              <Star className="ml-2 w-5 h-5" />
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
