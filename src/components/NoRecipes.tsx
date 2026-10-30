function NoRecipes() {
  return (
    <div className="rounded-3xl border border-dashed border-stone-300 bg-white/70 px-6 py-16 text-center">
      <span className="text-4xl" aria-hidden="true">
        🥣
      </span>
      <h2 className="mt-4 text-lg font-semibold text-stone-900">
        No recipes found
      </h2>
      <p className="mt-2 text-sm text-stone-500">
        Try another ingredient or search term.
      </p>
    </div>
  );
}

export default NoRecipes;
