/**
 * Auth pages: /login, /register, /forgot-password, /reset-password, /verify-email
 *
 *  - Centered card layout with the logo. No app nav.
 *  - proxy.ts sends already signed-in users away from /login and /register.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">{children}</div>
    </main>
  );
}
