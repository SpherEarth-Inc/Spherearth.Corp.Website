const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a root-absolute public asset path (e.g. "/images/logo.webp") with the
 * configured basePath when set. next/image does not apply basePath to `src`.
 * Non-absolute or external URLs are returned unchanged.
 */
export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
