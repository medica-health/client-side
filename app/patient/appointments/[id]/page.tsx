/**
 * /patient/appointments/[id]: Appointment details
 *
 * Who:  PATIENT (own appointments only; others are a 404)
 * Data:
 *   - GET /api/appointments/:id
 *   - GET /api/appointments/:id/prescription (when has_prescription)
 *   - POST /api/appointments/:id/cancel | /reschedule, POST /api/appointments/:id/review
 * UI:
 *   - Status timeline: booked → confirmed → checked in → completed.
 *   - Clinic address with a map and "Get directions".
 *   - Reschedule: opens <SlotPicker> for the same doctor. Cancel: a dialog with an optional reason.
 *   - After completion: prescription view (printable) and a review form (1–5 stars + comment, once).
 *   - Upload a report linked to this appointment (→ /patient/records).
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Appointment details" };

export default function PatientAppointmentsIdPage() {
  return <Placeholder title="Appointment details" route="/patient/appointments/[id]" />;
}
