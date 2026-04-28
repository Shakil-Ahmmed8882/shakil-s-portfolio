import { NavbarLayout } from "@/modules/navbar/NavbarLayout";
import { HomeLayout } from "@/modules/home/HomeLayout";
import { SkillLayout } from "@/modules/skill/SkillLayout";
import { ExperienceLayout } from "@/modules/experience/ExperienceLayout";
import { ProjectsLayout } from "@/modules/projects/ProjectsLayout";
import { ContactLayout } from "@/modules/contact/ContactLayout";
import { FooterLayout } from "@/modules/footer/FooterLayout";

export default function Page() {
  return (
    <main className="relative">
      <NavbarLayout />
      <HomeLayout />
      <SkillLayout />
      <ExperienceLayout />
      <ProjectsLayout />
      <ContactLayout />
      <FooterLayout />
    </main>
  );
}
