/**
 * Auth server actions ("use server"). PLACEHOLDER: describes the design.
 *
 * Every action calls spring-api server-to-server (SPRING_API_URL) and manages the httpOnly
 * session cookies (lib/session.ts). Each returns { ok: true } | { ok: false, error, fieldErrors },
 * so forms can show messages with useActionState.
 *
 * TODO:
 *  - login(prevState, formData): POST /api/auth/login → setSessionCookies → redirect(next || homeFor(role)).
 *      Validate `next` is a same-origin relative path (avoid open redirects).
 *  - register(prevState, formData): POST /api/auth/register { fullName, email, phone, password, role }.
 *      role is only PATIENT or DOCTOR. On success, log in and redirect (doctor → /doctor/profile).
 *  - logout(): POST /api/auth/logout { refreshToken } (ignore failures) → clearSessionCookies → redirect("/").
 *  - forgotPassword / resetPassword / changePassword / verifyEmail: thin wrappers over the
 *    matching /api/auth/* endpoints.
 *  - refreshSession(): POST /api/auth/refresh with `mc_refresh` → set both cookies again.
 *    Used by the BFF proxy when express-api answers 401 "Token expired".
 */
export {};
