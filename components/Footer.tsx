import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Home", url: "/" },
    { name: "Movies", url: "/movies" },
    { name: "Contact", url: "/contact" },
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms of Service", url: "/terms-of-service" },
  ];

  return (
    <footer className="bg-transparent text-white py-10 mt-auto">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center space-y-6">
        <nav>
          <ul className="flex flex-wrap items-center justify-center text-[15px] md:text-base font-bold tracking-wider">
            {links.map((link, index) => (
              <li key={link.name} className="flex items-center">
                <Link
                  href={link.url}
                  className="hover:text-[#ffcc26] transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
                {/* Separator */}
                {index < links.length - 1 && (
                  <span className="text-gray-500/50 font-normal mx-3 md:mx-6 select-none leading-none">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="text-gray-400 text-sm font-medium tracking-wide text-center">
          © 2026 Movies App. All rights reserved. Made with ❤️ by Alroba
        </div>
      </div>
    </footer>
  );
}
