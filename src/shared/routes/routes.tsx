import type { Movie } from "@shared/api";

export class Routes {
  static readonly HOME = "/";
  static readonly CONTACT = "/contact";
  static readonly ABOUT = "/about";
  static readonly MOVIE_RELEASE = "/movie-release";
  static readonly FILM_TEMPLATE = "/film/:id";

  static FILM(id: Movie["id"]): string {
    return `/film/${id}`;
  }
}
