/**
 * /doctor/availability: Weekly availability
 *
 * Who:  DOCTOR
 * Data:
 *   - GET/POST /api/doctors/me/availability, PUT/DELETE /api/doctors/me/availability/:id
 * UI:
 *   - Weekly grid (Sun–Sat). Each rule has a clinic, start and end time, and slot length (5–240 min).
 *   - Overlapping rules on the same day → 409 "overlaps an existing slot".
 *   - Live preview of the slots a rule produces.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Weekly availability" };

export default function DoctorAvailabilityPage() {
  return <Placeholder title="Weekly availability" route="/doctor/availability" />;
}
