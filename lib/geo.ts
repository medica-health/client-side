/**
 * Browser geolocation helpers (client only).
 *
 * getBrowserLocation(): resolves { lat, lng } from navigator.geolocation with a 10s timeout.
 * Rejects with a friendly message when permission is denied or unavailable. In that case the
 * UI falls back to a city/pincode text search (GET /api/doctors?city=…).
 */
export interface LatLng {
  lat: number;
  lng: number;
}

export function getBrowserLocation(timeoutMs = 10_000): Promise<LatLng> {
  return new Promise((resolve, reject) => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      reject(new Error("Location is not available in this browser. Search by city instead."));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => reject(new Error("Location permission was denied. Search by city instead.")),
      { enableHighAccuracy: false, timeout: timeoutMs, maximumAge: 5 * 60_000 },
    );
  });
}

/** Builds the /doctors search URL for a location. */
export function doctorsNear({ lat, lng }: LatLng, radiusKm = 10): string {
  const q = new URLSearchParams({ lat: lat.toFixed(5), lng: lng.toFixed(5), radiusKm: String(radiusKm) });
  return `/doctors?${q}`;
}
