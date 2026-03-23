import Image from 'next/image';
import { MenuItem } from '@/data/menu';
import { formatPrice } from '@/lib/utils';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="group bg-white dark:bg-stone-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.isPopular && (
          <div className="absolute top-2 left-2 px-2 py-0.5 md:px-3 md:py-1 bg-amber-500 text-white text-[10px] md:text-xs font-semibold rounded-full shadow-sm">
            Popular
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-2 mb-1.5 md:mb-2">
          <h3 className="text-sm md:text-base font-semibold text-stone-800 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors line-clamp-1">
            {item.name}
          </h3>
          <span className="text-amber-600 dark:text-amber-500 font-bold text-sm md:text-base whitespace-nowrap">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="text-xs md:text-sm text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}
