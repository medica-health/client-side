import { Nav, ROLE_LINKS } from "@/components/nav";

/**
 * Admin area: /admin/**. Role: ADMIN
 *
 *  - Nav with ROLE_LINKS.ADMIN (sidebar on desktop).
 *  - Guard: proxy.ts, then requireUser(['ADMIN']).
 */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav links={ROLE_LINKS.ADMIN} />
      <main className="flex flex-1 flex-col">{children}</main>
    </>
  );
}
