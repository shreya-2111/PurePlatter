import SearchBar from './SearchBar';

const FilterBar = ({
  searchValue,
  onSearchChange,
  onSearchSubmit,
  filters,
  onFilterChange,
  onClear,
  cuisineOptions,
}) => (
  <div className="card-surface rounded-[30px] p-5">
    <div className="grid gap-4 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))_auto]">
      <SearchBar
        value={searchValue}
        onChange={onSearchChange}
        onSubmit={onSearchSubmit}
        className="shadow-none"
      />

      <select
        value={filters.minRating}
        onChange={(event) => onFilterChange('minRating', event.target.value)}
        className="rounded-2xl border border-black/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary dark:border-white/10"
      >
        <option value="">Rating</option>
        <option value="4">4.0+</option>
        <option value="4.5">4.5+</option>
      </select>

      <select
        value={filters.cuisine}
        onChange={(event) => onFilterChange('cuisine', event.target.value)}
        className="rounded-2xl border border-black/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary dark:border-white/10"
      >
        <option value="">Cuisine</option>
        {cuisineOptions.map((cuisine) => (
          <option key={cuisine} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </select>

      <select
        value={filters.maxPrice}
        onChange={(event) => onFilterChange('maxPrice', event.target.value)}
        className="rounded-2xl border border-black/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary dark:border-white/10"
      >
        <option value="">Price for two</option>
        <option value="500">Under Rs500</option>
        <option value="800">Under Rs800</option>
        <option value="1000">Under Rs1000</option>
      </select>

      <button
        type="button"
        onClick={onClear}
        className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
      >
        Clear
      </button>
    </div>
  </div>
);

export default FilterBar;
