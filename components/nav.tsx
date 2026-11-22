import Link from "next/link";

/**
 * <Nav>: top bar shared by every area.
 *
 * Public links: Find a doctor (/doctors), Log in, Sign up.
 * Signed-in: role-specific links (see ROLE_LINKS) plus a user menu (name, Profile, Log out).
 *
 * TODO:
 *  - Split into a static shell and a <UserMenu> Server Component that reads the session via
 *    lib/session.ts getCurrentUser(). Render <UserMenu> inside <Suspense> (cacheComponents:
 *    reading cookies() outside a Suspense boundary is a build error).
 *  - Log out = a form posting to the logout() server action in lib/auth-actions.ts.
 *  - Mobile: a hamburger menu that opens a drawer.
 */
export const ROLE_LINKS = {
  PATIENT: [
    { href: "/patient", label: "Dashboard" },
    { href: "/doctors", label: "Find a doctor" },
    { href: "/patient/appointments", label: "Appointments" },
    { href: "/patient/prescriptions", label: "Prescriptions" },
    { href: "/patient/records", label: "Records" },
  ],
  DOCTOR: [
    { href: "/doctor", label: "Today" },
    { href: "/doctor/appointments", label: "Appointments" },
    { href: "/doctor/availability", label: "Availability" },
    { href: "/doctor/patients", label: "Patients" },
    { href: "/doctor/clinics", label: "Clinics" },
  ],
  RECEPTIONIST: [
    { href: "/reception", label: "Today" },
    { href: "/reception/calendar", label: "Calendar" },
    { href: "/reception/book", label: "Book" },
    { href: "/reception/check-in", label: "Check-in" },
  ],
  ADMIN: [
    { href: "/admin", label: "Overview" },
    { href: "/admin/doctors", label: "Verification" },
    { href: "/admin/users", label: "Users" },
    { href: "/admin/specializations", label: "Specializations" },
    { href: "/admin/assignments", label: "Assignments" },
    { href: "/admin/audit-logs", label: "Audit log" },
  ],
} as const;

export function Nav({ links = [] }: { links?: ReadonlyArray<{ href: string; label: string }> }) {
  return (
    <header className="border-b border-zinc-200">
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3 text-sm">
        <Link href="/" className="font-semibold text-teal-700">
          MediCare
        </Link>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="text-zinc-600 hover:text-zinc-900">
            {l.label}
          </Link>
        ))}
        <span className="ml-auto flex gap-4">
          <Link href="/login">Log in</Link>
          <Link href="/register">Sign up</Link>
        </span>
      </nav>
    </header>
  );
}
