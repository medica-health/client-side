/**
 * /admin/reviews: Review moderation
 *
 * Who:  ADMIN
 * Data:
 *   - GET /api/doctors/:id/reviews, DELETE /api/admin/reviews/:id
 * UI:
 *   - Find reviews by doctor and remove abusive ones. The rating is recalculated automatically.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Review moderation" };

export default function AdminReviewsPage() {
  return <Placeholder title="Review moderation" route="/admin/reviews" />;
}
