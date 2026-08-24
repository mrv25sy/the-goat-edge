import { createFileRoute } from "@tanstack/react-router";
import {
  Bot,
  Users,
  CalendarCheck,
  GraduationCap,
  LineChart,
  Layers,
  UserCheck,
  Headset,
  Coins,
  Repeat,
  Bitcoin,
  PieChart,
  Cpu,
  Signal,
  Globe2,
  Languages,
  Mic,
  Timer,
  MessageSquare,
  Mail,
  Instagram,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CookieBar } from "@/components/site/CookieBar";
import { Pricing } from "@/components/site/Pricing";
import { ContactForm } from "@/components/site/ContactForm";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THE GOAT — Financial Markets Education by GO AI Academy" },
      {
        name: "description",
        content:
          "THE GOAT is GO AI Academy's flagship program: AI-powered education, expert market recommendations and daily mentorship in forex, gold, crypto and investing.",
      },
      { property: "og:title", content: "THE GOAT — Financial Markets Education by GO AI Academy" },
      {
        property: "og:description",
        content:
          "Learn financial markets, trade with a system, and grow with a community of thousands of members worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  { icon: GraduationCap, label: "A complete education system built on AI-powered learning tools" },
  { icon: CalendarCheck, label: "A weekly follow-up system with 10 calls to keep you on track" },
  { icon: Bot, label: "An AI assistant you can ask anything, trained on our team's expertise" },
  { icon: LineChart, label: "15+ specialists supporting you with market recommendations" },
  { icon: Layers, label: "Multiple income-generating tracks across different investment fields" },
  { icon: Users, label: "A community space to connect with other members" },
  { icon: UserCheck, label: "A personal mentor following your progress day to day" },
  { icon: Headset, label: "Daily support from a dedicated team" },
];

const programs = [
  {
    icon: GraduationCap,
    title: "Education",
    body: "We teach financial markets from the ground up to a professional level, led by 6+ Arab instructors with 9+ years of experience each.",
  },
  {
    icon: Signal,
    title: "Market recommendations",
    body: "Our 15+ specialists each run a dedicated channel in their area of focus: forex, metals, stock indices, investment opportunities, crypto, and oil.",
  },
  {
    icon: Coins,
    title: "Go Hunter — gold system",
    body: "An AI-driven system that generates ready technical signals with a single click, helping you spot opportunities in the gold market.",
  },
  {
    icon: Repeat,
    title: "Go Maestro — forex system",
    body: "An AI-driven system built to surface ready technical signals in real time, helping you identify opportunities across the forex market.",
  },
  {
    icon: Bitcoin,
    title: "Crypto system",
    body: "An AI-driven system that scans the crypto market and delivers ready technical signals with a single click.",
  },
  {
    icon: PieChart,
    title: "Investment system",
    body: "Investment knowledge is one of the most valuable skills of this era. Our AI reviews the market daily to surface strong investment opportunities, with a daily update on your portfolio — no extra effort required on your side.",
  },
  {
    icon: Cpu,
    title: "GO OS — AI assistant",
    body: "GO OS is an AI system trained on our team's expertise and approach. Ask it anything related to the field and get accurate, grounded answers back.",
  },
];

const stats = [
  { icon: Globe2, value: "22", label: "Arab countries" },
  { icon: Globe2, value: "50+", label: "Countries worldwide" },
  { icon: Users, value: "15+", label: "Experts & instructors" },
  { icon: Languages, value: "6+", label: "Languages" },
  { icon: Mic, value: "20+", label: "Conferences a year" },
];

