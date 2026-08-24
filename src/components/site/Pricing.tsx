import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type Cell = boolean | string;

const plans = [
  { name: "Connect", price: "$349.99", term: "30 days", popular: false },
  { name: "Create", price: "$999.99", term: "60 days", popular: false },
  { name: "Complete", price: "$1699.99", term: "90 days", popular: true },
];

const rows: { feature: string; values: [Cell, Cell, Cell] }[] = [
  { feature: "Market fundamentals course", values: [true, true, true] },
  { feature: "Forex market access", values: [true, true, true] },
  { feature: "Crypto market access", values: [true, true, true] },
  { feature: "E-commerce course", values: [true, true, true] },
  { feature: "24/7 AI support bot", values: [true, true, true] },
  { feature: "Recommendation channels", values: ["3", "7", "10"] },
  { feature: "Technical analysis course", values: [true, true, true] },
  { feature: "Trading mastery plan", values: [false, true, true] },
  { feature: "Timing analysis", values: [false, true, true] },
  { feature: "Investment plan", values: [false, true, true] },
  { feature: "Weekly follow-up calls", values: [false, true, true] },
  { feature: "Full trading + investment strategy suite", values: [false, false, true] },
  { feature: "Financial literacy course", values: [false, false, true] },
  { feature: "Priority follow-up support", values: [false, false, true] },
];

function CellValue({ value }: { value: Cell }) {
  if (typeof value === "string") {
    return <span className="text-sm font-semibold text-band-foreground">{value}</span>;
  }
  return value ? (
    <Check className="mx-auto h-[18px] w-[18px] text-primary" aria-label="Included" />
  ) : (
    <Minus className="mx-auto h-[18px] w-[18px] text-band-muted/60" aria-label="Not included" />
  );
}

const ctaBase =
  "block w-full rounded-md px-4 py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-90";

export function Pricing() {
  return (
    <section id="pricing" className="section-band scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold text-band-foreground sm:text-4xl">
            Choose your plan
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-band-muted sm:text-base">
            Three levels of access to the same system — pick the depth of mentorship, tooling and
            follow-up that fits where you are today.
          </p>
        </div>

        {/* Comparison table — desktop & tablet */}
        <div className="mt-12 hidden overflow-hidden rounded-xl border border-band-border bg-band md:block">
          <table className="w-full table-fixed border-collapse text-left">
            <thead>
              <tr>
                <th className="w-[34%] border-b border-band-border p-5 align-bottom text-xs font-semibold tracking-[0.14em] text-band-muted uppercase">
                  Feature
                </th>
                {plans.map((p) => (
                  <th
                    key={p.name}
                    className={cn(
                      "border-b border-band-border p-5 align-bottom",
                      p.popular && "border-x border-t-2 border-t-primary bg-primary/5",
                    )}
                  >
                    {p.popular && (
                      <span className="mb-2 inline-block rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-primary-foreground uppercase">
                        Most popular
                      </span>
                    )}
                    <span className="block text-base font-bold text-band-foreground">{p.name}</span>
                    <span className="mt-1 block text-2xl font-bold text-band-foreground">
                      {p.price}
                    </span>
                    <span className="mt-0.5 block text-xs font-medium text-band-muted">
                      {p.term}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature}>
                  <th
                    scope="row"
                    className="h-14 border-b border-band-border px-5 text-sm font-medium text-band-foreground"
                  >
                    {r.feature}
                  </th>
                  {r.values.map((v, i) => (
                    <td
                      key={i}
                      className={cn(
                        "h-14 border-b border-band-border px-5 text-center",
                        plans[i]!.popular && "border-x border-band-border bg-primary/5",
                      )}
                    >
                      <CellValue value={v} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-5" />
                {plans.map((p) => (
                  <td
                    key={p.name}
                    className={cn("p-5 align-top", p.popular && "border-x border-band-border bg-primary/5")}
                  >
                    <a
                      href="#contact"
                      className={cn(
                        ctaBase,
                        p.popular
                          ? "bg-primary text-primary-foreground"
                          : "border border-band-foreground/20 text-band-foreground hover:bg-band-foreground/5",
                      )}
                    >
                      Get started
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Stacked cards — mobile */}
        <div className="mt-10 space-y-6 md:hidden">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={cn(
                "rounded-xl border bg-band p-5",
                p.popular ? "border-primary" : "border-band-border",
              )}
            >
              {p.popular && (
                <span className="mb-2 inline-block rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-primary-foreground uppercase">
                  Most popular
                </span>
              )}
              <h3 className="text-base font-bold text-band-foreground">{p.name}</h3>
              <p className="mt-1 text-2xl font-bold text-band-foreground">{p.price}</p>
              <p className="text-xs font-medium text-band-muted">{p.term}</p>
              <ul className="mt-4 divide-y divide-band-border border-y border-band-border">
                {rows.map((r) => (
                  <li key={r.feature} className="flex items-center justify-between gap-4 py-2.5">
                    <span className="text-sm text-band-foreground">{r.feature}</span>
                    <CellValue value={r.values[i]!} />
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  ctaBase,
                  "mt-5",
                  p.popular
                    ? "bg-primary text-primary-foreground"
                    : "border border-band-foreground/20 text-band-foreground",
                )}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
