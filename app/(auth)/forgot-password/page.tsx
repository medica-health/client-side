/**
 * /forgot-password: Forgot password
 *
 * Who:  Public
 * Data:
 *   - Server action → POST {SPRING_API_URL}/api/auth/forgot-password
 * UI:
 *   - Email field. Always shows "If the account exists, a reset link has been sent" (no account enumeration).
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Forgot password" };

export default function ForgotPasswordPage() {
  return <Placeholder title="Forgot password" route="/forgot-password" />;
}
