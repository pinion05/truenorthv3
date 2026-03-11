"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-[#E0E0E0] pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h1 className="mb-6 text-4xl font-serif font-bold leading-[1.18] md:text-6xl md:leading-[1.08]">
            우리는 왜<br />
            입시 컨설팅을 버렸는가
          </h1>
        </motion.div>

        <div className="space-y-24 text-lg md:text-xl font-sans font-light leading-relaxed max-w-3xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-serif font-bold text-[#c4a47c] mb-6 flex items-center">
              <span className="text-[#333] mr-4 text-3xl font-mono">1️⃣</span> 유학의 현실
            </h2>
            <p className="mb-4">유학은 입학보다 그 이후가 훨씬 더 어렵습니다.</p>
            <p className="text-[#A0A0A0]">
              명문대 입학 허가서는 끝이 아니라 가장 혹독한 경쟁의 시작입니다. 
              충분한 준비 없이 화려한 스펙만으로 만들어진 합격은 
              결국 학생을 학업적 고립으로 몰아넣습니다.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-serif font-bold text-[#c4a47c] mb-6 flex items-center">
              <span className="text-[#333] mr-4 text-3xl font-mono">2️⃣</span> 문제 인식
            </h2>
            <p className="mb-4">많은 교육이 ‘보내는 것’에만 집중합니다.</p>
            <p className="text-[#A0A0A0]">
              에세이를 대신 써주고, 점수를 만들어주는 컨설팅은 
              학생 스스로 사고하고 문제를 해결하는 기회를 박탈합니다. 
              이는 유학 생활에서 마주할 수많은 난관 앞에서 학생을 무너지게 만듭니다.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-serif font-bold text-[#c4a47c] mb-6 flex items-center">
              <span className="text-[#333] mr-4 text-3xl font-mono">3️⃣</span> 우리의 선택
            </h2>
            <p className="mb-4">TRUE NORTH는 합격을 약속하지 않습니다.</p>
            <p className="text-[#E0E0E0] font-medium mb-4">
              대신 유학을 버틸 수 있는 힘을 만듭니다.
            </p>
            <p className="text-[#A0A0A0]">
              우리의 목표는 단순히 대학 문턱을 넘는 것이 아니라, 
              어떤 환경에서도 살아남고 리드할 수 있는 본질적인 지적 역량을 길러주는 것입니다.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 bg-[#1e1e1e] rounded-2xl border border-[#2e2e2e]"
          >
            <h2 className="text-2xl font-serif font-bold text-[#E0E0E0] mb-8">
              교육의 기준
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c4a47c] mt-2.5 mr-4 flex-shrink-0"></span>
                <div>
                  <strong className="text-[#E0E0E0] block mb-1">사고</strong>
                  <span className="text-[#A0A0A0] text-base">주입된 지식을 넘어 스스로 논리를 구축하는 능력</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c4a47c] mt-2.5 mr-4 flex-shrink-0"></span>
                <div>
                  <strong className="text-[#E0E0E0] block mb-1">질문</strong>
                  <span className="text-[#A0A0A0] text-base">정답을 찾는 것이 아니라 본질을 파고드는 질문을 설계하는 힘</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c4a47c] mt-2.5 mr-4 flex-shrink-0"></span>
                <div>
                  <strong className="text-[#E0E0E0] block mb-1">학습 자립</strong>
                  <span className="text-[#A0A0A0] text-base">누군가의 도움 없이 스스로 학습하고 성장할 수 있는 태도</span>
                </div>
              </li>
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
