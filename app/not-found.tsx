"use client";
import Link from "next/link";
import { Film, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#090a0d] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E50914] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD700] rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        {/* Animated Icon */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-[#E50914] blur-3xl opacity-20 animate-pulse" />
          <div className="relative bg-[#1A1D24] p-6 rounded-3xl border border-white/10 shadow-2xl">
            <Film className="w-20 h-20 text-[#E50914] animate-bounce" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-black font-bebas-neue tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/20 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold font-(family-name:--font-playfair) mb-6 drop-shadow-lg">
          Lost in Cinema?
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-md">
          The scene you're looking for was cut from the final edit. Let's get you back to the main feature.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 bg-[#E50914] hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(229,9,20,0.4)] active:scale-95"
          >
            <Home className="w-5 h-5" />
            Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-md active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
            Step Back
          </button>
        </div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-10 text-gray-600 text-sm font-medium tracking-widest uppercase">
        Movies App - Extended Cut
      </div>
    </div>
  );
}
