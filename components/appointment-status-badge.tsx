import type { AppointmentStatus } from "@/lib/types";

/**
 * <AppointmentStatusBadge status />: coloured pill for an appointment status.
 * Status flow (enforced by express-api):
 *   BOOKED → CONFIRMED → CHECKED_IN → COMPLETED,  BOOKED|CONFIRMED → CANCELLED | NO_SHOW
 */
const STYLES: Record<AppointmentStatus, string> = {
  BOOKED: "bg-sky-100 text-sky-800",
  CONFIRMED: "bg-teal-100 text-teal-800",
  CHECKED_IN: "bg-amber-100 text-amber-800",
  COMPLETED: "bg-emerald-100 text-emerald-800",
  CANCELLED: "bg-zinc-200 text-zinc-700",
  NO_SHOW: "bg-rose-100 text-rose-800",
};

export function AppointmentStatusBadge({ status }: { status: AppointmentStatus }) {
  return (
    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${STYLES[status]}`}>
      {status.replace("_", " ").toLowerCase()}
    </span>
  );
}
