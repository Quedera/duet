import type { SVGProps } from "react";

/**
 * PulseWaveform — line-art EKG/pulse waveform icon for the Pulse product.
 *
 * Frozen Visual §10: "PULSE must use #06B6D4 and the approved Pulse
 * waveform/signal identity - no heart or healthcare imagery." This is
 * a strict line-art waveform (no container shape, no medical symbolism,
 * no healthcare cues). Stroke is `currentColor` so consumers control
 * colour via Tailwind text-* classes; the consumer in QuederaIdentity
 * sets it to `quedera-surface` (#F2F4F7) for palette-pure contrast
 * against the cyan accent channel.
 */
export function PulseWaveform(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12 H6 L8 8 L11 18 L14 4 L17 14 L19 12 H22" />
    </svg>
  );
}
