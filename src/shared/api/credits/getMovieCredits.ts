import { apiRequest } from "../request/apiRequest";
import type { MovieCredits, CastMember } from "./movieCredits";

export const getMovieCredits = async (
  movie_id: number,
  query: { language?: string } = { language: "en-US" },
): Promise<CastMember[]> => {
  const response = await apiRequest<MovieCredits, typeof query>(
    `/movie/${movie_id}/credits`,
    "GET",
    query,
  );
  console.log("API response for credits:", response);
  return response.cast;
};
