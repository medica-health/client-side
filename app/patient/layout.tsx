import { Nav, ROLE_LINKS } from "@/components/nav";

/**
 * Patient area: /patient/**. Role: PATIENT
 *
 *  - Nav with ROLE_LINKS.PATIENT.
 *  - Guard: proxy.ts redirects optimistically. Each page's data component also calls requireUser(['PATIENT']) inside <Suspense>.
 *  - Don't await the session here at the top level (cacheComponents): it would block {children}.
 */
export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav links={ROLE_LINKS.PATIENT} />
      <main className="flex flex-1 flex-col">{children}</main>
    </>
  );
}
