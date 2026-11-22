import { Nav, ROLE_LINKS } from "@/components/nav";

/**
 * Doctor area: /doctor/**. Role: DOCTOR
 *
 *  - Nav with ROLE_LINKS.DOCTOR.
 *  - A verification banner (PENDING/REJECTED) streams in from GET /api/dashboard/me inside <Suspense>.
 *  - Guard: proxy.ts, then requireUser(['DOCTOR']) inside each page's data component.
 */
export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav links={ROLE_LINKS.DOCTOR} />
      <main className="flex flex-1 flex-col">{children}</main>
    </>
  );
}
