"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import NavigationHome from "@/app/_components/navigation-home";
import { Button } from "@/components/ui/button";
import { projectDetailsData } from "./_components/project-details-data";
import YoutubePlayer from "./_components/youtube-player";

export default function ProjectDetailsPage() {
	const params = useParams();
	const slug = params.slug;
	return (
		<section className="font-serif">
			<NavigationHome href="/" />
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
							<section className="grid grid-cols-3 gap-x-20 ">
								<div className="relative aspect-video w-25 lg:w-87.5 col-span-1">
									<Image
										src={project.src}
										alt={project.title}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										className="object-cover rounded-sm"
									/>
								</div>
								<div className="col-span-2 space-y-5">
									<h2 className="text-lg font-semibold">{project.title}</h2>
									<p className="whitespace-pre-line">{project.description}</p>
									{project.href ? (
										<p className="py-5">
											Project link -{" "}
											<Link
												href={project.href}
												className="underline text-blue-600"
												target="blank"
											>
												{project.href}
											</Link>
										</p>
									) : (
										""
									)}
									{project.videoId ? (
										<YoutubePlayer videoId={project.videoId} />
									) : (
										""
									)}
								</div>
							</section>
						</div>
					</div>
				))}
		</section>
	);
}
