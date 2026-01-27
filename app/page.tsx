"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const executiveBriefHref = "/RMA-Executive-Brief.pdf";
  const logoSrc = "/rma-agentic-white.png";

  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Sticky Masthead: BIG at top, truly COLLAPSES on scroll */}
      <header
        className={[
          "sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur",
          "transition-all duration-300",
          compact ? "shadow-sm" : "shadow-none",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl px-6">
          {/* Logo row */}
          <div
            className={[
              "flex justify-center transition-all duration-300 overflow-hidden",
              compact ? "py-2" : "py-6 sm:py-8",
            ].join(" ")}
          >
            <a href="/" className="block">
              <img
                src={logoSrc}
                alt="Ripley Media Agentic"
                className="mx-auto h-auto transition-all duration-300"
                style={{
                  // Big masthead size
                  width: compact ? 140 : undefined,
                  // When not compact, use responsive width
                }}
              />
            </a>
          </div>

          {/* Nav row (collapses spacing on scroll) */}
          <nav
            className={[
              "flex flex-wrap items-center justify-center transition-all duration-300",
              compact ? "gap-x-4 gap-y-2 pb-2" : "gap-x-6 gap-y-2 pb-5",
            ].join(" ")}
          >
            <a href="/writing" className="text-sm text-zinc-700 hover:text-zinc-900">
              Writing
            </a>
            <a href="/thesis" className="text-sm text-zinc-700 hover:text-zinc-900">
              Thesis
            </a>
            <a href="#services" className="text-sm text-zinc-700 hover:text-zinc-900">
              Services
            </a>
            <a href="#deliverables" className="text-sm text-zinc-700 hover:text-zinc-900">
              Deliverables
            </a>
            <a
              href="#contact"
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Book a conversation
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700">
            Agentic AI • Programmatic CTV • Partnerships
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Make your CTV inventory agent-ready in 30 days.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-zinc-700">
            Packaging + workflow cleanup that reduces activation tax and unlocks incremental demand
            without consuming your product roadmap.
          </p>

          <p className="mt-3 text-sm text-zinc-600">
            Built for platform and inventory leaders: Ads/Product, Revenue, Partnerships, and Programmatic Operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Book a conversation
            </a>

            <a
              href="/writing"
              className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              Read my writing
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

          <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-sm font-semibold">Proof, not theory</p>
            <p className="mt-2 text-sm text-zinc-700">
              Operator-led GTM + partnerships across CTV/programmatic (seller + platform + partner). Focus: inventory + packaging readiness and workflow friction removal — so teams become ready for agentic buying without consuming the product roadmap.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-sm font-semibold">Clarity</p>
              <p className="mt-2 text-sm text-zinc-700">
                Identify where agents create real leverage and what to measure.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-sm font-semibold">Acceleration</p>
              <p className="mt-2 text-sm text-zinc-700">
                Clean packages + workflows that reduce the integration/activation tax.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-sm font-semibold">Execution</p>
              <p className="mt-2 text-sm text-zinc-700">
                A 30-day plan to become agentic-ready without eating the roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* (rest of your page stays the same as before — thesis/services/deliverables/contact/footer) */}
      {/* If you want, I’ll paste the full rest again — but this fix is isolated to the header area. */}

      {/* Footer */}
      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-600">
          © {new Date().getFullYear()} Ripley Media Agentic. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
