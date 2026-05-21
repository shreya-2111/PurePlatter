import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { brand } from '../utils/brand';

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
  { label: 'Facebook', href: 'https://facebook.com', icon: FaFacebookF },
  { label: 'X', href: 'https://x.com', icon: FaXTwitter },
  { label: 'YouTube', href: 'https://youtube.com', icon: FaYoutube },
];

const quickLinks = [
  { label: 'Pure Veg Delivery', to: '/restaurants?mode=Delivery' },
  { label: 'Dining Out', to: '/restaurants?mode=Dining%20Out' },
  { label: 'Cafe Dining', to: '/restaurants?mode=Cafe%20Dining' },
  { label: 'Saved Favorites', to: '/favorites' },
];

const promisePoints = [
  '100% vegetarian restaurant and menu listings.',
  'Clear food photos with a reliable visual fallback.',
  'Fast reorder flow through favorites, cart, and checkout.',
];

const Footer = () => (
  <footer className="mt-16 border-t border-black/5 py-10 dark:border-white/5">
    <div className="container-shell">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-xl font-black text-white">
              {brand.mark}
            </div>
            <div>
              <p className="font-display text-lg font-semibold">{brand.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-secondary)]">
                {brand.subtitle}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-[color:var(--text-secondary)]">
            {brand.tagline} Explore paneer classics, festive thalis, cafe comfort food, and
            dessert picks in one calm, veg-first experience.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="rounded-full bg-primary/8 px-3 py-2">100% Veg</span>
            <span className="rounded-full bg-primary/8 px-3 py-2">Fresh Picks</span>
            <span className="rounded-full bg-primary/8 px-3 py-2">Easy Reorders</span>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Veg Explore</h3>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-[color:var(--text-secondary)]">
            {quickLinks.map(({ label, to }) => (
              <Link key={label} to={to} className="transition hover:text-primary">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">PurePlatter Promise</h3>
          <div className="mt-4 space-y-3 text-sm leading-6 text-[color:var(--text-secondary)]">
            {promisePoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-[color:var(--text-secondary)]">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition hover:border-primary/30 hover:text-primary dark:border-white/10"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
