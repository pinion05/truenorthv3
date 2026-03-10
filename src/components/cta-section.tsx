"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function CtaSection() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden px-6 py-40">
      
      {/* Pin-light effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#c4a47c] opacity-[0.03] blur-[100px] rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#E0E0E0] leading-tight mb-12">
          상담이 아닙니다.<br />
          <span className="text-[#c4a47c]">함께할 수 있는지 먼저 확인합니다.</span>
        </h2>
        
        <Button 
          size="lg"
          className="bg-[#E0E0E0] text-[#121212] hover:bg-white transition-all duration-500 font-sans font-bold h-16 px-12 text-lg rounded-none w-full sm:w-auto min-w-[280px] shadow-[0_10px_40px_rgba(224,224,224,0.1)] hover:shadow-[0_10px_50px_rgba(224,224,224,0.2)]"
        >
          사전 인터뷰 신청하기
        </Button>
      </motion.div>
    </section>
  );
}
