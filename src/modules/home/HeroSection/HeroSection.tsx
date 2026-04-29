import { HeroCTA } from "./HeroCTA";
import { HeroHeading } from "./HeroHeading";


export const HeroSection = () => {
  return (
    <section
      
      className="relative flex items-center py-28 scroll-mt-24"
    >
      {/* subtle radial spot behind hero — sits above the global ambient scene */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full blur-[120px] opacity-20"
        style={{ background: "radial-gradient(circle, hsl(var(--accent-primary)) 0%, transparent 70%)" }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-10">
            <HeroHeading />
            <HeroCTA />
          </div>
          
        </div>
      </div>
    </section>
  );
};
