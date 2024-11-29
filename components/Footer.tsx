import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-dark-black/30 mt-auto border-t border-gray-800">
      <div className="container py-6">
        <div className="flex items-center justify-between">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Mohammed Kareem. All rights reserved.
          </p>
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <Link 
                  href="https://github.com/mokareem" 
                  className="text-secondary hover:text-primary transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/mokareem"
                  className="text-secondary hover:text-primary transition-colors text-sm" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
