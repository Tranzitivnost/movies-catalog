type RouteName = "FILM_TEMPLATE" | "FILM";

export function getUrlWithParams(
  routeName: RouteName,
  params: Record<string, string | number>,
): string {
  if (routeName === "FILM_TEMPLATE") {
    return "/film/:id";
  }
  if (routeName === "FILM") {
    if (!params.id) throw new Error("Не задан параметр");
    return `/film/${params.id}`;
  } else {
    throw new Error("Название ссылки неверное");
  }
}
