import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import RestaurantCard from '../components/RestaurantCard';
import SectionHeading from '../components/SectionHeading';
import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';
import { RestaurantGridSkeleton } from '../components/LoadingSkeleton';
import { cuisines, restaurants } from '../data/restaurants';
import { useFakeLoading } from '../hooks/useFakeLoading';
import { filterRestaurants } from '../utils/filterRestaurants';

const RestaurantsPage = () => {
  const [searchParams] = useSearchParams();
  const loading = useFakeLoading();
  const [searchValue, setSearchValue] = useState(searchParams.get('search') ?? '');
  const [filters, setFilters] = useState({
    minRating: '',
    cuisine: '',
    maxPrice: '',
    mode: searchParams.get('mode') ?? '',
    collection: searchParams.get('collection') ?? '',
  });

  useEffect(() => {
    setSearchValue(searchParams.get('search') ?? '');
    setFilters((currentFilters) => ({
      ...currentFilters,
      mode: searchParams.get('mode') ?? '',
      collection: searchParams.get('collection') ?? '',
    }));
  }, [searchParams]);

  const filteredRestaurants = filterRestaurants(restaurants, searchValue, filters);

  const handleFilterChange = (key, value) => {
    setFilters((currentFilters) => ({ ...currentFilters, [key]: value }));
  };

  const clearFilters = () => {
    setSearchValue('');
    setFilters({
      minRating: '',
      cuisine: '',
      maxPrice: '',
      mode: '',
      collection: '',
    });
  };

  return (
    <PageTransition>
      <section className="container-shell py-8">
        <SectionHeading
          eyebrow="Restaurants"
          title="Discover pure veg restaurants with sharper photos and quicker decisions"
          description="Search vegetarian restaurants by name, then narrow the shortlist by rating, cuisine, and price for two."
        />

        <FilterBar
          searchValue={searchValue}
          onSearchChange={(event) => setSearchValue(event.target.value)}
          onSearchSubmit={(event) => event.preventDefault()}
          filters={filters}
          onFilterChange={handleFilterChange}
          onClear={clearFilters}
          cuisineOptions={cuisines}
        />

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[color:var(--text-secondary)]">
          {filters.mode ? <span className="chip">Mode: {filters.mode}</span> : null}
          {filters.collection ? <span className="chip">Collection: {filters.collection}</span> : null}
          <span>{filteredRestaurants.length} restaurants available</span>
        </div>

        <div className="mt-8">
          {loading ? (
            <RestaurantGridSkeleton />
          ) : filteredRestaurants.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No restaurants matched your filters"
              description="Try clearing a few filters or searching for another cuisine, neighborhood, or collection."
              actionLabel="Reset and explore"
              onAction={clearFilters}
            />
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default RestaurantsPage;
