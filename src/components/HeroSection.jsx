import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { handleImageError } from '../utils/handleImageError';

const HeroSection = ({ searchValue, onSearchChange, onSearchSubmit }) => (
  <section className="container-shell pt-6 sm:pt-10">
    <div className="relative overflow-hidden rounded-[36px]">
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
        alt="Vegetarian restaurant spread"
        onError={handleImageError}
        className="food-image absolute inset-0"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,28,28,0.62),rgba(226,55,68,0.34))]" />
      <div className="relative grid min-h-[540px] gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-14 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <span className="chip w-fit border-white/20 bg-white/10 text-white">
            Curated veg dining
          </span>
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Discover the best vegetarian food &amp; drinks
          </h1>
          <p className="mt-5 max-w-xl text-sm text-white/80 sm:text-base">
            Explore trending restaurants, comfort classics, desserts, rooftop spots,
            and delivery favorites through a polished veg-first experience.
          </p>
          <div className="mt-8 max-w-2xl">
            <SearchBar
              value={searchValue}
              onChange={onSearchChange}
              onSubmit={onSearchSubmit}
              large
            />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/restaurants"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            >
              Browse restaurants
            </Link>
            <a
              href="#collections"
              className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View collections
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-end justify-center lg:justify-end"
        >
          <div className="w-full max-w-sm rounded-[32px] border border-white/10 bg-neutral-950/75 p-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Tonight&apos;s pick</p>
            <div className="mt-4 overflow-hidden rounded-[24px]">
              <img
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=80"
                alt="Featured paneer dish"
                onError={handleImageError}
                className="food-image h-56"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-white">Paneer Royale Feast</h2>
                <p className="mt-1 text-sm text-white/80">
                  Creamy gravies, flaky naan, and smoky tandoor sides.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 px-3 py-2 text-center ring-1 ring-white/10">
                <p className="text-lg font-bold">4.8</p>
                <p className="text-xs text-white/70">rating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
