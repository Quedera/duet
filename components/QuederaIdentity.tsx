import type { CSSProperties, ReactNode } from "react";
import { QUEDERA_BRAND, QUEDERA_PRODUCTS, type ProductName } from "@/lib/brand";
import {
  QuederaQ,
  AtlasGlobe,
  PulseWaveform,
  DuetArrows,
  BeaconLighthouse,
  SentinelShield,
  ForgeMark,
  CoreBulldog,
} from "./icons";

/**
 * Product-keyed icon map. Single Source Brief §5: the only things
 * that change between product variants are icon, name and accent
 * colour. This map is the canonical wiring.
 */
const PRODUCT_ICONS: Record<ProductName, ReactNode> = {
  ATLAS: <AtlasGlobe />,
  PULSE: <PulseWaveform />,
  DUET: <DuetArrows />,
  BEACON: <BeaconLighthouse />,
  SENTINEL: <SentinelShield />,
  FORGE: <ForgeMark />,
  CORE: <CoreBulldog />,
};

interface QuederaIdentityProps {
  /** Product key. Use "QUEDERA" for the master umbrella mark. */
  product: ProductName | "QUEDERA";
}

/**
 * QuederaIdentity — brushed-steel capsule with recessed accent perimeter.
 * Frozen / Single Source Brief §2-§5 reference.
 *
 * Per Single Source Brief §4: text rule is "QUEDERA + product name only" —
 * no descriptor, no strapline, no slogan. The component renders exactly
 * those two text elements plus the icon divider and accent channel.
 *
 * Per §6: do not create new icons. The icon set in `./icons/` is the
 * canonical product suite — wired here via PRODUCT_ICONS.
 *
 * Single reusable component across the product suite (§7.1). Geometry,
 * brushed-steel finish, chrome edge, recessed glow, icon position,
 * divider, typography placement, spacing and shadow treatment stay
 * identical across all seven.
 */
export function QuederaIdentity({ product }: QuederaIdentityProps) {
  const isMaster = product === "QUEDERA";
  const info = isMaster ? QUEDERA_BRAND.master : QUEDERA_PRODUCTS[product];
  const accentRgb = hexToRgbChannels(info.hex);
  const icon = isMaster ? <QuederaQ /> : PRODUCT_ICONS[product as ProductName];

  return (
    <div
      className="quedera-identity"
      style={{ "--quedera-identity-accent": accentRgb } as CSSProperties}
      aria-label={`${isMaster ? "QUEDERA" : `${product} identity`}`}
    >
      <div className="quedera-identity__icon" aria-hidden="true">
        {icon}
      </div>
      <div className="quedera-identity__divider" aria-hidden="true" />
      <div className="flex flex-col leading-none">
        <span className="quedera-identity__master">QUEDERA</span>
        <span className="quedera-identity__product">
          {isMaster ? "MASTER BRAND" : product}
        </span>
      </div>
    </div>
  );
}

/**
 * Convert "#06B6D4" → "6 182 212" (RGB channels for CSS variable consumption).
 * Matches the brand-kit convention in branding/quedera-tokens.css.
 */
function hexToRgbChannels(hex: string): string {
  const cleaned = hex.replace("#", "");
  if (cleaned.length !== 6) return "0 0 0";
  const r = parseInt(cleaned.slice(0, 2), 16);
  const g = parseInt(cleaned.slice(2, 4), 16);
  const b = parseInt(cleaned.slice(4, 6), 16);
  return `${r} ${g} ${b}`;
}
