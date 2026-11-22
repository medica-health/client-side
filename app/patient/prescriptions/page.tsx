/**
 * /patient/prescriptions: My prescriptions
 *
 * Who:  PATIENT
 * Data:
 *   - GET /api/patients/me/prescriptions?page=
 *   - GET /api/prescriptions/:id
 * UI:
 *   - List by date: diagnosis, doctor. Expanding a row shows the medicines table (medicine, dosage, frequency, duration), advice and follow-up date, with a print button.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "My prescriptions" };

export default function PatientPrescriptionsPage() {
  return <Placeholder title="My prescriptions" route="/patient/prescriptions" />;
}
