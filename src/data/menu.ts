export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'kopi' | 'minuman-lain' | 'snack' | 'dessert';
  image: string;
  isPopular?: boolean;
}

export const menuItems: MenuItem[] = [
  // Kopi
  {
    id: 1,
    name: 'Espresso',
    description: 'Kopi espresso murni dengan crema yang sempurna',
    price: 22000,
    category: 'kopi',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop',
    isPopular: true,
  },
  {
    id: 2,
    name: 'Americano',
    description: 'Espresso dengan air panas, rasa yang bold dan clean',
    price: 25000,
    category: 'kopi',
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    name: 'Cappuccino',
    description: 'Espresso dengan steamed milk dan foam yang lembut',
    price: 32000,
    category: 'kopi',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    isPopular: true,
  },
  {
    id: 4,
    name: 'Latte',
    description: 'Espresso dengan susu steamed yang creamy',
    price: 35000,
    category: 'kopi',
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=300&fit=crop',
  },
  {
    id: 5,
    name: 'Mocha',
    description: 'Perpaduan espresso, cokelat, dan susu yang nikmat',
    price: 38000,
    category: 'kopi',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=300&fit=crop',
  },
  {
    id: 6,
    name: 'Affogato',
    description: 'Espresso panas dituang di atas es krim vanilla',
    price: 42000,
    category: 'kopi',
    image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=400&h=300&fit=crop',
  },
  {
    id: 7,
    name: 'Cold Brew',
    description: 'Kopi yang diseduh dingin selama 18 jam, smooth dan refreshing',
    price: 35000,
    category: 'kopi',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
    isPopular: true,
  },
  {
    id: 8,
    name: 'Vietnamese Coffee',
    description: 'Kopi Vietnam dengan susu kental manis',
    price: 30000,
    category: 'kopi',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop',
  },

  // Minuman Lain
  {
    id: 9,
    name: 'Matcha Latte',
    description: 'Green tea matcha premium dengan susu segar',
    price: 35000,
    category: 'minuman-lain',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop',
    isPopular: true,
  },
  {
    id: 10,
    name: 'Chocolate',
    description: 'Cokelat premium dengan susu yang creamy',
    price: 32000,
    category: 'minuman-lain',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop',
  },
  {
    id: 11,
    name: 'Thai Tea',
    description: 'Teh Thailand klasik dengan susu dan rempah',
    price: 28000,
    category: 'minuman-lain',
    image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop',
  },
  {
    id: 12,
    name: 'Lemon Tea',
    description: 'Teh segar dengan perasan lemon dan madu',
    price: 25000,
    category: 'minuman-lain',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
  },
  {
    id: 13,
    name: 'Fresh Orange Juice',
    description: 'Jus jeruk segar tanpa tambahan gula',
    price: 28000,
    category: 'minuman-lain',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop',
  },
  {
    id: 14,
    name: 'Smoothie Bowl',
    description: 'Smoothie buah-buahan segar dengan topping granola',
    price: 45000,
    category: 'minuman-lain',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
  },

  // Snack
  {
    id: 15,
    name: 'Croissant',
    description: 'Croissant butter yang renyah dan berlapis',
    price: 28000,
    category: 'snack',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop',
    isPopular: true,
  },
  {
    id: 16,
    name: 'Sandwich Club',
    description: 'Sandwich dengan ayam, telur, sayuran segar',
    price: 45000,
    category: 'snack',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop',
  },
  {
    id: 17,
    name: 'French Fries',
    description: 'Kentang goreng crispy dengan saus pilihan',
    price: 25000,
    category: 'snack',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
  },
  {
    id: 18,
    name: 'Nachos',
    description: 'Tortilla chips dengan keju, salsa, dan guacamole',
    price: 38000,
    category: 'snack',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&h=300&fit=crop',
  },
  {
    id: 19,
    name: 'Toast Avocado',
    description: 'Roti panggang dengan avocado dan telur poached',
    price: 42000,
    category: 'snack',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop',
  },

  // Dessert
  {
    id: 20,
    name: 'Tiramisu',
    description: 'Dessert Italia klasik dengan kopi dan mascarpone',
    price: 45000,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    isPopular: true,
  },
  {
    id: 21,
    name: 'Cheesecake',
    description: 'New York cheesecake dengan berry compote',
    price: 48000,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=300&fit=crop',
  },
  {
    id: 22,
    name: 'Brownies',
    description: 'Brownies cokelat yang fudgy dengan es krim',
    price: 38000,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&h=300&fit=crop',
  },
  {
    id: 23,
    name: 'Pancake Stack',
    description: 'Pancake fluffy dengan maple syrup dan butter',
    price: 42000,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
  },
  {
    id: 24,
    name: 'Waffle',
    description: 'Belgian waffle dengan topping buah dan whipped cream',
    price: 45000,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=300&fit=crop',
  },
];

export const categories = [
  { id: 'all', name: 'Semua' },
  { id: 'kopi', name: 'Kopi' },
  { id: 'minuman-lain', name: 'Minuman Lain' },
  { id: 'snack', name: 'Snack' },
  { id: 'dessert', name: 'Dessert' },
];
