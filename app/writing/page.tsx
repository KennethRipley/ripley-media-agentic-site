export default function WritingPage() {
  const featured = {
    title: "AdCP vs IAB Tech Lab: I’ve Seen This Movie Before",
    dek: "A practical take on what AdCP signals, what the Tech Lab might do next, and why execution beats hype.",
    href: "https://open.substack.com/pub/ripleymedia/p/adcp-vs-iab-tech-lab-ive-seen-this?utm_campaign=post-expanded-share&utm_medium=web",
    label: "Featured Substack post",
    source: "Substack",
    tags: ["Agentic", "AdCP", "CTV", "Programmatic"],
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
      <p className="mt-3 max-w-2xl text-zinc-700">
        Selected posts — quick reads that connect agentic concepts to real execution.
      </p>

      <div className="mt-10">
        <a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 hover:bg-zinc-50"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-medium text-zinc-600">
              {featured.label} • {featured.source}
            </p>
            <span className="text-xs font-medium text-zinc-900 underline underline-offset-4 opacity-70 group-hover:opacity-100">
              Read on Substack →
            </span>
          </div>

          <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900">
            {featured.title}
          </h2>

          <p className="mt-2 text-sm text-zinc-700">{featured.dek}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {featured.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700"
              >
                {t}
              </span>
            ))}
          </div>
        </a>
      </div>

      <div className="mt-10">
        <a
          href="https://ripleymedia.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-zinc-900 underline underline-offset-4"
        >
          View all posts on Substack →
        </a>
      </div>
    </main>
  );
}
