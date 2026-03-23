'use client';

import { categories } from '@/data/menu';

interface MenuFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function MenuFilter({ activeCategory, onCategoryChange }: MenuFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            activeCategory === category.id
              ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
              : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-amber-100 dark:hover:bg-stone-700 shadow-md'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
