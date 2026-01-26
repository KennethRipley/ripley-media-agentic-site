import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Ripley Media Agentic",
  description: "Agentic AI + Programmatic CTV growth for real revenue outcomes."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900">
        {children}

        {/* Enables Substack post embeds */}
        <Script
          src="https://substackapi.com/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
