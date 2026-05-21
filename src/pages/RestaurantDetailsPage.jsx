import { useParams } from 'react-router-dom';
import { HiMiniHeart, HiOutlineClock, HiOutlineHeart, HiStar } from 'react-icons/hi2';
import MenuItemCard from '../components/MenuItemCard';
import SectionHeading from '../components/SectionHeading';
import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';
import { DetailsSkeleton } from '../components/LoadingSkeleton';
import { getRestaurantMenu } from '../data/menu';
import { restaurants } from '../data/restaurants';
import { useCart } from '../context/CartContext';
import { useFakeLoading } from '../hooks/useFakeLoading';
import { formatCurrency } from '../utils/formatCurrency';
import { handleImageError } from '../utils/handleImageError';

const RestaurantDetailsPage = () => {
  const { slug } = useParams();
  const loading = useFakeLoading();
  const { toggleFavorite, isFavorite } = useCart();
  const restaurant = restaurants.find((item) => item.slug === slug);

  if (!restaurant) {
    return (
      <PageTransition>
        <section className="container-shell py-10">
          <EmptyState
            title="Restaurant not found"
            description="This route is ready for GitHub Pages, but the restaurant you requested does not exist in the current dummy dataset."
            actionLabel="Back to restaurants"
            actionTo="/restaurants"
          />
        </section>
      </PageTransition>
    );
  }

  const menuItems = getRestaurantMenu(restaurant.id);

  if (loading) {
    return <DetailsSkeleton />;
  }

  return (
    <PageTransition>
      <section className="container-shell py-8">
        <div className="relative overflow-hidden rounded-[36px]">
          <img
            src={restaurant.coverImage}
            alt={restaurant.name}
            onError={handleImageError}
            className="food-image h-[200px] sm:h-[360px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 text-white">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="chip border-white/20 bg-white/10 text-white">
                  {restaurant.mode}
                </span>
                <h1 className="mt-2 sm:mt-4 font-display text-2xl sm:text-5xl font-bold">
                  {restaurant.name}
                </h1>
                <p className="mt-2 max-w-2xl text-xs sm:text-base text-white/80 line-clamp-1 sm:line-clamp-none">
                  {restaurant.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => toggleFavorite(restaurant.id)}
                className="rounded-full bg-white/15 p-4 backdrop-blur-md"
              >
                {isFavorite(restaurant.id) ? (
                  <HiMiniHeart className="text-xl text-primary" />
                ) : (
                  <HiOutlineHeart className="text-xl text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-surface rounded-[32px] p-6">
            <SectionHeading
              eyebrow="About"
              title="Why people keep coming back"
              description={restaurant.description}
            />
            <div className="grid gap-3 grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[20px] bg-primary/5 p-3 sm:p-4">
                <p className="text-xs text-[color:var(--text-secondary)]">Cuisine</p>
                <p className="mt-1 text-sm sm:text-base font-semibold leading-tight">{restaurant.cuisine.join(', ')}</p>
              </div>
              <div className="rounded-[20px] bg-primary/5 p-3 sm:p-4">
                <p className="text-xs text-[color:var(--text-secondary)]">Rating</p>
                <p className="mt-1 inline-flex items-center gap-1 text-sm sm:text-base font-semibold">
                  <HiStar className="text-amber-400" />
                  {restaurant.rating}
                </p>
              </div>
              <div className="rounded-[20px] bg-primary/5 p-3 sm:p-4">
                <p className="text-xs text-[color:var(--text-secondary)]">Delivery</p>
                <p className="mt-1 inline-flex items-center gap-1 text-sm sm:text-base font-semibold">
                  <HiOutlineClock />
                  {restaurant.deliveryTime}
                </p>
              </div>
              <div className="rounded-[20px] bg-primary/5 p-3 sm:p-4">
                <p className="text-xs text-[color:var(--text-secondary)]">Price for two</p>
                <p className="mt-1 text-sm sm:text-base font-semibold">{formatCurrency(restaurant.priceForTwo)}</p>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-[32px] p-6">
            <p className="chip">Quick facts</p>
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-sm text-[color:var(--text-secondary)]">Neighborhood</p>
                <p className="mt-1 font-semibold">{restaurant.location}</p>
              </div>
              <div>
                <p className="text-sm text-[color:var(--text-secondary)]">Offer</p>
                <p className="mt-1 font-semibold text-primary">{restaurant.discount}</p>
              </div>
              <div>
                <p className="text-sm text-[color:var(--text-secondary)]">Dietary</p>
                <p className="mt-1 font-semibold">Pure veg kitchen</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-10">
          <SectionHeading
            eyebrow="Menu"
            title="Add standout veg dishes to your cart"
            description="The cart is persisted with LocalStorage, so quantities and selections stay intact while you explore."
          />
          <div className="grid gap-6">
            {menuItems.map((item) => (
              <MenuItemCard key={item.id} item={item} restaurant={restaurant} />
            ))}
          </div>
        </section>
      </section>
    </PageTransition>
  );
};

export default RestaurantDetailsPage;
