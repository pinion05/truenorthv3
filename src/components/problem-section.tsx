"use client";

import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section className="w-full py-32 px-6 md:px-12 lg:px-24 bg-[#121212] flex items-center min-h-[80vh]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#E0E0E0] leading-tight">
            왜 많은 학생들이<br />
            유학을 가서<br />
            <span className="text-[#A0A0A0]">무너질까요?</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center space-y-8 text-lg md:text-xl font-sans"
        >
          <p className="text-[#E0E0E0]/60 leading-relaxed font-light">
            점수는 충분했습니다. 하지만 강의실의 토론에서 침묵하고, 방대한 리딩량에 압도당하며, 에세이의 빈 페이지 앞에서 멈춰 서는 아이들.
          </p>
          <p className="text-[#E0E0E0]/60 leading-relaxed font-light">
            대치동에서 '입시 기술'로 만들어진 스펙은 미국 명문 교육의 치열한 현장에서 가장 먼저 무너집니다.
          </p>
          <p className="text-[#E0E0E0] font-medium leading-relaxed opacity-90 mt-8 pt-8 border-t border-[#1e1e1e]">
            <span className="inline-block whitespace-nowrap">준비되지 않은 합격은 아이에게 <span className="text-[#c4a47c]">'성공'</span>이 아닌 <span className="text-[#ef4444]">'고립'</span>을 선물할 뿐입니다.</span><br />
            유학의 실패는 입학이 아니라 <span className="text-[#c4a47c] border-b border-[#c4a47c]/30 pb-1">준비의 방식</span>에서 시작됩니다.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
