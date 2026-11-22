/**
 * Session helpers (server only). PLACEHOLDER: describes the design.
 *
 * Tokens never reach browser JavaScript. After login, the server action stores:
 *   - `mc_access`:  spring-api access JWT. httpOnly, secure (in prod), sameSite=lax,
 *                   path=/, maxAge = accessExpiresIn (15 min).
 *   - `mc_refresh`: opaque refresh token. httpOnly, secure, sameSite=lax,
 *                   path=/api/x (the only place that refreshes; it's also read by the auth
 *                   actions), maxAge = refreshExpiresIn (7 days).
 *
 * TODO:
 *  - `import "server-only"` at the top, after adding the `server-only` package.
 *  - getAccessToken(): reads `mc_access` with `await cookies()` from "next/headers".
 *  - getCurrentUser(): Promise<SessionUser | null>
 *      'use cache: private'  (Cache Components: the read stays per-browser and prefetchable)
 *      Decode the JWT payload (base64url) for { sub, email, name, role, exp }. No signature check
 *      is needed here: the APIs verify every request, and this only drives UI.
 *      Return null if the cookie is missing or expired.
 *  - requireUser(roles?: Role[]): calls getCurrentUser(). If there's no user, redirect(`/login?next=…`).
 *      If the role isn't allowed, redirect(homeFor(user.role)).
 *  - homeFor(role): PATIENT→/patient, DOCTOR→/doctor, RECEPTIONIST→/reception, ADMIN→/admin.
 *  - setSessionCookies(authResponse) / clearSessionCookies(): used by lib/auth-actions.ts and the
 *    proxy route handler.
 *
 * IMPORTANT (cacheComponents is on): anything calling cookies() must render inside a <Suspense>
 * boundary. Never await the session at the top level of a layout; push it into a nested
 * component. See node_modules/next/dist/docs/01-app/02-guides/authentication-with-cache-components.md
 */
export {};
