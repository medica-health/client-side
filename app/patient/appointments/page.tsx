/**
 * /patient/appointments: My appointments
 *
 * Who:  PATIENT
 * Data:
 *   - GET /api/appointments?status=&from=&to=&order=&page=
 * UI:
 *   - Tabs: Upcoming (BOOKED, CONFIRMED) | Past (COMPLETED, NO_SHOW) | Cancelled.
 *   - Each row: <AppointmentStatusBadge>, doctor, clinic, date and time in the clinic's time zone.
 *   - Row actions come from item.allowedActions (cancel allowed only ≥2h before start).
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "My appointments" };

export default function PatientAppointmentsPage() {
  return <Placeholder title="My appointments" route="/patient/appointments" />;
}
