"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function LandingPage() {
  return (
    <div className="w-[1440px] h-[1024px] flex flex-col bg-green-500 overflow-hidden">
      <header className="flex items-center justify-center ml-[116px] w-[598px] h-[155px] mt-[162px]">
        <h1 className="[font-family:'Inter-Bold',Helvetica] font-bold text-white text-9xl text-center tracking-[-6.40px] leading-[normal]">
          Dompet.in
        </h1>
      </header>

      <p className="flex items-center justify-center ml-[116px] w-[1091px] h-12 mt-3.5 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[40px] text-center tracking-[-2.00px] leading-[normal] whitespace-nowrap">
        website andalan untuk mengatur dan mengelola keuangan anda
      </p>

      <div
        className="ml-[968px] w-[239px] h-[478px] relative mt-[185px] bg-slate-800 rounded-[29px]"
        role="img"
        aria-label="Decorative element"
      >
        <div className="absolute w-full h-full top-0 left-0 bg-[#d9d9d9] rounded-[29px]" />

        <div className="absolute w-[12.97%] h-[32.43%] top-[31.49%] left-[73.65%] flex items-center justify-center rotate-[168.59deg] [font-family:'Inter-Bold',Helvetica] font-bold text-slate-800 text-9xl text-center tracking-[-6.40px] leading-[normal]">
          &apos;
        </div>
      </div>
    </div>
  );
}
