import NavigationHome from "../_components/navigation-home";
import ProjectCard from "./_components/project-cards";

export default function Projects() {
	return (
		<section className="min-h-screen font-serif pb-10">
			<div className="flex justify-center pb-10">
				<NavigationHome href="/experience" text="More About Me" />
			</div>
			<h3 className="text-center text-xl py-5">Projects</h3>
			<p className="text-center">{`"Every project is a step forward, proof of how far I've come and a glimpse of where I'm going."`}</p>
			<div className="flex justify-center py-10">
				<ProjectCard />
			</div>
		</section>
	);
}
