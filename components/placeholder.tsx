/**
 * Temporary stand-in rendered by every page while the app is being built.
 * Each page file's header comment describes what the real page should contain.
 * Delete this component once all pages are implemented.
 */
export function Placeholder({ title, route }: { title: string; route: string }) {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-16">
      <p className="text-sm font-mono text-teal-700">{route}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-4 text-zinc-500">
        Placeholder. The page spec lives in the header comment of this route&apos;s page.tsx.
      </p>
    </section>
  );
}
