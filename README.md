# Photo Gallery

A responsive React photo gallery that loads 30 photos from Picsum Photos. Search by author and save favourite photo IDs in browser localStorage.

## Requirements

- Node.js 18 or newer
- npm

## Install and run

From the project directory, run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

To create and preview a production build:

```bash
npm run build
npm run preview
```

## Key files and hooks

- `src/hooks/useFetchPhotos.js` fetches the 30-photo Picsum list and returns `photos`, `loading`, and `error`. It checks HTTP and response errors and aborts an in-flight request on unmount.
- `src/components/Gallery.jsx` renders loading, error, empty-search, and gallery states. It uses `useCallback` for the search input handler, `useMemo` for the filtered list, and `useReducer` for favourite IDs.
- `src/reducers/favoritesReducer.js` toggles photo IDs and safely reads stored favourites. Gallery persists updates in localStorage.
- `src/components/PhotoCard.jsx` renders the responsive image and accessible favourite control. `src/components/SearchBar.jsx` contains the labelled author search.
- `src/index.css` loads Tailwind CSS, and `vite.config.js` registers its Vite plugin.

