// Shared types mirroring the API contracts (express-api + spring-api).

export type Role = "PATIENT" | "DOCTOR" | "RECEPTIONIST" | "ADMIN";

export type AppointmentStatus = "BOOKED" | "CONFIRMED" | "CHECKED_IN" | "COMPLETED" | "CANCELLED" | "NO_SHOW";

/** Every API response, from both backends. */
export interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data?: T;
  timestamp: string;
}

export interface Paged<T> {
  items: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/** Decoded access-token claims (spring-api JwtService contract). */
export interface SessionUser {
  id: string; // sub
  email: string;
  name: string;
  role: Role;
}

/** GET /api/doctors → data.items[] */
export interface DoctorSearchItem {
  id: string;
  name: string;
  specialization: string | null;
  specializationId: number | null;
  qualifications: string | null;
  experienceYears: number;
  consultationFee: number;
  languages: string[];
  avgRating: number;
  ratingCount: number;
  distanceKm: number | null; // only for lat/lng searches
  nearestClinic: {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    lat: number;
    lng: number;
  };
}

/** GET /api/doctors/:id/slots → data[] */
export interface Slot {
  startAt: string; // ISO; send back unchanged when booking
  endAt: string;
  clinicId: string;
}
