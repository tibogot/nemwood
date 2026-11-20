import { NextResponse } from "next/server";

/**
 * Answers 410 Gone for the pages deleted from the old site.
 *
 * The matcher lists those paths only, so the middleware (a Vercel Function
 * invocation, billed as CPU) runs for nothing else. nemwood.be → www and
 * http → https are done by Vercel's domain settings before the app is reached.
 */
export function middleware() {
  return new NextResponse("Gone", { status: 410 });
}

export const config = {
  matcher: ["/about", "/blog/het-maatwerk", "/blog/from-the-architects"],
};
