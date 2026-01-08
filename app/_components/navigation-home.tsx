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
    <section className="flex justify-center pb-10">
      <NavigationMenu className="list-none underline fixed left-0 p-5">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">
              <Icon icon="ic:sharp-home" width="50" height="50" />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
      <NavigationMenu className="list-none fixed right-0 p-5">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            {href ? (
              <Link href={href || ""}>
                <div className="flex items-center gap-2">
                  <p className="text-base">{text}</p>
                  <Icon icon="charm:arrow-right" width="50" height="50" />
                </div>
              </Link>
            ) : ""}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
    </section>
  );
}
