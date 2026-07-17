const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a root-absolute public asset path (e.g. "/images/logo.webp") with the
 * configured basePath. Needed because next/image does not apply basePath to
 * `src`, which breaks static assets when deployed under a subpath (GitHub Pages).
 * Non-absolute or external URLs are returned unchanged.
 */
export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
