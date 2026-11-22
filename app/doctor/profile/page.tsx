/**
 * /doctor/profile: Professional profile
 *
 * Who:  DOCTOR
 * Data:
 *   - GET/PUT /api/doctors/me/profile, GET /api/specializations
 * UI:
 *   - Specialty, qualifications, registration number, experience, fee, languages, bio.
 *   - Verification status card. Editing after a rejection resubmits the profile (status → PENDING).
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Professional profile" };

export default function DoctorProfilePage() {
  return <Placeholder title="Professional profile" route="/doctor/profile" />;
}
