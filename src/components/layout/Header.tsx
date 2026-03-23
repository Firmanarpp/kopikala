'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang Kami' },
  { href: '/menu', label: 'Menu' },
  { href: '/booking', label: 'Reservasi' },
  { href: '/gallery', label: 'Galeri' },
  { href: '/contact', label: 'Kontak' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-stone-900/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
          >
            <div className="relative w-9 h-9 md:w-10 md:h-10 transform group-hover:rotate-12 transition-transform duration-300">
              <Image
                src="/images/logo.png"
                alt="KopiKala Logo"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-stone-800 dark:text-white' : 'text-white'
            }`}>
              KopiKala
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-amber-600 hover:text-white ${
                  isScrolled
                    ? 'text-stone-700 dark:text-stone-200'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-stone-800 dark:text-white' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 dark:bg-stone-800/95 backdrop-blur-md rounded-2xl shadow-xl p-2 mt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-stone-700 dark:text-stone-200 hover:bg-amber-100 dark:hover:bg-amber-900/50 hover:text-amber-700 dark:hover:text-amber-300 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
