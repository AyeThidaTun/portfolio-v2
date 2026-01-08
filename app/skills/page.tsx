import NavigationHome from "../_components/navigation-home";
import SkillCard from "./_components/skill-card";
export default function Skills() {
  return (
    <section className="min-h-screen font-serif pb-10">
      <NavigationHome href="/experience" text="More About Me"/>
      <div className="flex justify-center">
        <h1 className="text-xl">Skills</h1>
      </div>
      <SkillCard />
    </section>
  );
}
