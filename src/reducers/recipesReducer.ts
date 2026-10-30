import type { Recipe, RecipesState } from "@/types";

// list of actions on states
type RecipesAction =
  | { type: "queryChanged"; query: string }
  | { type: "searchSubmitted" }
  | { type: "pageChanged"; page: number }
  | { type: "requestStarted" }
  | { type: "requestSucceeded"; recipes: Recipe[]; totalResults: number }
  | { type: "requestFailed"; error: string }
  | { type: "retried" };

function recipesReducer(
  state: RecipesState,
  action: RecipesAction,
): RecipesState {
  switch (action.type) {
    case "queryChanged":
      return { ...state, queryInput: action.query };
    case "searchSubmitted": {
      const searchQuery = state.queryInput.trim();

      if (searchQuery === state.searchQuery && state.page === 0)
        return { ...state, requestVersion: state.requestVersion + 1 };

      return { ...state, searchQuery, page: 0 };
    }
    case "pageChanged":
      return { ...state, page: action.page };
    case "requestStarted":
      return { ...state, status: "loading", error: null };
    case "requestSucceeded":
      return {
        ...state,
        recipes: action.recipes,
        totalResults: action.totalResults,
        status: "success",
        error: null,
      };
    case "requestFailed":
      return { ...state, status: "error", error: action.error };
    case "retried":
      return { ...state, requestVersion: state.requestVersion + 1 };
    default:
      return state;
  }
}

export { recipesReducer };
