import Image from 'next/image';
import { MenuItem } from '@/data/menu';
import { formatPrice } from '@/lib/utils';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="group bg-white dark:bg-stone-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.isPopular && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
            Popular
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-stone-800 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
            {item.name}
          </h3>
          <span className="text-amber-600 dark:text-amber-500 font-bold whitespace-nowrap ml-2">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
