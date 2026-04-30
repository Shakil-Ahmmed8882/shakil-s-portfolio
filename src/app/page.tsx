import { NavbarLayout } from "@/modules/navbar/NavbarLayout";
import { HomeLayout } from "@/modules/home/HomeLayout";
import { SkillLayout } from "@/modules/skill/SkillLayout";
import { ExperienceLayout } from "@/modules/experience/ExperienceLayout";
import { ProjectsLayout } from "@/modules/projects/ProjectsLayout";
import { ContactLayout } from "@/modules/contact/ContactLayout";
import { FooterLayout } from "@/modules/footer/FooterLayout";
import { ProfileSidebar } from "@/modules/shared/components/ProfileSidebar";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <div className="mx-auto xl:flex xl:gap-10 xl:max-w-[1440px] xl:px-6">
      <NavbarLayout />
        <ProfileSidebar />
        <div className="flex-1 min-w-0">
          <HomeLayout />
          <SkillLayout />
          <ExperienceLayout />
          <ProjectsLayout />
          <ContactLayout />
          <FooterLayout />
        </div>
      </div>
    </main>
  );
}
