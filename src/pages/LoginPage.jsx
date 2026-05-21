import { Link } from 'react-router-dom';
import { HiEnvelope, HiLockClosed } from 'react-icons/hi2';
import PageTransition from '../components/PageTransition';
import { brand } from '../utils/brand';

const LoginPage = () => (
  <PageTransition>
    <section className="container-shell py-8">
      <div className="grid gap-8 overflow-hidden rounded-[36px] border border-black/5 bg-white/80 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/80 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-primary via-rose-500 to-orange-400 p-8 text-white sm:p-10">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <span className="chip border-white/20 bg-white/10 text-white">Welcome back</span>
            <h1 className="mt-6 font-display text-4xl font-bold">Log in to {brand.name}</h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
              Revisit your saved restaurants, your cart, and your favorite vegetarian
              dishes with a clean account screen that fits the rest of the site.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <form onSubmit={(event) => event.preventDefault()} className="mx-auto max-w-lg space-y-5">
            <div>
              <label className="text-sm font-semibold">Email address</label>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-black/10 px-4 py-3 dark:border-white/10">
                <HiEnvelope className="text-primary" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Password</label>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-black/10 px-4 py-3 dark:border-white/10">
                <HiLockClosed className="text-primary" />
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-[color:var(--text-secondary)]">
                <input type="checkbox" className="rounded border-black/20" />
                Keep me signed in
              </label>
              <button type="button" className="font-semibold text-primary">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-red-600"
            >
              Log in
            </button>

            <p className="text-center text-xs text-[color:var(--text-secondary)]">
              Demo screen only. Hook this form to your auth backend when you are ready.
            </p>

            <p className="text-center text-sm text-[color:var(--text-secondary)]">
              New here?{' '}
              <Link to="/signup" className="font-semibold text-primary">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default LoginPage;
