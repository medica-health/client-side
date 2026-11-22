/**
 * /patient: Patient dashboard
 *
 * Who:  PATIENT
 * Data:
 *   - GET /api/dashboard/me → { upcoming, counts, recentPrescriptions, awaitingReview }
 * UI:
 *   - Next appointment card (doctor, clinic, time, directions link, cancel/reschedule).
 *   - Upcoming appointments (5), recent prescriptions (5).
 *   - "Rate your visit" prompts for completed visits without a review.
 *   - Quick action: Find a doctor near me.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Patient dashboard" };

export default function PatientPage() {
  return <Placeholder title="Patient dashboard" route="/patient" />;
}
