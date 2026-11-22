import Link from "next/link";

/** Global 404. Also used when an API returns 404 for a record the user can't access. */
export default function NotFound() {
  return (
    <main className="mx-auto max-w-md px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-zinc-500">The page doesn&apos;t exist or you don&apos;t have access to it.</p>
      <Link href="/" className="mt-6 inline-block text-teal-700 underline">
        Back to home
      </Link>
    </main>
  );
}
