import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Apply to /admin paths (scoped via matcher below)
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

export const config = {
  matcher: ["/admin/:path*"],
};

