/**
 * /doctor/appointments: Appointments
 *
 * Who:  DOCTOR (own schedule)
 * Data:
 *   - GET /api/appointments?from=&to=&status=&clinicId=
 * UI:
 *   - Day/week calendar and a list view. Filter by clinic and status. Click → /doctor/appointments/[id].
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Appointments" };

export default function DoctorAppointmentsPage() {
  return <Placeholder title="Appointments" route="/doctor/appointments" />;
}
