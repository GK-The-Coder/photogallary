export default function PhotoCard({ photo, isFavorite, onFavoriteToggle }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md">
      <img
        className="aspect-[3/2] w-full object-cover"
        src={`https://picsum.photos/id/${photo.id}/600/400`}
        alt={`Photo by ${photo.author}`}
        loading="lazy"
        width="600"
        height="400"
      />
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <p className="truncate font-medium text-slate-800" title={photo.author}>
          {photo.author}
        </p>
        <button
          type="button"
          className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 ${
            isFavorite
              ? 'bg-rose-50 text-rose-600 hover:bg-rose-100'
              : 'text-slate-400 hover:bg-slate-100 hover:text-rose-500'
          }`}
          onClick={() => onFavoriteToggle(photo.id)}
          aria-label={`${isFavorite ? 'Remove' : 'Add'} ${photo.author}'s photo ${isFavorite ? 'from' : 'to'} favorites`}
          aria-pressed={isFavorite}
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}
