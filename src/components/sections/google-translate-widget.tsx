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
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", layout: 0 },
          "google_translate_element"
        );
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
    }

    return () => {
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
