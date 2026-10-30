function Loading() {
  return (
    <div
      aria-label="Loading recipes"
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      role="status"
    >
      {Array.from({ length: 6 }, (_, index) => (
        <div
          className="overflow-hidden rounded-3xl border border-stone-100 bg-white"
          key={index}
        >
          <div className="aspect-4/3 animate-pulse bg-stone-200" />
          <div className="space-y-3 p-5">
            <div className="h-4 w-4/5 animate-pulse rounded bg-stone-200" />
            <div className="h-3 w-2/5 animate-pulse rounded bg-stone-100" />
          </div>
        </div>
      ))}
      <span className="sr-only">Loading recipes…</span>
    </div>
  );
}

export default Loading;
