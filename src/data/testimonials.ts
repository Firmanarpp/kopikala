export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Wijaya',
    role: 'Content Creator',
    content: 'KopiKala adalah tempat favorit saya untuk bekerja. Kopinya enak, WiFi kencang, dan suasananya sangat nyaman. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    id: 2,
    name: 'Budi Santoso',
    role: 'Software Engineer',
    content: 'Cold brew di sini adalah yang terbaik di kota! Tempatnya juga cocok untuk meeting atau kerja remote. Staff-nya ramah banget.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anita Putri',
    role: 'Graphic Designer',
    content: 'Suka banget sama interior-nya yang aesthetic! Makanan dan minumannya juga enak-enak. Pasti balik lagi!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    id: 4,
    name: 'Rizky Pratama',
    role: 'Entrepreneur',
    content: 'Tempat yang sempurna untuk meeting dengan klien. Suasananya profesional tapi tetap cozy. Tiramisu-nya juara!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    id: 5,
    name: 'Maya Kusuma',
    role: 'Student',
    content: 'Harga terjangkau untuk mahasiswa, tapi kualitasnya premium. Sering banget ngerjain tugas di sini. Love it!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    rating: 4,
  },
  {
    id: 6,
    name: 'Dimas Aditya',
    role: 'Photographer',
    content: 'Spot foto yang bagus banget! Pencahayaannya natural dan interior-nya instagramable. Kopinya juga top!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 5,
  },
];
