/**
 * /admin/audit-logs: Audit log
 *
 * Who:  ADMIN
 * Data:
 *   - GET /api/admin/audit-logs?entityId=&actorId=&action=&limit=
 * UI:
 *   - Who did what and when: bookings, status changes, record access, admin actions (stored in MongoDB).
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Audit log" };

export default function AdminAuditLogsPage() {
  return <Placeholder title="Audit log" route="/admin/audit-logs" />;
}
