/**
 * QUEDERA product configuration.
 *
 * This is the single file a product fork needs to edit when
 * initialising from the template. Change `name` to the product
 * you're building and update `tagline` + `pitch` to match.
 *
 * See ~/.openclaw/workspace/branding/quedera-palette.json for
 * the canonical palette and per-product colour assignments.
 */

import type { ProductName } from "./lib/brand";

export const PRODUCT_CONFIG = {
  name: "DUET" as ProductName,
  tagline: "Service Transition",
  pitch:
    "Pre-brief shell — pitch lands with the DUET brief.",
} as const;
