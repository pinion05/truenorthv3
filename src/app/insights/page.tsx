"use client";

import { motion } from "framer-motion";

export default function InsightsPage() {
  const insights = [
    {
      title: "SAT 만점이 유학에서 의미 없어지는 순간",
      summary: "시험 점수라는 정량적 지표가 어떻게 실제 학문적 역량과 분리되는지, 그리고 왜 많은 '고득점자'들이 아이비리그 첫 학기에 좌절하는지 분석합니다.",
      category: "Academic Reality"
    },
    {
      title: "에세이를 잘 쓰는데 수업을 못 따라가는 이유",
      summary: "대필이나 과도한 첨삭으로 완성된 에세이의 함정. 실시간으로 이루어지는 하크니스 테이블 토론에서 자신의 논리를 방어하지 못하는 근본적인 원인을 파헤칩니다.",
      category: "Communication"
    },
    {
      title: "한국 학생들이 토론에서 침묵하는 이유",
      summary: "언어의 문제가 아닙니다. '정답'을 찾는 교육에 익숙해진 사고 구조가 어떻게 열린 토론과 비판적 사고를 방해하는지 사회문화적 맥락에서 짚어봅니다.",
      category: "Critical Thinking"
    }
  ];

  return (
    <div className="min-h-screen text-[#E0E0E0] pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#E0E0E0] leading-tight">
            유학을 준비하는데<br />
            <span className="text-[#c4a47c]">아무도 말해주지 않는 이야기</span>
          </h1>
        </motion.div>

        <div className="space-y-12">
          {insights.map((insight, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1e1e1e]/50 border border-[#2e2e2e] p-8 md:p-10 rounded-2xl hover:bg-[#1e1e1e] transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#c4a47c] text-sm font-mono tracking-wider">{insight.category}</span>
                <span className="h-px bg-[#2e2e2e] flex-grow"></span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#E0E0E0] mb-4 group-hover:text-[#c4a47c] transition-colors">
                {insight.title}
              </h2>
              <p className="text-[#A0A0A0] font-light leading-relaxed">
                {insight.summary}
              </p>
              <div className="mt-8 flex items-center text-[#c4a47c] text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                Read More <span className="ml-2">→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
