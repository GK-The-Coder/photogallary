import { useEffect, useState } from 'react';

const PHOTOS_API_URL = 'https://picsum.photos/v2/list?limit=30';

export function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPhotos() {
      try {
        const response = await fetch(PHOTOS_API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`The photo service responded with status ${response.status}.`);
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('The photo service returned an unexpected response.');
        }

        setPhotos(data);
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'An unexpected error occurred.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPhotos();
    return () => controller.abort();
  }, []);

  return { photos, loading, error };
}
