export function favoritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return state.includes(action.photoId)
        ? state.filter((photoId) => photoId !== action.photoId)
        : [...state, action.photoId];
    default:
      return state;
  }
}

export function readFavoriteIds(storageKey) {
  try {
    const storedIds = window.localStorage.getItem(storageKey);
    if (!storedIds) {
      return [];
    }

    const parsedIds = JSON.parse(storedIds);
    return Array.isArray(parsedIds)
      ? parsedIds.filter((photoId) => typeof photoId === 'string')
      : [];
  } catch (storageError) {
    console.warn('Unable to read photo favourites from localStorage.', storageError);
    return [];
  }
}
