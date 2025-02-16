import { API_READ_ACCESS_TOKEN } from "@/../config";

const BASE_URL = `https://api.themoviedb.org/3`;

type RequestType = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS";

type Response<FieldType> = {
  page: number;
  results: FieldType[];
  total_pages: number;
  total_results: number;
};

export async function apiRequest<FieldType, BodyType = unknown>(
  url: string,
  method: RequestType = "GET",
  body?: BodyType,
  options?: RequestInit,
): Promise<Response<FieldType>> {
  if (method === "GET") {
    url = `${url}?${new URLSearchParams(body as Record<string, string>).toString()}`;
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
      ...(options?.headers ?? {}),
    },
    body: method === "GET" ? undefined : JSON.stringify(body),
    ...options,
  });

  return await response.json();
}
