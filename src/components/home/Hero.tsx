import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop"
          alt="KopiKala Coffee Shop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-amber-600/30 backdrop-blur-sm rounded-full text-amber-300 text-xs md:text-sm font-medium mb-4 md:mb-6">
            Selamat Datang di KopiKala
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Setiap Cangkir
            <br />
            <span className="text-amber-500">Menceritakan Kisah</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
            Nikmati pengalaman kopi yang tak terlupakan di KopiKala.
            Tempat di mana aroma kopi bertemu dengan kehangatan cerita.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/menu">
              <Button size="md" className="w-full sm:w-auto min-w-[160px]">
                Lihat Menu
              </Button>
            </Link>
            <Link href="/booking">
              <Button variant="outline" size="md" className="w-full sm:w-auto min-w-[160px] border-white text-white hover:bg-white hover:text-stone-900">
                Reservasi Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center z-10">
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 text-white/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Decorative Elements - reduced on mobile */}
      <div className="absolute top-16 left-4 md:left-10 w-16 md:w-20 h-16 md:h-20 bg-amber-500/10 rounded-full blur-2xl md:blur-3xl" />
      <div className="absolute bottom-16 right-4 md:right-10 w-20 md:w-32 h-20 md:h-32 bg-amber-500/10 rounded-full blur-2xl md:blur-3xl" />
    </section>
  );
}
