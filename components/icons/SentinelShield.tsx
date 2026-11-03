import type { SVGProps } from "react";

/**
 * SentinelShield — SENTINEL product icon (shield with keyhole).
 * Single Source Brief §3: SENTINEL = Consulting Services.
 * Classic heater-shield outline with a keyhole (circle + slot)
 * inside. Stroke uses currentColor.
 */
export function SentinelShield(props: SVGProps<SVGSVGElement>) {
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
      {/* Shield outline */}
      <path d="M12 3 L4 6 V12 C4 17 8 21 12 22 C16 21 20 17 20 12 V6 Z" />
      {/* Keyhole circle */}
      <circle cx="12" cy="11" r="2" />
      {/* Keyhole slot */}
      <line x1="12" y1="13" x2="12" y2="17" />
    </svg>
  );
}
