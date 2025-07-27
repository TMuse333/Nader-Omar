import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Process", href: "/buy-home-fall-river" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[#0e0e0e] text-gray-200 border-t border-gray-700">
      <div className="max-w-[1200px] mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <Link href="/" className="flex flex-col items-center md:items-start">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Nader Omar | RE/MAX
            </span>
          </Link>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
            Contact
          </h3>
          <p className="text-sm sm:text-base md:text-lg mb-2">
            32 Akerley Blvd, Dartmouth, NS B3B 1N1
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-2">
            <a href="tel:+17823213393" className="hover:text-[#00bfff] transition-colors">
              (782)-321-3393
            </a>
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-2">
            <a
              href="mailto:naderomar@remax.ca"
              className="hover:text-[#00bfff] transition-colors"
            >
              naderomar@remax.ca
            </a>
          </p>
          <a
            href="#contact"
            className="text-sm sm:text-base md:text-lg hover:text-[#00bfff] transition-colors underline"
          >
            Get in Touch
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
            Navigation
          </h3>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm sm:text-base md:text-lg hover:text-[#00bfff] transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Developer Credit */}
      <div className="text-center mt-4 pb-8 px-4 text-xs sm:text-sm md:text-base text-gray-400">
        Developed by{" "}
        <a
          href="https://focusflowsoftware.com"
          className="hover:text-[#00bfff] transition-colors"
        >
          FocusFlow Software
        </a>
      </div>
    </footer>
  );
};

export default Footer;
