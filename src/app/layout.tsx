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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(196,164,124,0.08),_transparent_22%),linear-gradient(180deg,_#020305_0%,_#05070c_38%,_#020305_100%)]" />
            <div className="absolute inset-0 opacity-34 [filter:brightness(0.9)_contrast(1.05)_saturate(0.9)]">
              <Beams
                beamWidth={2}
                beamHeight={15}
                beamNumber={12}
                lightColor="#ffffff"
                speed={2}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={0}
                className="h-full w-full"
              />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,_rgba(255,255,255,0.05),_transparent_26%),radial-gradient(circle_at_76%_22%,_rgba(255,255,255,0.035),_transparent_24%),linear-gradient(180deg,_transparent_0%,_rgba(2,3,5,0.14)_76%,_rgba(2,3,5,0.24)_100%)]" />
          </div>
          <div className="relative min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
