"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import NavigationHome from "@/app/_components/navigation-home";
import { Button } from "@/components/ui/button";
import { projectDetailsData } from "./_components/project-details-data";

export default function ProjectDetailsPage() {
	const params = useParams();
	const slug = params.slug;
	return (
		<section className="font-serif">
			<NavigationHome href="/" />
			<h1 className="text-lg text-center py-5">Project Details Page</h1>
			{projectDetailsData
				.filter((project) => project.slug === slug)
				.map((project) => (
					<div
						key={project.id}
						className="flex items-center justify-center px-50 py-10 "
					>
						<div className="border border-gray-400 p-10 rounded-md">
							<div className="flex items-center gap-x-3 pb-10">
								<Button
									onClick={() => window.history.back()}
									variant="ghost"
									className="flex items-center gap-x-1 text-gray-600"
								>
									<Icon icon="charm:arrow-left" width="20" height="30" />
									<p>Back</p>
								</Button>
							</div>
							<section className="grid grid-cols-3 gap-x-10 ">
								<div className="col-span-1">
									<Image
										src={project.src}
										alt={project.title}
										className="object-cover aspect-video rounded-md"
										width={500}
										height={200}
									/>
								</div>
								<div className="col-span-2">
									<h2 className="text-lg font-semibold">{project.title}</h2>
									<p className="text-gray-600">{project.description}</p>
								</div>
							</section>
						</div>
					</div>
				))}
		</section>
	);
}
