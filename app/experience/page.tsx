import NavigationHome from "../_components/navigation-home";
import Quote from "./_components/quote-block";
import Section1 from "./_components/section-1";
import Section2 from "./_components/section-2";
// import Section3 from "./_components/section-3";
export default function MoreAboutMe() {
	return (
		<section className="font-serif">
			<NavigationHome />
			<div className="flex flex-col justify-center items-center py-10">
				<h1 className="text-3xl">More About Me</h1>
			</div>
			<Section1 />
			<Section2 />
			<Quote />
			{/* <Section3 /> */}
		</section>
	);
}
