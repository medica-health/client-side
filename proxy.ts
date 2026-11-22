import { NextResponse } from "next/server";

/**
 * Next.js 16 Proxy (formerly Middleware). Runs before every matched request.
 *
 * Per the Next docs this does OPTIMISTIC checks only (cookie present, role from the decoded
 * token). Real authorization happens in express-api/spring-api on every request, and again in
 * server components via lib/session.ts requireUser().
 *
 * TODO, once lib/session.ts exists:
 *  - Read the `mc_access` cookie and decode its payload (no network calls here).
 *  - Protected prefixes and the allowed role:
 *      /patient/**   → PATIENT
 *      /doctor/**    → DOCTOR
 *      /reception/** → RECEPTIONIST
 *      /admin/**     → ADMIN
 *  - No cookie (or expired with no `mc_refresh`) → redirect to /login?next=<path>.
 *  - Wrong role → redirect to that role's home (homeFor(role)).
 *  - Signed-in user visiting /login or /register → redirect to their home.
 *  - Expired access token with a refresh cookie: let the request through. The page's first API
 *    call refreshes through the BFF route.
 *
 * Current state: pass-through.
 */
// Will become proxy(request: NextRequest) once the checks above are implemented.
export function proxy() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/patient/:path*", "/doctor/:path*", "/reception/:path*", "/admin/:path*", "/login", "/register"],
};
