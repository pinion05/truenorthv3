import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
