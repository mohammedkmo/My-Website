import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
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
    <html lang="en">
      <body
        className={`${geist.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
