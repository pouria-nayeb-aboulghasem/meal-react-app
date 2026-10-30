import RecipePagination from "@/components/RecipePagination";
import Header from "@/features/Recipes/Header";
import HeaderStatus from "@/features/Recipes/HeaderStatus";
import RecipeResults from "@/features/Recipes/RecipeResults";
import Search from "@/features/Recipes/Search";
import { useRecipes } from "@/hooks/useRecipes";

function Recipes() {
  const {
    isLoading,
    error,
    refresh,
    query,
    setQuery,
    search,
    canGoToNextPage,
    canGoToPreviousPage,
    goToNextPage,
    goToPreviousPage,
    page,
    recipes,
    totalPages,
    totalResults,
  } = useRecipes();

  return (
    <>
      <Header />

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <Search
          isLoading={isLoading}
          onQueryChange={setQuery}
          onSearch={search}
          query={query}
        />

        <section aria-label="Recipe search results" className="mt-14">
          <HeaderStatus
            error={error}
            isLoading={isLoading}
            query={query}
            totalResults={totalResults}
          />

          <RecipeResults
            error={error}
            isLoading={isLoading}
            onRefresh={refresh}
            recipes={recipes}
          />

          {!error && (
            <RecipePagination
              canGoToNextPage={canGoToNextPage}
              canGoToPreviousPage={canGoToPreviousPage}
              isLoading={isLoading}
              onNext={goToNextPage}
              onPrevious={goToPreviousPage}
              page={page}
              totalPages={totalPages}
              totalResults={totalResults}
            />
          )}
        </section>
      </section>
    </>
  );
}

export default Recipes;
