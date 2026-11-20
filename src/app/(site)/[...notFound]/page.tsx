import { notFound } from "next/navigation";

// Unknown URLs land here so they render (site)/not-found.tsx inside the site
// layout. Without a top-level root layout (the Studio has its own), Next would
// otherwise fall back to its unstyled default 404.
//
// Static, so each unknown URL renders once and is then served from the cache:
// bots probing /wp-admin & co. no longer cost a server render every time.
export const dynamic = "force-static";

export default function CatchAllNotFound() {
  notFound();
}
