"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export function TargetSection() {
  return (
    <section className="w-full px-6 py-32 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#E0E0E0] mb-6">
            이 수업은 모두를 위한 수업이 아닙니다
          </h2>
          <p className="text-[#A0A0A0] text-lg font-sans font-light">
            TRUE NORTH는 명확한 목표와 의지를 가진 학생들과 함께합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Good Fit */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#1e1e1e]/50 border border-[#c4a47c]/20 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c4a47c]/50 to-transparent"></div>
            <h3 className="text-2xl font-serif font-bold text-[#E0E0E0] mb-8 flex items-center">
              <span className="w-2 h-8 bg-[#c4a47c] mr-4 rounded-sm"></span>
              이런 학생에게 적합합니다
            </h3>
            <ul className="space-y-6">
              {[
                "진짜 실력을 만들고 싶은 학생",
                "유학 이후의 삶이 두려운 학생",
                "질문하고 사고하는 훈련을 원하는 학생",
                "주도적인 학습 능력을 기르고 싶은 학생"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#c4a47c] mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-[#E0E0E0] font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bad Fit */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#121212] border border-[#2e2e2e] rounded-3xl p-8 lg:p-12"
          >
            <h3 className="text-2xl font-serif font-bold text-[#737373] mb-8 flex items-center">
              <span className="w-2 h-8 bg-[#333] mr-4 rounded-sm"></span>
              이런 경우에는 맞지 않습니다
            </h3>
            <ul className="space-y-6">
              {[
                "단기 합격만 원하는 경우",
                "정답만 빠르게 얻고 싶은 경우",
                "스스로 고민하기보다 떠먹여주길 바라는 경우",
                "단순 점수 향상이 유일한 목표인 경우"
              ].map((item, i) => (
                <li key={i} className="flex items-start opacity-50">
                  <XCircle className="w-6 h-6 text-[#737373] mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-[#A0A0A0] font-light text-lg line-through decoration-[#737373]/50">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
