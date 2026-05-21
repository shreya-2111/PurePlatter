import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiMiniHeart, HiOutlineClock, HiOutlineHeart, HiStar } from 'react-icons/hi2';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { handleImageError } from '../utils/handleImageError';
import VegIndicator from './VegIndicator';

const RestaurantCard = ({ restaurant }) => {
  const { toggleFavorite, isFavorite } = useCart();
  const favorite = isFavorite(restaurant.id);

  return (
    <motion.article whileHover={{ y: -8 }} className="h-full">
      <Link
        to={`/restaurants/${restaurant.slug}`}
        className="card-surface group flex h-full flex-col overflow-hidden rounded-[30px]"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            onError={handleImageError}
            className="food-image transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-soft">
            {restaurant.discount}
          </span>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              toggleFavorite(restaurant.id);
            }}
            aria-label="Toggle favorite"
            className="absolute right-4 top-4 rounded-full bg-white/90 p-3 text-primary shadow-sm transition hover:scale-105"
          >
            {favorite ? <HiMiniHeart className="text-lg" /> : <HiOutlineHeart className="text-lg" />}
          </button>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-xl font-semibold">{restaurant.name}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <VegIndicator className="w-3 h-3 border-emerald-500 p-[1.5px]" />
                  Pure Veg
                </span>
                <p className="text-sm text-[color:var(--text-secondary)]">
                  {restaurant.cuisine.join(' • ')}
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-sm font-bold text-white">
              <HiStar className="text-xs" />
              {restaurant.rating}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[color:var(--text-secondary)]">
            <span className="inline-flex items-center gap-1">
              <HiOutlineClock />
              {restaurant.deliveryTime}
            </span>
            <span>{formatCurrency(restaurant.priceForTwo)} for two</span>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4 text-sm dark:border-white/5">
            <span className="font-semibold text-primary">{restaurant.location}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default RestaurantCard;
