export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-semibold tracking-tight">
            Ripley Media Agentic
          </div>

          <nav className="flex items-center gap-3">
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
            Agentic AI + Programmatic CTV growth — built for real revenue.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-zinc-700">
            We help sellers, platforms, and partners turn agentic workflows into
            measurable outcomes: demand growth, cleaner packaging, and faster
            execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Book a conversation
            </a>
            <a
              href="#deliverables"
              className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              See deliverables
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-sm font-semibold">Clarity</p>
              <p className="mt-2 text-sm text-zinc-700">
                Define where agent workflows create real leverage and ROI.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-sm font-semibold">Acceleration</p>
              <p className="mt-2 text-sm text-zinc-700">
                Partner packaging + workflows that reduce integration friction.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 p-5">
              <p className="text-sm font-semibold">Execution</p>
              <p className="mt-2 text-sm text-zinc-700">
                A plan your team can run weekly with measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">What I do</h2>

          <p className="mt-3 max-w-3xl text-zinc-700">
            High-leverage strategy and execution support for teams building in
            modern CTV, programmatic, and agent-driven workflows.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold">Agentic Strategy</h3>
              <p className="mt-3 text-sm text-zinc-700">
                Use-case mapping, operating model, and where agents actually
                drive outcomes (not demos).
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• Buyer / seller agent workflows</li>
                <li>• AdCP vs APIs positioning</li>
                <li>• Measurement + accountability</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold">Partnership Design</h3>
              <p className="mt-3 text-sm text-zinc-700">
                Packaging + operating terms for DSPs, SSPs, OEMs, broadcasters,
                and data partners.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• Incremental demand strategy</li>
                <li>• Two-way value exchange</li>
                <li>• Commercial + workflow fit</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold">GTM + Enablement</h3>
              <p className="mt-3 text-sm text-zinc-700">
                Narrative, sales tools, and field execution that moves dollars.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• Positioning + talk tracks</li>
                <li>• Packaging + pricing</li>
                <li>• Sales playbooks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section id="deliverables">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">What you get</h2>

          <p className="mt-3 max-w-3xl text-zinc-700">
            Concrete outputs you can use internally, take to partners, and
            measure against revenue.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Agentic Roadmap",
                body: "Use cases, sequencing, ownership, and what to measure in the first 30–90 days."
              },
              {
                title: "Partner Packaging",
                body: "Partner-ready offers, tiers, and workflows designed to reduce friction and speed adoption."
              },
              {
                title: "GTM Narrative + Sales Tools",
                body: "Talk tracks, one-pagers, and exec-ready decks built for persuasion and conversion."
              },
              {
                title: "Execution Plan",
                body: "Targets, milestones, and weekly actions tied to outcomes—not activity."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 p-6"
              >
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-zinc-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            Why this works
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold">CTV-native</p>
              <p className="mt-3 text-sm text-zinc-700">
                Built around how modern supply, demand, and measurement actually
                work.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold">Commercial first</p>
              <p className="mt-3 text-sm text-zinc-700">
                Packaging and workflows designed for adoption and revenue—not
                theory.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold">Operator mindset</p>
              <p className="mt-3 text-sm text-zinc-700">
                Clear actions, clear owners, clear outcomes. Less noise.
              </p>
            </div>
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
              If you’re serious about agentic workflows that translate into real
              revenue, let’s do a short call and decide if there’s a fit.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:ripleymediallc@gmail.com"
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
