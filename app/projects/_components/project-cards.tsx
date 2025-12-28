import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cardsData } from "./project-data";

export default function ProjectCard() {
	return (
		<section className="flex-row grid grid-cols-3 gap-x-10">
			{cardsData.map((card) => (
				<Card key={card.id} className="w-full max-w-sm">
					<Link href={card.href}>
						<div className="custom-cursor">
							<CardContent className="row-span-2 grid-rows-subgrid space-y-5">
								<Image
									src={card.src}
									alt={""}
									className="object-cover aspect-video"
									width={400}
									height={200}
								/>
								<h2 className="text-md font-bold">{card.title}</h2>
								<p className="">{card.description}</p>
							</CardContent>
						</div>
					</Link>
				</Card>
			))}
		</section>
	);
}
