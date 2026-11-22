/**
 * /patient/records: Medical records
 *
 * Who:  PATIENT
 * Data:
 *   - GET /api/medical-records?recordType=&page=
 *   - POST /api/medical-records (multipart: file, title, recordType, description, appointmentId?)
 *   - GET /api/medical-records/:id/download, DELETE /api/medical-records/:id
 * UI:
 *   - Upload form: PDF/PNG/JPEG up to 10 MB (checked client-side too; the server sniffs the real type).
 *   - Filter by type (lab report, imaging, prescription, discharge summary, other).
 *   - Files stream through the BFF proxy (app/api/x) so the token never reaches the browser.
 *   - Shows who uploaded each file (you, or your doctor).
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Medical records" };

export default function PatientRecordsPage() {
  return <Placeholder title="Medical records" route="/patient/records" />;
}
