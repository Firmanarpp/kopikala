'use client';

import { categories } from '@/data/menu';

interface MenuFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function MenuFilter({ activeCategory, onCategoryChange }: MenuFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
            activeCategory === category.id
              ? 'bg-amber-600 text-white shadow-lg'
              : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-amber-100 dark:hover:bg-stone-700 shadow'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
