import type { Recipe } from "@/types";

type RecipeItemProps = {
  recipe: Recipe;
};

function RecipeItem({ recipe }: RecipeItemProps) {
  return (
    <article
      className="group overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
      key={recipe.id}
    >
      <div className="aspect-4/3 overflow-hidden bg-stone-100">
        {recipe.image ? (
          <img
            alt={recipe.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
            src={recipe.image}
          />
        ) : (
          <div
            aria-label="No recipe image available"
            className="flex h-full items-center justify-center text-5xl"
            role="img"
          >
            🍽️
          </div>
        )}
      </div>
      <div className="p-5">
        <h2 className="line-clamp-2 min-h-14 text-lg font-semibold leading-7 text-stone-900">
          {recipe.title}
        </h2>
        <p className="mt-3 flex items-center gap-2 text-sm font-medium text-emerald-700">
          <span aria-hidden="true">✦</span>
          Recipe inspiration
        </p>
      </div>
    </article>
  );
}

export default RecipeItem;
