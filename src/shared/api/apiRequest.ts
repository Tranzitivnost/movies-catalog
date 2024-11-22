import { API_KEY } from "../../../config"

const BASE_URL = `http://www.omdbapi.com/?apikey=[${API_KEY}]&`

export async function apiRequest<FieldType>(
  url: string,
  options?: RequestInit,
): Promise<FieldType[]> {
  const response = await fetch(`${BASE_URL}${url}`, options)
  const data = await response.json()

  return data
}
