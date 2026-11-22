/**
 * /reset-password: Reset password
 *
 * Who:  Public (?token= from the email link)
 * Data:
 *   - Server action → POST {SPRING_API_URL}/api/auth/reset-password { token, newPassword }
 * UI:
 *   - New password and confirm. On success → /login with a success toast.
 *   - Invalid or expired token → an error with a link back to /forgot-password.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Reset password" };

export default function ResetPasswordPage() {
  return <Placeholder title="Reset password" route="/reset-password" />;
}
