import type { Metadata } from "next";
import "./globals.css";
import { Geist_Mono } from "next/font/google";


const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});



export const metadata: Metadata = {
  title: "Mohammed's Blog",
  description: "A blog about software development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistMono.className}`}
      >

        {children}
      </body>
    </html>
  );
}
