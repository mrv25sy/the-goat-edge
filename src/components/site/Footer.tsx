import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Send, Mail } from "lucide-react";
import { Logo } from "./Logo";

const quick = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer({ anchorsOnHome = true }: { anchorsOnHome?: boolean }) {
  const prefix = anchorsOnHome ? "" : "/";
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <Logo className="h-8 w-8" />
            <span className="text-sm font-bold tracking-[0.18em] uppercase">The Goat</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            The flagship financial markets education program by GO AI Academy — forex, gold, crypto
            and investing, with AI-assisted tools and daily mentorship.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="YouTube"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Telegram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Quick links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quick.map((l) => (
              <li key={l.href}>
                <a
                  href={`${prefix}${l.href}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Legal & contact
          </h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <a
                href="mailto:info@goai.academy"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                info@goai.academy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 GO AI. All rights reserved.</p>
          <p>Trading involves risk. Educational content only — not financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
