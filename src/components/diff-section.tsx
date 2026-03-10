"use client";

import { motion } from "framer-motion";

export function DiffSection() {
  return (
    <section className="w-full py-32 px-6 md:px-12 lg:px-24 bg-[#0d0d12]">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#E0E0E0] mb-6">
            우리는 유학 컨설팅을 하지 않습니다
          </h2>
          <p className="text-[#A0A0A0] text-lg md:text-xl font-sans font-light">
            TRUE NORTH는 합격 너머, 지적 지배력(Dominance)을 설계합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-px h-full bg-gradient-to-b from-transparent via-[#2e2e2e] to-transparent"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-[#121212] border border-[#1e1e1e] p-10 lg:p-14 rounded-3xl flex flex-col h-full"
          >
            <div className="mb-10 pb-6 border-b border-[#1e1e1e]">
              <h3 className="text-[#A0A0A0] text-2xl font-serif font-bold mb-2">대치동 유학 학원</h3>
              <p className="text-[#737373] text-sm">일반 유학원 (Survival)</p>
            </div>
            <ul className="space-y-6 flex-grow flex flex-col justify-center">
              {[
                { label: "목표", value: "대학 입학 허가서 (Admission)" },
                { label: "방식", value: "점수 관리 및 에세이 대필" },
                { label: "결과", value: "환경에 취약한 합격생 (Fragile)" },
                { label: "관점", value: "교육을 지출로 인식" }
              ].map((item, i) => (
                <li key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="text-[#555555] font-medium min-w-[60px] text-sm">{item.label}</span>
                  <span className="text-[#A0A0A0] font-light text-lg">{item.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#1e1e1e] border border-[#c4a47c]/20 p-10 lg:p-14 rounded-3xl flex flex-col h-full relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#c4a47c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="mb-10 pb-6 border-b border-[#2e2e2e] relative z-10">
              <h3 className="text-[#c4a47c] text-2xl font-serif font-bold mb-2">Project TRUE NORTH</h3>
              <p className="text-[#c4a47c]/70 text-sm">지적 지배력 (Dominance)</p>
            </div>
            <ul className="space-y-6 flex-grow flex flex-col justify-center relative z-10">
              {[
                { label: "목표", value: "주류 사회의 지적 지배력 (Apex Status)" },
                { label: "방식", value: "하버드 로스쿨식 비판적 사고 훈련" },
                { label: "결과", value: "변화에 강한 리더 (Antifragile)" },
                { label: "관점", value: "교육을 인지 보험으로 투자" }
              ].map((item, i) => (
                <li key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="text-[#c4a47c]/60 font-medium min-w-[60px] text-sm">{item.label}</span>
                  <span className="text-[#E0E0E0] font-medium text-lg tracking-wide">{item.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-2xl font-serif text-[#A0A0A0] italic">
            "합격은 목표가 아니라 <span className="text-[#E0E0E0] not-italic font-bold border-b border-[#c4a47c]/50 pb-1 px-1">과정 중 하나</span>일 뿐입니다."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
