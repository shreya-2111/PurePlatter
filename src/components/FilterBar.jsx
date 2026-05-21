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
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr_auto]">
      <div className="col-span-2 md:col-span-4 lg:col-span-1">
        <SearchBar
          value={searchValue}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          className="shadow-none"
        />
      </div>

      <select
        value={filters.minRating}
        onChange={(event) => onFilterChange('minRating', event.target.value)}
        className="col-span-1 rounded-2xl border border-black/10 bg-[color:var(--bg-primary)] px-4 py-3 text-sm outline-none focus:border-primary dark:border-white/10 text-[color:var(--text-primary)]"
      >
        <option value="">Rating</option>
        <option value="4">4.0+</option>
        <option value="4.5">4.5+</option>
      </select>

      <select
        value={filters.cuisine}
        onChange={(event) => onFilterChange('cuisine', event.target.value)}
        className="col-span-1 rounded-2xl border border-black/10 bg-[color:var(--bg-primary)] px-4 py-3 text-sm outline-none focus:border-primary dark:border-white/10 text-[color:var(--text-primary)]"
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
        className="col-span-1 rounded-2xl border border-black/10 bg-[color:var(--bg-primary)] px-4 py-3 text-sm outline-none focus:border-primary dark:border-white/10 text-[color:var(--text-primary)]"
      >
        <option value="">Price for two</option>
        <option value="500">Under Rs500</option>
        <option value="800">Under Rs800</option>
        <option value="1000">Under Rs1000</option>
      </select>

      <button
        type="button"
        onClick={onClear}
        className="col-span-2 md:col-span-4 lg:col-span-1 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
      >
        Clear
      </button>
    </div>
  </div>
);

export default FilterBar;
