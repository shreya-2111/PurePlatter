import { HiMiniMinus, HiMiniPlus, HiOutlineTrash } from 'react-icons/hi2';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { handleImageError } from '../utils/handleImageError';
import VegIndicator from './VegIndicator';

const CartItem = ({ item }) => {
  const { addToCart, decrementItem, removeFromCart } = useCart();

  return (
    <div className="card-surface grid gap-4 rounded-[28px] p-4 sm:grid-cols-[120px_1fr_auto] sm:items-center">
      <img
        src={item.image}
        alt={item.name}
        onError={handleImageError}
        className="food-image h-28 rounded-[20px] sm:w-[120px]"
      />

      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--text-secondary)]">
          {item.restaurantName}
        </p>
        <div className="mt-2 flex items-center gap-1.5">
          <VegIndicator className="w-4 h-4 p-[1.5px] border-emerald-500" />
          <h3 className="font-display text-xl font-semibold">{item.name}</h3>
        </div>
        <p className="mt-1 text-sm text-[color:var(--text-secondary)]">{item.description}</p>
        <p className="mt-3 font-bold text-primary">{formatCurrency(item.price)}</p>
      </div>

      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
        <button
          type="button"
          onClick={() => removeFromCart(item.id)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--text-secondary)] transition hover:text-primary"
        >
          <HiOutlineTrash />
          Remove
        </button>

        <div className="flex items-center gap-3 rounded-full border border-primary/15 bg-primary/5 p-2">
          <button
            type="button"
            onClick={() => decrementItem(item.id)}
            className="rounded-full bg-white p-2 text-primary shadow-sm dark:bg-neutral-900"
          >
            <HiMiniMinus />
          </button>
          <span className="min-w-6 text-center text-sm font-bold text-primary">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => addToCart(item, { name: item.restaurantName })}
            className="rounded-full bg-primary p-2 text-white shadow-soft"
          >
            <HiMiniPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
