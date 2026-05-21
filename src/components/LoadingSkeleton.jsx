const SkeletonBlock = ({ className }) => (
  <div className={`animate-pulse rounded-3xl bg-black/5 dark:bg-white/5 ${className}`} />
);

export const HomeSkeleton = () => (
  <div className="container-shell space-y-8 py-8">
    <SkeletonBlock className="h-[540px] w-full" />
    <div className="grid gap-6 md:grid-cols-3">
      {[...Array(3)].map((_, index) => (
        <SkeletonBlock key={index} className="h-80" />
      ))}
    </div>
    <div className="grid gap-6 lg:grid-cols-3">
      {[...Array(3)].map((_, index) => (
        <SkeletonBlock key={index} className="h-72" />
      ))}
    </div>
  </div>
);

export const RestaurantGridSkeleton = () => (
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {[...Array(6)].map((_, index) => (
      <SkeletonBlock key={index} className="h-[420px]" />
    ))}
  </div>
);

export const DetailsSkeleton = () => (
  <div className="container-shell space-y-8 py-8">
    <SkeletonBlock className="h-[320px] w-full" />
    <SkeletonBlock className="h-40 w-full" />
    <div className="grid gap-6">
      {[...Array(4)].map((_, index) => (
        <SkeletonBlock key={index} className="h-72 w-full" />
      ))}
    </div>
  </div>
);
