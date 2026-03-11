import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#08080b]/92 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-xl font-serif font-bold text-[#E0E0E0] tracking-wider mb-2">
            TRUE NORTH
          </Link>
          <p className="text-[#A0A0A0] text-sm">
            유학 합격이 아닌 유학생으로 살아갈 실력을 만드는 교육
          </p>
        </div>
        
        <div className="text-[#737373] text-sm">
          © {new Date().getFullYear()} TRUE NORTH. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
