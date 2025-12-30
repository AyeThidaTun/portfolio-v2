import { Icon } from "@iconify/react";
import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function NavigationHome({ href }: { href: string }) {
	return (
		<section className="flex justify-center pb-10">
			<NavigationMenu className="list-none underline fixed left-0 px-5 py-5">
				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<Link href="/">
							<Icon icon="ic:sharp-home" width="50" height="50" />
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenu>
			<NavigationMenu className="list-none underline fixed right-0 px-5 py-5">
				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<Link href={href}>
							<Icon icon="charm:arrow-right" width="50" height="50" />
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenu>
		</section>
	);
}
