/**
 * /doctor/time-off: Time off
 *
 * Who:  DOCTOR
 * Data:
 *   - GET/POST /api/doctors/me/time-off, DELETE /api/doctors/me/time-off/:id
 * UI:
 *   - Add a leave range (date-time from/to plus a reason).
 *   - The response lists conflicting appointments, so the page prompts the doctor to cancel or reschedule each one. Nothing is cancelled automatically.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Time off" };

export default function DoctorTimeOffPage() {
  return <Placeholder title="Time off" route="/doctor/time-off" />;
}
