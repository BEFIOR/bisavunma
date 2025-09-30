"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    TranslateInit?: () => void;
    google?: {
      translate?: {
        TranslateElement?: unknown;
      };
    };
  }
}

const GOOGLE_ELEMENT_ID = "google_translate_element";
const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 300;

const reinitializeTranslate = (retries = 0) => {
  if (typeof window === "undefined") {
    return;
  }

  const hasTranslateInit = typeof window.TranslateInit === "function";
  const hasGoogle = Boolean(window.google?.translate?.TranslateElement);

  if (!hasTranslateInit || !hasGoogle) {
    if (retries < MAX_RETRIES) {
      window.setTimeout(
        () => reinitializeTranslate(retries + 1),
        RETRY_DELAY_MS
      );
    }
    return;
  }

  const container = document.getElementById(GOOGLE_ELEMENT_ID);
  if (container) {
    container.innerHTML = "";
  }

  window.TranslateInit?.();
};

export default function GoogleTranslateSync() {
  const pathname = usePathname();

  useEffect(() => {
    const timeout = window.setTimeout(() => reinitializeTranslate(), 0);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return null;
}
