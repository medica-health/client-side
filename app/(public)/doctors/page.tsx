/**
 * /doctors: Find a doctor
 *
 * Who:  Public. Patients get their saved location as the default search centre.
 * Data:
 *   - GET /api/doctors?lat&lng&radiusKm | city&state&pincode & specializationId, q, language, minFee, maxFee, minRating, sort, page, limit
 * UI:
 *   - Search params are the source of truth (shareable URLs). await props.searchParams.
 *   - Filter sidebar: specialty, fee range, rating, language, radius slider (only when lat/lng are set).
 *   - Sort: distance (geo searches only) | rating | fee | experience.
 *   - Results: a list of <DoctorCard> showing the nearest clinic and distanceKm. A map toggle shows clinics as pins.
 *   - Empty state suggests widening the radius or another city. Pagination at the bottom.
 *   - Results depend on searchParams, so wrap them in <Suspense> with a skeleton list.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Find a doctor" };

export default function DoctorsPage() {
  return <Placeholder title="Find a doctor" route="/doctors" />;
}
