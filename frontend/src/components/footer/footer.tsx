import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

const Footer: React.FC<{ marketPage?: boolean }> = ({ marketPage = false }) => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Process", href: "/buy-home-fall-river" },
    ...(marketPage
      ? []
      : [
          { name: "Contact", href: "#contact" },
          { name: "Free Market Evaluation", href: "/free-market-evaluation" },
        ]),
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ];

  const socialLinks: {
    name: string;
    href: string;
    icon: React.ElementType;
  }[] = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/p/Nader-Omar-Remax-Nova-61566969102547/",
      icon: FacebookLogo,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/nader_omar_realtor/",
      icon: InstagramLogo,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nader-omar-89407733b/",
      icon: LinkedinLogo,
    },
  ];

  return (
    <footer className="w-full bg-[#0a0a0a] text-gray-300 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/remax-nova-flag.webp"
            alt="RE/MAX Nova logo"
            width={100}
            height={100}
            className="w-[80px] rounded-lg bg-white p-2 mb-4"
          />
          <Link href="/" className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold text-white">
              Nader Omar | <span className="text-cyan-400">RE/MAX</span>
            </span>
          </Link>
          <p className="text-sm text-gray-500 mt-4 text-center md:text-left">
            Your trusted partner for Fall River and Halifax real estate.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <div className="space-y-3 text-sm">
            <p className="text-gray-400">32 Akerley Blvd, Dartmouth, NS B3B 1N1</p>
            <p>
              <a
                href="tel:+17823213393"
                className="hover:text-cyan-400 transition-colors"
              >
                (782) 321-3393
              </a>
            </p>
            <p>
              <a
                href="mailto:naderomar@remax.ca"
                className="hover:text-cyan-400 transition-colors"
              >
                naderomar@remax.ca
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-cyan-500 hover:border-cyan-500 text-gray-400 hover:text-white transition-all duration-300"
              >
                <Icon size={18} weight="fill" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Nader Omar Real Estate. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Developed by{" "}
            <a
              href="https://focusflowsoftware.com"
              className="hover:text-cyan-400 transition-colors"
            >
              FocusFlow Software
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;