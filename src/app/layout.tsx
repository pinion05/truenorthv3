import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Beams from "@/components/ui/beams";

const notoSerifKR = Noto_Serif_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

const notoSansKR = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "TRUE NORTH - 입시를 버리고, 유학 이후를 준비합니다",
  description: "유학 합격이 아닌 유학생으로 살아갈 실력을 만드는 교육",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${notoSerifKR.variable} ${notoSansKR.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(196,164,124,0.06),_transparent_28%),linear-gradient(135deg,_rgba(255,255,255,0.01)_0%,_transparent_42%,_rgba(255,255,255,0.015)_100%)]" />
            <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,white,rgba(255,255,255,0.86)_62%,transparent_100%)]" />
            <div className="absolute inset-0 opacity-18 mix-blend-screen [filter:brightness(1.04)_contrast(1.06)]">
              <Beams
                beamWidth={4}
                beamHeight={20}
                beamNumber={30}
                lightColor="#cfcfcf"
                speed={3.9}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={30}
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="relative min-h-screen bg-background">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
