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
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(196,164,124,0.14),_transparent_24%),linear-gradient(180deg,_#050608_0%,_#0a0d14_46%,_#050608_100%)]" />
            <div className="absolute inset-0 opacity-28 mix-blend-screen [filter:brightness(1.06)_contrast(1.08)]">
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(5,6,8,0.08)_68%,_rgba(5,6,8,0.28)_100%)]" />
          </div>
          <div className="relative min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
