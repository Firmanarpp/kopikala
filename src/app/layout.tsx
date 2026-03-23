import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://kopikala.coffee'),
  title: {
    default: 'KopiKala - Setiap Cangkir Menceritakan Kisah',
    template: '%s | KopiKala',
  },
  description: 'KopiKala adalah coffee shop premium di Jakarta yang menyajikan kopi berkualitas tinggi dengan suasana nyaman. Nikmati berbagai pilihan kopi, minuman, dan makanan lezat.',
  keywords: ['coffee shop', 'kopi', 'cafe', 'jakarta', 'kopikala', 'coffee', 'espresso', 'latte', 'cappuccino'],
  authors: [{ name: 'KopiKala' }],
  creator: 'KopiKala',
  publisher: 'KopiKala',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://kopikala.coffee',
    siteName: 'KopiKala',
    title: 'KopiKala - Setiap Cangkir Menceritakan Kisah',
    description: 'Coffee shop premium di Jakarta dengan kopi berkualitas tinggi dan suasana nyaman.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KopiKala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KopiKala - Setiap Cangkir Menceritakan Kisah',
    description: 'Coffee shop premium di Jakarta dengan kopi berkualitas tinggi dan suasana nyaman.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// Schema.org structured data for LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CoffeeShop',
  name: 'KopiKala',
  image: 'https://kopikala.coffee/og-image.jpg',
  '@id': 'https://kopikala.coffee',
  url: 'https://kopikala.coffee',
  telephone: '+62-817-1744-4053',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Kopi Nikmat No. 123',
    addressLocality: 'Jakarta Selatan',
    addressRegion: 'DKI Jakarta',
    postalCode: '12345',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.2297,
    longitude: 106.8272,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '09:00',
      closes: '21:00',
    },
  ],
  sameAs: [
    'https://instagram.com/kopikala.coffee',
    'https://facebook.com/kopikala.coffee',
    'https://tiktok.com/@kopikala.coffee',
  ],
  servesCuisine: ['Coffee', 'Indonesian', 'Western'],
  priceRange: '$$',
  acceptsReservations: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-stone-900 text-stone-900 dark:text-white transition-colors duration-300`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
