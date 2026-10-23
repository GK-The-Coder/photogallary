export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-7">
      <label htmlFor="author-search" className="sr-only">
        Search photos by author
      </label>
      <div className="relative">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="m16 16 4 4" />
        </svg>
        <input
          id="author-search"
          type="search"
          value={value}
          onChange={onChange}
          placeholder="Search by author..."
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>
    </div>
  );
}
