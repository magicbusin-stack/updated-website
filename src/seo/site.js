/* Site-wide SEO settings. Change the web address HERE (one place) if the site moves.
   It matches the address already used in the organisation structured data in index.html. */

export const SITE_URL = (import.meta.env?.VITE_SITE_URL || "https://www.magicbus.org").replace(/\/+$/, "");
export const SITE_NAME = "Magic Bus India Foundation";

/* Social-sharing picture (1200 x 630). The file lives in /public. */
export const OG_IMAGE_PATH = "/og-image.jpg";
export const OG_IMAGE_ALT = "Magic Bus India Foundation: Childhood to Livelihood";

export const absoluteUrl = (path = "/") => `${SITE_URL}${path === "/" ? "/" : path}`;
