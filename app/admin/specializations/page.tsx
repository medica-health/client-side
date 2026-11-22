/**
 * /admin/specializations: Specializations
 *
 * Who:  ADMIN
 * Data:
 *   - GET /api/specializations, POST/PUT/DELETE /api/admin/specializations[/:id]
 * UI:
 *   - Table with doctor counts. Delete is blocked (409) while doctors use it.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Specializations" };

export default function AdminSpecializationsPage() {
  return <Placeholder title="Specializations" route="/admin/specializations" />;
}
