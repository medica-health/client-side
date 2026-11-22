import { Nav, ROLE_LINKS } from "@/components/nav";

/**
 * Front-desk area: /reception/**. Role: RECEPTIONIST
 *
 *  - Nav with ROLE_LINKS.RECEPTIONIST and a selector for the assigned doctor (from GET /api/dashboard/me).
 *  - Guard: proxy.ts, then requireUser(['RECEPTIONIST']).
 */
export default function ReceptionistLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav links={ROLE_LINKS.RECEPTIONIST} />
      <main className="flex flex-1 flex-col">{children}</main>
    </>
  );
}
