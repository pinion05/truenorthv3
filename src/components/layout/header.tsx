import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d12]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-serif font-bold text-[#E0E0E0] tracking-wider">
          TRUE NORTH
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium text-[#A0A0A0] hover:text-[#c4a47c] transition-colors">
            About
          </Link>
          <Link href="/programs" className="text-sm font-medium text-[#A0A0A0] hover:text-[#c4a47c] transition-colors">
            Programs
          </Link>
          <Link href="/how-we-teach" className="text-sm font-medium text-[#A0A0A0] hover:text-[#c4a47c] transition-colors">
            How We Teach
          </Link>
          <Link href="/instructors" className="text-sm font-medium text-[#A0A0A0] hover:text-[#c4a47c] transition-colors">
            Instructors
          </Link>
          <Link href="/insights" className="text-sm font-medium text-[#A0A0A0] hover:text-[#c4a47c] transition-colors">
            Insights
          </Link>
          <Link href="/faq" className="text-sm font-medium text-[#A0A0A0] hover:text-[#c4a47c] transition-colors">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center">
          <Button asChild variant="outline" className="border-[#c4a47c]/50 text-[#c4a47c] hover:bg-[#c4a47c]/10 hover:text-[#c4a47c] transition-colors">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
