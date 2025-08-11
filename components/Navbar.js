"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 font-['Gentium Book Basic', serif]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src="/images/logo.png" alt="HNHH Logo" width={42} height={42} />
          </Link>
          <div className="text-xl font-bold">Hear n' Now Hip-Hop</div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/podcasts"
            className="text-white no-underline hover:text-sky-400 transition-colors duration-300"
          >
            Podcasts
          </Link>
          <Link
            href="/videos"
            className="text-white no-underline hover:text-sky-400 transition-colors duration-300"
          >
            Videos
          </Link>
          <Link
            href="/playlists"
            className="text-white no-underline hover:text-sky-400 transition-colors duration-300"
          >
            Playlists
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-900 rounded shadow-lg">
          <Link
            href="/podcasts"
            className="block py-3 px-6 text-white no-underline hover:text-sky-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Podcasts
          </Link>
          <Link
            href="/videos"
            className="block py-3 px-6 text-white no-underline hover:text-sky-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Videos
          </Link>
          <Link
            href="/playlists"
            className="block py-3 px-6 text-white no-underline hover:text-sky-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Playlists
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;