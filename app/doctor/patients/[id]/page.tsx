/**
 * /doctor/patients/[id]: Patient history
 *
 * Who:  DOCTOR (only patients they have treated; otherwise 404)
 * Data:
 *   - GET /api/patients/:id/summary, GET /api/patients/:id/prescriptions
 *   - GET /api/medical-records?patientId=, POST /api/medical-records (patientId)
 * UI:
 *   - Profile, visit timeline, prescriptions and records, with an upload for this patient.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Patient history" };

export default function DoctorPatientsIdPage() {
  return <Placeholder title="Patient history" route="/doctor/patients/[id]" />;
}
