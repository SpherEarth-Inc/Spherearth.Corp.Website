"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MIN_VISIBLE_MS = 500;
const FADE_OUT_MS = 350;

function SpherearthLoaderMark() {
  return (
    <svg
      viewBox="0 0 48 28"
      aria-hidden="true"
      className="h-7 w-12 animate-spherearth-spin"
    >
      <circle cx="14" cy="14" r="11" fill="#111111" />
      <circle
        cx="28"
        cy="14"
        r="11"
        fill="none"
        stroke="#009900"
        strokeWidth="4"
      />
    </svg>
  );
}

export function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setVisible(true);
    setFading(false);

    const startedAt = Date.now();
    let fadeTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const finish = () => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);

      fadeTimer = setTimeout(() => {
        setFading(true);
        hideTimer = setTimeout(() => setVisible(false), FADE_OUT_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-300 ease-out",
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      )}
    >
      <SpherearthLoaderMark />
    </div>
  );
}
