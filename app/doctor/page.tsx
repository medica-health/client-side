/**
 * /doctor: Doctor dashboard
 *
 * Who:  DOCTOR
 * Data:
 *   - GET /api/dashboard/me → { profile.verification_status, today, upcoming, counts }
 * UI:
 *   - Banner while verification is PENDING ("complete your profile") or REJECTED (shows the reason, link to /doctor/profile).
 *   - Today's queue: time, patient, status. Quick actions (confirm / check in / complete) from allowedActions.
 *   - Stats: this week's appointments by status, rating.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Doctor dashboard" };

export default function DoctorPage() {
  return <Placeholder title="Doctor dashboard" route="/doctor" />;
}
