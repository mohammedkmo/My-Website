import Link from "next/link";
import { DM_Serif_Text } from "next/font/google";

const dmSerifText = DM_Serif_Text({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-serif-text',
  weight: '400',
});

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-dark-black/60">
      <div className="container flex items-center justify-between py-2">
        <Link href="/" className={` ${dmSerifText.className} `}>
          <h1 className={`text-primary text-2xl ${dmSerifText.className}`}>Mohammed K.</h1>
        </Link>
        
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="text-secondary text-sm hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/posts" className="text-secondary text-sm hover:text-primary transition-colors">
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
