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
		<section className="pt-10 lg:pt-20">
			<section className="bg-blue-50">
				<div className="max-w-7xl mx-auto grid py-10 lg:py-15 gap-10">
					<div className="flex flex-col px-5 lg:px-0">
						<h1 className="text-2xl lg:text-start text-center font-semibold pb-5">
							Co-curricular Activities (CCA)
						</h1>
						<p className="pt-3 lg:pr-50">
							I was part of the International Students Club (ISC) for 2 years
							during my poly life. I was an assistant treasurer who helped
							manage the budget and procurement of the events organized by the
							club. I also helped organize and coordinate events for the club in
							roles such as game master, group leader, publicity and
							registration.
						</p>
						<p className="pt-3 lg:pr-50">
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
										<div className="p-5 lg:p-1">
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
							<div className="flex justify-center gap-2 md:hidden">
								<CarouselPrevious className="relative left-0 top-0 translate-y-0" />
								<CarouselNext className="relative right-0 top-0 translate-y-0" />
							</div>
							<CarouselPrevious className="hidden md:flex" />
							<CarouselNext className="hidden md:flex" />
						</Carousel>
					</div>
				</div>
			</section>
		</section>
	);
}
