import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Scale, FileText, Globe } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      icon: <Globe className="w-5 h-5 text-[#FFD700]" />,
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using CIMANOW, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
    },
    {
      icon: <Scale className="w-5 h-5 text-[#FFD700]" />,
      title: "2. Use License",
      content:
        "Permission is granted to temporarily download one copy of the materials (information or software) on CIMANOW's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
    },
    {
      icon: <FileText className="w-5 h-5 text-[#FFD700]" />,
      title: "3. Content Disclaimer",
      content:
        "The materials on CIMANOW's website are provided on an 'as is' basis. CIMANOW makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#FFD700]" />,
      title: "4. Limitations",
      content:
        "In no event shall CIMANOW or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CIMANOW's website.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0F] flex flex-col">
      <Navbar />
      
      <main className="grow pt-32 pb-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Terms of <span className="text-[#E50914]">Use</span>
            </h1>
            <p className="text-gray-400 font-medium tracking-widest text-sm uppercase">
              Last Updated: March 26, 2026
            </p>
            <div className="w-24 h-1 bg-[#E50914] mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(229,9,20,0.5)]" />
          </div>

          <div className="grid gap-8">
            {sections.map((section, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl hover:border-[#FFD700]/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-[#FFD700]/10 shadow-[0_0_15px_rgba(255,215,0,0.1)] group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-400 leading-relaxed font-light md:text-lg">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-linear-to-br from-[#E50914]/10 to-transparent border border-[#E50914]/20 text-center">
            <p className="text-white font-medium mb-4">
              Have questions about our terms?
            </p>
            <button className="px-8 py-3 bg-[#E50914] text-white font-bold rounded-full hover:bg-red-700 transition-all hover:scale-105 shadow-[0_0_20px_rgba(229,9,20,0.3)]">
              Contact Support
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}