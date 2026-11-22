/**
 * /verify-email: Verify email
 *
 * Who:  Public (?token= from the email link)
 * Data:
 *   - POST {SPRING_API_URL}/api/auth/verify-email { token }
 * UI:
 *   - Verifies on load (inside <Suspense>) and shows success or failure, with a "Resend" button for signed-in users.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Verify email" };

export default function VerifyEmailPage() {
  return <Placeholder title="Verify email" route="/verify-email" />;
}
