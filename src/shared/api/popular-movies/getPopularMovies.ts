import type { GetPopularMoviesQueryType } from "./getPopularMoviesQueryType";
import { apiRequest } from "../request/apiRequest";
import type { Movie } from "../movies/movie";

export const getPopularMovies = async (
  query?: GetPopularMoviesQueryType,
): Promise<Movie[]> => {
  const response = await apiRequest<Movie, GetPopularMoviesQueryType>(
    "/discover/movie",
    "GET",
    query,
  );
  return response.results;
};
