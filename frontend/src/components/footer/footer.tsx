import React, { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
// import remaxBalloon from '../../../public/remax-ballon.webp';

// Define page interface for sitemap
interface Page {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

const Footer: React.FC = () => {
  // Sitemap pages with optional subItems
  const pages: Page[] = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      subItems: [
        { name: 'Buying', href: '/services/buying' },
        { name: 'Selling', href: '/services/selling' },
        { name: 'Relocating', href: '/services/relocating' },
        { name: 'Market Insights', href: '/services/market-insights' },
      ],
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // State for mobile submenu toggles
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <footer className="w-full bg-[#0e0e0e] text-gray-200 border-t border-gray-700">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        {/* Top Left: Image and Name */}
        <div className="mb-12 md:mb-0">
          <Link href="/" className="flex flex-col items-center md:items-start">
            {/* <Image
              src={logo}
              alt="RE/MAX balloon logo for Yasser Khalaf"
              width={80}
              height={80}
              className="mb-2"
            /> */}
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Your name here
            </span>
          </Link>
        </div>

        {/* Main Content: Contact, Sitemap, Legal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Contact
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-2">
              1234 Quinpool Rd, Halifax, NS B3L 1A3
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-2">
              <a href="tel:+19021234567" className="hover:text-[#00bfff] transition-colors">
                (902) 123-4567
              </a>
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-2">
              <a
                href="mailto:yasser@yasserkhalaf.com"
                className="hover:text-[#00bfff] transition-colors"
              >
               contact@gmail.com
              </a>
            </p>
            <Link
              href="/contact"
              className="text-sm sm:text-base md:text-lg hover:text-[#00bfff] transition-colors underline"
            >
              Get in Touch
            </Link>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Sitemap
            </h3>
            <ul className="space-y-4">
              {pages.map((page) => (
                <li key={page.name}>
                  <div className="flex flex-col">
                    <Link
                      href={page.href}
                      className="text-sm sm:text-base md:text-lg hover:text-[#00bfff] transition-colors"
                      onClick={() => page.subItems && toggleSubmenu(page.name)}
                    >
                      {page.name}
                    </Link>
                    <AnimatePresence>
                      {(page.subItems && (openSubmenu === page.name || !openSubmenu)) && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-1"
                        >
                          {page.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                className="text-xs sm:text-sm md:text-base hover:text-[#00bfff] transition-colors block py-1"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Legal
            </h3>
            <p className="text-xs sm:text-sm md:text-base">Focus Flow Software 2025</p>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="text-center mt-12">
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            Developed by{' '}
            <a
              href="https://focusflowsoftware.com"
              className="hover:text-[#00bfff] transition-colors"
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