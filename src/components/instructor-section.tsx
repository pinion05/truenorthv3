"use client";

import { motion } from "framer-motion";

export function InstructorSection() {
  return (
    <section className="w-full px-6 py-32 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 flex flex-col justify-center space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#E0E0E0] leading-tight">
            누가 가르치는가가<br />
            <span className="text-[#c4a47c]">전부입니다</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl font-sans text-[#A0A0A0] font-light leading-relaxed">
            <p>
              TRUE NORTH의 수업은 학원 강사가 아닌, 실제 글로벌 현장에서 교육과 연구를 해온 <span className="text-[#E0E0E0] font-medium">교육자</span>들이 직접 설계하고 진행합니다.
            </p>
            <p>
              하버드 로스쿨식 지배력을 보여주는 강한 눈빛과 프로페셔널한 철학을 바탕으로 아이의 잠재력을 한계까지 끌어올립니다.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden grayscale contrast-125 brightness-90 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080b] via-transparent to-transparent z-10"></div>
          {/* Placeholder for the portrait */}
          <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
            <div className="text-[#333] font-serif text-2xl font-bold tracking-widest uppercase z-10">Cinematic Portrait</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
