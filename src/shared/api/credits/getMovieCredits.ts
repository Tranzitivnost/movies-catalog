import { apiRequest } from "../request/apiRequest";
import type { MovieCredits } from "./movieCredits";

export const getMovieCredits = async (
  movie_id: number,
  query: { language?: string } = { language: "en-US" },
): Promise<MovieCredits> => {
  const response = await apiRequest<MovieCredits, typeof query>(
    `/movie/${movie_id}/credits`,
    "GET",
    query,
  );

  return response;
};
