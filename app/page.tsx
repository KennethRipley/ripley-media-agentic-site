"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const executiveBriefHref = "/RMA-Executive-Brief.pdf";
  const logoSrc = "/rma-agentic-white.png";

  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyNav(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* MINI STICKY NAV (shows only after scrolling) */}
      <div
        className={[
          "fixed left-0 top-0 z-50 w-full transition-all duration-200",
          showStickyNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <div className="border-b border-zinc-200 bg-white/90 backdrop-blur shadow-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
            <a href="/" className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt="Ripley Media Agentic"
                className="h-7 w-auto"
              />
              <span className="hidden sm:block text-sm font-semibold tracking-tight text-zinc-900">
                Ripley Media Agentic
              </span>
            </a>

            <nav className="flex items-center gap-4">
              <a
                href="/writing"
                className="text-sm text-zinc-700 hover:text-zinc-900"
              >
                Writing
              </a>
              <a
                href="/thesis"
                className="text-sm text-zinc-700 hover:text-zinc-900"
              >
                Thesis
              </a>
              <a
                href="#services"
                className="text-sm text-zinc-700 hover:text-zinc-900"
              >
                Services
              </a>
              <a
                href="#deliverables"
                className="text-sm text-zinc-700 hover:text-zinc-900"
              >
                Deliverables
              </a>
              <a
                href="#contact"
                className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                30-day readiness call
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* BIG MASTHEAD (NOT sticky) */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          {/* Big centered logo */}
          <div className="flex justify-center">
            <a href="/" className="block">
              <img
                src={logoSrc}
                alt="Ripley Media Agentic"
                className="mx-auto h-auto w-[70%] max-w-[520px] sm:w-[60%] sm:max-w-[640px] md:w-[55%] md:max-w-[720px]"
              />
            </a>
          </div>

          {/* Centered nav */}
          <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href="/writing"
              className="text-sm text-zinc-700 hover:text-zinc-900"
            >
              Writing
            </a>
            <a
              href="/thesis"
              className="text-sm text-zinc-700 hover:text-zinc-900"
            >
              Thesis
            </a>
            <a
              href="#services"
              className="text-sm text-zinc-700 hover:text-zinc-900"
            >
              Services
            </a>
            <a
              href="#deliverables"
              className="text-sm text-zinc-700 hover:text-zinc-900"
            >
              Deliverables
            </a>
            <a
              href="#contact"
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              30-day readiness call
            </a>
          </nav>
        </div>
      </header>

      {/* Hero (CENTERED) */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700">
            Agentic AI • Programmatic CTV • Partnerships
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Make your CTV inventory agent-ready in 30 days.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-zinc-700">
            Packaging + workflow cleanup that reduces activation tax and unlocks
            incremental demand without consuming your product roadmap.
          </p>

          <p className="mt-3 text-sm text-zinc-600">
            Built for platform and inventory leaders: Ads/Product, Revenue,
            Partnerships, and Programmatic Operations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Book a 30-day readiness call
            </a>

            <a
              href="/thesis"
              className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              Read the thesis
            </a>

            <a
              href={executiveBriefHref}
              className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download executive brief (PDF)
            </a>
          </div>

          {/* Credibility / proof box */}
          <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-left">
            <p className="text-sm font-semibold">Credibility in one line</p>
            <p className="mt-2 text-sm text-zinc-700">
              Operator-led GTM + partnerships across CTV/programmatic (seller +
              platform + partner) — built around packaging readiness, workflow
              friction removal, and pilots tied to revenue outcomes.
            </p>

            <ul className="mt-4 grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
              <li>• Packaging &amp; offers</li>
              <li>• Deal &amp; activation workflow</li>
              <li>• Measurement mapping</li>
              <li>• Partner-ready operating terms</li>
            </ul>
          </div>

          {/* 3-up pillars */}
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-sm font-semibold">Clarity</p>
              <p className="mt-2 text-sm text-zinc-700">
                Identify where agents create real leverage, plus the smallest
                measurable pilot.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-sm font-semibold">Acceleration</p>
              <p className="mt-2 text-sm text-zinc-700">
                Clean offers + metadata so partners and agents can discover and
                transact reliably.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-sm font-semibold">Execution</p>
              <p className="mt-2 text-sm text-zinc-700">
                A 30-day readiness sprint that doesn’t hijack the roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis preview */}
      <section id="thesis" className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            The CTV problem isn't AI. It's workflow friction.
          </h2>

          <p className="mt-4 max-w-4xl text-zinc-700">
            Agentic buying will route spend toward inventory that's clean,
            machine-readable, and easy to transact. The winners reduce manual
            steps in packaging, activation, and measurement — without massive
            rewrites.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold">Inventory readiness</p>
              <p className="mt-3 text-sm text-zinc-700">
                Make offers discoverable and executable with clear rules +
                consistent metadata.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold">Friction reduction</p>
              <p className="mt-3 text-sm text-zinc-700">
                Reduce tickets, handoffs, and rework to shorten time-to-spend.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold">Measurable outcomes</p>
              <p className="mt-3 text-sm text-zinc-700">
                Pilot tied to repeat spend, yield, and measurement clarity.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-sm font-semibold">The promise</p>
            <p className="mt-3 text-sm text-zinc-700">
              <span className="font-semibold">
                In 30 days, your inventory is agent-ready without consuming your
                product roadmap.
              </span>{" "}
              I show you what to clean up, what to standardize, and the smallest
              pilot that proves value.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/thesis"
              className="inline-flex rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              Read the full thesis →
            </a>

            <a
              href={executiveBriefHref}
              className="inline-flex rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download executive brief (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">How I help</h2>

          <p className="mt-3 max-w-3xl text-zinc-700">
            A practical operator's approach: inventory + packaging readiness,
            partner workflows, and a pilot path that drives revenue outcomes.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold">
                30-Day Agentic Readiness Sprint
              </h3>
              <p className="mt-3 text-sm text-zinc-700">
                Make your inventory and offers clean, machine-readable, and
                executable — without hijacking the roadmap.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• Readiness scorecard + “activation tax” baseline</li>
                <li>• Packaging spec + gold-standard examples</li>
                <li>
                  • Pilot plan + KPI definitions (time-to-launch, repeat spend,
                  yield)
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold">
                Partnership + Packaging Design
              </h3>
              <p className="mt-3 text-sm text-zinc-700">
                Partner-ready offers and operating terms that reduce friction
                and speed adoption.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• DSP/SSP/OEM alignment</li>
                <li>• Two-way value exchange</li>
                <li>• Commercial + workflow fit</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold">GTM + Enablement</h3>
              <p className="mt-3 text-sm text-zinc-700">
                Narrative, sales tools, and weekly execution that moves dollars.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• Positioning + talk tracks</li>
                <li>• One-pagers + exec decks</li>
                <li>• Weekly cadence + partner pipeline</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section id="deliverables" className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">What you get</h2>

          <p className="mt-3 max-w-3xl text-zinc-700">
            Concrete outputs you can use internally, take to partners, and
            measure against revenue.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Agentic Readiness Scorecard",
                body: "A clear view of what’s clean, what’s messy, and what to fix first — tied to revenue impact.",
              },
              {
                title: "Packaging Spec + Gold Standards",
                body: "A simple packaging framework and examples that make offers machine-readable and executable.",
              },
              {
                title: "Workflow Map + Friction Kill List",
                body: "Where activation breaks today, how much it costs, and the fastest path to reduce it.",
              },
              {
                title: "Pilot Plan + KPI Dashboard",
                body: "A 30–60 day pilot with success metrics (time-to-launch, repeat spend, yield, measurement clarity).",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-700">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={executiveBriefHref}
              className="inline-flex rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download executive brief (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl border border-zinc-200 p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Want to move faster?
            </h2>

            <p className="mt-3 max-w-3xl text-zinc-700">
              If you want agentic workflows that translate into real revenue,
              let’s do a short call and decide if there’s a fit.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:kenneth@ripley.media"
                className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Email me
              </a>

              <a
                href="https://www.linkedin.com/in/kennethripley/"
                className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Connect on LinkedIn
              </a>

              <a
                href={executiveBriefHref}
                className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Executive brief (PDF)
              </a>
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              Executive brief:{" "}
              <a
                href={executiveBriefHref}
                className="underline hover:text-zinc-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {executiveBriefHref}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-600">
          © {new Date().getFullYear()} Ripley Media Agentic. All rights reserved.
        </div>
      </footer>
    </main>
  );
}