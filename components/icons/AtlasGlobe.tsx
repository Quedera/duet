import type { SVGProps } from "react";

/**
 * AtlasGlobe — ATLAS product icon (globe with longitude / latitude).
 * Single Source Brief §3: ATLAS = SACM Discovery & CMDB Validation.
 * Line-art globe: outer circle + equator + meridian + two
 * longitude arcs. Stroke uses currentColor.
 */
export function AtlasGlobe(props: SVGProps<SVGSVGElement>) {
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
      {/* Outer circle */}
      <circle cx="12" cy="12" r="9" />
      {/* Equator */}
      <line x1="3" y1="12" x2="21" y2="12" />
      {/* Meridian */}
      <line x1="12" y1="3" x2="12" y2="21" />
      {/* Left longitude arc (curves leftward from pole to pole) */}
      <path d="M5 6 Q12 12 5 18" />
      {/* Right longitude arc (curves rightward from pole to pole) */}
      <path d="M19 6 Q12 12 19 18" />
    </svg>
  );
}
