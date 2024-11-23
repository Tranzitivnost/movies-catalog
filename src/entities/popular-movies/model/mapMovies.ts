import { getImageUrl, type Movie } from "@shared/api"

export const mapMovies = (movies: Movie[]) => {
  return movies.map(movie => ({
    ...movie,
    poster_path: getImageUrl(movie.poster_path),
    backdrop_path: getImageUrl(movie.backdrop_path),
  }))
}
