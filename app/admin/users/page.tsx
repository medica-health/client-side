/**
 * /admin/users: Users
 *
 * Who:  ADMIN
 * Data:
 *   - GET/POST {SPRING}/api/admin/users, PATCH {SPRING}/api/admin/users/:id
 * UI:
 *   - Filter by role. Create receptionist or admin accounts. Enable/disable, or change role (this revokes the user's sessions).
 *   - These endpoints live in spring-api, the identity owner.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Users" };

export default function AdminUsersPage() {
  return <Placeholder title="Users" route="/admin/users" />;
}
