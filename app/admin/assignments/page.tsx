/**
 * /admin/assignments: Front-desk assignments
 *
 * Who:  ADMIN
 * Data:
 *   - GET/POST/DELETE /api/admin/assignments { receptionistId, doctorId }
 * UI:
 *   - Assign receptionists to doctors. Receptionists can only see and act on their assigned doctors' schedules.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Front-desk assignments" };

export default function AdminAssignmentsPage() {
  return <Placeholder title="Front-desk assignments" route="/admin/assignments" />;
}
