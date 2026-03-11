"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/how-we-teach", label: "How We Teach" },
  { href: "/instructors", label: "Instructors" },
  { href: "/insights", label: "Insights" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-dvw max-w-full border-b border-white/5 bg-[#0d0d12]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:h-20 md:px-6">
          <Link href="/" className="text-lg font-serif font-bold tracking-wider text-[#E0E0E0] md:text-xl">
            TRUE NORTH
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.href ? "text-[#c4a47c]" : "text-[#A0A0A0] hover:text-[#c4a47c]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center md:flex">
            <Button asChild variant="outline" className="border-[#c4a47c]/50 text-[#c4a47c] hover:bg-[#c4a47c]/10 hover:text-[#c4a47c] transition-colors">
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "모바일 메뉴 닫기" : "모바일 메뉴 열기"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c4a47c]/25 bg-[#15161b]/80 text-[#E0E0E0] transition-colors hover:border-[#c4a47c]/50 hover:text-[#c4a47c] md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 w-dvw max-w-full bg-[#020305]/70 transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-nav-drawer"
        aria-hidden={!isMobileMenuOpen}
        className={cn(
          "fixed right-0 top-0 z-50 flex h-screen w-[min(88dvw,360px)] max-w-[88dvw] flex-col border-l border-white/10 bg-[linear-gradient(180deg,rgba(13,13,18,0.98)_0%,rgba(7,8,12,0.98)_100%)] px-6 pb-8 pt-5 shadow-[-20px_0_60px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#737373]">Navigation</p>
            <p className="mt-2 text-lg font-serif font-bold tracking-wider text-[#E0E0E0]">TRUE NORTH</p>
          </div>
          <button
            type="button"
            aria-label="모바일 메뉴 닫기"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#E0E0E0] transition-colors hover:border-[#c4a47c]/40 hover:text-[#c4a47c]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-2xl border px-4 py-4 text-base font-medium transition-all",
                pathname === item.href
                  ? "border-[#c4a47c]/40 bg-[#c4a47c]/10 text-[#E0E0E0]"
                  : "border-white/5 bg-white/[0.02] text-[#A0A0A0] hover:border-[#c4a47c]/20 hover:bg-white/[0.04] hover:text-[#E0E0E0]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 border-t border-white/8 pt-6">
          <Button
            asChild
            className="h-14 w-full rounded-2xl bg-[#c4a47c] text-base font-bold text-[#121212] shadow-[0_0_24px_rgba(196,164,124,0.18)] transition-all duration-300 hover:bg-[#d4b48c]"
          >
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </aside>
    </>
  );
}
