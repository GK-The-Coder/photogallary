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

## Five-minute screen-recording outline

1. **0:00–0:45 — Run the app:** start `npm run dev`; show the gallery, loading indicator, and responsive grid.
2. **0:45–1:30 — Search:** search for part of an author's name, change letter case, and show the empty-search state.
3. **1:30–2:15 — Favourites:** toggle a heart, refresh the page, and show that its state persists.
4. **2:15–3:15 — Custom hook:** explain the API request, loading/error state, response check, and abort cleanup in `useFetchPhotos.js`.
5. **3:15–4:15 — React state and performance:** explain the reducer and localStorage persistence, then show `useCallback` and `useMemo` in `Gallery.jsx`.
6. **4:15–5:00 — Implementation challenge:** discuss handling fetch failures and safely restoring malformed or unavailable localStorage data.
