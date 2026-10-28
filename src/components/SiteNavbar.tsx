"use client";

import Link from "next/link";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "Features", href: "/#features" },
  { label: "About", href: "/#about" },
];

export default function SiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="dark:border-border-dark dark:bg-surface-dark/90 fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white/90 px-2 py-2.5 backdrop-blur-md sm:px-4">
      <div className="flex flex-wrap items-center justify-between">
        <Link href="/#hero" className="flex items-center">
          <svg
            viewBox="0 0 255 100"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-11 w-auto"
          >
            <g transform="translate(10, 50) scale(0.55) translate(-20, -44)">
              <rect fill="#00D4FF" x="40" y="6" width="20" height="10" />
              <rect fill="#00D4FF" x="30" y="16" width="40" height="10" />
              <rect fill="#00D4FF" x="30" y="26" width="40" height="10" />
              <rect fill="#07090F" x="33" y="27" width="8" height="8" />
              <rect fill="#07090F" x="59" y="27" width="8" height="8" />
              <rect
                fill="#00D4FF"
                opacity="0.9"
                x="35"
                y="29"
                width="4"
                height="4"
              />
              <rect
                fill="#00D4FF"
                opacity="0.9"
                x="61"
                y="29"
                width="4"
                height="4"
              />
              <rect fill="#00D4FF" x="20" y="36" width="60" height="10" />
              <rect fill="#00D4FF" x="35" y="46" width="30" height="10" />
              <rect
                fill="#00D4FF"
                opacity="0.65"
                x="35"
                y="56"
                width="30"
                height="8"
              />
              <rect fill="#00D4FF" x="30" y="64" width="14" height="10" />
              <rect fill="#00D4FF" x="56" y="64" width="14" height="10" />
              <rect fill="#00D4FF" x="24" y="74" width="18" height="8" />
              <rect fill="#00D4FF" x="58" y="74" width="18" height="8" />
            </g>
            <text
              x="58"
              y="63"
              fontFamily="'Chakra Petch', sans-serif"
              fontWeight="600"
              fontSize="36"
              letterSpacing="-0.5"
            >
              <tspan
                fill="currentColor"
                className="text-gray-900 dark:text-white"
              >
                Gamer
              </tspan>
              <tspan fill="#00D4FF">Dex</tspan>
            </text>
          </svg>
        </Link>
        <div className="flex items-center gap-2 md:order-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Open main menu"
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            className="inline-flex cursor-pointer items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            {isMenuOpen ? (
              <HiXMark className="h-6 w-6" />
            ) : (
              <HiBars3 className="h-6 w-6" />
            )}
          </button>
        </div>
        <ul
          id="site-menu"
          className={`${isMenuOpen ? "flex" : "hidden"} mt-4 w-full flex-col md:order-1 md:mt-0 md:flex md:w-auto md:flex-row md:space-x-8 md:text-sm`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="dark:border-border-dark md:hover:text-brand block border-b border-gray-100 py-2 pr-4 pl-3 font-medium tracking-wide text-gray-700 hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
