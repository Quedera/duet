import type { SVGProps } from "react";

/**
 * DuetArrows — DUET product icon (two interlocking right-pointing arrows).
 * Single Source Brief §3: DUET = Service Transition.
 * Two chevron-style arrows, vertically offset, the bottom one
 * shorter and nested inside the top — the "paired / interlocking
 * relationship" reading. Stroke uses currentColor.
 */
export function DuetArrows(props: SVGProps<SVGSVGElement>) {
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
      {/* Top arrow — full width */}
      <path d="M3 8 H17 L21 12 L17 16 H3" />
      {/* Bottom arrow — shorter, offset down, nested inside top */}
      <path d="M3 14 H13 L17 18 L13 22 H3" />
    </svg>
  );
}
