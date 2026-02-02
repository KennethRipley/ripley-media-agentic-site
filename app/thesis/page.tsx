export default function ThesisPage() {
  const executiveBriefHref = "/RMA-Executive-Brief.pdf";

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Simple top bar */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-sm font-semibold tracking-tight text-zinc-900 hover:text-zinc-800">
            Ripley Media Agentic
          </a>

          <nav className="flex items-center gap-4">
            <a href="/writing" className="text-sm text-zinc-700 hover:text-zinc-900">
              Writing
            </a>
            <a href="/thesis" className="text-sm text-zinc-900 font-medium">
              Thesis
            </a>
            <a href="/" className="text-sm text-zinc-700 hover:text-zinc-900">
              Home
            </a>
            <a
              href={executiveBriefHref}
              className="rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              Executive brief (PDF)
            </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="mb-8">
          <p className="mb-3 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700">
            Thesis • Agentic AI • Programmatic CTV
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            The Thesis (why now)
          </h1>
        </div>

        <div className="space-y-10">
          {/* Thesis */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-zinc-800">
              Agentic buying/selling will not win on cool prototypes. It will win in production—where execution is
              easiest. Today, CTV revenue is trapped in workflow friction: packaging, deal setup, creative QA,
              measurement mapping, supply-path complexity, and troubleshooting. As agents emerge, spend will route to
              platforms and sellers who make execution feel like checkout: simple, auditable, repeatable.
            </p>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-sm font-semibold text-zinc-900">What changed (and raises urgency)</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                The agentic “execution layer” is moving from concept to real reference implementations + standards
                extensions—including Prebid taking stewardship of AdCP-based seller-agent code (the “Prebid Sales
                Agent”), and IAB Tech Lab publishing an agentic roadmap that emphasizes interoperable, governed
                execution.
              </p>
            </div>
          </div>

          {/* Problem */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">The Problem</h2>

            <p className="leading-relaxed text-zinc-700">
              Most organizations are not “agentic-ready” because inventory and offers are not consistently
              machine-executable, and workflow paths aren’t reliably repeatable end-to-end.
            </p>

            <p className="leading-relaxed text-zinc-700">
              This creates an activation/integration tax that slows time-to-spend, reduces repeat spend, and strands
              revenue. It also creates a governance tax: without permissions, approvals, and audit logs, enterprises
              won’t let agents touch premium inventory or budgets at scale.
            </p>
          </div>

          {/* Role */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">My Role</h2>

            <p className="leading-relaxed text-zinc-700">
              I help platforms and publishers clean up inventory and packaging so it’s ready for agentic execution —
              without consuming product roadmap. I translate strategy into practical machine-readable offer specs,
              partner workflows, and a pilot that proves measurable outcomes.
            </p>
          </div>

          {/* Premium scaling */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Scale premium without commoditization</h2>

            <p className="mt-4 leading-relaxed text-zinc-700">
              Historically, the most premium publisher inventory (tentpole moments, sponsorship-like placements,
              high-impact CTV units, curated pods) avoided automation because “programmatic” too often meant loss of
              control and price leakage. Agentic workflows flip that: premium becomes a governed product—machine-readable
              offer specs plus permissions, controls, and logging—so execution is fast and protected.
            </p>

            <p className="mt-4 leading-relaxed text-zinc-700">
              Platforms and publishers can safely scale premium monetization by making terms enforceable (who can buy,
              what they get, how it runs, what gets measured), preserving scarcity and differentiation while eliminating
              manual friction.
            </p>
          </div>

          {/* Sprint */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">The 30-Day Agentic Readiness Sprint</h2>

            <p className="leading-relaxed text-zinc-700">
              In ~30 days, you have:
            </p>

            <ol className="list-decimal space-y-2 pl-6 text-zinc-700">
              <li>a clear view of what’s blocking agentic execution,</li>
              <li>machine-readable offer specs + “gold standard” offers, and</li>
              <li>a pilot plan with success metrics — without major platform rewrites.</li>
            </ol>
          </div>

          {/* Deliverables */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">What gets delivered</h2>

            <ul className="space-y-2 text-zinc-700">
              <li>
                <span className="font-semibold text-zinc-900">Agentic Readiness Scorecard:</span>{" "}
                what’s clean, what’s messy, what to fix first (tied to revenue impact)
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Offer Specs + Gold Standards:</span>{" "}
                naming, rules, eligibility, measurement mapping, required metadata, plus governance fields
                (owners/approvals/change log)
              </li>
              <li>
                <span className="font-semibold text-zinc-900">CTV Format Mapping (where relevant):</span>{" "}
                standardize high-impact formats (e.g., Pause/Menu) + creative requirements to reduce QA churn and failed
                launches
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Pilot Plan + KPI Dashboard:</span>{" "}
                time-to-launch, repeat spend, yield/fill, measurement clarity, and what becomes fully executable vs.
                where HITL is required
              </li>
            </ul>
          </div>

          {/* Success metrics */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">How success is measured</h2>

            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Launch cycle time: days → hours",
                "Fewer manual steps / fewer escalations",
                "Higher repeat spend + adoption",
                "Better yield/fill and fewer stranded impressions",
                "Cleaner measurement alignment",
                "% of offers executable without human intervention (and where approvals are required: time-to-approval)",
                "Premium CPM integrity: premium automation volume up without premium CPM dilution",
              ].map((item) => (
                <li key={item} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Engagement model */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Engagement model</h2>

            <p className="leading-relaxed text-zinc-700">
              A short kickoff + weekly working sessions with your functional owners (product/ops/partnerships/sales). I
              keep the scope tight, focus on executable changes, and hand your team a repeatable playbook.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={executiveBriefHref}
              className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
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

            <a
              href="/"
              className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              Back to home
            </a>
          </div>

          {/* Contact */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>

            <div className="mt-4 space-y-2 text-sm text-zinc-700">
              <p>
                <span className="font-semibold text-zinc-900">Ken Ripley</span> — Ripley Media Agentic
              </p>
              <p>
                <a className="underline hover:text-zinc-900" href="mailto:kenneth@ripley.media">
                  kenneth@ripley.media
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  className="underline hover:text-zinc-900"
                  href="https://www.linkedin.com/in/kennethripley/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/kennethripley
                </a>
              </p>
              <p>
                Website:{" "}
                <a className="underline hover:text-zinc-900" href="https://www.ripley.media" target="_blank" rel="noopener noreferrer">
                  www.ripley.media
                </a>
              </p>
              <p>
                Writing:{" "}
                <a className="underline hover:text-zinc-900" href="/writing">
                  www.ripley.media/writing
                </a>
              </p>
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