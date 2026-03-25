"use client";
import { Input } from "./ui/input";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function SearchHandel() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <div className="flex items-center">
      <form
        onSubmit={handleSearch}
        className={`flex items-center gap-2 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "w-48 sm:w-64 opacity-100 pr-2" : "w-0 opacity-0"
        }`}
      >
        <div className="relative w-full">
          <Input
            ref={inputRef}
            placeholder="Search movies..."
            className="h-9 w-full bg-white/10 text-white placeholder:text-white/40 rounded-full pl-4 pr-8 focus:ring-1 focus:ring-[#FFD700]/50 transition-all border-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>

      <button
        type="button"
        onClick={toggleSearch}
        className="text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition-all duration-300 group"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-[#FFD700] transition-transform duration-300 rotate-0 hover:scale-110" />
        ) : (
          <Search className="w-5 h-5 group-hover:text-[#FFD700] group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] transition-all group-hover:scale-110" />
        )}
      </button>
    </div>
  );
}
