// import GradientBackground from "@/components/GradientBox";
import ExperienceLinks from "@/components/ExperiencesHome";
import Hero from "@/components/Hero";
import IconsRow from "@/components/IconsRow";
import ProjectTimeline from "@/components/ProjectTimeLine";
import Talents from "@/components/Talents";
import TechStackSection from "@/components/TechStack";
import { projectsData } from "@/data/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Talents />
      <IconsRow />
      <ProjectTimeline projectsData={projectsData.slice(0, 3)} isHome={true} />
      <h1 className="text-3xl md:text-5xl  font-bold text-center mt-10">
        My <span className="text-indigo-400"> Experience</span>
      </h1>
      <ExperienceLinks />
      <TechStackSection />
    </div>
  );
}
