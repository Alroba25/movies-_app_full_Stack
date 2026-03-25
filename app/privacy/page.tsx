import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eye, Lock, Database, Bell } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      icon: <Eye className="w-5 h-5 text-[#FFD700]" />,
      title: "Data We Collect",
      content:
        "We collect information relative to your interactions with CIMANOW, including search queries, viewing history, and basic device information to improve your streaming experience.",
    },
    {
      icon: <Lock className="w-5 h-5 text-[#FFD700]" />,
      title: "How We Use It",
      content:
        "Your data helps us personalize recommendations, maintain security, and optimize our platform performance. We never sell your personal information to third parties.",
    },
    {
      icon: <Database className="w-5 h-5 text-[#FFD700]" />,
      title: "Data Storage",
      content:
        "We utilize industry-standard encryption and security protocols to protect your data. Information is stored securely for as long as your account remains active.",
    },
    {
      icon: <Bell className="w-5 h-5 text-[#FFD700]" />,
      title: "Your Choices",
      content:
        "You have full control over your privacy settings. You can request data deletion or export your personal information at any time through your account settings.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0F] flex flex-col">
      <Navbar />
      
      <main className="grow pt-32 pb-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Privacy <span className="text-[#E50914]">Policy</span>
            </h1>
            <p className="text-gray-400 font-medium tracking-widest text-sm uppercase">
              Last Updated: March 26, 2026
            </p>
            <div className="w-24 h-1 bg-[#E50914] mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(229,9,20,0.5)]" />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-3xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#E50914]/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-[100px]" />

            <div className="relative z-10 grid gap-12">
              {sections.map((section, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-6 items-start group">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-[#FFD700]/20 to-transparent flex items-center justify-center border border-white/10 group-hover:border-[#FFD700]/50 transition-all duration-300">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#FFD700] transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed font-light text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>
              By continuing to use CIMANOW, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}