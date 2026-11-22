/**
 * /doctor/patients: My patients
 *
 * Who:  DOCTOR
 * Data:
 *   - GET /api/patients?q=
 * UI:
 *   - Patients this doctor has seen: name, last visit, number of visits, search box. Click → /doctor/patients/[id].
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "My patients" };

export default function DoctorPatientsPage() {
  return <Placeholder title="My patients" route="/doctor/patients" />;
}
