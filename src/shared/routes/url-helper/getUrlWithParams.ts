export function getUrlWithParams(
  routeName: string,
  params: Record<string, string | number>,
): string {
  if (routeName.length === 0) {
    return "";
  }

  const routes = routeName.split("/").filter(Boolean);
  let result = "";

  for (const route of routes) {
    if (route[0] !== ":") {
      result += "/" + String(route);
      continue;
    }
    const key = route.substring(1);
    const value = params[key];

    if (value !== undefined) {
      result += "/" + String(value);
      continue;
    }
    throw new Error(`You didn't pass correct "${key}" parameter`);
  }

  return result;
}
