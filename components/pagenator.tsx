"use client";
import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

export default function Pagenator({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  const router = useRouter();

  const getPageRange = () => {
    const delta = 2; // Number of pages to show around current page
    const range: number[] = [];
    const rangeWithDots: (number | string)[] = [];
    let l: number | undefined;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= page - delta && i <= page + delta)
      ) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const pages = getPageRange();

  return (
    <div className="mt-16 flex justify-center pb-20">
      <Pagination>
        <PaginationContent className="gap-2 sm:gap-4">
          {/* Previous */}
          <PaginationPrevious
            className={`cursor-pointer transition-all duration-300 hover:bg-[#FFD700] hover:text-black border border-white/10 ${page === 1 ? "opacity-50 pointer-events-none" : ""}`}
            href={`/people?page=${page - 1}`}
          />

          {/* Page Numbers */}
          <div className="flex items-center gap-1 sm:gap-2">
            {pages.map((p, idx) => (
              <React.Fragment key={idx}>
                {p === "..." ? (
                  <PaginationEllipsis className="text-white/20" />
                ) : (
                  <PaginationLink
                    className={`cursor-pointer duration-500 rounded-xl w-10 h-10 sm:w-12 sm:h-12 text-sm sm:text-base font-bold flex items-center justify-center border transition-all
                      ${
                        p === page
                          ? "bg-[#FFD700] text-black border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.3)] scale-110"
                          : "bg-white/5 text-white/60 border-white/10 hover:border-[#FFD700]/50 hover:text-white hover:bg-white/10"
                      }`}
                    href={`/people?page=${p}`}
                    isActive={p === page}
                  >
                    {p}
                  </PaginationLink>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Next */}
          <PaginationNext
            className={`cursor-pointer transition-all duration-300 hover:bg-[#FFD700] hover:text-black border border-white/10 ${page === totalPages ? "opacity-50 pointer-events-none" : ""}`}
            href={`/people?page=${page + 1}`}
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
}
