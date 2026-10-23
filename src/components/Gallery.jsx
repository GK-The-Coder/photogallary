import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import PhotoCard from './PhotoCard.jsx';
import SearchBar from './SearchBar.jsx';
import { useFetchPhotos } from '../hooks/useFetchPhotos.js';
import { favoritesReducer, readFavoriteIds } from '../reducers/favoritesReducer.js';

const FAVORITES_STORAGE_KEY = 'photo-gallery-favorite-ids';

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState('');
  const [favoriteIds, dispatch] = useReducer(
    favoritesReducer,
    undefined,
    () => readFavoriteIds(FAVORITES_STORAGE_KEY),
  );

  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(normalizedSearch),
    );
  }, [photos, searchTerm]);

  const toggleFavorite = useCallback((photoId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', photoId });
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
    } catch (storageError) {
      console.warn('Unable to save photo favourites to localStorage.', storageError);
    }
  }, [favoriteIds]);

  return (
    <section aria-label="Photo gallery">
      <SearchBar value={searchTerm} onChange={handleSearch} />

      {loading && (
        <div
          className="flex min-h-64 flex-col items-center justify-center gap-3 text-slate-600"
          role="status"
          aria-live="polite"
        >
          <span className="h-9 w-9 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
          <span>Loading photos...</span>
        </div>
      )}

      {!loading && error && (
        <div
          className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-800"
          role="alert"
        >
          <p className="font-semibold">Could not load photos</p>
          <p className="mt-1 text-sm">{error}</p>
        </div>
      )}

      {!loading && !error && filteredPhotos.length === 0 && (
        <div className="rounded-xl border border-slate-200 bg-white px-5 py-14 text-center text-slate-600">
          <p className="font-medium text-slate-800">No photos found</p>
          <p className="mt-1 text-sm">Try another author name.</p>
        </div>
      )}

      {!loading && !error && filteredPhotos.length > 0 && (
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavorite={favoriteIds.includes(photo.id)}
              onFavoriteToggle={toggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}
