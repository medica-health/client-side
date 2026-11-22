/**
 * BFF proxy for Client Components: /api/x/{express|spring}/<path>
 *   e.g. fetch("/api/x/express/doctors/123/slots?date=2026-12-01")
 *        → {EXPRESS_API_URL}/api/doctors/123/slots?date=2026-12-01
 *
 * Why: tokens live in httpOnly cookies on this origin. The browser can't read them, so it calls
 * this same-origin route, which forwards the request with Authorization: Bearer <mc_access>.
 *
 * TODO:
 *  - Map the first segment to a base URL: "express" → EXPRESS_API_URL, "spring" → SPRING_API_URL.
 *    Anything else → 404.
 *  - Forward method, query string, body (stream it, including multipart uploads) and
 *    Content-Type. Strip incoming Authorization/Cookie headers, then add the Bearer token.
 *  - If the upstream returns 401 with message "Token expired": call refreshSession()
 *    (lib/auth-actions.ts), update the cookies, and retry once. If the refresh fails, clear the
 *    cookies and return 401, and the client redirects to /login.
 *  - Stream the upstream response back, including file downloads (Content-Disposition), with
 *    `Cache-Control: private, no-store`.
 *  - Only allow the spring paths the browser needs (/api/auth/me, /api/admin/users/**). Login,
 *    refresh and logout go through server actions, not this proxy.
 *
 * Next 16: ctx.params is a Promise. Type it with RouteContext<'/api/x/[...path]'>.
 */
async function notImplemented() {
  return Response.json(
    { success: false, message: "BFF proxy not implemented yet", timestamp: new Date().toISOString() },
    { status: 501 },
  );
}

export const GET = notImplemented;
export const POST = notImplemented;
export const PUT = notImplemented;
export const PATCH = notImplemented;
export const DELETE = notImplemented;
