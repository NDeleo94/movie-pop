import unavailable from "../images/unavailable.jpeg";

export function getPoster(path) {
  if (path) {
    return path.original ? path.original : path.medium;
  }
  return unavailable;
}
