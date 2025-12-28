import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectCard() {
	return (
		<section className="flex-row grid grid-cols-3 gap-x-10">
			<Card className="w-full max-w-sm">
				<CardContent className="row-span-2 grid-rows-subgrid space-y-5">
					<Image
						src={"/lamp.jpg"}
						alt={""}
						className="object-cover aspect-video"
						width={400}
						height={200}
					/>
					<h2 className="text-md font-bold">Sustainability Task Tracker</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
						error necessitatibus ducimus, ipsam pariatur aliquid similique
						consequuntur? Consequuntur aperiam voluptate explicabo officia non,
						assumenda nam dolorum perferendis tempore et enim?
					</p>
				</CardContent>
			</Card>
			<Card className="w-full max-w-sm">
				<CardContent className="row-span-2 grid-rows-subgrid space-y-5">
					<Image
						src={"/lamp.jpg"}
						alt={""}
						className="object-cover aspect-video"
						width={400}
						height={200}
					/>
					<h2 className="text-md font-bold">Sustainability Task Tracker</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
						error necessitatibus ducimus, ipsam pariatur aliquid similique
						consequuntur? Consequuntur aperiam voluptate explicabo officia non,
						assumenda nam dolorum perferendis tempore et enim?
					</p>
				</CardContent>
			</Card>
			<Card className="w-full max-w-sm">
				<CardContent className="row-span-2 grid-rows-subgrid space-y-5">
					<Image
						src={"/lamp.jpg"}
						alt={""}
						className="object-cover aspect-video"
						width={400}
						height={200}
					/>
					<h2 className="text-md font-bold">Sustainability Task Tracker</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
						error necessitatibus ducimus, ipsam pariatur aliquid similique
						consequuntur? Consequuntur aperiam voluptate explicabo officia non,
						assumenda nam dolorum perferendis tempore et enim?
					</p>
				</CardContent>
			</Card>
		</section>
	);
}
