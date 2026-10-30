import { useEffect, useReducer } from "react";
import { getRecipes } from "@/services/mealService";
import type { RecipesState } from "@/types";
import { recipesReducer } from "@/reducers";

const PAGE_SIZE = 12;

const initialState: RecipesState = {
  queryInput: "",
  searchQuery: "",
  page: 0,
  requestVersion: 0,
  recipes: [],
  totalResults: 0,
  status: "loading",
  error: null,
};

function useRecipes() {
  const [state, dispatch] = useReducer(recipesReducer, initialState);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRecipes() {
      try {
        // loading active
        dispatch({ type: "requestStarted" });

        // send request to server
        const response = await getRecipes(
          {
            query: state.searchQuery || undefined,
            number: PAGE_SIZE,
            offset: state.page * PAGE_SIZE,
          },
          controller.signal,
        );

        // request succeeded
        dispatch({
          type: "requestSucceeded",
          recipes: response.results,
          totalResults: response.totalResults,
        });
      } catch (error) {
        // request failed
        if (!controller.signal.aborted) {
          dispatch({
            type: "requestFailed",
            error:
              error instanceof Error
                ? error.message
                : "We couldn't load recipes. Please try again.",
          });
        }
      }
    }

    // run fetch recipes
    fetchRecipes();

    // cleanup
    return () => {
      controller.abort();
    };
  }, [state.page, state.requestVersion, state.searchQuery]);

  // calculate total pages
  const totalPages = Math.ceil(state.totalResults / PAGE_SIZE);

  return {
    recipes: state.recipes,
    query: state.queryInput,
    setQuery: (query: string) => dispatch({ type: "queryChanged", query }),
    search: () => dispatch({ type: "searchSubmitted" }),
    page: state.page,
    totalPages,
    canGoToPreviousPage: state.page > 0,
    canGoToNextPage: state.page + 1 < totalPages,
    goToPreviousPage: () =>
      dispatch({ type: "pageChanged", page: Math.max(0, state.page - 1) }),
    goToNextPage: () =>
      dispatch({
        type: "pageChanged",
        page: Math.min(Math.max(0, totalPages - 1), state.page + 1),
      }),
    isLoading: state.status === "loading",
    error: state.error,
    refresh: () => dispatch({ type: "retried" }),
    totalResults: state.totalResults,
  };
}

export { useRecipes };
