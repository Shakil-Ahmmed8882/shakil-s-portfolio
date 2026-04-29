"use client";

const blinkers = [
  { top: "18%", left: "12%", size: 3, delay: "0s",   duration: "4.6s", hue: 190 },
  { top: "26%", left: "78%", size: 2, delay: "1.2s", duration: "5.8s", hue: 190 },
  { top: "62%", left: "22%", size: 2, delay: "2.4s", duration: "6.4s", hue: 220 },
  { top: "44%", left: "88%", size: 3, delay: "0.6s", duration: "5.2s", hue: 190 },
  { top: "78%", left: "60%", size: 2, delay: "3.1s", duration: "4.8s", hue: 270 },
  { top: "12%", left: "44%", size: 2, delay: "1.8s", duration: "6.0s", hue: 190 },
  { top: "70%", left: "8%",  size: 2, delay: "2.7s", duration: "5.4s", hue: 220 },
  { top: "38%", left: "52%", size: 2, delay: "0.9s", duration: "5.6s", hue: 190 },
];

export const AmbientScene = () => {
  return (
    <div
      aria-hidden
      style={{ zIndex: -99 }}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    >
      

      {/* Floating blinking lights — independent CSS animations, GPU-only */}
      {blinkers.map((b, i) => (
        <span
          key={i}
          className="ambient-blink absolute rounded-full"
          style={{
            top: b.top,
            left: b.left,
            width: `${b.size}px`,
            height: `${b.size}px`,
            background: `hsl(${b.hue} 90% 65%)`,
            boxShadow: `0 0 8px hsl(${b.hue} 90% 65% / 0.9), 0 0 18px hsl(${b.hue} 90% 65% / 0.5)`,
            animationDelay: b.delay,
            animationDuration: b.duration,
            willChange: "opacity, transform",
          }}
        />
      ))}
    </div>
  );
};
