import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Kenali lebih dekat KopiKala - coffee shop dengan filosofi bahwa setiap cangkir kopi menceritakan kisah. Pelajari cerita, visi, dan misi kami.',
  keywords: ['tentang kopikala', 'sejarah coffee shop', 'filosofi kopi', 'coffee shop jakarta'],
};

const values = [
  {
    title: 'Kualitas',
    description: 'Kami hanya menggunakan biji kopi terbaik dari petani lokal Indonesia.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Komunitas',
    description: 'Menciptakan ruang yang nyaman untuk berkumpul dan berbagi cerita.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Keberlanjutan',
    description: 'Berkomitmen pada praktik bisnis yang ramah lingkungan dan berkelanjutan.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Inovasi',
    description: 'Terus berinovasi dalam menciptakan pengalaman kopi yang unik.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: 'Andi Wijaya',
    role: 'Founder & Head Barista',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    description: 'Pecinta kopi sejak 2010 dengan pengalaman di berbagai coffee shop internasional.',
  },
  {
    name: 'Sari Dewi',
    role: 'Co-Founder & Operations',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    description: 'Ahli dalam menciptakan pengalaman pelanggan yang tak terlupakan.',
  },
  {
    name: 'Budi Santoso',
    role: 'Head Chef',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    description: 'Chef berpengalaman yang menghadirkan menu makanan berkualitas.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=800&fit=crop"
            alt="KopiKala Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-stone-900" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-amber-600/20 backdrop-blur-sm rounded-full text-amber-300 text-sm font-medium mb-6">
            Tentang Kami
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Cerita KopiKala
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Di balik setiap cangkir kopi yang kami sajikan, ada cerita tentang passion, 
            dedikasi, dan kecintaan terhadap seni meracik kopi.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-600 dark:text-amber-500 font-medium">Perjalanan Kami</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 dark:text-white mt-2 mb-6">
                Dari Mimpi Menjadi Kenyataan
              </h2>
              <div className="space-y-6 text-stone-600 dark:text-stone-400 leading-relaxed">
                <p>
                  KopiKala didirikan pada tahun 2020 oleh dua sahabat yang memiliki passion yang sama 
                  terhadap kopi. Berawal dari keinginan sederhana untuk berbagi kecintaan terhadap kopi 
                  berkualitas, kami memulai perjalanan ini dengan satu mesin espresso dan mimpi besar.
                </p>
                <p>
                  Nama &quot;KopiKala&quot; dipilih karena kami percaya bahwa kopi adalah medium yang 
                  menghubungkan orang-orang. Di setiap waktu (kala), ada 
                  momen-momen berharga yang tercipta di atas secangkir kopi.
                </p>
                <p>
                  Hari ini, KopiKala telah berkembang menjadi tempat favorit bagi pecinta kopi di 
                  Jakarta. Namun, komitmen kami tetap sama: menyajikan kopi terbaik dengan pelayanan 
                  yang hangat dan menciptakan ruang yang nyaman untuk semua orang.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=300&fit=crop"
                      alt="Coffee beans"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop"
                      alt="Latte art"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=400&fit=crop"
                      alt="Barista at work"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop"
                      alt="Coffee shop interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-stone-50 dark:bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 dark:text-amber-500 font-medium">Nilai-Nilai Kami</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 dark:text-white mt-2">
              Apa yang Kami Percaya
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-stone-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/50 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-500 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-800 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 dark:text-amber-500 font-medium">Tim Kami</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 dark:text-white mt-2">
              Orang-Orang di Balik KopiKala
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-amber-100 dark:ring-amber-900 group-hover:ring-amber-500 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-600 dark:text-amber-500 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-stone-600 dark:text-stone-400 max-w-xs mx-auto">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-white mb-2">5+</p>
              <p className="text-white/80">Tahun Pengalaman</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">50K+</p>
              <p className="text-white/80">Cangkir Kopi Disajikan</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">20+</p>
              <p className="text-white/80">Varian Menu</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">4.9</p>
              <p className="text-white/80">Rating Pelanggan</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
