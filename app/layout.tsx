import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";


const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});



export const metadata: Metadata = {
  title: "Mohammed Kareem",
  description: "Software Engineer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.className}`}
      >

        {children}
      </body>
    </html>
  );
}
