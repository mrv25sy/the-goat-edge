import { useEffect, useState } from "react";

const KEY = "goat-cookie-notice-dismissed";

export function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(KEY) !== "1") setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          We use cookies to ensure a smooth browsing experience. By continuing, you agree to our use
          of cookies.
        </p>
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem(KEY, "1");
            setVisible(false);
          }}
          className="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
