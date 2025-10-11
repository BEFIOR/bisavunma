import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Create the next-intl middleware
const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the request is for admin paths
  const isAdminPath = pathname.startsWith("/admin");

  // Apply admin authentication middleware
  if (isAdminPath) {
    const robotsHeaderKey = "X-Robots-Tag";
    const robotsHeaderValue = "noindex, nofollow";

    const basicAuthEnabled =
      process.env.ADMIN_BASIC_AUTH === "1" ||
      process.env.ADMIN_BASIC_AUTH === "true";

    if (basicAuthEnabled) {
      const username = process.env.ADMIN_BASIC_AUTH_USER || "";
      const password = process.env.ADMIN_BASIC_AUTH_PASS || "";

      const authHeader = request.headers.get("authorization") || "";
      const [scheme, encoded] = authHeader.split(" ");
      let ok = false;

      if (scheme?.toLowerCase() === "basic" && encoded) {
        try {
          const decoded = atob(encoded);
          const [user, pass] = decoded.split(":");
          ok = user === username && pass === password;
        } catch {
          ok = false;
        }
      }

      if (!ok) {
        return new NextResponse("Unauthorized", {
          status: 401,
          headers: new Headers({
            "WWW-Authenticate": 'Basic realm="Admin", charset="UTF-8"',
            [robotsHeaderKey]: robotsHeaderValue,
          }),
        });
      }
    }

    const response = NextResponse.next();
    response.headers.set(robotsHeaderKey, robotsHeaderValue);
    return response;
  }

  // Apply i18n middleware for non-admin paths
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};

