import { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Lihat galeri foto KopiKala - interior yang nyaman, kopi yang menggugah selera, dan suasana yang hangat.',
  keywords: ['galeri', 'foto', 'interior coffee shop', 'kopi', 'kopikala'],
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-stone-900 to-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-amber-600/20 backdrop-blur-sm rounded-full text-amber-300 text-sm font-medium mb-6">
            Galeri
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Momen di KopiKala
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Jelajahi keindahan interior, kopi yang menggugah selera, dan suasana hangat 
            yang kami ciptakan untuk Anda.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-stone-50 dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-white dark:bg-stone-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-stone-800 dark:text-white mb-4">
            Bagikan Momen Anda
          </h2>
          <p className="text-stone-600 dark:text-stone-400 mb-8">
            Tag kami di Instagram dengan hashtag <span className="text-amber-600 dark:text-amber-500 font-semibold">#KopiKala</span> dan 
            foto terbaik Anda bisa tampil di galeri kami!
          </p>
          <a
            href="https://instagram.com/kopikala.coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @kopikala.coffee
          </a>
        </div>
      </section>
    </>
  );
}
