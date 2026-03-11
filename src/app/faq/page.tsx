"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "합격 컨설팅은 전혀 안 하나요?",
      answer: "네, 우리는 전통적인 의미의 '입시 컨설팅(원서 대필, 스펙 조작 등)'은 진행하지 않습니다. 우리의 목표는 학생이 스스로 명문대 학업을 소화할 수 있는 본질적인 '인지적 근육'을 길러주는 것입니다. 진짜 실력을 갖춘 학생은 자연스럽게 합격이라는 결과에 도달하며, 무엇보다 입학 후에도 무너지지 않습니다."
    },
    {
      question: "시험 준비(SAT/TOEFL)는 어떻게 하나요?",
      answer: "우리의 커리큘럼은 고도의 비판적 사고력과 논리적 텍스트 분석력을 기르는 데 집중되어 있습니다. 이 과정을 충실히 수행하면 SAT의 리딩이나 라이팅 섹션 점수는 자연스럽게 최고 수준으로 향상됩니다. 단순 문제 풀이 스킬이 아닌 텍스트의 구조를 파악하는 본질적 훈련이기 때문입니다."
    },
    {
      question: "다른 학원(GPA 관리 등)과 병행 가능한가요?",
      answer: "가능하지만 권장하지 않습니다. TRUE NORTH의 훈련은 단순 암기가 아닌 깊은 사고와 리서치, 글쓰기를 요구합니다. 절대적인 시간이 필요하며, 다른 주입식 교육과 병행할 경우 학생이 느끼는 인지적 혼란이 올 수 있습니다. 우리는 '정답을 외우는 뇌'가 아닌 '질문을 만드는 뇌'로의 구조적 전환을 요구합니다."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen text-[#E0E0E0] pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="mb-6 text-4xl font-serif font-bold text-[#c4a47c] md:text-6xl">
            FAQ
          </h1>
          <p className="text-xl text-[#A0A0A0] font-light">자주 묻는 질문들</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#1e1e1e] border border-[#2e2e2e] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#c4a47c]/50"
              >
                <span className="text-lg md:text-xl font-medium text-[#E0E0E0] pr-8">{faq.question}</span>
                <span className="text-[#c4a47c] flex-shrink-0">
                  {openIndex === index ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </span>
              </button>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="w-full h-px bg-[#2e2e2e] mb-6"></div>
                <p className="text-[#A0A0A0] font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