function SectionLabel({ children, tone = "dark" }: { children: string; tone?: "dark" | "band" }) {
  return (
    <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">{children}</p>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section id="home" className="scroll-mt-20 border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                GO AI Academy · Flagship program
              </span>
              <h1 className="mt-6 text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-[3.4rem]">
                Learn financial markets.{" "}
                <span className="text-primary">Trade with a system.</span> Grow with a community.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                The Goat is GO AI's flagship program — AI-powered education, expert-led
                recommendations, and hands-on support to help you build real skills in forex,
                crypto, gold, and investing.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Explore the program
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary"
                >
                  See plans
                </a>
              </div>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
                {[
                  { v: "50+", l: "Countries" },
                  { v: "15+", l: "Specialists" },
                  { v: "10", l: "Follow-up calls" },
                ].map((s) => (
                  <div key={s.l}>
                    <dt className="sr-only">{s.l}</dt>
                    <dd className="text-2xl font-bold">{s.v}</dd>
                    <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <div className="overflow-hidden rounded-xl border border-border bg-surface">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/gtYga7cxV30"
                    title="THE GOAT — founder introducing the project"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="border-t border-border px-5 py-4">
                  <p className="text-sm font-semibold">Meet the founder</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    A short introduction to THE GOAT program and how GO AI Academy works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="border-b border-border py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <SectionLabel>Included</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What you get</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Everything in one program — structured learning, live guidance, and tools that keep
                working between sessions.
              </p>
            </div>
            <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => (
                <li key={b.label} className="bg-background p-6">
                  <b.icon className="h-5 w-5 text-primary" aria-hidden />
                  <p className="mt-4 text-sm leading-relaxed font-medium">{b.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-band scroll-mt-20 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div>
                <SectionLabel>Who we are</SectionLabel>
                <h2 className="mt-3 text-3xl font-bold text-band-foreground sm:text-4xl">
                  About GO AI
                </h2>
                <p className="mt-5 leading-relaxed text-band-muted">
                  GO AI is one of the leading educational academies in the Arab world, with a
                  presence in 22 Arab countries and 50+ countries worldwide. Our team includes 15+
                  Arab experts and instructors working across 6+ languages, and we host 20+
                  conferences globally each year.
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-band-border pt-6 sm:grid-cols-3">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <dt className="text-2xl font-bold text-band-foreground">{s.value}</dt>
                      <dd className="mt-1 text-xs text-band-muted">{s.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <ImagePlaceholder
                  tone="band"
                  label="Conference photo — landscape (approx. 1200×800)"
                  className="col-span-2 aspect-[3/2]"
                />
                <ImagePlaceholder
                  tone="band"
                  label="Event photo — portrait"
                  className="aspect-[4/5]"
                />
                <ImagePlaceholder
                  tone="band"
                  label="Team / stage photo — portrait"
                  className="aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section id="programs" className="scroll-mt-20 border-b border-border py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <SectionLabel>Programs</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Our programs</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Each track stands on its own — together they cover education, live market coverage,
                and the AI systems our members trade and invest with.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((p) => (
                <article
                  key={p.title}
                  className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/60"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary/40 bg-primary/10">
                    <p.icon className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Follow-up & support */}
        <section className="border-b border-border py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel>Support</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Follow-up &amp; support</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                We built a real-time support system so you're never stuck: ask a question and get a
                response in under 10 minutes, backed by regular follow-up calls to keep you moving
                forward.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Timer, v: "< 10 min", l: "Average response time" },
                { icon: CalendarCheck, v: "10", l: "Follow-up calls" },
                { icon: MessageSquare, v: "Daily", l: "Team availability" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-surface p-5">
                  <s.icon className="h-5 w-5 text-primary" aria-hidden />
                  <p className="mt-4 text-xl font-bold">{s.v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="border-b border-border py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <ImagePlaceholder
              label="Community / event photo — landscape (approx. 1400×900)"
              className="aspect-[3/2] lg:order-last"
            />
            <div>
              <SectionLabel>Community</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Join the community</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Join a community of thousands of members from around the world. Build real
                connections with people from different countries, all working toward the same goal.
              </p>
              <a
                href="#pricing"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Choose your plan
              </a>
            </div>
          </div>
        </section>

        <Pricing />

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Talk to the team</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Tell us where you are in your journey and which plan you're considering. A member of
                the team will get back to you with the next steps.
              </p>
              <ul className="mt-8 space-y-3">
                <li>
                  <a
                    href="mailto:info@goai.academy"
                    className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border">
                      <Mail className="h-4 w-4" />
                    </span>
                    info@goai.academy
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border">
                      <Instagram className="h-4 w-4" />
                    </span>
                    Instagram — @goai
                  </a>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
      <CookieBar />
    </div>
  );
}
