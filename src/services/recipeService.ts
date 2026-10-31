import {
  API_BASE_URL,
  API_ENDPOINTS,
  VITE_SPOONACULAR_API_KEY,
} from "@/constants";
import type { RecipeParams, RecipeSearchResponse } from "@/types";

async function getRecipes(
  params: RecipeParams = {},
  signal?: AbortSignal,
): Promise<RecipeSearchResponse> {
  const searchParams = new URLSearchParams({
    apiKey: VITE_SPOONACULAR_API_KEY,
    number: String(params.number ?? 12),
    offset: String(params.offset ?? 0),
    addRecipeInformation: "false",
    addRecipeNutrition: "false",
    ...Object.fromEntries(
      Object.entries(params)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => [key, String(value)]),
    ),
  });

  const response = await fetch(
    `${API_BASE_URL}/${API_ENDPOINTS.recipes}?${searchParams}`,
    { signal },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return response.json();
}

export { getRecipes };
