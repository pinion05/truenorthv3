import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { DiffSection } from "@/components/diff-section";
import { ProgramSection } from "@/components/program-section";
import { InstructorSection } from "@/components/instructor-section";
import { TargetSection } from "@/components/target-section";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <ProblemSection />
      <DiffSection />
      <ProgramSection />
      <InstructorSection />
      <TargetSection />
      <CtaSection />
    </main>
  );
}
