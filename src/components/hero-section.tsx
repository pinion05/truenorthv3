"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function HeroSection() {
  const isGithubActions = process.env.NEXT_PUBLIC_GITHUB_ACTIONS || false;
  const videoSrc = isGithubActions
    ? "/truenorthv3/videos/hero-bg.mp4"
    : "/videos/hero-bg.mp4";

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-42 brightness-[0.48] contrast-[1.08] saturate-[0.82]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(196,164,124,0.08),transparent_30%),linear-gradient(180deg,rgba(2,3,5,0.36)_0%,rgba(2,3,5,0.62)_72%,rgba(2,3,5,0.82)_100%)]" />
      <div className="absolute inset-x-0 top-[12%] z-0 h-40 bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_68%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-[linear-gradient(180deg,transparent_0%,rgba(5,6,8,0.78)_100%)]" />
      <div className="absolute inset-y-0 left-[14%] z-0 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent" />
      <div className="absolute inset-y-0 right-[14%] z-0 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent" />
      <div className="absolute inset-x-[18%] top-[22%] z-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#E0E0E0] leading-tight mb-8"
        >
          입시를 버리고,<br />
          유학 이후를 준비합니다.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-[#A0A0A0] font-sans font-light leading-relaxed mb-12 max-w-2xl"
        >
          유학 합격이 아닌<br />
          유학생으로 살아갈 실력을 만드는 교육<br />
          <span className="font-medium text-[#E0E0E0] mt-2 block">Project TRUE NORTH</span>
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#e0e0e0]/20 text-[#E0E0E0] hover:bg-[#e0e0e0]/5 hover:border-[#e0e0e0]/40 transition-all duration-300 font-sans font-medium h-14 px-8 text-base bg-transparent shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            이 교육의 철학 보기
          </Button>
          <Button 
            size="lg"
            className="bg-[#c4a47c] text-[#121212] hover:bg-[#d4b48c] transition-all duration-300 font-sans font-bold h-14 px-8 text-base shadow-[0_0_15px_rgba(196,164,124,0.3)] hover:shadow-[0_0_25px_rgba(196,164,124,0.5)]"
          >
            이 수업이 맞는지 확인하기
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
