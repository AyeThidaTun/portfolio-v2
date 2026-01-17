"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function NavigationHome({
	href,
	text,
}: {
	href?: string;
	text?: string;
}) {
	return (
		<section className="fixed inset-x-0 top-0 z-50 bg-white lg:bg-transparent">
			<div className="flex justify-between items-center p-2 lg:p-5">
				<NavigationMenu className="list-none">
					<NavigationMenuItem>
						<NavigationMenuLink asChild>
							<Link href="/">
								<Icon icon="ic:sharp-home" width="50" height="50" />
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenu>

				{href && text && (
					<NavigationMenu className="list-none">
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link href={href || ""}>
									<div className="flex items-center gap-2">
										<p className="text-base">{text}</p>
										<Icon icon="charm:arrow-right" width="50" height="50" />
									</div>
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenu>
				)}
			</div>
		</section>
	);
}
