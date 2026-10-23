import Gallery from './components/Gallery.jsx';

export default function App() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <header className="mb-8 sm:mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Photo Gallery
        </h1>
        <p className="mt-2 text-slate-600">
          A collection of photos from around the world.
        </p>
      </header>
      <Gallery />
    </main>
  );
}
