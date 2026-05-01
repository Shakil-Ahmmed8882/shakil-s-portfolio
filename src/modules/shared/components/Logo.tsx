"use client";

export const Logo = ({ size = 24 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "hsl(var(--accent-primary))" }}
    >
      {/* Modern flowing cursive S */}
      <path
        d="M 10 12 Q 10 8 14 8 Q 18 8 20 10 Q 22 12 22 14 Q 22 16 20 17 Q 18 18 14 18.5 Q 18 19 20 20 Q 22 21 22 23 Q 22 26 20 28 Q 18 30 14 30 Q 10 30 10 26 Q 10 24 12 23"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
