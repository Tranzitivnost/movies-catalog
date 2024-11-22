import type { Movie } from "../../../shared/api"
import { getImageUrl } from "../../../shared/api"

export function mapMovie(movie: Movie) {
  return {
    ...movie,
    poster_path: getImageUrl(movie.poster_path),
    backdrop_path: getImageUrl(movie.backdrop_path),
  }
}
