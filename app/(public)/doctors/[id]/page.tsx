/**
 * /doctors/[id]: Doctor profile
 *
 * Who:  Public. Booking requires a PATIENT session.
 * Data:
 *   - GET /api/doctors/:id (profile, clinics with lat/lng, rating)
 *   - GET /api/doctors/:id/reviews?page=
 *   - GET /api/doctors/:id/slots?date=YYYY-MM-DD&clinicId=
 * UI:
 *   - Header: name, specialty, qualifications, experience, fee, languages, rating stars.
 *   - Clinics: address cards with a small map. Selecting one filters the slots.
 *   - <SlotPicker>: date strip (next 14 days) plus a grid of free slots. Picking a slot goes to /patient/book/[doctorId]?clinicId=&startAt=.
 *   - Not logged in: clicking a slot redirects to /login?next=<this url>.
 *   - Reviews list ("Rahul S." style names), paginated.
 *   - params is a Promise: const { id } = await props.params (typed with PageProps<'/doctors/[id]'>).
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Doctor profile" };

export default function DoctorsIdPage() {
  return <Placeholder title="Doctor profile" route="/doctors/[id]" />;
}
