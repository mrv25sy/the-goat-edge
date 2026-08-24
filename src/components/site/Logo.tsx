import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-primary/40 bg-primary/15 text-[11px] font-bold tracking-tight text-primary",
        className,
      )}
    >
      GT
    </span>
  );
}
