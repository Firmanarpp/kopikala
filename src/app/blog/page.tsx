import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Baca artikel terbaru dari KopiKala tentang kopi, tips brewing, event, dan promo terbaru.',
  keywords: ['blog', 'artikel kopi', 'tips brewing', 'event coffee shop', 'kopikala'],
};

const blogPosts = [
  {
    id: 1,
    title: 'Mengenal Jenis-Jenis Biji Kopi Indonesia',
    excerpt: 'Indonesia memiliki berbagai jenis biji kopi berkualitas tinggi. Dari Gayo hingga Toraja, setiap daerah memiliki karakteristik unik.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop',
    category: 'Edukasi',
    date: '15 Mar 2024',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Tips Membuat Latte Art untuk Pemula',
    excerpt: 'Ingin membuat latte art yang cantik di rumah? Simak tips dan trik dari barista kami untuk menghasilkan latte art yang sempurna.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
    category: 'Tutorial',
    date: '10 Mar 2024',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Event: Coffee Cupping Session Maret 2024',
    excerpt: 'Bergabunglah dengan kami dalam sesi cupping kopi bulanan. Pelajari cara mencicipi dan menilai kopi seperti profesional.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop',
    category: 'Event',
    date: '5 Mar 2024',
    readTime: '3 min read',
  },
  {
    id: 4,
    title: 'Menu Baru: Seasonal Spring Collection',
    excerpt: 'Sambut musim semi dengan koleksi minuman terbaru kami. Dari Sakura Latte hingga Honey Citrus Cold Brew.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop',
    category: 'Promo',
    date: '1 Mar 2024',
    readTime: '4 min read',
  },
  {
    id: 5,
    title: 'Cara Menyimpan Biji Kopi dengan Benar',
    excerpt: 'Penyimpanan yang tepat adalah kunci untuk menjaga kesegaran biji kopi. Pelajari cara terbaik menyimpan kopi Anda.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop',
    category: 'Tips',
    date: '25 Feb 2024',
    readTime: '4 min read',
  },
  {
    id: 6,
    title: 'Kolaborasi dengan Petani Kopi Lokal',
    excerpt: 'Kami bangga bekerja sama dengan petani kopi lokal Indonesia. Kenali lebih dekat mitra petani kami.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop',
    category: 'Cerita',
    date: '20 Feb 2024',
    readTime: '6 min read',
  },
];

const categories = ['Semua', 'Edukasi', 'Tutorial', 'Event', 'Promo', 'Tips', 'Cerita'];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-stone-900 to-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-amber-600/20 backdrop-blur-sm rounded-full text-amber-300 text-sm font-medium mb-6">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Cerita & Inspirasi
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Temukan artikel menarik tentang kopi, tips brewing, event, dan berbagai 
            cerita inspiratif dari KopiKala.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-stone-50 dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  category === 'Semua'
                    ? 'bg-amber-600 text-white'
                    : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-amber-100 dark:hover:bg-stone-700 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-stone-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-stone-500 dark:text-stone-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-stone-800 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-amber-600 dark:text-amber-500 font-medium hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                  >
                    Baca Selengkapnya
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-stone-800 dark:bg-stone-700 text-white rounded-full font-medium hover:bg-stone-900 dark:hover:bg-stone-600 transition-colors">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Jangan Lewatkan Update Terbaru
          </h2>
          <p className="text-white/90 mb-8">
            Berlangganan newsletter kami untuk mendapatkan artikel terbaru langsung di inbox Anda.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-amber-600 rounded-full font-medium hover:bg-stone-100 transition-colors"
            >
              Berlangganan
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
