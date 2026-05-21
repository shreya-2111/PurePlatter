import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import EmptyState from '../components/EmptyState';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

const CheckoutPage = () => {
  const { cartItems, subtotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [snapshot, setSnapshot] = useState(null);
  const deliveryFee = cartItems.length ? 49 : 0;
  const taxes = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + taxes;

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    setSnapshot({ items: cartItems, total });
    clearCart();
    setOrderPlaced(true);
  };

  if (!cartItems.length && !orderPlaced) {
    return (
      <PageTransition>
        <section className="container-shell py-8">
          <EmptyState
            title="Nothing to check out yet"
            description="Add a few menu items first, then come back for delivery details and a polished final summary."
            actionLabel="Open restaurants"
          />
        </section>
      </PageTransition>
    );
  }

  if (orderPlaced) {
    return (
      <PageTransition>
        <section className="container-shell py-8">
          <EmptyState
            title="Order placed successfully"
            description={`Your demo order with ${snapshot?.items.length ?? 0} items has been confirmed for ${formatCurrency(snapshot?.total ?? 0)}. This is a frontend-only success flow ready for portfolio demos.`}
            actionLabel="Back to home"
            actionTo="/"
          />
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="container-shell py-8">
        <SectionHeading
          eyebrow="Checkout"
          title="Fast checkout with a crisp split layout"
          description="This page is structured like a real delivery checkout, with delivery fields on one side and a live summary on the other."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handlePlaceOrder} className="card-surface rounded-[32px] p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Full name
                <input
                  required
                  placeholder="Aarav Patel"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-transparent px-4 py-3 outline-none focus:border-primary dark:border-white/10"
                />
              </label>
              <label className="text-sm font-medium">
                Phone number
                <input
                  required
                  placeholder="+91 98765 43210"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-transparent px-4 py-3 outline-none focus:border-primary dark:border-white/10"
                />
              </label>
              <label className="sm:col-span-2 text-sm font-medium">
                Delivery address
                <input
                  required
                  placeholder="22 Riverfront Residency"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-transparent px-4 py-3 outline-none focus:border-primary dark:border-white/10"
                />
              </label>
              <label className="text-sm font-medium">
                City
                <input
                  required
                  placeholder="Your city"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-transparent px-4 py-3 outline-none focus:border-primary dark:border-white/10"
                />
              </label>
              <label className="text-sm font-medium">
                Pincode
                <input
                  required
                  placeholder="380015"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-transparent px-4 py-3 outline-none focus:border-primary dark:border-white/10"
                />
              </label>
              <label className="sm:col-span-2 text-sm font-medium">
                Delivery notes
                <textarea
                  rows="4"
                  placeholder="Add landmark or gate instructions"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-transparent px-4 py-3 outline-none focus:border-primary dark:border-white/10"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-red-600"
            >
              Place order
            </button>
          </form>

          <aside className="card-surface h-fit rounded-[32px] p-6">
            <h2 className="font-display text-2xl font-semibold">Your items</h2>
            <div className="mt-6 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-[color:var(--text-secondary)]">
                      {item.quantity} x {formatCurrency(item.price)}
                    </p>
                  </div>
                  <p className="font-semibold text-primary">
                    {formatCurrency(item.quantity * item.price)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t border-black/5 pt-4 text-sm dark:border-white/5">
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
              <div className="flex items-center justify-between text-base font-bold">
                <span>Total</span>
                <span className="text-primary">{formatCurrency(total)}</span>
              </div>
            </div>

            <Link
              to="/cart"
              className="mt-5 inline-flex text-sm font-semibold text-primary transition hover:text-red-600"
            >
              Back to cart
            </Link>
          </aside>
        </div>
      </section>
    </PageTransition>
  );
};

export default CheckoutPage;
