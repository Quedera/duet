import type { SVGProps } from "react";

/**
 * QuederaQ — master brand monogram (folded angular Q).
 * Single Source Brief §2 / §5: master brand mark. Line-art on the
 * accent channel disc. Stroke uses currentColor so the consumer
 * controls colour via Tailwind text-* classes.
 */
export function QuederaQ(props: SVGProps<SVGSVGElement>) {
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
      {/* Folded angular body — hexagonal-ish with bottom-right corner cut */}
      <path d="M5 3 H19 V17 L15 21 H5 Z" />
      {/* Tail extending from the bottom-right cut */}
      <path d="M19 17 L19 21 L15 21" />
    </svg>
  );
}
