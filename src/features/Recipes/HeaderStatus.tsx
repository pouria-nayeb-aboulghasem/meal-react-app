type HeaderStatusProps = {
  query: string;
  isLoading: boolean;
  error: string | null;
  totalResults: number;
};

function HeaderStatus({
  error,
  isLoading,
  query,
  totalResults,
}: HeaderStatusProps) {
  return (
    <div className="mb-5 flex min-h-8 items-end justify-between gap-4">
      <h2 className="text-xl font-bold tracking-tight text-stone-900">
        {query.trim() ? "Search results" : "Popular recipes"}
      </h2>
      {!isLoading && !error && totalResults > 0 && (
        <p className="text-sm text-stone-500">
          {totalResults.toLocaleString()} recipes
        </p>
      )}
    </div>
  );
}

export default HeaderStatus;
