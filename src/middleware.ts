import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  // Handle deleted pages with 410 Gone
  const deletedPages = [
    "/about",
    "/blog/het-maatwerk",
    "/blog/from-the-architects",
  ];
  if (deletedPages.includes(pathname)) {
    return new NextResponse("Gone", { status: 410 });
  }

  // Force HTTPS and www
  if (hostname === "nemwood.be" || hostname === "www.nemwood.be") {
    const url = request.nextUrl.clone();

    // Always redirect to HTTPS www
    if (
      hostname === "nemwood.be" ||
      !request.nextUrl.protocol.startsWith("https")
    ) {
      url.protocol = "https:";
      url.hostname = "www.nemwood.be";
      return NextResponse.redirect(url, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
