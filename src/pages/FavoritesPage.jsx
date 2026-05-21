import RestaurantCard from '../components/RestaurantCard';
import SectionHeading from '../components/SectionHeading';
import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';
import { useCart } from '../context/CartContext';
import { restaurants } from '../data/restaurants';

const FavoritesPage = () => {
  const { favorites } = useCart();
  const favoriteRestaurants = restaurants.filter((restaurant) =>
    favorites.includes(restaurant.id),
  );

  return (
    <PageTransition>
      <section className="container-shell py-8">
        <SectionHeading
          eyebrow="Favorites"
          title="Your saved veg spots in one place"
          description="Everything you heart from the restaurant grid is collected here for a faster return visit."
        />

        {favoriteRestaurants.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {favoriteRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No favorites yet"
            description="Tap the heart on any restaurant card to build your own shortlist of go-to vegetarian places."
            actionLabel="Explore restaurants"
            actionTo="/restaurants"
          />
        )}
      </section>
    </PageTransition>
  );
};

export default FavoritesPage;
