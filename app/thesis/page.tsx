export default function ThesisPage() {
  const executiveBriefHref = "/RMA-Executive-Brief.pdf";

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 text-zinc-900">
      {/* Top nav / header */}
      <div className="mb-10 flex items-center justify-between border-b border-zinc-200 pb-4">
        <a href="/" className="font-semibold tracking-tight hover:opacity-80">
          Ripley Media Agentic
        </a>

        <nav className="flex items-center gap-4">
          <a href="/writing" className="text-sm text-zinc-700 hover:text-zinc-900">
            Writing
          </a>

          <a
            href={executiveBriefHref}
            className="text-sm text-zinc-700 hover:text-zinc-900"
          >
            Executive Brief (PDF)
          </a>

          <a
            href="mailto:kenneth@ripley.media"
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Contact
          </a>
        </nav>
      </div>

      <header className="flex flex-col gap-2">
        <p className="inline-flex w-fit rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700">
          Thesis • Agentic AI • Programmatic CTV
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          The CTV problem isn’t AI. It’s workflow friction.
        </h1>

        <p className="mt-2 max-w-3xl text-lg leading-relaxed text-zinc-700">
          Too much CTV revenue is trapped in manual steps: packaging, deal setup, creative QA,
          measurement mapping, and troubleshooting. As “agentic buying” emerges, spend will route to
          platforms that make execution feel like checkout — simple, auditable, repeatable.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/"
            className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Back to home
          </a>
          <a
            href="/writing"
            className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            Read my writing
          </a>
          <a
            href={executiveBriefHref}
            className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Download executive brief (PDF)
          </a>
        </div>
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="text-sm font-semibold">Make inventory agent-ready</p>
          <p className="mt-3 text-sm text-zinc-700">
            Clean offers, clear rules, consistent metadata — so agents can discover and transact.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="text-sm font-semibold">Reduce the activation tax</p>
          <p className="mt-3 text-sm text-zinc-700">
            Fewer human steps, fewer tickets, faster launch — without major platform rewrites.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="text-sm font-semibold">Drive measurable outcomes</p>
          <p className="mt-3 text-sm text-zinc-700">
            Shorter time-to-spend, higher repeat spend, better yield, clearer measurement.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
        <h2 className="text-xl font-semibold tracking-tight">The promise</h2>
        <p className="mt-3 max-w-4xl text-zinc-700">
          <span className="font-semibold">
            In 30 days, your inventory is agent-ready — without consuming your product roadmap.
          </span>{" "}
          I show you what to clean up, what to standardize, and the smallest pilot that proves value.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-sm font-semibold">Week 1</p>
            <p className="mt-2 text-sm text-zinc-700">Workflow + offer audit</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-sm font-semibold">Week 2</p>
            <p className="mt-2 text-sm text-zinc-700">Packaging spec + gold standards</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-sm font-semibold">Week 3</p>
            <p className="mt-2 text-sm text-zinc-700">Executable activation path</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-sm font-semibold">Week 4</p>
            <p className="mt-2 text-sm text-zinc-700">Pilot plan + KPI dashboard</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">What I deliver</h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {[
            {
              title: "Agentic Readiness Scorecard",
              body: "A clear view of what’s clean, what’s messy, and what to fix first — tied to revenue impact."
            },
            {
              title: "Packaging Spec + Gold Standards",
              body: "A simple packaging framework and examples that make offers machine-readable and executable."
            },
            {
              title: "Workflow Map + Friction Kill List",
              body: "Where activation breaks today, how much it costs, and the fastest path to reduce it."
            },
            {
              title: "Pilot Plan + KPI Dashboard",
              body: "A 30–60 day pilot with success metrics (time-to-launch, repeat spend, yield, measurement clarity)."
            }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-zinc-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-zinc-200 p-8">
        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 text-zinc-700">
          If you want agentic workflows that translate into real revenue, let’s do a short call and
          decide if there’s a fit.
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
        </div>
      </section>

      <footer className="mt-14 border-t border-zinc-200 pt-8 text-sm text-zinc-600">
        © {new Date().getFullYear()} Ripley Media Agentic. All rights reserved.
      </footer>
    </main>
  );
}
