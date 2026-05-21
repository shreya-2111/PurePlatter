import { Link } from 'react-router-dom';
import { HiEnvelope, HiLockClosed, HiOutlineUser } from 'react-icons/hi2';
import PageTransition from '../components/PageTransition';
import { brand } from '../utils/brand';

const SignupPage = () => (
  <PageTransition>
    <section className="container-shell py-8">
      <div className="grid gap-8 overflow-hidden rounded-[36px] border border-black/5 bg-white/80 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/80 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-[#1c1c1c] via-[#2a2a2a] to-primary p-8 text-white sm:p-10">
          <div className="absolute left-0 top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <span className="chip border-white/20 bg-white/10 text-white">Join {brand.name}</span>
            <h1 className="mt-6 font-display text-4xl font-bold">Create your food account</h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
              Save favorite veg restaurants, build carts faster, and keep the browsing
              flow consistent across your food web experience.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <form onSubmit={(event) => event.preventDefault()} className="mx-auto max-w-lg space-y-5">
            <div>
              <label className="text-sm font-semibold">Full name</label>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-black/10 px-4 py-3 dark:border-white/10">
                <HiOutlineUser className="text-primary" />
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

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
                  placeholder="Create a password"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Confirm password</label>
              <div className="mt-2 flex items-center gap-3 rounded-2xl border border-black/10 px-4 py-3 dark:border-white/10">
                <HiLockClosed className="text-primary" />
                <input
                  type="password"
                  required
                  placeholder="Confirm your password"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            <label className="inline-flex items-start gap-2 text-sm text-[color:var(--text-secondary)]">
              <input type="checkbox" className="mt-1 rounded border-black/20" />
              I agree to receive updates about offers, new menus, and account activity.
            </label>

            <button
              type="submit"
              className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-red-600"
            >
              Create account
            </button>

            <p className="text-center text-xs text-[color:var(--text-secondary)]">
              Demo screen only. Connect this form to your signup API when needed.
            </p>

            <p className="text-center text-sm text-[color:var(--text-secondary)]">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-primary">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default SignupPage;
