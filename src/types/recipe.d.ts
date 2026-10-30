type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

type RecipeParams = {
  query?: string;
  number?: number;
  offset?: number;
  type?: string;
  cuisine?: string;
  maxReadyTime?: number;
};

type RecipeSearchResponse = {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
};

type RecipesState = {
  queryInput: string;
  searchQuery: string;
  page: number;
  requestVersion: number;
  recipes: Recipe[];
  totalResults: number;
  status: "loading" | "success" | "error";
  error: string | null;
};

export type { Recipe, RecipeParams, RecipeSearchResponse, RecipesState };
