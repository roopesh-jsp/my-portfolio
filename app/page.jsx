// import GradientBackground from "@/components/GradientBox";
import Hero from "@/components/Hero";
import IconsRow from "@/components/IconsRow";
import Talents from "@/components/Talents";
import TechStackSection from "@/components/TechStack";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Talents />
      <IconsRow />
      <TechStackSection />
    </div>
  );
}
