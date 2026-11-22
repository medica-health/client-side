/**
 * /admin/doctors: Doctor verification
 *
 * Who:  ADMIN
 * Data:
 *   - GET /api/admin/doctors?status=PENDING|APPROVED|REJECTED&q=
 *   - PATCH /api/admin/doctors/:id/verification { status, reason }
 * UI:
 *   - Queue, oldest first, with registration number, qualifications and clinics. Approve, or Reject (reason required). The doctor gets an email.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Doctor verification" };

export default function AdminDoctorsPage() {
  return <Placeholder title="Doctor verification" route="/admin/doctors" />;
}
