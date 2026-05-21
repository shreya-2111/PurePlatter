import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  HiBars3,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiXMark,
} from 'react-icons/hi2';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import { useCart } from '../context/CartContext';
import { brand } from '../utils/brand';

const linkClassName = ({ isActive }) =>
  `text-sm font-semibold transition ${
    isActive ? 'text-primary' : 'text-[color:var(--text-secondary)] hover:text-primary'
  }`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount, favorites } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchValue(params.get('search') ?? '');
  }, [location.search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = searchValue.trim();
    navigate(query ? `/restaurants?search=${encodeURIComponent(query)}` : '/restaurants');
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:var(--bg-primary)]/85 backdrop-blur-xl dark:border-white/5">
      <div className="container-shell">
        <div className="flex items-center gap-3 py-4">
          <Link to="/" className="shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-xl font-black text-white shadow-soft">
                {brand.mark}
              </div>
              <div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <p className="font-display text-base sm:text-lg font-semibold leading-none">{brand.name}</p>
                  <span className="hidden sm:inline-block rounded-full bg-emerald-500 px-2 py-1 text-xs font-bold text-white">PURE VEG</span>
                </div>
                <p className="hidden sm:block mt-1 text-xs uppercase tracking-[0.35em] text-[color:var(--text-secondary)]">
                  {brand.subtitle}
                </p>
              </div>
            </div>
          </Link>

          <div className="hidden flex-1 lg:block">
            <SearchBar value={searchValue} onChange={(event) => setSearchValue(event.target.value)} onSubmit={handleSubmit} />
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            <NavLink to="/" className={linkClassName}>
              Home
            </NavLink>
            <NavLink to="/restaurants" className={linkClassName}>
              Restaurants
            </NavLink>
          </nav>

          <div className="ml-auto hidden items-center gap-3 sm:flex">
            <ThemeToggle />
            <Link
              to="/login"
              className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-[color:var(--text-secondary)] transition hover:border-primary/30 hover:text-primary dark:border-white/10"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-red-600"
            >
              Sign up
            </Link>
            <Link
              to="/cart"
              className="relative rounded-full border border-black/10 p-3 text-[color:var(--text-secondary)] transition hover:border-primary/30 hover:text-primary dark:border-white/10"
            >
              <HiOutlineShoppingBag className="text-lg" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              to="/favorites"
              className="relative rounded-full border border-black/10 p-3 text-[color:var(--text-secondary)] transition hover:border-primary/30 hover:text-primary dark:border-white/10"
            >
              <HiOutlineHeart className="text-lg" />
              {favorites.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1 text-[10px] font-bold text-ink">
                  {favorites.length}
                </span>
              )}
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Link
              to="/favorites"
              className="relative rounded-full border border-black/10 p-3 text-[color:var(--text-secondary)] dark:border-white/10"
            >
              <HiOutlineHeart className="text-lg" />
              {favorites.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1 text-[10px] font-bold text-ink">
                  {favorites.length}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              className="relative rounded-full border border-black/10 p-3 text-[color:var(--text-secondary)] dark:border-white/10"
            >
              <HiOutlineShoppingBag className="text-lg" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              className="rounded-full border border-black/10 p-3 text-[color:var(--text-secondary)] dark:border-white/10"
            >
              {mobileOpen ? <HiXMark className="text-lg" /> : <HiBars3 className="text-lg" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="space-y-4 border-t border-black/5 pb-4 pt-4 lg:hidden dark:border-white/5">
            <SearchBar
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              onSubmit={handleSubmit}
            />
            <div className="flex items-center gap-5">
              <NavLink to="/" onClick={() => setMobileOpen(false)} className={linkClassName}>
                Home
              </NavLink>
              <NavLink
                to="/restaurants"
                onClick={() => setMobileOpen(false)}
                className={linkClassName}
              >
                Restaurants
              </NavLink>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold dark:border-white/10"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
