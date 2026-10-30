import RecipeSearchForm from "@/components/RecipeSearchForm";

type SearchProps = {
  isLoading: boolean;
  onQueryChange: (query: string) => void;
  onSearch: () => void;
  query: string;
};

function Search({ isLoading, onQueryChange, query, onSearch }: SearchProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
        Cook something wonderful
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl">
        Find your next favorite
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-stone-600 sm:text-lg">
        Search thousands of recipes and make something delicious today.
      </p>
      <div className="mt-8 text-left">
        <RecipeSearchForm
          isLoading={isLoading}
          onQueryChange={onQueryChange}
          onSearch={onSearch}
          query={query}
        />
      </div>
    </div>
  );
}

export default Search;
