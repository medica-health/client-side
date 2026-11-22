/**
 * /patient/book/[doctorId]: Confirm booking
 *
 * Who:  PATIENT
 * Data:
 *   - GET /api/doctors/:doctorId and /slots?date=&clinicId= (to re-validate the chosen slot)
 *   - POST /api/appointments { doctorId, clinicId, startAt, reason }
 * UI:
 *   - Prefilled from ?clinicId=&startAt=. Shows the doctor, clinic, time and fee (paid at the clinic).
 *   - Reason for visit (optional textarea).
 *   - Confirm → POST. 201 → /patient/appointments/[id] with a success toast.
 *   - 409 (slot just taken / patient overlap) → message plus refreshed slots to choose again.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Confirm booking" };

export default function PatientBookDoctoridPage() {
  return <Placeholder title="Confirm booking" route="/patient/book/[doctorId]" />;
}
