/**
 * /reception: Front desk
 *
 * Who:  RECEPTIONIST
 * Data:
 *   - GET /api/dashboard/me → { doctors (assigned), today, counts }
 * UI:
 *   - Today's appointments across assigned doctors, grouped by doctor, with check-in and no-show buttons.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Front desk" };

export default function ReceptionPage() {
  return <Placeholder title="Front desk" route="/reception" />;
}
