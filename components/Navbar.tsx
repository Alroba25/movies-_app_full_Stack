import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, Star } from "lucide-react";
import Link from "next/link";
export default function Navbar({ activePage }: { activePage?: string }) {
  return (
    <nav className="flex items-center w-full bg-transparent py-5 px-6 absolute top-0 left-0 z-50">
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/Images/logo.svg"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        <ul
          style={{ fontFamily: "sans-serif" }}
          className="flex items-center gap-8 text-white font-bold text-md"
        >
          <li
            className={`hover:text-[#ffcc26] cursor-pointer ${
              activePage === "movies" ? "text-[#ffcc26]" : ""
            }`}
          >
            <Link href="/movies">Movies</Link>
          </li>
          <li
            className={`hover:text-[#ffcc26] cursor-pointer ${
              activePage === "tv_shows" ? "text-[#ffcc26]" : ""
            }`}
          >
            <Link href="/tv_shows">TV Shows</Link>
          </li>
          <li
            className={`hover:text-[#ffcc26] cursor-pointer ${
              activePage === "series" ? "text-[#ffcc26]" : ""
            }`}
          >
            <Link href="/series">Series</Link>
          </li>
          <li
            className={`hover:text-[#ffcc26] cursor-pointer ${
              activePage === "kids" ? "text-[#ffcc26]" : ""
            }`}
          >
            <Link href="/kids">Kids</Link>
          </li>
          <li
            className={`hover:text-[#ffcc26] cursor-pointer ${
              activePage === "my_list" ? "text-[#ffcc26]" : ""
            }`}
          >
            <Link href="/my_list">My List</Link>
          </li>

          <li>
            <Button className="cursor-pointer font-bold border-2 border-[#ffcc26] text-[#ffcc26] bg-transparent rounded-full hover:bg-[#ffcc26] hover:text-black">
              Premium membership
              <Star />
            </Button>
          </li>
        </ul>
      </div>

      <div className="ml-auto flex items-center">
        <Search className="text-white w-5 h-5 cursor-pointer" />
      </div>
    </nav>
  );
}
