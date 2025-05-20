// route name
// 1 - routeName empty string
// 2 - routeName not empty string

// params
// 1 - empty object params
// 2 - params with one key-value pair {id: string}
// 3 - params object which consists of multiple key-value pairs { id: string, page: number, sort: string }

// HOW WORKS:
// 1. "/film/:id" -> "/film/2" /{router}/{:params}
// 2. "" -> ""
// 3. "/film/:id", {} -> throw new Error('you didn't pass "id" parameters') (it is private case of number 6 of this list)
// 4. "/film/:id/:page", { id:string, page: number } -> "/film/2/3"
// 5. "/film/:id", { id:string }, id="" -> "/film/"
// 6. "/film/:id/:page", { id:string, name: string } -> throw new Error('you didn't pass "page" parameters')

// newRoute and arrOfParams. why did I split that? -> not split?
// isTrue - bad variable name => isValidParams

// "/:id/:name", {id:string, name:"Galvani"} "/string/Galvani"
//1. split routeName
//2. вытащить ключи объекта
//3. если сплит и ключ объекта совпадают -> сформировать строку
//4. если нет, то выбрасываем ошибку

export function getUrlWithParams(
  routeName: string,
  params: Record<string, string | number>, // {id:1, page:25}
): string {
  if (routeName.length === 0) {
    return "";
  }

  const routes = routeName.split("/").filter(Boolean); // ["", "film", ":id", ":page"]
  let result = "";

  for (const route of routes) {
    if (route[0] !== ":") {
      result = result + `/${route}`;
      continue;
    }
    const key = route.substring(1);
    const value = params[key];

    if (value !== undefined) {
      result = result + `/${value}`;
      continue;
    }
    throw new Error(`You didn't pass correct "${key}" parameter`);
  }

  return result;
}
