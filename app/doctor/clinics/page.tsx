/**
 * /doctor/clinics: My clinics
 *
 * Who:  DOCTOR
 * Data:
 *   - GET /api/doctors/me/clinics, PUT/DELETE /api/doctors/me/clinics/:clinicId
 *   - GET /api/clinics?lat&lng&q (find an existing clinic), POST /api/clinics, PATCH /api/clinics/:id
 * UI:
 *   - List of linked clinics. Unlink is blocked (409) while upcoming appointments exist there.
 *   - Add clinic: search existing clinics nearby, or create one with <MapPicker> to drop a pin (lat/lng saved as PostGIS points).
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "My clinics" };

export default function DoctorClinicsPage() {
  return <Placeholder title="My clinics" route="/doctor/clinics" />;
}
