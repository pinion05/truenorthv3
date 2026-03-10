"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ApplyPage() {
  return (
    <div className="min-h-screen text-[#E0E0E0] pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#E0E0E0] leading-tight">
            모든 신청이<br />
            <span className="text-[#c4a47c]">수업으로 이어지지는 않습니다</span>
          </h1>
          <p className="text-lg text-[#A0A0A0] font-light max-w-xl mx-auto">
            TRUE NORTH는 명확한 목표와 의지를 가진 학생들과 함께합니다. 
            아래 폼을 작성해주시면 검토 후 개별 연락 드리겠습니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#1e1e1e]/80 backdrop-blur-md border border-[#2e2e2e] rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <form className="space-y-8">
            <div className="space-y-2 group">
              <label htmlFor="name" className="text-sm font-medium text-[#737373] group-focus-within:text-[#c4a47c] transition-colors">
                Name
              </label>
              <input 
                type="text" 
                id="name"
                name="name"
                className="w-full bg-[#121212]/50 border-b-2 border-[#2e2e2e] text-[#E0E0E0] px-4 py-4 rounded-t-lg focus:outline-none focus:border-[#c4a47c] transition-colors"
                placeholder="학생 이름을 입력해주세요"
                required
              />
            </div>

            <div className="space-y-2 group">
              <label htmlFor="email" className="text-sm font-medium text-[#737373] group-focus-within:text-[#c4a47c] transition-colors">
                Email
              </label>
              <input 
                type="email" 
                id="email"
                name="email"
                className="w-full bg-[#121212]/50 border-b-2 border-[#2e2e2e] text-[#E0E0E0] px-4 py-4 rounded-t-lg focus:outline-none focus:border-[#c4a47c] transition-colors"
                placeholder="연락받으실 이메일 주소를 입력해주세요"
                required
              />
            </div>

            <div className="space-y-2 group">
              <label htmlFor="tel" className="text-sm font-medium text-[#737373] group-focus-within:text-[#c4a47c] transition-colors">
                Tel
              </label>
              <input 
                type="tel" 
                id="tel"
                name="tel"
                className="w-full bg-[#121212]/50 border-b-2 border-[#2e2e2e] text-[#E0E0E0] px-4 py-4 rounded-t-lg focus:outline-none focus:border-[#c4a47c] transition-colors"
                placeholder="연락가능한 전화번호를 입력해주세요"
                required
              />
            </div>

            <div className="space-y-2 group">
              <label htmlFor="message" className="text-sm font-medium text-[#737373] group-focus-within:text-[#c4a47c] transition-colors">
                Message (Optional)
              </label>
              <textarea 
                id="message"
                name="message"
                rows={4}
                className="w-full bg-[#121212]/50 border-b-2 border-[#2e2e2e] text-[#E0E0E0] px-4 py-4 rounded-t-lg focus:outline-none focus:border-[#c4a47c] transition-colors resize-none"
                placeholder="현재 학년, 고민, 목표 등 자유롭게 남겨주세요"
              ></textarea>
            </div>

            <div className="pt-6">
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-[#c4a47c] text-[#121212] hover:bg-[#d4b48c] transition-all duration-300 font-sans font-bold h-16 text-lg rounded-xl shadow-[0_0_15px_rgba(196,164,124,0.3)] hover:shadow-[0_0_25px_rgba(196,164,124,0.5)]"
              >
                사전 인터뷰 신청 제출하기
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
