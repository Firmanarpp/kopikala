import { Metadata } from 'next';
import Image from 'next/image';
import BookingForm from '@/components/booking/BookingForm';

export const metadata: Metadata = {
  title: 'Reservasi',
  description: 'Reservasi meja di KopiKala. Pesan tempat Anda sekarang untuk menikmati kopi terbaik dengan suasana yang nyaman.',
  keywords: ['reservasi', 'booking', 'pesan meja', 'coffee shop jakarta', 'kopikala'],
};

const benefits = [
  {
    title: 'Tempat Terjamin',
    description: 'Tidak perlu khawatir kehabisan tempat saat peak hours.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Pelayanan Prioritas',
    description: 'Dapatkan pelayanan lebih cepat dengan reservasi.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Spot Pilihan',
    description: 'Pilih area favorit Anda: indoor, outdoor, atau private.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function BookingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-stone-900 to-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-amber-600/20 backdrop-blur-sm rounded-full text-amber-300 text-sm font-medium mb-6">
            Reservasi
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Pesan Meja Anda
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Reservasi meja untuk memastikan pengalaman kopi terbaik Anda di KopiKala.
            Kami akan menghubungi Anda untuk konfirmasi.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-stone-50 dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-stone-800 dark:text-white mb-6">
                Form Reservasi
              </h2>
              <BookingForm />
            </div>

            {/* Info */}
            <div className="space-y-8">
              {/* Benefits */}
              <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-6">
                  Keuntungan Reservasi
                </h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-500 flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-stone-800 dark:text-white mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-stone-600 dark:text-stone-400 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=400&fit=crop"
                  alt="KopiKala Interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-medium">
                    Suasana nyaman untuk setiap momen Anda
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6">
                <h4 className="font-semibold text-stone-800 dark:text-white mb-4">
                  Butuh Bantuan?
                </h4>
                <p className="text-stone-600 dark:text-stone-400 text-sm mb-4">
                  Untuk reservasi grup besar (lebih dari 10 orang) atau acara khusus, 
                  silakan hubungi kami langsung.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+6281234567890"
                    className="inline-flex items-center justify-center px-4 py-2 bg-stone-800 dark:bg-stone-700 text-white rounded-lg text-sm hover:bg-stone-900 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Telepon
                  </a>
                  <a
                    href="mailto:hello@kopikala.coffee"
                    className="inline-flex items-center justify-center px-4 py-2 bg-stone-800 dark:bg-stone-700 text-white rounded-lg text-sm hover:bg-stone-900 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-stone-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-800 dark:text-white text-center mb-12">
            Pertanyaan Umum
          </h2>
          <div className="space-y-6">
            <div className="bg-stone-50 dark:bg-stone-900 rounded-xl p-6">
              <h3 className="font-semibold text-stone-800 dark:text-white mb-2">
                Berapa lama waktu reservasi berlaku?
              </h3>
              <p className="text-stone-600 dark:text-stone-400">
                Reservasi berlaku selama 15 menit dari waktu yang ditentukan. Jika Anda terlambat 
                lebih dari 15 menit tanpa konfirmasi, meja dapat diberikan kepada tamu lain.
              </p>
            </div>
            <div className="bg-stone-50 dark:bg-stone-900 rounded-xl p-6">
              <h3 className="font-semibold text-stone-800 dark:text-white mb-2">
                Apakah ada minimum order?
              </h3>
              <p className="text-stone-600 dark:text-stone-400">
                Tidak ada minimum order untuk reservasi reguler. Untuk reservasi area private, 
                minimum order adalah Rp 500.000.
              </p>
            </div>
            <div className="bg-stone-50 dark:bg-stone-900 rounded-xl p-6">
              <h3 className="font-semibold text-stone-800 dark:text-white mb-2">
                Bagaimana cara membatalkan reservasi?
              </h3>
              <p className="text-stone-600 dark:text-stone-400">
                Anda dapat membatalkan reservasi melalui WhatsApp minimal 2 jam sebelum waktu 
                reservasi. Pembatalan mendadak dapat mempengaruhi prioritas reservasi di masa depan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
