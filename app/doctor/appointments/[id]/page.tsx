/**
 * /doctor/appointments/[id]: Consultation
 *
 * Who:  DOCTOR (own appointments only)
 * Data:
 *   - GET /api/appointments/:id, PATCH /api/appointments/:id/status { status, doctorNotes }
 *   - PUT/GET /api/appointments/:id/prescription
 *   - GET /api/patients/:patientId/summary (after check-in, the doctor counts as treating)
 * UI:
 *   - Patient header: name, age, blood group, allergies (highlighted).
 *   - Status buttons from allowedActions: Confirm, Check in, Mark no-show, Complete.
 *   - Prescription editor (available from CHECKED_IN): diagnosis, notes, advice, follow-up date, and dynamic medicine rows.
 *   - Side panel: past visits, prescriptions and records for this patient.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Consultation" };

export default function DoctorAppointmentsIdPage() {
  return <Placeholder title="Consultation" route="/doctor/appointments/[id]" />;
}
