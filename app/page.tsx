"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyNav(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updatedWeekLabel = "Week of Jan 28, 2026";

  const thisWeek = [
    {
      title: "Swivel: Seller Agent = product catalog + rules + approvals",
      note: "The bottleneck is translating premium inventory into machine-readable offers buyers can discover and transact.",
    },
    {
      title: "Execution + governance are prerequisites to allocation",
      note: "Automation without approvals, audit trails, and measurement truth scales the wrong outcomes.",
    },
    {
      title: "Agents expand plans beyond 3–5 platforms",
      note: "As ops burden shifts to software, more sellers can compete on differentiated outcomes—not just CPM.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* MINI STICKY NAV */}
      <div
        className={[
          "fixed left-0 top-0 z-50 w-full transition-all duration-200",
          showStickyNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
      >
        <div className="border-b border-zinc-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <div className="text-sm font-semibold tracking-tight">Ripley Media Agentic</div>
            <div className="flex items-center gap-4 text-sm">
              <a className="text-zinc-700 hover:text-zinc-950" href="/whats-new">What’s New</a>
              <a className="text-zinc-700 hover:text-zinc-950" href="/playbooks">Playbooks</a>
              <a className="text-zinc-700 hover:text-zinc-950" href="/advisory">Advisory</a>
              <a className="text-zinc-700 hover:text-zinc-950" href="/proof">Proof Points</a>
              <a className="text-zinc-700 hover:text-zinc-950" href="/about">About</a>
              <a
                className="rounded-full bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800"
                href="#contact"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* TOP NAV */}
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-base font-semibold tracking-tight">Ripley Media Agentic</div>
          <nav className="flex items-center gap-5 text-sm">
            <a className="text-zinc-700 hover:text-zinc-950" href="/whats-new">What’s New</a>
            <a className="text-zinc-700 hover:text-zinc-950" href="/playbooks">Playbooks</a>
            <a className="text-zinc-700 hover:text-zinc-950" href="/advisory">Advisory</a>
            <a className="text-zinc-700 hover:text-zinc-950" href="/proof">Proof Points</a>
            <a className="text-zinc-700 hover:text-zinc-950" href="/about">About</a>
            <a className="rounded-full bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800" href="#contact">
              Book a call
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700">
            Agentic AI • Programmatic CTV • Partnerships
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Turn agentic concepts into measurable CTV growth.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-zinc-700">
            A measured path to agentic success—starting with the first rung of agentic-ready inventory,
            governance, and execution—so you’re positioned to capture the growth to come.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Work with RMA
            </a>
            <a
              href="/whats-new"
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              What changed this week?
            </a>
          </div>

          <p className="mt-5 text-xs text-zinc-500">
            Updated: <span className="font-semibold text-zinc-700">{updatedWeekLabel}</span>
          </p>
        </div>
      </section>

      {/* THIS WEEK */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="text-lg font-semibold tracking-tight">This Week in Agentic Advertising</h2>
            <a className="text-sm text-zinc-700 hover:text-zinc-950" href="/whats-new">See all →</a>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {thisWeek.map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-200 p-4">
                <div className="text-sm font-semibold">{item.title}</div>
                <div className="mt-2 text-sm text-zinc-700">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="text-lg font-semibold tracking-tight">The stack that matters</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-700">
          Allocation is the headline—but execution and governance are the prerequisites that make it real for CTV sellers.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <Card title="Execution" body="Clean offers, product catalogs, trafficking automation, and measurement mapping." />
          <Card title="Governance" body="Approvals, guardrails, audit trails, and policy—so automation is safe and accountable." />
          <Card title="Allocation" body="Agents can diversify spend when sellers are discoverable, transactable, and governed." />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-zinc-200 p-8">
          <h2 className="text-lg font-semibold tracking-tight">Work with RMA</h2>
          <p className="mt-2 text-sm text-zinc-700">
            If you’re a CTV seller preparing for agentic buying, let’s map the first rung: what to productize, what to govern, and what to operationalize.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
              href="mailto:ripleymediallc@gmail.com?subject=RMA%20-%20Book%20a%20call"
            >
              Email to book
            </a>
            <a
              className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              href="/playbooks"
            >
              Browse playbooks
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-zinc-600">
          <div>© {new Date().getFullYear()} Ripley Media Agentic</div>
          <div className="flex gap-4">
            <a className="hover:text-zinc-950" href="/whats-new">What’s New</a>
            <a className="hover:text-zinc-950" href="/playbooks">Playbooks</a>
            <a className="hover:text-zinc-950" href="/advisory">Advisory</a>
            <a className="hover:text-zinc-950" href="/proof">Proof</a>
            <a className="hover:text-zinc-950" href="/about">About</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-5">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-zinc-700">{body}</div>
    </div>
  );
}
