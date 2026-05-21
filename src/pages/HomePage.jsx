import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import CategoryCard from '../components/CategoryCard';
import CollectionCard from '../components/CollectionCard';
import RestaurantCard from '../components/RestaurantCard';
import SectionHeading from '../components/SectionHeading';
import PageTransition from '../components/PageTransition';
import { HomeSkeleton } from '../components/LoadingSkeleton';
import VegIndicator from '../components/VegIndicator';
import { categories } from '../data/categories';
import { collections } from '../data/collections';
import { restaurants } from '../data/restaurants';
import { menu } from '../data/menu';
import { useCart } from '../context/CartContext';
import { useFakeLoading } from '../hooks/useFakeLoading';
import { formatCurrency } from '../utils/formatCurrency';
import { handleImageError } from '../utils/handleImageError';
import { HiMiniMinus, HiMiniPlus, HiStar } from 'react-icons/hi2';

const topBrands = [
  { name: 'Garden Biryani House', accent: 'bg-rose-100 text-rose-600' },
  { name: 'Saffron Table', accent: 'bg-amber-100 text-amber-700' },
  { name: 'Smoke Street', accent: 'bg-slate-100 text-slate-700' },
  { name: 'Cocoa Crate', accent: 'bg-orange-100 text-orange-700' },
  { name: 'Tandoor Terrace', accent: 'bg-red-100 text-red-700' },
];

const HomePage = () => {
  const navigate = useNavigate();
  const loading = useFakeLoading();
  const { addToCart, decrementItem, getItemQuantity } = useCart();
  const [searchValue, setSearchValue] = useState('');
  
  const featuredRestaurants = restaurants.slice(0, 6);

  const trendingDishes = [
    {
      ...menu['house-of-biryani'][0], // Lucknowi Veg Biryani
      restaurant: restaurants.find((r) => r.id === 'house-of-biryani'),
    },
    {
      ...menu['smoke-street-pizza'][0], // Smoked Burrata Pizza
      restaurant: restaurants.find((r) => r.id === 'smoke-street-pizza'),
    },
    {
      ...menu['bao-beats'][0], // Korean Crispy Tofu Bao
      restaurant: restaurants.find((r) => r.id === 'bao-beats'),
    },
    {
      ...menu['green-leaf-cafe'][1], // Avocado Sourdough Toast
      restaurant: restaurants.find((r) => r.id === 'green-leaf-cafe'),
    },
  ];

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = searchValue.trim();
    navigate(query ? `/restaurants?search=${encodeURIComponent(query)}` : '/restaurants');
  };

  if (loading) {
    return <HomeSkeleton />;
  }

  return (
    <PageTransition>
      <HeroSection
        searchValue={searchValue}
        onSearchChange={(event) => setSearchValue(event.target.value)}
        onSearchSubmit={handleSearchSubmit}
      />

      <section className="container-shell py-16">
        <SectionHeading
          eyebrow="What are you craving?"
          title="From quick veg deliveries to cozy cafe tables"
          description="Browse pure veg spots by craving, from family thalis and paneer comforts to fresh bowls, bakes, and dessert runs."
        />
        <div className="grid gap-3 grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="collections" className="container-shell py-4">
        <SectionHeading
          eyebrow="Collections"
          title="Handpicked places for every plan"
          description="Curated vegetarian lists for weekday cravings, festive dinners, and easy cafe catchups."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CollectionCard collection={collection} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <SectionHeading
          eyebrow="Trending Dishes"
          title="Most ordered vegetarian items this week"
          description="Savor the most ordered and highly-rated pure veg delights, prepared fresh and delivered hot."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingDishes.map((dish, index) => {
            const quantity = getItemQuantity(dish.id);
            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6 }}
                className="card-surface overflow-hidden rounded-[28px] flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    onError={handleImageError}
                    className="food-image transition duration-500 hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-soft">
                    {dish.tag}
                  </span>
                  <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-white">
                    <HiStar className="text-amber-400 text-xs" />
                    {dish.restaurant?.rating || '4.5'}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-secondary)] font-semibold">
                      {dish.restaurant?.name || 'Restaurant'}
                    </p>
                    <div className="mt-2 flex items-center gap-1.5">
                      <VegIndicator className="w-4 h-4 p-[1.5px] border-emerald-500" />
                      <h3 className="font-display text-lg font-semibold leading-snug line-clamp-1">{dish.name}</h3>
                    </div>
                    <p className="mt-1 text-xs text-[color:var(--text-secondary)] line-clamp-2 min-h-[32px]">
                      {dish.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between gap-3">
                    <span className="text-lg font-bold text-primary">{formatCurrency(dish.price)}</span>
                    
                    {quantity > 0 ? (
                      <div className="flex items-center justify-between gap-2 rounded-full border border-primary/20 bg-primary/5 p-1 min-w-[90px]">
                        <button
                          type="button"
                          onClick={() => decrementItem(dish.id)}
                          className="rounded-full bg-white p-1 text-primary shadow-sm dark:bg-neutral-900"
                        >
                          <HiMiniMinus className="text-xs" />
                        </button>
                        <span className="text-xs font-bold text-primary">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => addToCart(dish, dish.restaurant)}
                          className="rounded-full bg-primary p-1 text-white shadow-soft"
                        >
                          <HiMiniPlus className="text-xs" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => addToCart(dish, dish.restaurant)}
                        className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-red-600"
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="container-shell py-16">
        <SectionHeading
          eyebrow="Top brands"
          title="Trust the names everybody keeps reordering"
          description="A quick-scan carousel-inspired strip that brings in familiarity, color, and portfolio-friendly polish."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {topBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.07 }}
              viewport={{ once: true, amount: 0.2 }}
              className="card-surface flex items-center gap-4 rounded-[26px] p-4"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-bold ${brand.accent}`}
              >
                {brand.name
                  .split(' ')
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join('')}
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{brand.name}</h3>
                <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
                  Fastest repeat orders
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-shell py-4">
        <SectionHeading
          eyebrow="Popular restaurants"
          title="Crowd favorites with strong ratings and sharp visuals"
          description="Large imagery, soft shadows, and rich metadata make the cards feel portfolio-ready while staying responsive."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredRestaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              <RestaurantCard restaurant={restaurant} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#1C1C1C] via-[#2C2C2C] to-[#E23744] px-6 py-10 text-white sm:px-10 lg:grid lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-10 lg:px-14">
          <div>
            <span className="chip border-white/15 bg-white/10 text-white">Get the app</span>
            <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
              Your favorite veg restaurants, now in a polished mobile-first experience
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
              This clone is tuned for sleek browsing on every screen, with sticky navigation,
              local cart persistence, and a clean checkout flow.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink"
              >
                App Store
              </button>
              <button
                type="button"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white"
              >
                Google Play
              </button>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-0">
            <div className="rounded-[28px] bg-white/10 p-5 backdrop-blur-md">
              <p className="text-4xl font-bold">50+</p>
              <p className="mt-2 text-sm text-white/75">Curated food and lifestyle cards</p>
            </div>
            <div className="rounded-[28px] bg-white/10 p-5 backdrop-blur-md">
              <p className="text-4xl font-bold">100%</p>
              <p className="mt-2 text-sm text-white/75">GitHub Pages-friendly routing setup</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;
