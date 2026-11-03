import type { SVGProps } from "react";

/**
 * CoreBulldog — CORE product icon (bulldog face).
 * Single Source Brief §3: CORE = Information Security Management Systems.
 * Round face with floppy ears (angular triangles), two eyes,
 * a nose, and a subtle mouth curve. Mixed stroke + fill for
 * the eye / nose dots. Stroke uses currentColor for outlines,
 * fill uses currentColor for the solid eyes / nose.
 */
export function CoreBulldog(props: SVGProps<SVGSVGElement>) {
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
      {/* Round face */}
      <circle cx="12" cy="13" r="7" />
      {/* Left ear (triangular fold) */}
      <path d="M6 9 L4 4 L10 7" />
      {/* Right ear (triangular fold) */}
      <path d="M18 9 L20 4 L14 7" />
      {/* Left eye */}
      <circle cx="9.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
      {/* Right eye */}
      <circle cx="14.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
      {/* Nose */}
      <circle cx="12" cy="14.8" r="0.8" fill="currentColor" stroke="none" />
      {/* Mouth curve */}
      <path d="M10 16.5 C10.5 17.8 13.5 17.8 14 16.5" />
    </svg>
  );
}
