/**
 * /patient/profile: My profile
 *
 * Who:  PATIENT
 * Data:
 *   - GET/PUT /api/patients/me/profile
 *   - POST {SPRING}/api/auth/change-password
 * UI:
 *   - Personal: DOB, gender, blood group, allergies, chronic conditions, emergency contact.
 *   - Address with city/pincode and a <MapPicker> to save a home location. That location becomes the default "near me" search centre.
 *   - Account: name, phone (Spring), change password.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "My profile" };

export default function PatientProfilePage() {
  return <Placeholder title="My profile" route="/patient/profile" />;
}
