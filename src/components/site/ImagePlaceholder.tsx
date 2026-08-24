import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Reserved slot for a real photo the client will supply.
 * Replace the whole component usage with an <img> once assets arrive.
 */
export function ImagePlaceholder({
  label,
  className,
  tone = "dark",
}: {
  label: string;
  className?: string;
  tone?: "dark" | "band";
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-6 text-center",
        tone === "dark"
          ? "border-border bg-surface text-muted-foreground"
          : "border-band-foreground/25 bg-band-foreground/[0.03] text-band-muted",
        className,
      )}
    >
      <ImageIcon className="h-5 w-5 opacity-70" />
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}
