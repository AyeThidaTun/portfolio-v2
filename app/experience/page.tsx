import { Icon } from "@iconify/react";
import Link from "next/link";
import NavigationHome from "../_components/navigation-home";
import Quote from "./_components/quote-block";
import Section1 from "./_components/section-1";
import Section2 from "./_components/section-2";
import Section3 from "./_components/section-3";
// import Values from "./_components/values";
export default function MoreAboutMe() {
	return (
		<section className="font-serif">
			<NavigationHome href="/projects" text="Back to Projects" />
			<div className="flex flex-col justify-center items-center py-5">
				<h1 className="text-3xl">More About Me</h1>
				<div className="flex flex-row gap-x-5 py-5">
					<Link href="https://www.linkedin.com/in/ayethidatun/" target="_blank">
						<Icon icon="skill-icons:linkedin" width="30" height="30" />
					</Link>
					<Link href="https://github.com/AyeThidaTun" target="_blank">
						<Icon icon="bytesize:github" width="30" height="30" />
					</Link>
					<Link href="mailto:ayethidatun.anna@gmail.com">
						<Icon icon="logos:google-gmail" width="30" height="30" />
					</Link>
				</div>
			</div>
			<Section1 />
			<Section2 />
			<Quote />
			{/* <Values/> */}
			<Section3 />
		</section>
	);
}
