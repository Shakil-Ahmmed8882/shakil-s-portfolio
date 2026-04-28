import { HeroHeading } from "./HeroHeading";
import { HeroCTA } from "./HeroCTA";
import { HeroPortrait } from "./HeroPortrait";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-28 pb-20 scroll-mt-24"
    >
      <div className="container">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-10">
            <HeroHeading />
            <HeroCTA />
          </div>
          <div className="order-first lg:order-last">
            <HeroPortrait />
          </div>
        </div>
      </div>
    </section>
  );
};
