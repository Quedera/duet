import type { SVGProps } from "react";

/**
 * BeaconLighthouse — BEACON product icon (lighthouse with beams).
 * Single Source Brief §3: BEACON = Executive Dashboards.
 * Tapered tower (wider base) with a single horizontal stripe
 * and three beams extending left, right, and up. Stroke uses
 * currentColor.
 */
export function BeaconLighthouse(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Tapered tower — wider base, narrow top */}
      <path d="M9 21 L10 8 L12 4 L14 8 L15 21 Z" />
      {/* Single horizontal stripe */}
      <line x1="10" y1="13" x2="14" y2="13" />
      {/* Left beam */}
      <path d="M8 7 L4 4" />
      {/* Right beam */}
      <path d="M16 7 L20 4" />
      {/* Top beam */}
      <path d="M12 4 L12 2" />
    </svg>
  );
}
