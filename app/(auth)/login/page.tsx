/**
 * /login: Log in
 *
 * Who:  Public (signed-in users are redirected to their dashboard by proxy.ts)
 * Data:
 *   - Server action login() in lib/auth-actions.ts → POST {SPRING_API_URL}/api/auth/login
 * UI:
 *   - Email and password form (react-hook-form + zod), with a show-password toggle.
 *   - On success the action stores the access and refresh tokens in httpOnly cookies, then redirects to ?next= or the role's home (/patient, /doctor, /reception, /admin).
 *   - Shows a generic "Invalid email or password" error and handles 429 (too many attempts).
 *   - Links: Forgot password, Create account.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Log in" };

export default function LoginPage() {
  return <Placeholder title="Log in" route="/login" />;
}
