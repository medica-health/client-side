/**
 * /reception/calendar: Calendar
 *
 * Who:  RECEPTIONIST
 * Data:
 *   - GET /api/appointments?from=&to=&doctorId=
 *   - GET/POST /api/doctors/:doctorId/time-off and /availability (assigned doctors only)
 * UI:
 *   - Multi-doctor day/week view. Drag to reschedule (POST /:id/reschedule). Manage each doctor's leave.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Calendar" };

export default function ReceptionCalendarPage() {
  return <Placeholder title="Calendar" route="/reception/calendar" />;
}
