import type { GetPopularMoviesQueryType } from "./getPopularMoviesQueryType";
import { apiRequest } from "../request/apiRequest";
import type { Movie } from "../movies/movie";

type Paginated<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export const getPopularMovies = async (
  query?: GetPopularMoviesQueryType,
): Promise<Movie[]> => {
  const response = await apiRequest<
    Paginated<Movie>,
    GetPopularMoviesQueryType
  >("/discover/movie", "GET", query);
  return response.results;
};
