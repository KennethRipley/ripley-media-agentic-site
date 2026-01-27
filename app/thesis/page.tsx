export default function ThesisPage() {
  const executiveBriefHref = "/RMA-Executive-Brief.pdf";

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Top nav */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-sm font-semibold tracking-tight text-zinc-900">
            Ripley Media Agentic
          </a>

          <nav className="flex items-center gap-4">
            <a href="/writing" className="text-sm text-zinc-700 hover:text-zinc-900">
              Writing
            </a>
            <a href="/thesis" className="text-sm font-semibold text-zinc-900">
              Thesis
            </a>
            <a href="/#services" className="text-sm text-zinc-700 hover:text-zinc-900">
              Services
            </a>
            <a href="/#deliverables" className="text-sm text-zinc-700 hover:text-zinc-900">
              Deliverables
            </a>
            <a
              href="/#contact"
              className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              30-day readiness call
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700">
            Thesis • Agentic AI • Programmatic CTV
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            The CTV problem isn’t AI. It’s workflow friction.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-zinc-700">
            Agentic buying will route spend toward inventory that is{" "}
            <span className="font-semibold text-zinc-900">clean, machine-readable, and easy to transact</span>.
            The winners will reduce manual steps in packaging, activation, and measurement —{" "}
            <span className="font-semibold text-zinc-900">without massive platform rewrites</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Book a 30-day readiness call
            </a>

            <a
              href={executiveBriefHref}
              className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download executive brief (PDF)
            </a>

            <a
              href="/writing"
              className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              Read my writing
            </a>
          </div>
        </div>
      </section>

      {/* The core argument */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold">Inventory readiness</p>
              <p className="mt-3 text-sm text-zinc-700">
                Make offers discoverable and executable with clear rules + consistent metadata.
                Agents can’t buy what they can’t parse.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold">Friction reduction</p>
              <p className="mt-3 text-sm text-zinc-700">
                Reduce tickets, handoffs, and rework. Less human glue means faster time-to-spend and
                fewer launch failures.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold">Measurable outcomes</p>
              <p className="mt-3 text-sm text-zinc-700">
                Tie readiness to revenue: repeat spend, yield, and measurement clarity — not “AI vibes.”
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-8">
            <h2 className="text-xl font-semibold tracking-tight">What changes when agents arrive</h2>

            <p className="mt-3 text-sm text-zinc-700">
              Today, too much CTV value is trapped in manual steps: packaging, deal setup, creative QA,
              mapping measurement, troubleshooting. When buyers can delegate execution to agents, spend will
              move to platforms where execution feels like checkout:{" "}
              <span className="font-semibold text-zinc-900">simple, auditable, repeatable</span>.
            </p>

            <ul className="mt-5 grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
              <li>• Offers that are clean and consistent</li>
              <li>• Rules that are explicit and enforceable</li>
              <li>• Naming + metadata that won’t break at scale</li>
              <li>• Activation paths with fewer humans in the loop</li>
              <li>• Measurement mappings that are predictable</li>
              <li>• Partner operating terms that don’t require archaeology</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The promise + 30-day plan */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8">
            <p className="text-sm font-semibold">The promise</p>
            <p className="mt-3 text-sm text-zinc-700">
              <span className="font-semibold text-zinc-900">
                In ~30 days, your inventory is agent-ready — without consuming your product roadmap.
              </span>{" "}
              I show you what to clean up, what to standardize, and the smallest pilot that proves value.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-zinc-200 p-5">
                <p className="text-xs font-semibold text-zinc-900">Week 1</p>
                <p className="mt-2 text-sm text-zinc-700">Workflow + offer audit</p>
              </div>

              <div className="rounded-xl border border-zinc-200 p-5">
                <p className="text-xs font-semibold text-zinc-900">Week 2</p>
                <p className="mt-2 text-sm text-zinc-700">Packaging spec + gold standards</p>
              </div>

              <div className="rounded-xl border border-zinc-200 p-5">
                <p className="text-xs font-semibold text-zinc-900">Week 3</p>
                <p className="mt-2 text-sm text-zinc-700">Executable activation path</p>
              </div>

              <div className="rounded-xl border border-zinc-200 p-5">
                <p className="text-xs font-semibold text-zinc-900">Week 4</p>
                <p className="mt-2 text-sm text-zinc-700">Pilot plan + KPI dashboard</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Book a 30-day readiness call
              </a>
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
                className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download executive brief (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-3 max-w-3xl text-zinc-700">
              If you want agentic workflows that translate into real revenue, let’s do a short call and decide if
              there’s a fit.
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
