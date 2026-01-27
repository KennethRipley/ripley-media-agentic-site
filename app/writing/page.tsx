const embedHtml = `
<div class="substack-post-embed">
  <p lang="en">
    AdCP vs the Stack: Are We Innovating… or Protecting the Pipes? by Ken Ripley
  </p>
  <p>and what wil IAB do about it?</p>
  <a data-post-link href="https://ripleymedia.substack.com/p/adcp-vs-the-stack-are-we-innovating">
    Read on Substack
  </a>
</div>
`;

export default function WritingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
      <p className="mt-3 max-w-2xl text-zinc-700">
        Selected posts from Substack — readable right here.
      </p>

      <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
        <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
      </div>

      <div className="mt-10">
        <a
          href="https://ripleymedia.substack.com"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-zinc-900 underline underline-offset-4"
        >
          View all posts on Substack →
        </a>
      </div>

      {/* Loads Substack embed script for the embedded post */}
      <script
        async
        src="https://substack.com/embedjs/embed.js"
        charSet="utf-8"
      />
    </main>
  );
}
