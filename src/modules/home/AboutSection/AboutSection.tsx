"use client";

import { ParallaxSection } from "@/modules/shared/ui/ParallaxSection";
import { Manifesto } from "./Manifesto";

export const AboutSection = () => {
  return (
    <ParallaxSection id="about" ghostTitle="Self">
      <div className="container">
        <div className="relative grid gap-16 lg:gap-24 items-start">
          <Manifesto />
        </div>
      </div>
    </ParallaxSection>
  );
};
