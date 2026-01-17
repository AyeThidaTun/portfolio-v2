import NavigationHome from "../_components/navigation-home";
import ProjectCard from "./_components/project-cards";

export default function Projects() {
	return (
		<section className="min-h-screen font-serif lg:pb-10">
			<div className="flex justify-center pb-15 lg:pb-20">
				<NavigationHome
					href="/experience"
					text="More About Me"
					direction="right"
				/>
			</div>
			<h3 className="text-center text-2xl py-10 lg:py-5">Projects</h3>
			<p className="text-center text-lg px-10 lg:text-lg">{`"Every project is a step forward, proof of how far I have come and a glimpse of where I'm going."`}</p>
			<div className="flex justify-center py-10">
				<ProjectCard />
			</div>
		</section>
	);
}
