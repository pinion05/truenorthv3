"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ProgramSection() {
  const stages = [
    {
      num: "STAGE 1",
      title: "공부를 다시 배우는 단계",
      sub: "Cognitive Foundation",
      desc: "정답 찾기에서 벗어나 텍스트의 이면을 꿰뚫는 비판적 문해력을 기릅니다."
    },
    {
      num: "STAGE 2",
      title: "사고의 깊이를 만드는 단계",
      sub: "Critical Mastery",
      desc: "타인의 논리를 해체하고 재구성하는 고도의 지적 유연성을 기릅니다."
    },
    {
      num: "STAGE 3",
      title: "유학 이후를 준비하는 단계",
      sub: "Apex Simulation",
      desc: "입학 첫날부터 강의실의 주인공이 되어 유학지에서 리더로 군림할 실전 역량을 완성합니다."
    }
  ];

  return (
    <section className="w-full px-6 py-32 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#E0E0E0] mb-6">
            TRUE NORTH 프로그램은 이렇게 다릅니다
          </h2>
          <p className="text-[#A0A0A0] text-lg font-sans font-light">
            과목이 아니라 <span className="text-[#c4a47c] font-medium">성장의 흐름</span>으로 설계된 프로그램
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-[#2e2e2e] -translate-y-1/2 z-0"></div>

          {stages.map((stage, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#1e1e1e] rounded-2xl p-8 border border-[#2e2e2e] hover:border-[#c4a47c]/50 hover:shadow-[0_0_30px_rgba(196,164,124,0.1)] transition-all duration-500 relative z-10 flex flex-col h-full group"
            >
              <div className="text-[#c4a47c] font-mono text-sm tracking-widest mb-4 opacity-80 group-hover:opacity-100 transition-opacity">{stage.num}</div>
              <h3 className="text-2xl font-serif font-bold text-[#E0E0E0] mb-2 group-hover:text-white transition-colors">{stage.title}</h3>
              <p className="text-[#737373] text-sm mb-6 font-medium tracking-wide">{stage.sub}</p>
              <p className="text-[#A0A0A0] font-light leading-relaxed flex-grow">{stage.desc}</p>
              
              <div className="mt-8 pt-6 border-t border-[#2e2e2e] group-hover:border-[#c4a47c]/30 transition-colors flex items-center text-[#c4a47c] text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                자세히 보기 <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
