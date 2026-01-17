import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselImages } from "./carousel-image";

export default function Section2() {
	return (
		<section className="pt-20">
			<section className="bg-blue-50">
				<div className="max-w-7xl mx-auto grid py-15 gap-10">
					<div className="flex flex-col">
						<h1 className="text-2xl font-semibold">
							Co-curricular Activities (CCA)
						</h1>
						<p className="pt-3 pr-50">
							I was part of the International Students Club (ISC) for 2 years
							during my poly life. I was an assistant treasurer who helped manage the
							budget and procurement of the events organized by the club. I also
							helped organize and coordinate events for the club in roles such
							as game master, group leader, publicity and registration.
						</p>
						<p className="pt-3 pr-50">
							I also contributed to community service activities by volunteering
							for charity events, scam awareness event, visiting elderly homes
							and tutoring primary school kids. I find it very meaningful to
							give back to the community through these activities.
						</p>
					</div>
					<div>
						<Carousel
							opts={{
								align: "start",
							}}
							className="w-full"
						>
							<CarouselContent>
								{carouselImages.map((image) => (
									<CarouselItem
										key={image.id}
										className="md:basis-1/2 lg:basis-1/3"
									>
										<div className="p-1">
											<div className="overflow-hidden border-0 bg-transparent">
												<div className="relative aspect-video p-0">
													<Image
														src={image.src}
														alt={"CCA image"}
														fill
														className="object-cover"
													/>
												</div>
											</div>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</div>
				</div>
			</section>
		</section>
	);
}
