import type { SVGProps } from "react";

/**
 * ForgeMark — FORGE product icon (angular F / folded paper plane).
 * Single Source Brief §3: FORGE = Enterprise Change Intelligence & Monitoring.
 * Angular F form: vertical left stroke, horizontal top stroke,
 * angled middle stroke. Stroke uses currentColor.
 */
export function ForgeMark(props: SVGProps<SVGSVGElement>) {
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
      {/* Angular F: vertical | top horizontal | angled middle */}
      <path d="M6 20 L6 4 L18 4 L14 10 L17 10" />
    </svg>
  );
}
