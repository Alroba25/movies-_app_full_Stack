import React from "react";

export default function KidsSection() {
  return (
    <div className="relative w-full overflow-hidden mt-10 bg-[#0b0b0f]">
      {/* Deep curved top separator using border radius */}
      <div className="absolute top-[-200px] left-[-20%] w-[140%] h-[300px] rounded-[50%] bg-[#0B0B0F] z-0" />

      <div className="relative z-10 flex flex-col items-center pt-32 md:pt-40 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-wide">
          We haven't forgotten the kids...
        </h2>
        <p className="text-[#8e8e93] text-sm md:text-lg mb-12 max-w-lg font-medium">
          Content carefully selected for all family members
        </p>

        {/* Kids Movies Image Cluster */}
        <div className="w-full max-w-[1400px] mx-auto flex justify-center items-end mt-4">
          <img
            src="/Images/HomeKids.png"
            alt="Kids Movies and Shows"
            className="w-full h-auto object-contain object-bottom max-h-[450px] md:max-h-[600px]"
          />
        </div>
      </div>
    </div>
  );
}
