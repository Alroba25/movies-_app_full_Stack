"use client";
import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#090a0d] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Glitchy Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none mix-blend-overlay">
        <div className="w-full h-full bg-[repeating-linear-gradient(rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_2px)] bg-size-[100%_2px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        {/* Error Icon */}
        <div className="mb-8 relative group">
          <div className="absolute inset-0 bg-[#FFD700] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />
          <div className="relative bg-[#1A1D24] p-6 rounded-3xl border border-[#FFD700]/20 shadow-2xl">
            <AlertTriangle className="w-20 h-20 text-[#FFD700]" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-black font-bebas-neue tracking-wide mb-4 text-white">
          Technical Glitch
        </h1>

        {/* Subheading/Message */}
        <h2 className="text-2xl md:text-3xl font-bold font-(family-name:--font-playfair) mb-6 text-[#FFD700]">
          Something went wrong in the projection room.
        </h2>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 w-full backdrop-blur-md">
          <p className="text-gray-400 text-sm md:text-base font-mono break-all line-clamp-3">
             {error.message || "An unexpected error occurred while loading this scene."}
          </p>
          {error.digest && (
            <p className="text-gray-600 text-xs mt-3 font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-3 bg-[#FFD700] hover:bg-yellow-500 text-black px-10 py-4 rounded-full font-black text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(255,215,0,0.3)] active:scale-95"
          >
            <RefreshCw className="w-6 h-6" />
            Try to Restart Scene
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 backdrop-blur-md active:scale-95"
          >
            <Home className="w-5 h-5" />
            Go back Home
          </Link>
        </div>
      </div>

      {/* Subtle Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-size-[100%_4px,3px_100%]" />
    </div>
  );
}
