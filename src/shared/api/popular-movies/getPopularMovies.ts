import type { GetPopularMoviesQueryType } from "./getPopularMoviesQueryType";
import { apiRequest, type PaginationResponse } from "../request/apiRequest";
import type { Movie } from "../movies/movie";

export const getPopularMovies = async (
  query?: GetPopularMoviesQueryType,
): Promise<PaginationResponse<Movie>> => {
  return await apiRequest<PaginationResponse<Movie>, GetPopularMoviesQueryType>(
    "/discover/movie",
    "GET",
    query,
  );
};
