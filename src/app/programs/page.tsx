"use client";

import { motion } from "framer-motion";

export default function ProgramsPage() {
  const programs = [
    {
      stage: "STAGE 1. Cognitive Foundation (인지적 토대)",
      title: "\"공부를 다시 배우는 시간: 암기에서 사고로의 전환\"",
      description: "영어를 '학습'하는 단계를 넘어, 영어를 지적 활동의 '무기'로 사용하는 법을 익힙니다. 대치동식 정답 찾기에서 벗어나, 텍스트의 이면을 꿰뚫는 비판적 문해력을 기릅니다.",
      curriculum: [
        { name: "Evidence-based Reading", detail: "문장 사이의 논리적 결함을 찾아내는 정밀 독해" },
        { name: "Logical Structuring", detail: "자신의 생각을 무결점 논리로 구조화하는 라이팅 기초" },
        { name: "Inquiry Design", detail: "정답이 아닌 '본질적 질문'을 스스로 설계하는 훈련" }
      ]
    },
    {
      stage: "STAGE 2. Critical Mastery (비판적 숙달)",
      title: "\"질문의 수준이 리더의 계급을 결정합니다\"",
      description: "미국 명문 교육의 핵심인 '하크니스 테이블(Harkness Table)'을 장악하기 위한 심화 과정입니다. 방대한 리서치를 바탕으로 자신만의 관점을 정립하고, 타인의 논리를 해체, 재구성하는 고도의 지적 유연성을 기릅니다.",
      curriculum: [
        { name: "Research & Argument", detail: "데이터 속에서 통찰을 뽑아내어 주장을 설계하는 힘" },
        { name: "Socratic Debate", detail: "상대의 논증을 파고들어 대화를 주도하는 전략적 디베이트" },
        { name: "Perspective Analysis", detail: "다각도의 사회학적·역사적 시각으로 현상을 재해석하는 통찰" }
      ]
    },
    {
      stage: "STAGE 3. Apex Simulation (최정점 시뮬레이션)",
      title: "\"입학 첫날부터 강의실의 주인공이 되는 법\"",
      description: "하버드와 앤도버의 강의실을 그대로 재현합니다. 대학 수준의 장문 에세이와 끝없는 토론 속에서 자신의 지적 우월성을 증명하며, 유학지에서 리더로 군림할 실전 역량을 완성합니다.",
      curriculum: [
        { name: "Ivy-level Seminar", detail: "실제 미국 명문대 세미나 형식의 고난도 학술 토론" },
        { name: "Master-class Writing", detail: "저널리즘과 법학적 논증이 결합된 독보적인 에세이 완성" },
        { name: "Feedback Integration", detail: "비판을 수용하고 자신의 논리를 더 견고하게 진화시키는 리더의 태도" }
      ]
    }
  ];

  return (
    <div className="min-h-screen text-[#E0E0E0] pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#c4a47c]">
            Programs
          </h1>
          <p className="text-xl text-[#A0A0A0] font-light">과목이 아니라 성장의 흐름으로 설계된 프로그램</p>
        </motion.div>

        <div className="space-y-16">
          {programs.map((prog, index) => (
            <motion.div
              key={index}
              id={`stage-${index + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#1e1e1e] border border-[#2e2e2e] rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-[#c4a47c]/30 transition-colors duration-500"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#c4a47c]/50 group-hover:bg-[#c4a47c] transition-colors duration-500"></div>
              
              <h2 className="text-[#c4a47c] font-mono tracking-widest text-sm md:text-base mb-4">
                {prog.stage}
              </h2>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#E0E0E0] mb-6 leading-tight">
                {prog.title}
              </h3>
              <p className="text-[#A0A0A0] text-lg font-light leading-relaxed mb-10">
                {prog.description}
              </p>
              
              <div className="pt-8 border-t border-[#2e2e2e]">
                <h4 className="text-sm font-bold text-[#737373] tracking-widest uppercase mb-6">Core Curriculum</h4>
                <ul className="space-y-4">
                  {prog.curriculum.map((curr, idx) => (
                    <li key={idx} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                      <span className="text-[#E0E0E0] font-medium min-w-[200px]">{curr.name}</span>
                      <span className="text-[#A0A0A0] font-light text-sm md:text-base">{curr.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
