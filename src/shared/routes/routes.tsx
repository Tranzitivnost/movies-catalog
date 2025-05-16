import { getUrlWithParams } from "./url-helper/getUrlWithParams";
export class Routes {
  static readonly HOME = "/";
  static readonly CONTACT = "/contact";
  static readonly ABOUT = "/about";
  static readonly MOVIE_RELEASE = "/movie-release";
  static readonly FILM_TEMPLATE = getUrlWithParams("FILM_TEMPLATE", {});

  static FILM(id: string | number) {
    return getUrlWithParams("FILM", { id });
  }
}
