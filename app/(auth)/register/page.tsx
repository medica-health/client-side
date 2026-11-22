/**
 * /register: Create account
 *
 * Who:  Public
 * Data:
 *   - Server action register() → POST {SPRING_API_URL}/api/auth/register
 * UI:
 *   - Account type toggle: Patient or Doctor (?as=doctor preselects Doctor).
 *   - Fields: full name, email, phone, password + confirm (8+ chars, a letter and a digit).
 *   - Doctor note: the profile must be completed and verified by an admin before it appears in search.
 *   - On success, logs in (cookies set) and redirects: patient → /patient, doctor → /doctor/profile.
 *   - 409 → "An account with this email already exists".
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Create account" };

export default function RegisterPage() {
  return <Placeholder title="Create account" route="/register" />;
}
