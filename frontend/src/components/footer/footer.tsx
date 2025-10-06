import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

const Footer: React.FC<{ marketPage?: boolean }> = ({ marketPage = false }) => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Process", href: "/buy-home-fall-river" },
    ...(marketPage ? [] : [
      { name: "Contact", href: "#contact" },
      { name: "Free Market Evaluation", href: "/free-market-evaluation" }
    ]),
    { name:'Privacy', href:'/privacy'}
  ];

  const socialLinks: {
    name: string;
    href: string;
    icon: React.ElementType;
  }[] = [
    { name: "Facebook", href: "https://facebook.com/yourprofile", icon: FacebookLogo },
    { name: "Instagram", href: "https://instagram.com/yourprofile", icon: InstagramLogo },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nader-omar-89407733b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: LinkedinLogo },
  ];

  return (
    <footer className="w-full bg-[#0e0e0e] text-gray-200 border-t border-gray-700">
      <div className="max-w-[1200px] mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div className="flex flex-col-reverse">
          <Link href="/" className="flex flex-col items-center md:items-start">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-4">
              Nader Omar | RE/MAX
            </span>
          </Link>
          <Image
            src="/remax-nova-flag.webp"
            alt="remax nova logo"
            width={600}
            height={1300}
            className="w-[100px] mb-8 scale-[1.5] rounded-md mt-4 mx-auto bg-white object-cover"
          />
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
            <a
              href="tel:+17823213393"
              className="hover:text-[#00bfff] transition-colors"
            >
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

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#00bfff] text-white transition-colors"
              >
                <Icon size={18} weight="fill" />
              </a>
            ))}
          </div>
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