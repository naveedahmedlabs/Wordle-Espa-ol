'use client';
import { usePathname } from 'next/navigation';
import { getSEO, OG_IMAGE } from '../seo';

// Per-route SEO head tags driven by the router, not the prerender plugin.
//
// Every tag here is keyed off the normalized pathname (see ../seo.js), so
// canonical and hreflang are guaranteed to match the URL the user is on,
// regardless of trailing slash, query string (?seed=..., ?challenge=...),
// hash fragment, or letter case. Unknown routes resolve to the homepage
// entry as a safe fallback.
export default function SEO() {
  const pathname = usePathname();
  if (pathname.startsWith('/blogs')) return null;
  const seo = getSEO(pathname);

  return null;
}
