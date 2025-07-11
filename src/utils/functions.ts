import { locales } from "@/i18n/routing";

function normalizePath(path: string) {
  return path.replace(/\/+$/, "") || "/";
}

export function pathnameIsActive(
  pathnameActive: string,
  path: string | string[],
) {
  const normalizedActive = normalizePath(pathnameActive);

  if (Array.isArray(path)) {
    for (const p of path) {
      const matches = locales
        .map((loc) => normalizePath(`/${loc}${p}`))
        .some((loc) => loc === normalizedActive);

      if (matches) return true;
    }

    return false;
  }

  return locales
    .map((loc) => normalizePath(`/${loc}${path}`))
    .some((loc) => loc === normalizedActive);
}