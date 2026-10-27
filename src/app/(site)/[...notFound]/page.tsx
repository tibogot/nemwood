import { notFound } from "next/navigation";

// Unknown URLs land here so they render (site)/not-found.tsx inside the site
// layout. Without a top-level root layout (the Studio has its own), Next would
// otherwise fall back to its unstyled default 404.
export default function CatchAllNotFound() {
  notFound();
}
