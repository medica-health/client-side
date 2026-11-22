/**
 * /reception/book: Book for a patient
 *
 * Who:  RECEPTIONIST
 * Data:
 *   - GET /api/patients/lookup?email=
 *   - GET /api/doctors/:id/slots, POST /api/appointments { patientId, doctorId, clinicId, startAt }
 * UI:
 *   - Step 1: find the patient by email. Walk-ins without an account need one created first (an admin, or patient self-registration).
 *   - Step 2: pick an assigned doctor, clinic and slot. Step 3: confirm.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Book for a patient" };

export default function ReceptionBookPage() {
  return <Placeholder title="Book for a patient" route="/reception/book" />;
}
