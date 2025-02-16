import { IMAGE_SERVICE_BASE_URL } from "./imageServiceUrl";

export function getImageUrl(path: string) {
  return `${IMAGE_SERVICE_BASE_URL}${path}`;
}
