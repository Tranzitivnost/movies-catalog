// route name
// 1 - routeName empty string
// 2 - routeName not empty string

// params
// 1 - empty object params
// 2 - params with one key-value pair {id: string}
// 3 - params object which consists of multiple key-value pairs { id: string, page: number, sort: string }

// HOW WORKS:
// 1. "/film/:id" -> "/film/2"
// 2. "" -> ""
// 3. "/film/:id", {} -> throw new Error('you didn't pass "id" parameters') (it is private case of number 6 of this list)
// 4. "/film/:id/:page", { id:string, page: number } -> "/film/2/3"
// 5. "/film/:id/", { id:string }, id="" -> "/film/"
// 6. "/film/:id/:page", { id:string, name: string } -> throw new Error('you didn't pass "page" parameters')

export function getUrlWithParams(
  routeName: string,
  params: Record<string, string | number>,
): string {
  return "";
}
