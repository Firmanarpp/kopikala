import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { menuItems } from '@/data/menu';
import { formatPrice } from '@/lib/utils';

export default function Home() {
  // Get popular menu items
  const popularItems = menuItems.filter((item) => item.isPopular).slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Popular Menu Preview */}
      <section className="py-24 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 dark:text-amber-500 font-medium">Menu Favorit</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 dark:text-white mt-2">
              Yang Paling Disukai
            </h2>
            <p className="text-stone-600 dark:text-stone-400 mt-4 max-w-2xl mx-auto">
              Cicipi menu-menu favorit yang paling banyak dipesan oleh pelanggan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularItems.map((item) => (
              <div
                key={item.id}
                className="group bg-stone-50 dark:bg-stone-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                    Popular
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-stone-800 dark:text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-amber-600 dark:text-amber-500 font-bold">
                    {formatPrice(item.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <Button size="lg">Lihat Semua Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-stone-50 dark:bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop"
                  alt="Tentang KopiKala"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500 rounded-2xl -z-10" />
            </div>

            <div>
              <span className="text-amber-600 dark:text-amber-500 font-medium">Tentang Kami</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 dark:text-white mt-2 mb-6">
                Cerita di Balik Setiap Cangkir
              </h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
                KopiKala lahir dari kecintaan kami terhadap kopi dan keinginan untuk menciptakan 
                ruang di mana setiap orang bisa menemukan momen ketenangan. Nama &quot;KopiKala&quot; 
                mencerminkan filosofi kami: di setiap waktu (kala), ada cerita yang 
                tersampaikan melalui secangkir kopi.
              </p>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
                Kami bekerja sama dengan petani kopi lokal Indonesia untuk menghadirkan biji kopi 
                terbaik yang diroasting dengan penuh perhatian. Setiap cangkir yang kami sajikan 
                adalah hasil dari dedikasi dan passion kami terhadap kopi.
              </p>
              <Link href="/about">
                <Button variant="outline">Selengkapnya</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=600&fit=crop"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Siap untuk Pengalaman Kopi Terbaik?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Reservasi meja Anda sekarang dan nikmati suasana nyaman bersama kopi pilihan di KopiKala.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/booking">
              <Button size="lg" className="!bg-white !text-amber-600 hover:bg-stone-100">
                Reservasi Sekarang
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
