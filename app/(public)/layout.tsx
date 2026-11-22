import { Nav } from "@/components/nav";

/**
 * Public area: /, /doctors, /doctors/[id]
 *
 *  - Public nav (<Nav />) and a footer (about, contact, for doctors → /register?as=doctor).
 *  - No session read at this level, so these pages prerender into the static shell.
 *  - A signed-in user's menu streams in through <UserMenu> inside <Suspense> (see components/nav.tsx).
 */
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">{children}</main>
    </>
  );
}
