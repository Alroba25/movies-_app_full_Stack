import Image from "next/image";

export default function KidsSection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#0b0b0f]">
      {/* Deep curved top separator using border radius */}
      <div className="absolute top-[-200px] left-[-20%] w-[140%] h-[300px] rounded-[50%] bg-[#0B0B0F] z-0" />

      <div className="relative z-10 flex flex-col items-center pt-8 md:pt-24 px-4 text-center">
        <h2 className="text-3xl md:text-6xl font-black text-white mb-1 md:mb-2 tracking-tighter uppercase leading-none drop-shadow-2xl">
          We haven't forgotten the kids...
        </h2>
        <p className="text-[#8e8e93] text-xs md:text-lg mb-2 md:mb-6 max-w-lg font-medium opacity-80 uppercase tracking-widest leading-none">
          Content carefully selected for all family members
        </p>

        {/* Kids Movies Image Cluster */}
        <div className="w-full max-w-[1400px] mx-auto flex justify-center items-end relative h-[380px] md:h-[500px]">
          <Image
            src="/Images/HomeKids.png"
            alt="Kids Movies and Shows"
            fill
            className="object-contain object-bottom"
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
        </div>
      </div>
    </div>
  );
}
