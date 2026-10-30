type RecipeSearchFormProps = {
  query: string;
  isLoading: boolean;
  onQueryChange: (query: string) => void;
  onSearch: () => void;
};

function RecipeSearchForm({
  query,
  isLoading,
  onQueryChange,
  onSearch,
}: RecipeSearchFormProps) {
  return (
    <form
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
    >
      {/* LABEL: search */}
      <label className="sr-only" htmlFor="recipe-search">
        Search recipes
      </label>
      {/* INPUT: search */}
      <div className="relative flex-1">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="m16 16 4 4" />
        </svg>
        <input
          autoComplete="off"
          className="w-full rounded-2xl border border-stone-200 bg-white py-4 pl-12 pr-4 text-stone-900 shadow-sm outline-none transition placeholder:text-stone-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
          id="recipe-search"
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Try “pasta”, “chicken”, or “vegan”"
          type="search"
          value={query}
        />
      </div>
      {/* BUTTON:submit */}
      <button
        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-7 font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        type="submit"
      >
        {isLoading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Searching
          </>
        ) : (
          "Find recipes"
        )}
      </button>
    </form>
  );
}

export default RecipeSearchForm;
