"use client";

import Link from "next/link";
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif-text',
});

export default function Footer() {
  return (
    <footer className="border-t border-foreground/20 mt-auto">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <h2 className={`${dmSerifText.className} text-secondary text-xl`}>Mohammed K.</h2>
            </Link>
            <p className="text-sm text-foreground/60 mt-2">Software Engineer</p>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="https://github.com/mohammedkmo" 
              target="_blank"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              github
            </Link>
            <Link 
              href="https://twitter.com/imohammedkareem" 
              target="_blank"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              twitter
            </Link>
            <Link 
              href="https://linkedin.com/in/mohammedkmo" 
              target="_blank"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              linkedin
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center md:text-left">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Mohammed Kareem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
