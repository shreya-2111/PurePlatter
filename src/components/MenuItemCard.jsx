import { motion } from 'framer-motion';
import { HiMiniMinus, HiMiniPlus } from 'react-icons/hi2';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { handleImageError } from '../utils/handleImageError';
import VegIndicator from './VegIndicator';

const MenuItemCard = ({ item, restaurant }) => {
  const { addToCart, decrementItem, getItemQuantity } = useCart();
  const quantity = getItemQuantity(item.id);

  return (
    <motion.div whileHover={{ y: -4 }} className="card-surface overflow-hidden rounded-[28px]">
      <div className="grid gap-5 p-5 sm:grid-cols-[1fr_220px]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-sm">
              <VegIndicator className="w-3.5 h-3.5 border-emerald-500" />
              Pure Veg
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--text-secondary)]">
              {item.tag}
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <VegIndicator />
            <h3 className="font-display text-2xl font-semibold">{item.name}</h3>
          </div>
          <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
            {item.description}
          </p>
          <p className="mt-4 text-lg font-bold text-primary">{formatCurrency(item.price)}</p>
        </div>

        <div className="flex flex-col justify-between">
          <div className="overflow-hidden rounded-[22px]">
            <img src={item.image} alt={item.name} onError={handleImageError} className="food-image h-48" />
          </div>

          {quantity > 0 ? (
            <div className="mt-4 flex items-center justify-between rounded-full border border-primary/20 bg-primary/5 p-2">
              <button
                type="button"
                onClick={() => decrementItem(item.id)}
                className="rounded-full bg-white p-2 text-primary shadow-sm dark:bg-neutral-900"
              >
                <HiMiniMinus />
              </button>
              <span className="text-sm font-bold text-primary">{quantity}</span>
              <button
                type="button"
                onClick={() => addToCart(item, restaurant)}
                className="rounded-full bg-primary p-2 text-white shadow-soft"
              >
                <HiMiniPlus />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => addToCart(item, restaurant)}
              className="mt-4 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-red-600"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItemCard;
