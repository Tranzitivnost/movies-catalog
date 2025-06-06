import { API_READ_ACCESS_TOKEN } from "@/../config";

const BASE_URL = `https://api.themoviedb.org/3`;

type RequestType = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS";

export async function apiRequest<ResponseType, BodyType = unknown>(
  url: string,
  method: RequestType = "GET",
  body?: BodyType,
  options?: RequestInit,
): Promise<ResponseType> {
  if (method === "GET" && body) {
    url += `?${new URLSearchParams(
      Object.entries(body as Record<string, any>).reduce(
        (acc, [key, val]) => ({
          ...acc,
          [key]: val !== undefined ? String(val) : "",
        }),
        {},
      ),
    ).toString()}`;
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
    body: method === "GET" ? undefined : JSON.stringify(body),
    ...options,
  });

  return response.json();
}
