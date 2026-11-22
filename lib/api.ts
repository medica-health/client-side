/**
 * Server-side API clients. PLACEHOLDER: describes the design.
 *
 * Base URLs (see .github/docker-compose.yml):
 *   - Server code: process.env.SPRING_API_URL / EXPRESS_API_URL (Docker/K8s network names).
 *   - Browser code never calls the APIs directly. It goes through the BFF route
 *     app/api/x/[...path] (same origin, carries the httpOnly cookie).
 *     NEXT_PUBLIC_*_API_URL are build-time public URLs, kept only for links and debugging.
 *
 * TODO:
 *  - class ApiError extends Error { status; details } for non-2xx or success:false envelopes.
 *  - async function request<T>(base, path, { method, body, token, searchParams }): Promise<T>
 *      sets Authorization: Bearer <token> when given, JSON-encodes the body, unwraps
 *      ApiEnvelope<T>.data, throws ApiError otherwise. Use `cache: "no-store"` for
 *      user-specific data.
 *  - express = { get, post, put, patch, del } bound to EXPRESS_API_URL, reading the token from
 *    lib/session.ts getAccessToken().
 *  - spring  = same for SPRING_API_URL (auth endpoints only).
 *  - Public, cacheable reads (specializations, a doctor's public profile) can live in
 *    functions marked 'use cache' with cacheLife('hours') and cacheTag('doctor:<id>'), as long
 *    as they don't read cookies.
 *
 * Endpoint reference: express-api/README.md and spring-api AuthController / AdminUserController Javadoc.
 */
export {};
