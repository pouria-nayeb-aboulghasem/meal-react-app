const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const VITE_SPOONACULAR_API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

const API_ENDPOINTS = {
  recipes: "recipes/complexSearch",
} as const;

export { API_BASE_URL, VITE_SPOONACULAR_API_KEY, API_ENDPOINTS };
