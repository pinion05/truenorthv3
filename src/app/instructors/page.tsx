"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import hwangJoungwookImage from "../../../public/instructors/hwang-joungwook.png";
import michaelHurtImage from "../../../public/instructors/michael-hurt.png";

export default function InstructorsPage() {
  const instructors = [
    {
      name: "황정욱 (Joungwook Hwang)",
      image: hwangJoungwookImage,
      role: "Master of Logic",
      catchphrase: "\"하버드 로스쿨이 가르치는 '이기는 논리', 유학의 승패를 결정합니다\"",
      academic: [
        "Harvard Law School 법학박사 (J.D.)",
        "Harvard University 경제학 학사 (B.A.)",
        "Northfield Mount Hermon School (NMH) 졸업"
      ],
      professional: [
        "한국외국어대학교 법학 교수",
        "미국 뉴욕주 변호사 (Attorney-at-Law)",
        "최정상급 월스트리스 로펌",
        "Sullivan & Cromwell LLP 변호사",
        "Cleary Gottlieb Steen & Hamilton LLP 변호사"
      ],
      media: [
        "영국 Sky News 한국 정세 분석 패널 (2024~2025)",
        "Arirang News 고정 법률 자문 및 분석 전문가"
      ],
      expertise: "전략적 커뮤니케이션, 비판적 사고(Critical Thinking), 법학적 논증"
    },
    {
      name: "마이클 허트 (Michael Hurt, Ph.D.)",
      image: michaelHurtImage,
      role: "Master of Insight",
      catchphrase: "\"앤도버 졸업생이자 버클리 박사, 미국 엘리트 교육의 '내부자'가 전하는 진짜 유학.\"",
      academic: [
        "UC Berkeley 사회학 박사 (Ph.D.)",
        "Brown University 미국사 및 미국문명 학사 (B.A.)",
        "Phillips Academy Andover 졸업"
      ],
      professional: [
        "시각 사회학자 및 스트리트 사진작가 (Visual Sociologist)"
      ],
      strengths: [
        "보딩스쿨 '이너 서클' 진입을 위한 사회적 코드 전수",
        "아이비리그가 원하는 'Spike(독보적 캐릭터)' 설계 전문가",
        "미국 현지 적응 및 커뮤니티 리더십 멘토링"
      ]
    },
    {
      name: "커니 장 (Connie Chang)",
      role: "Master of Voice",
      catchphrase: "\"뉴욕타임즈 기고 저널리스트의 필력으로 아이의 에세이에 생명력을 불어넣습니다.\"",
      academic: [
        "Cornell University 물리학 박사 (Ph.D.)",
        "Harvard University 물리학 학사 (B.A.)",
        "Caltech (California Institute of Technology) 2년 수료"
      ],
      professional: [
        "The New York Times 기고 저널리스트 (Contributor)",
        "TIME 매거진 기고 저널리스트",
        "The Atlantic, The Washington Post 등 글로벌 주요 매체 라이터"
      ],
      expertise: "미국 주류 사회가 읽는 세련된 영어와 설득의 문장 전문가\n아이비리그 사정관의 마음을 움직이는 스토리텔링 설계\n고등 사고력을 기반으로 한 Academic Writing 지도"
    }
  ];

  return (
    <div className="min-h-screen text-[#E0E0E0] pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h1 className="mb-6 text-4xl font-serif font-bold text-[#c4a47c] md:text-6xl">
            Instructors
          </h1>
          <p className="text-xl text-[#A0A0A0] font-light">누가 가르치는가가 전부입니다.</p>
        </motion.div>

        <div className="space-y-32">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-2/5 aspect-[3/4] bg-[#1a1a1a] rounded-2xl overflow-hidden relative shadow-2xl grayscale contrast-125 brightness-90">
                {instructor.image ? (
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-top"
                    priority={index < 2}
                  />
                ) : (
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 text-[#E0E0E0] font-serif z-10">
                  <div className="text-sm tracking-widest text-[#c4a47c] mb-1">{instructor.role}</div>
                  <div className="text-2xl font-bold">{instructor.name.split(' (')[0]}</div>
                </div>
              </div>

              {/* Info */}
              <div className="w-full lg:w-3/5">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#E0E0E0] mb-2">{instructor.name}</h2>
                  <h3 className="text-[#c4a47c] font-mono tracking-widest uppercase mb-6">{instructor.role}</h3>
                  <p className="text-xl md:text-2xl text-[#E0E0E0] font-light leading-relaxed italic border-l-2 border-[#c4a47c] pl-6 py-2 bg-[#1e1e1e]/30">
                    {instructor.catchphrase}
                  </p>
                </div>

                <div className="space-y-8 font-sans">
                  <div>
                    <h4 className="text-sm font-bold text-[#737373] tracking-widest uppercase mb-4 border-b border-[#2e2e2e] pb-2">Academic Background</h4>
                    <ul className="space-y-2">
                      {instructor.academic.map((item, i) => (
                        <li key={i} className="text-[#A0A0A0] font-light flex items-start">
                          <span className="text-[#c4a47c] mr-3 mt-0.5">+</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#737373] tracking-widest uppercase mb-4 border-b border-[#2e2e2e] pb-2">Professional Experience</h4>
                    <ul className="space-y-2">
                      {instructor.professional.map((item, i) => (
                        <li key={i} className="text-[#A0A0A0] font-light flex items-start">
                          <span className="text-[#c4a47c] mr-3 mt-0.5">+</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {instructor.media && (
                    <div>
                      <h4 className="text-sm font-bold text-[#737373] tracking-widest uppercase mb-4 border-b border-[#2e2e2e] pb-2">Media</h4>
                      <ul className="space-y-2">
                        {instructor.media.map((item, i) => (
                          <li key={i} className="text-[#A0A0A0] font-light flex items-start">
                            <span className="text-[#c4a47c] mr-3 mt-0.5">+</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {instructor.strengths && (
                    <div>
                      <h4 className="text-sm font-bold text-[#737373] tracking-widest uppercase mb-4 border-b border-[#2e2e2e] pb-2">Key Strengths</h4>
                      <ul className="space-y-2">
                        {instructor.strengths.map((item, i) => (
                          <li key={i} className="text-[#E0E0E0] font-medium flex items-start">
                            <span className="text-[#c4a47c] mr-3 mt-0.5">+</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {instructor.expertise && (
                    <div className="pt-4">
                      <p className="text-[#E0E0E0] font-medium">
                        <span className="text-[#c4a47c] font-bold mr-2">전문 분야:</span> 
                        <span className="whitespace-pre-line">{instructor.expertise}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
