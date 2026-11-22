/**
 * <MapPicker value={{ lat, lng }} onChange />: Client Component ("use client").
 *
 * - Interactive map (e.g. Leaflet + OpenStreetMap tiles, loaded with next/dynamic and ssr:false)
 *   for picking a clinic location or a patient's home location.
 * - "Use my location" button (lib/geo.ts getBrowserLocation).
 * - Emits { lat, lng }. Clinics require both; the API stores them as PostGIS
 *   geography(Point, 4326).
 * - A read-only variant shows clinic pins on /doctors (map view) and /doctors/[id].
 *
 * PLACEHOLDER: not implemented yet.
 */
export {};
