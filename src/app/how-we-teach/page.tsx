"use client";

import { motion } from "framer-motion";

export default function HowWeTeachPage() {
  const pillars = [
    {
      title: "NOT Survival, BUT Dominance",
      subtitle: "남들을 쫓는 유학이 아닌, 시스템을 리드하는 지성",
      desc: "유학은 뒤처지지 않기 위한 생존 게임이 아닙니다. 우리는 아이가 강의실의 '관객'이 아닌 '리더'가 되어 토론을 장악하고 시스템의 Apex(최정점)에 서는 법을 가르칩니다."
    },
    {
      title: "Antifragile Mind",
      subtitle: "기술의 격변 속에서도 무너지지 않는 인지 보험",
      desc: "AI가 시험을 대신 치는 시대, 단순 암기 지식은 취약(Fragile)합니다. 우리는 어떤 환경 변화에도 스스로 진화하는 '질문하는 힘'과 '지적 열망'을 이식합니다."
    },
    {
      title: "Elite Communication",
      subtitle: "세계를 움직이는 언어로 상대를 압도하는 설득력",
      desc: "하버드 로스쿨 변호사의 전략적 논리와 NYT 저널리스트의 날카로운 서사. 주류 사회의 문법을 통해 논리로 압도하고 세상을 설득하는 법을 가르칩니다."
    }
  ];

  return (
    <div className="bg-[#121212] min-h-screen text-[#E0E0E0] pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#E0E0E0]">
            입학 허가서는<br />
            <span className="text-[#c4a47c]">우리의 목표가 아닙니다.</span>
          </h1>
          <p className="text-xl text-[#A0A0A0] font-light leading-relaxed max-w-3xl mx-auto">
            합격은 당연한 결과일 뿐, TRUE NORTH는 그 너머의 세상에서 아이가 스스로 빛날 <span className="text-[#E0E0E0] font-medium border-b border-[#c4a47c]/50 pb-1">'지적 자립심'</span>을 설계합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#1e1e1e] p-8 lg:p-10 rounded-3xl border border-[#2e2e2e] hover:border-[#c4a47c]/40 transition-colors flex flex-col h-full group"
            >
              <h2 className="text-[#c4a47c] font-serif text-2xl font-bold mb-4 group-hover:text-[#d4b48c] transition-colors">{pillar.title}</h2>
              <h3 className="text-[#E0E0E0] font-medium text-lg mb-6 leading-snug">{pillar.subtitle}</h3>
              <p className="text-[#A0A0A0] font-light leading-relaxed flex-grow">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#1e1e1e] to-[#0d0d12] border border-[#c4a47c]/20 p-12 md:p-16 rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#c4a47c] mb-6 relative z-10">
            아이의 평생을 지탱할 가장 견고한 '인지 자산'
          </h3>
          <p className="text-xl md:text-2xl text-[#E0E0E0] font-light leading-relaxed relative z-10">
            TRUE NORTH와 함께라면 아이의 미래는<br />
            그 어떤 환경에서도 무너지지 않습니다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
