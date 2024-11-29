import Link from "next/link";
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-serif-text',
  weight: '400',
});

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-dark-black/30">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className={`text-2xl font-bold ${dmSerifText.className} text-primary`}>
          MK
        </Link>
        
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="text-secondary hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/posts" className="text-secondary hover:text-primary transition-colors">
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
