"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif-text',
});

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-foreground/20">
      <nav className="max-w-3xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" >
            <h1 className={`${dmSerifText.className} text-secondary text-xl`}>Mohammed K.</h1>
          </Link>
          <ul className="flex items-center gap-6">
            <li>
              <Link 
                href="/"
                className={`text-sm transition-colors ${isActive("/") ? "text-foreground" : "text-foreground/60 hover:text-foreground"}`}
              >
                home
              </Link>
            </li>
            <li>
              <Link 
                href="/posts"
                className={`text-sm transition-colors ${isActive("/posts") ? "text-foreground" : "text-foreground/60 hover:text-foreground"}`}
              >
                posts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
