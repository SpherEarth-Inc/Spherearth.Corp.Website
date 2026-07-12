"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; layout: number },
          elementId: string
        ) => void;
      };
    };
  }
}

export function GoogleTranslateWidget() {
  useEffect(() => {
    const disablePoweredByLink = () => {
      const link = document.querySelector(
        ".google-translate-widget .goog-te-gadget > span a"
      );
      if (link instanceof HTMLAnchorElement) {
        link.removeAttribute("href");
        link.setAttribute("aria-disabled", "true");
        link.setAttribute("tabindex", "-1");
      }
    };

    const container = document.getElementById("google_translate_element");
    const observer =
      container &&
      new MutationObserver(() => {
        disablePoweredByLink();
      });

    observer?.observe(container, { childList: true, subtree: true });

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", layout: 0 },
          "google_translate_element"
        );
        disablePoweredByLink();
      }
    };

    const existingScript = document.getElementById("google-translate-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit?.();
      disablePoweredByLink();
    }

    return () => {
      observer?.disconnect();
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="google-translate-widget space-y-4">
      <p>Please choose from the available languages:</p>
      <div id="google_translate_element" />
    </div>
  );
}
