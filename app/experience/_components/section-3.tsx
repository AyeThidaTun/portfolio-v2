import { FocusCards } from "@/components/ui/focus-cards";
export default function Section3() {
	const cards = [
		{
			title: "Director's Honour Roll",
			src: "/honor.jpg",
			description:
				"During poly years, I gained the Director's Honour Roll two consecutive years, in Year 1 (AY23/24) and Year 2 (AY24/25) . The certificate is given to Top 10% of the course.",
		},
		{
			title: "Reflexa",
			src: "/lamp.jpg",
			description:
				"Reflexa is a lamp that transforms light with subtle taps on its facets. It was one of my projects done in a elective called Digital Fabrication and Prototyping Fundamentals by using a few technologies such as 2D & 3D fabrication, Integration of sensors, and Embedded Programming. \n\nSee my journey here - \nhttps://ayethidartuneduval.wixsite.com/\nlearning-journey/final-product",
		},
		{
			title: "LEAP Camp",
			src: "/leap.jpg",
			description:
				"I had an opportunity to participate in LEAP which is a 4-day student leadership programme for student leaders across SP such as CCA leaders. \n\nDuring the camp, we were put through training on team leadership and personal development. This camp was conducted in Batam, Indonesia. It was my first time participating an overseas programme and it was such a meaningful experience.",
		},
		{
			title: "AISP Hackathon",
			src: "/hackathon.jpg",
			description:
				"During this 3-day long hackathon, me and my teammate developed a solution for false news information using AI. \n\nWe proposed an AI-powered tool called Trustify that instantly evaluates the credibility of social media posts to ensure responsible sharing and informed viewing without interrupting the social media experience. \n\nAlthough we didn't win any prize, it was a fulfilling and meaningful experience for me.",
		},
		{
			title: "Conclude 2024",
			src: "/conclude.jpg",
			description:
				"During poly years, I was part of International Students Club, holding the role of assistant treasurer. As one of the event chairs for Conclude 2024, I gained my first experience leading such a major event, which provided me with many new insights as a leader.",
		},
		{
			title: "SP Open House",
			src: "/present.jpg",
			description:
				"For SP Open House 2025, I had an opportunity to present one of my year 1 websites, EcoPets as one of the showcases for Diploma in Information Technology (DIT).",
		},
	];
	return (
		<section className="lg:pt-10">
			<h2 className="text-2xl lg:text-4xl pl-8">
				My achievements and activities
			</h2>
			<FocusCards cards={cards} />
		</section>
	);
}
