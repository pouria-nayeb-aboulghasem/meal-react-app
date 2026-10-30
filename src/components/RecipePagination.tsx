type RecipePaginationProps = {
  page: number;
  totalPages: number;
  totalResults: number;
  canGoToPreviousPage: boolean;
  canGoToNextPage: boolean;
  isLoading: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

function RecipePagination({
  page,
  totalPages,
  totalResults,
  canGoToPreviousPage,
  canGoToNextPage,
  isLoading,
  onPrevious,
  onNext,
}: RecipePaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Recipe result pages"
      className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-stone-200 pt-6 sm:flex-row"
    >
      <p className="text-sm text-stone-500">
        {/* NUMBER:current recipes */}
        Page <span className="font-semibold text-stone-800">{page + 1}</span> of{" "}
        <span className="font-semibold text-stone-800">{totalPages}</span>
        <span className="mx-2 text-stone-300">·</span>
        {/* NUMBER:total recipes */}
        {totalResults.toLocaleString()} recipes
      </p>
      <div className="flex gap-2">
        {/* BUTTON:prev */}
        <button
          aria-label="Previous page"
          className="rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-stone-300 hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={!canGoToPreviousPage || isLoading}
          onClick={onPrevious}
          type="button"
        >
          Previous
        </button>
        {/* BUTTON:next */}
        <button
          aria-label="Next page"
          className="rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-stone-300 hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={!canGoToNextPage || isLoading}
          onClick={onNext}
          type="button"
        >
          Next
        </button>
      </div>
    </nav>
  );
}

export default RecipePagination;
