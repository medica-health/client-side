/**
 * /admin: Admin overview
 *
 * Who:  ADMIN
 * Data:
 *   - GET /api/dashboard/me, GET /api/admin/stats
 * UI:
 *   - KPI tiles: patients, approved doctors, clinics, appointments today, pending verifications.
 *   - Charts: appointments per day (30 days), appointments by status, doctors per city, top-rated doctors.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Admin overview" };

export default function AdminPage() {
  return <Placeholder title="Admin overview" route="/admin" />;
}
