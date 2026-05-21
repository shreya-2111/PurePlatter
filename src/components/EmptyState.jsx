import { Link } from 'react-router-dom';

const EmptyState = ({
  title,
  description,
  actionLabel = 'Browse restaurants',
  actionTo = '/restaurants',
  onAction,
}) => (
  <div className="card-surface rounded-[32px] px-6 py-12 text-center">
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
      Z
    </div>
    <h2 className="mt-5 font-display text-3xl font-semibold">{title}</h2>
    <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[color:var(--text-secondary)]">
      {description}
    </p>
    {onAction ? (
      <button
        type="button"
        onClick={onAction}
        className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-red-600"
      >
        {actionLabel}
      </button>
    ) : (
      <Link
        to={actionTo}
        className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-red-600"
      >
        {actionLabel}
      </Link>
    )}
  </div>
);

export default EmptyState;
