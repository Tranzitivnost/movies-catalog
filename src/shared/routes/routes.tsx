import { getUrlWithParams } from "./url-helper/getUrlWithParams";
export class Routes {
  static readonly HOME = "/";
  static readonly CONTACT = "/contact";
  static readonly ABOUT = "/about";
  static readonly MOVIE_RELEASE = "/movie-release";
  static readonly FILM = "/film/:id";

  static GET_FILM_URL(id: string | number) {
    return getUrlWithParams(this.FILM, { id });
  }
}
