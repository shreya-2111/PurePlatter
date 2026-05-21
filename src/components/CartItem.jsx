import { HiMiniMinus, HiMiniPlus, HiOutlineTrash } from 'react-icons/hi2';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { handleImageError } from '../utils/handleImageError';
import VegIndicator from './VegIndicator';

const CartItem = ({ item }) => {
  const { addToCart, decrementItem, removeFromCart } = useCart();

  return (
    <div className="card-surface grid gap-x-4 gap-y-3 rounded-[28px] p-4 grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr_auto] sm:items-center">
      <img
        src={item.image}
        alt={item.name}
        onError={handleImageError}
        className="food-image h-20 w-20 sm:h-28 sm:w-[120px] rounded-[20px] object-cover shrink-0"
      />

      <div className="min-w-0">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[color:var(--text-secondary)] font-semibold truncate">
          {item.restaurantName}
        </p>
        <div className="mt-1 flex items-center gap-1.5">
          <VegIndicator className="w-3.5 h-3.5 p-[1.5px] border-emerald-500 shrink-0" />
          <h3 className="font-display text-lg sm:text-xl font-semibold truncate">{item.name}</h3>
        </div>
        <p className="mt-1 text-xs sm:text-sm text-[color:var(--text-secondary)] line-clamp-1 sm:line-clamp-2">{item.description}</p>
        <p className="mt-2 text-base sm:text-lg font-bold text-primary">{formatCurrency(item.price)}</p>
      </div>

      <div className="col-span-2 sm:col-span-1 flex items-center justify-between gap-4 border-t border-black/5 pt-3 sm:border-t-0 sm:pt-0 sm:flex-col sm:items-end sm:justify-center dark:border-white/5">
        <button
          type="button"
          onClick={() => removeFromCart(item.id)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[color:var(--text-secondary)] transition hover:text-primary"
        >
          <HiOutlineTrash className="text-sm" />
          Remove
        </button>

        <div className="flex items-center gap-3 rounded-full border border-primary/15 bg-primary/5 p-1.5 sm:p-2">
          <button
            type="button"
            onClick={() => decrementItem(item.id)}
            className="rounded-full bg-white p-1.5 text-primary shadow-sm dark:bg-neutral-900"
          >
            <HiMiniMinus className="text-xs" />
          </button>
          <span className="min-w-5 text-center text-xs sm:text-sm font-bold text-primary">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => addToCart(item, { name: item.restaurantName })}
            className="rounded-full bg-primary p-1.5 text-white shadow-soft"
          >
            <HiMiniPlus className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
