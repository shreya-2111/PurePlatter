import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import SectionHeading from '../components/SectionHeading';
import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

const CartPage = () => {
  const { cartItems, subtotal } = useCart();
  const deliveryFee = cartItems.length ? 49 : 0;
  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + taxes;

  return (
    <PageTransition>
      <section className="container-shell py-8">
        <SectionHeading
          eyebrow="Cart"
          title="A clean, persistent cart experience"
          description="Quantity controls and totals stay synced through Context API and LocalStorage for a smooth checkout handoff."
        />

        {!cartItems.length ? (
          <EmptyState
            title="Your cart is empty"
            description="Start with a best-rated restaurant, add a few signature dishes, and come back here for a polished order summary."
          />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <aside className="card-surface h-fit rounded-[32px] p-6">
              <h2 className="font-display text-2xl font-semibold">Order summary</h2>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between text-[color:var(--text-secondary)]">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-[color:var(--text-secondary)]">
                  <span>Delivery fee</span>
                  <span>{formatCurrency(deliveryFee)}</span>
                </div>
                <div className="flex items-center justify-between text-[color:var(--text-secondary)]">
                  <span>Taxes & charges</span>
                  <span>{formatCurrency(taxes)}</span>
                </div>
                <div className="flex items-center justify-between border-t border-black/5 pt-4 text-base font-bold dark:border-white/5">
                  <span>Total</span>
                  <span className="text-primary">{formatCurrency(total)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="mt-6 inline-flex w-full justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-red-600"
              >
                Proceed to checkout
              </Link>
              <Link
                to="/restaurants"
                className="mt-3 inline-flex w-full justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[color:var(--text-secondary)] dark:border-white/10"
              >
                Add more items
              </Link>
            </aside>
          </div>
        )}
      </section>
    </PageTransition>
  );
};

export default CartPage;
