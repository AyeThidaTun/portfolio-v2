import { Icon } from "@iconify/react";
import Link from "next/link";
import { FocusCards } from "@/components/ui/focus-cards";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cardsData } from "./_components/project-data";

export default function Projects() {
	return (
		<section className="min-h-screen font-serif pb-10">
			<div className="flex justify-center pb-10">
				<NavigationMenu className="list-none underline fixed left-0 px-5 py-5">
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<Link href="/">
								<Icon icon="ic:sharp-home" width="50" height="50" />
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenu>
			</div>
			<div className="flex justify-center px-50">
				<div className="border rounded-md overflow-x-auto">
					<h3 className="text-center text-xl py-10">Projects</h3>
					<p className="text-center">{`"Every project is a step forward, proof of how far I've come and a glimpse of where I'm going."`}</p>
					<FocusCards cards={cardsData} />
				</div>
			</div>
		</section>
	);
}
