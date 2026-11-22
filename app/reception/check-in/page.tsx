/**
 * /reception/check-in: Check-in desk
 *
 * Who:  RECEPTIONIST
 * Data:
 *   - GET /api/appointments?status=CONFIRMED,BOOKED&from=<today>&to=<tomorrow>
 *   - PATCH /api/appointments/:id/status
 * UI:
 *   - Search today's list by patient name. Check-in opens 60 min before the start. No-show is allowed after the start time.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Check-in desk" };

export default function ReceptionCheckInPage() {
  return <Placeholder title="Check-in desk" route="/reception/check-in" />;
}
