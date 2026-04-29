"use client";

import { ParallaxSection } from "@/modules/shared/ui/ParallaxSection";
import { PortraitAnnotated } from "./PortraitAnnotated";
import { Manifesto } from "./Manifesto";

export const AboutSection = () => {
  return (
    <ParallaxSection id="about" ghostTitle="About">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-24 items-center">
        <Manifesto />
        <PortraitAnnotated />
      </div>
    </ParallaxSection>
  );
};
