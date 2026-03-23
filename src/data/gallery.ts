export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'interior' | 'coffee' | 'atmosphere' | 'food';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
    alt: 'Interior coffee shop dengan pencahayaan hangat',
    category: 'interior',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
    alt: 'Latte art yang indah',
    category: 'coffee',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop',
    alt: 'Suasana nyaman di KopiKala',
    category: 'atmosphere',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop',
    alt: 'Area outdoor yang asri',
    category: 'interior',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop',
    alt: 'Espresso shot yang sempurna',
    category: 'coffee',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=400&fit=crop',
    alt: 'Barista sedang membuat kopi',
    category: 'atmosphere',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&h=400&fit=crop',
    alt: 'Dessert cantik di KopiKala',
    category: 'food',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&h=400&fit=crop',
    alt: 'Meja dengan buku dan kopi',
    category: 'atmosphere',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop',
    alt: 'Cold brew yang menyegarkan',
    category: 'coffee',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=400&fit=crop',
    alt: 'Interior minimalis modern',
    category: 'interior',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=400&fit=crop',
    alt: 'Pancake dengan topping buah',
    category: 'food',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
    alt: 'Cappuccino dengan latte art',
    category: 'coffee',
  },
];
