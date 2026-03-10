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
          <div className="relative isolate min-h-screen bg-background">
            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-65"
            >
              <Beams
                beamWidth={6}
                beamHeight={25}
                beamNumber={50}
                lightColor="#8f8f8f"
                speed={4.3}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={30}
                className="h-full w-full"
              />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
