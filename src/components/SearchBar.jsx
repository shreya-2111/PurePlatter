import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

const SearchBar = ({
  value,
  onChange,
  onSubmit,
  placeholder = 'Search for restaurants, cuisines, or areas',
  className = '',
  large = false,
}) => (
  <form
    onSubmit={onSubmit}
    className={`flex items-center gap-3 rounded-full border border-black/10 bg-white/95 px-4 text-ink shadow-soft dark:border-white/10 dark:bg-neutral-900/95 dark:text-white ${large ? 'py-3.5' : 'py-2.5'} ${className}`}
  >
    <HiOutlineMagnifyingGlass className="shrink-0 text-lg text-primary" />
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full bg-transparent outline-none placeholder:text-neutral-400 dark:placeholder:text-neutral-500 ${
        large ? 'text-sm sm:text-base' : 'text-sm'
      }`}
    />
    <button
      type="submit"
      className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-red-600"
    >
      Search
    </button>
  </form>
);

export default SearchBar;
