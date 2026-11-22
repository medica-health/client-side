/**
 * /: Home
 *
 * Who:  Public (anyone)
 * Data:
 *   - GET /api/specializations (express) for the specialty chips
 * UI:
 *   - Hero with a search bar: specialty or doctor name, plus a location box.
 *   - Location: a city/pincode text field OR a "Use my location" button (lib/geo.ts → browser geolocation).
 *   - Submitting navigates to /doctors?lat=&lng=&radiusKm= or /doctors?city=.
 *   - Popular specialties grid → /doctors?specializationId=.
 *   - How it works (search → pick slot → visit clinic), sign-up CTAs for patients and doctors.
 *   - Fully static: no session read, so it prerenders into the static shell.
 *
 * PLACEHOLDER: structure only. Replace the body with the real page.
 */
import { Placeholder } from "@/components/placeholder";

export const metadata = { title: "Home" };

export default function HomePage() {
  return <Placeholder title="Home" route="/" />;
}
