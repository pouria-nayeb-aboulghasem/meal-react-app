import type { Recipe } from "@/types";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import NoRecipes from "../../components/NoRecipes";
import RecipeItem from "./RecipeItem";

type RecipeResultsProps = {
  recipes: Recipe[];
  isLoading: boolean;
  error: string | null;
  onRefresh: () => void;
};

function RecipeResults({
  recipes,
  isLoading,
  error,
  onRefresh,
}: RecipeResultsProps) {
  // ERROR
  if (error) return <ErrorMessage error={error} onRefresh={onRefresh} />;

  // LOADING
  if (isLoading) return <Loading />;

  // NO RECIPES
  if (recipes.length === 0) return <NoRecipes />;

  // SUCCESS
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeResults;
