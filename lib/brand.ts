/**
 * QUEDERA brand constants — typed access to the canonical palette.
 * See ~/.openclaw/workspace/branding/quedera-palette.json for the
 * authoritative source.
 *
 * RULE: palette codes only. No off-palette colours anywhere in
 * QUEDERA work. — MacWood, 2026-08-26 21:10 BST, #branding.
 */

export const QUEDERA_BRAND = {
  master: { token: "quedera-navy", hex: "#0D182A", name: "QUEDERA" },
} as const;

export const QUEDERA_PRODUCTS = {
  PULSE:    { token: "quedera-cyan",      hex: "#06B6D4", tagline: "ITSM Maturity Assessment" },
  DUET:     { token: "quedera-violet",    hex: "#7C3AED", tagline: "Service Transition" },
  ATLAS:    { token: "quedera-deep-blue", hex: "#1E3A8A", tagline: "SACM Discovery & CMDB Validation" },
  BEACON:   { token: "quedera-amber",     hex: "#F59E0B", tagline: "Executive Dashboards" },
  SENTINEL: { token: "quedera-emerald",   hex: "#10B981", tagline: "Consulting Services" },
  FORGE:    { token: "quedera-forge",     hex: "#1F47C8", tagline: "Enterprise Change Intelligence & Monitoring" },
  CORE:     { token: "quedera-core",      hex: "#EC4899", tagline: "Information Security Management Systems" },
} as const;

export type ProductName = keyof typeof QUEDERA_PRODUCTS;

export const QUEDERA_SURFACE = { token: "quedera-surface", hex: "#F2F4F7" } as const;